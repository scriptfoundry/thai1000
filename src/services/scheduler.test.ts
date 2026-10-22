import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import type { Card, CardState, Direction, Progress } from '../types';
import { DAY_MS, localDay } from './dates';
import {
	buildPracticeDeck,
	buildTestDeck,
	countByDirection,
	type DeckEntry,
	indexProgress,
	markTestable,
	NEW_CAP,
	newProgress,
	PRACTICE_SIZE,
	revealInPractice,
	statusOf,
	TEST_MAX,
} from './scheduler';

const NOW = new Date(2026, 4, 10, 12).getTime();
const TODAY = localDay(NOW);
const YESTERDAY = localDay(NOW - DAY_MS);

const card = (id: number, overrides: Partial<Card> = {}): Card => ({
	id,
	version: 1,
	thai: `t${id}`,
	english: `e${id}`,
	thaiExample: '',
	englishExample: '',
	category: '',
	hidden: false,
	queued: false,
	...overrides,
});

const progress = (
	cardId: number,
	direction: Direction,
	state: CardState,
	overrides: Partial<Progress> = {},
): Progress => ({
	...newProgress(cardId, direction, NOW - 10 * DAY_MS),
	state,
	lastTouchedDay: YESTERDAY,
	...overrides,
});

const cards = (count: number): Card[] =>
	Array.from({ length: count }, (_, i) => card(i + 1));

const ids = (deck: DeckEntry[]): string[] =>
	deck.map((e) => `${e.card.id}${e.direction === 'forward' ? 'f' : 'b'}`);

describe('buildPracticeDeck', () => {
	test('orders RELEARN, LEARNING, queued NEW, then NEW by highest id', () => {
		const all = cards(30).map((c) =>
			c.id === 2 ? { ...c, queued: true } : c,
		);
		const index = indexProgress([
			progress(5, 'forward', 'Learning', { due: NOW - 2 * DAY_MS }),
			progress(6, 'forward', 'Learning', { due: NOW - 5 * DAY_MS }),
			progress(7, 'forward', 'Relearning', { due: NOW - DAY_MS }),
			progress(8, 'forward', 'Relearning', { due: NOW - 3 * DAY_MS }),
		]);
		const deck = buildPracticeDeck(all, index, NOW, 'forward');
		assert.deepEqual(ids(deck).slice(0, 6), [
			'8f',
			'7f',
			'6f',
			'5f',
			'2f',
			'30f',
		]);
		assert.equal(deck.length, 4 + NEW_CAP);
	});

	test('fills to PRACTICE_SIZE and caps NEW', () => {
		const all = cards(40);
		const index = indexProgress(
			Array.from({ length: 10 }, (_, i) =>
				progress(i + 1, 'forward', 'Learning'),
			),
		);
		const deck = buildPracticeDeck(all, index, NOW, 'forward');
		assert.equal(deck.length, PRACTICE_SIZE);
		assert.equal(deck.filter((e) => e.progress === null).length, 5);
	});

	test('excludes REVIEW and hidden, and returns what is available', () => {
		const all = [card(1), card(2, { hidden: true }), card(3)];
		const index = indexProgress([
			progress(1, 'forward', 'Review'),
			progress(3, 'forward', 'Review'),
		]);
		assert.deepEqual(
			ids(buildPracticeDeck(all, index, NOW, 'forward')),
			[],
		);
		assert.deepEqual(ids(buildPracticeDeck(all, index, NOW, 'backward')), [
			'3b',
			'1b',
		]);
		assert.deepEqual(
			buildPracticeDeck(
				[card(1, { hidden: true })],
				new Map(),
				NOW,
				'forward',
			),
			[],
		);
	});

	test('backward NEW only unlocks once forward is REVIEW', () => {
		const index = indexProgress([progress(1, 'forward', 'Learning')]);
		const deck = buildPracticeDeck(
			[card(1), card(2)],
			index,
			NOW,
			'backward',
		);
		assert.deepEqual(deck, []);
		const unlocked = indexProgress([progress(1, 'forward', 'Review')]);
		assert.deepEqual(
			ids(buildPracticeDeck([card(1)], unlocked, NOW, 'backward')),
			['1b'],
		);
	});

	test('direction gap blocks the opposite direction until tomorrow', () => {
		const index = indexProgress([
			progress(1, 'forward', 'Review', { lastTouchedDay: TODAY }),
			progress(2, 'forward', 'Review', { lastTouchedDay: YESTERDAY }),
		]);
		assert.deepEqual(
			ids(buildPracticeDeck([card(1), card(2)], index, NOW, 'backward')),
			['2b'],
		);
	});

	test('only contains the requested direction', () => {
		const index = indexProgress([
			progress(1, 'forward', 'Relearning'),
			progress(1, 'backward', 'Learning'),
			progress(2, 'forward', 'Review'),
		]);
		assert.deepEqual(
			ids(buildPracticeDeck([card(1), card(2)], index, NOW, 'forward')),
			['1f'],
		);
		assert.deepEqual(
			ids(buildPracticeDeck([card(1), card(2)], index, NOW, 'backward')),
			['1b', '2b'],
		);
	});
});

