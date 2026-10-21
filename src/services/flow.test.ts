/**
 * SPEC §14 flow using the same pure functions the screens call:
 * practice a deck → test → pass moves to REVIEW, fail moves to RELEARN and
 * returns at the front of the next practice deck.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { Card, Progress } from '../types';
import { DAY_MS } from './dates';
import { nextState, Rating } from './fsrs';
import {
	buildPracticeDeck,
	buildTestDeck,
	type DeckEntry,
	indexProgress,
	markTestable,
	progressKey,
	revealInPractice,
	stateOf,
} from './scheduler';

const card = (id: number): Card => ({
	id,
	version: 1,
	thai: `t${id}`,
	english: `e${id}`,
	thaiExample: '',
	englishExample: '',
	category: '',
	hidden: false,
	queued: false,
});

test('practice → test → REVIEW / RELEARN → RELEARN leads the next deck', () => {
	const cards = Array.from({ length: 40 }, (_, i) => card(i + 1));
	const store = new Map<string, Progress>();
	const save = (p: Progress): void => {
		store.set(progressKey(p.cardId, p.direction), p);
	};
	const index = () => indexProgress([...store.values()]);
	const day1 = new Date(2026, 2, 2, 9).getTime();

	// Practice: three rounds of revealing every back face.
	const deck = buildPracticeDeck(cards, index(), day1, 'forward');
	assert.equal(deck.length, 10, 'ten NEW cards on an empty library');
	for (let round = 0; round < 3; round++) {
		for (const entry of deck) {
			save(
				revealInPractice(
					store.get(progressKey(entry.card.id, 'forward')) ?? null,
					entry.card.id,
					'forward',
					day1,
				),
			);
		}
		if (round === 0) {
			for (const entry of deck) {
				const p = store.get(progressKey(entry.card.id, 'forward'));
				if (p) save(markTestable(p));
			}
		}
	}

	// Test the deck's cards.
	const ids = new Set(deck.map((e) => e.card.id));
	const testDeck = buildTestDeck(cards, index(), day1, {
		direction: 'forward',
		cardIds: ids,
	});
	assert.equal(testDeck.length, 10);
	const [failedEntry, ...passedEntries] = testDeck as [
		DeckEntry,
		...DeckEntry[],
	];
	const failedId = failedEntry.card.id;
	for (const entry of testDeck) {
		const current = store.get(progressKey(entry.card.id, 'forward'));
		assert.ok(current);
		const rating = entry === failedEntry ? Rating.Again : Rating.Good;
		save(nextState(current, rating, day1));
	}

	const after = index();
	for (const entry of passedEntries) {
		assert.equal(
			stateOf(after.get(progressKey(entry.card.id, 'forward')) ?? null),
			'Review',
		);
	}
	assert.equal(
		stateOf(after.get(progressKey(failedId, 'forward')) ?? null),
		'Relearning',
	);

	// Retesting right away: nothing, since the failed card must be practised first.
	assert.deepEqual(
		buildTestDeck(cards, after, day1, { direction: 'forward' }),
		[],
	);

	// Next practice deck: the RELEARN card first, then NEW. No REVIEW cards.
	const next = buildPracticeDeck(cards, after, day1, 'forward');
	assert.equal(next[0]?.card.id, failedId);
	assert.ok(
		next.every((e) => !passedEntries.some((p) => p.card.id === e.card.id)),
	);

	// Passed cards come back for testing once due (Good on a new card: 2 days).
	const later = buildTestDeck(cards, after, day1 + 3 * DAY_MS, {
		direction: 'forward',
	});
	assert.equal(later.length, passedEntries.length);
});
