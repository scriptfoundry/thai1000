import type { Card } from '../types';
import { count, get, request, transact } from './db';
import { diffSeed, type ParsedSeed, parseSeed, type SeedDiff } from './seed';

const SEED_URL = `${import.meta.env.BASE_URL}data/seed.tsv`;

/** First launch with no seed: the app cannot run. */
export class SeedUnavailableError extends Error {
	override name = 'SeedUnavailableError';
}

export interface SeedSyncResult {
	/** Shown to the user when the app continues on stored data. */
	warning: string | null;
	added: number;
	updated: number;
	deleted: number;
}

const fetchSeed = async (): Promise<ParsedSeed> => {
	const response = await fetch(SEED_URL, { cache: 'no-cache' });
	if (!response.ok) {
		throw new Error(`Seed request failed: HTTP ${response.status}`);
	}
	const seed = parseSeed(await response.text());
	for (const error of seed.errors) {
		console.warn(error);
	}
	if (seed.rows.length === 0) {
		// Treat as unavailable rather than deleting every stored card.
		throw new Error('Seed contains no valid rows');
	}
	return seed;
};

/** Diff and write the seed in one transaction, together with its version. */
const applySeed = (db: IDBDatabase, seed: ParsedSeed): Promise<SeedDiff> =>
	transact(db, ['cards', 'progress', 'meta'], async (tx) => {
		const cards = tx.objectStore('cards');
		const progress = tx.objectStore('progress');
		const stored = await request(cards.getAll() as IDBRequest<Card[]>);
		const diff = diffSeed(seed, stored);
		for (const card of [...diff.added, ...diff.updated]) {
			cards.put(card);
		}
		for (const id of diff.deletedIds) {
			cards.delete(id);
			progress.delete([id, 'forward']);
			progress.delete([id, 'backward']);
		}
		tx.objectStore('meta').put(seed.seedVersion, 'seedVersion');
		return diff;
	});

export const syncSeed = async (db: IDBDatabase): Promise<SeedSyncResult> => {
	const hasCards = (await count(db, 'cards')) > 0;

	let seed: ParsedSeed;
	try {
		seed = await fetchSeed();
	} catch (error) {
		console.error('Seed unavailable:', error);
		if (!hasCards) {
			throw new SeedUnavailableError(
				'The word list could not be loaded. Check your internet connection and try again.',
			);
		}
		return {
			warning:
				'The word list could not be checked for updates. Using saved words.',
			added: 0,
			updated: 0,
			deleted: 0,
		};
	}

	// A cached seed may load while offline; still tell the user.
	const warning = navigator.onLine
		? null
		: 'You are offline. Using saved words.';

	const storedVersion = await get<number>(db, 'meta', 'seedVersion');
	if (hasCards && storedVersion === seed.seedVersion) {
		return { warning, added: 0, updated: 0, deleted: 0 };
	}

	const diff = await applySeed(db, seed);
	return {
		warning,
		added: diff.added.length,
		updated: diff.updated.length,
		deleted: diff.deletedIds.length,
	};
};