describe('buildTestDeck', () => {
	test('includes LEARNING, testable RELEARN and due REVIEW only', () => {
		const all = cards(6);
		const index = indexProgress([
			progress(1, 'forward', 'Learning', { testable: true }),
			progress(2, 'forward', 'Learning', { testable: false }),
			progress(3, 'forward', 'Relearning', { testable: true }),
			progress(4, 'forward', 'Review', {
				due: NOW - DAY_MS,
				stability: 5,
				difficulty: 5,
				lastReview: NOW - 6 * DAY_MS,
			}),
			progress(5, 'forward', 'Review', {
				due: NOW + DAY_MS,
				stability: 5,
			}),
			progress(6, 'forward', 'Relearning', { testable: false }),
		]);
		const deck = buildTestDeck(all, index, NOW, { direction: 'forward' });
		assert.deepEqual(ids(deck).sort(), ['1f', '2f', '3f', '4f']);
		// Untested (R = 0) before the reviewed card with R > 0.
		assert.equal(ids(deck).at(-1), '4f');
	});

	test('respects direction, card subset, hidden and limit', () => {
		const all = cards(30).map((c) =>
			c.id === 1 ? { ...c, hidden: true } : c,
		);
		const records = all.map((c) =>
			progress(c.id, 'forward', 'Learning', { testable: true }),
		);
		const index = indexProgress(records);
		assert.equal(
			buildTestDeck(all, index, NOW, { direction: 'forward' }).length,
			TEST_MAX,
		);
		assert.equal(
			buildTestDeck(all, index, NOW, { direction: 'backward' }).length,
			0,
		);
		const subset = buildTestDeck(all, index, NOW, {
			direction: 'forward',
			cardIds: new Set([1, 2, 3]),
		});
		assert.deepEqual(ids(subset).sort(), ['2f', '3f']);
	});
});

describe('progress transitions', () => {
	test('reveal turns NEW into LEARNING and counts exposures', () => {
		const first = revealInPractice(null, 4, 'forward', NOW);
		assert.equal(first.state, 'Learning');
		assert.equal(first.practiceExposures, 1);
		assert.equal(first.lastTouchedDay, TODAY);
		const second = revealInPractice(first, 4, 'forward', NOW);
		assert.equal(second.practiceExposures, 2);
		const relearn = revealInPractice(
			progress(4, 'forward', 'Relearning'),
			4,
			'forward',
			NOW,
		);
		assert.equal(relearn.state, 'Relearning');
	});

	test('markTestable only affects LEARNING and RELEARN', () => {
		assert.equal(
			markTestable(progress(1, 'forward', 'Learning')).testable,
			true,
		);
		assert.equal(
			markTestable(progress(1, 'forward', 'Review')).testable,
			false,
		);
	});

	test('statusOf: HIDDEN overrides direction state', () => {
		assert.equal(statusOf(card(1), null), 'NEW');
		assert.equal(
			statusOf(card(1), progress(1, 'forward', 'Relearning')),
			'RELEARN',
		);
		assert.equal(
			statusOf(
				card(1, { hidden: true }),
				progress(1, 'forward', 'Review'),
			),
			'HIDDEN',
		);
	});

	test('countByDirection tallies states and due tests', () => {
		const index = indexProgress([
			progress(1, 'forward', 'Learning', { testable: true }),
			progress(2, 'forward', 'Review', { due: NOW + DAY_MS }),
		]);
		const counts = countByDirection(
			[card(1), card(2), card(3)],
			index,
			NOW,
		);
		assert.deepEqual(counts.forward, {
			new: 1,
			learning: 1,
			relearn: 0,
			review: 1,
			dueForTest: 1,
		});
		assert.equal(counts.backward.new, 3);
	});
});
