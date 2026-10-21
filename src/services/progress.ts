/** Loads and persists cards and per-direction progress. */
import type { Card, Progress } from '../types';
import { request, transact } from './db';
import { nextState, type Rating } from './fsrs';
import {
	type DeckEntry,
	indexProgress,
	markTestable,
	newProgress,
	type ProgressIndex,
	revealInPractice,
} from './scheduler';

export interface Library {
	cards: Card[];
	index: ProgressIndex;
}

export const loadLibrary = async (db: IDBDatabase): Promise<Library> => {
	const tx = db.transaction(['cards', 'progress']);
	const [cards, progress] = await Promise.all([
		request(tx.objectStore('cards').getAll() as IDBRequest<Card[]>),
		request(tx.objectStore('progress').getAll() as IDBRequest<Progress[]>),
	]);
	return { cards, index: indexProgress(progress) };
};

const getProgress = async (
	store: IDBObjectStore,
	entry: DeckEntry,
): Promise<Progress | null> =>
	(await request(
		store.get([entry.card.id, entry.direction]) as IDBRequest<
			Progress | undefined
		>,
	)) ?? null;

/** Back face shown in practice. Clears the card's queued flag. */
export const recordReveal = (
	db: IDBDatabase,
	entry: DeckEntry,
	now: number,
): Promise<Progress> =>
	transact(db, ['cards', 'progress'], async (tx) => {
		const store = tx.objectStore('progress');
		const next = revealInPractice(
			await getProgress(store, entry),
			entry.card.id,
			entry.direction,
			now,
		);
		store.put(next);
		if (entry.card.queued) {
			const cards = tx.objectStore('cards');
			const card = await request(
				cards.get(entry.card.id) as IDBRequest<Card | undefined>,
			);
			if (card?.queued) {
				cards.put({ ...card, queued: false });
			}
		}
		return next;
	});

/** The deck completed its first full cycle. */
export const markDeckTestable = (
	db: IDBDatabase,
	entries: readonly DeckEntry[],
): Promise<void> =>
	transact(db, ['progress'], async (tx) => {
		const store = tx.objectStore('progress');
		for (const entry of entries) {
			const current = await getProgress(store, entry);
			if (current) {
				store.put(markTestable(current));
			}
		}
	});

/** Commit a test rating immediately (SPEC §8: closing mid-test loses nothing). */
export const recordGrade = (
	db: IDBDatabase,
	entry: DeckEntry,
	rating: Rating,
	now: number,
): Promise<Progress> =>
	transact(db, ['progress'], async (tx) => {
		const store = tx.objectStore('progress');
		const current =
			(await getProgress(store, entry)) ??
			newProgress(entry.card.id, entry.direction, now);
		const next = nextState(current, rating, now);
		store.put(next);
		return next;
	});

export interface WordRecord {
	card: Card;
	forward: Progress | null;
	backward: Progress | null;
}

export const loadWord = async (
	db: IDBDatabase,
	cardId: number,
): Promise<WordRecord | null> => {
	const tx = db.transaction(['cards', 'progress']);
	const progress = tx.objectStore('progress');
	const [card, forward, backward] = await Promise.all([
		request(
			tx.objectStore('cards').get(cardId) as IDBRequest<Card | undefined>,
		),
		request(
			progress.get([cardId, 'forward']) as IDBRequest<
				Progress | undefined
			>,
		),
		request(
			progress.get([cardId, 'backward']) as IDBRequest<
				Progress | undefined
			>,
		),
	]);
	return card
		? { card, forward: forward ?? null, backward: backward ?? null }
		: null;
};

const updateCard = (
	db: IDBDatabase,
	cardId: number,
	change: (card: Card) => Card,
): Promise<void> =>
	transact(db, ['cards'], async (tx) => {
		const store = tx.objectStore('cards');
		const card = await request(
			store.get(cardId) as IDBRequest<Card | undefined>,
		);
		if (!card) {
			throw new Error(`Card ${cardId} not found`);
		}
		store.put(change(card));
	});

/** Hidden cards leave every deck in both directions; reversible. */
export const setHidden = (
	db: IDBDatabase,
	cardId: number,
	hidden: boolean,
): Promise<void> => updateCard(db, cardId, (card) => ({ ...card, hidden }));

/** "Practice next": a queued NEW card goes ahead of ordinary NEW cards. */
export const setQueued = (
	db: IDBDatabase,
	cardId: number,
	queued: boolean,
): Promise<void> => updateCard(db, cardId, (card) => ({ ...card, queued }));

/** Both directions back to NEW (progress deleted). `hidden` is kept. */
export const resetWord = (db: IDBDatabase, cardId: number): Promise<void> =>
	transact(db, ['cards', 'progress'], async (tx) => {
		const progress = tx.objectStore('progress');
		progress.delete([cardId, 'forward']);
		progress.delete([cardId, 'backward']);
		const cards = tx.objectStore('cards');
		const card = await request(
			cards.get(cardId) as IDBRequest<Card | undefined>,
		);
		if (card?.queued) {
			cards.put({ ...card, queued: false });
		}
	});
