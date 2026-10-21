import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import type { Progress } from '../types';
import { localDay } from './dates';
import {
	FSRS_PARAMS,
	forgettingCurve,
	type MemoryState,
	nextInterval,
	nextMemory,
	nextState,
	Rating,
	retrievability,
} from './fsrs';

/**
 * [elapsedDays, rating, stability, difficulty, intervalDays] from the
 * reference implementation (ts-fsrs 5.4.2, FSRS-6, short-term on, no fuzz).
 */
type Step = [number, Rating, number, number, number];

const REFERENCE: Record<string, Step[]> = {
	'good streak': [
		[0, 3, 2.3065, 2.11810397, 2],
		[3, 3, 13.82690327, 2.11121424, 14],
		[8, 3, 42.06295792, 2.1043314, 42],
		[21, 3, 105.45102946, 2.09745544, 105],
	],
	'lapse and recover': [
		[0, 3, 2.3065, 2.11810397, 2],
		[4, 3, 16.17726312, 2.11121424, 16],
		[12, 1, 1.80000065, 7.39223814, 2],
		[0, 3, 1.81954531, 7.38007427, 2],
		[1, 3, 3.85526308, 7.36792257, 4],
	],
	'hard and easy': [
		[0, 2, 1.2931, 5.11217071, 1],
		[2, 4, 11.18501222, 3.4641143, 11],
		[10, 2, 28.02810241, 5.64640287, 28],
		[0, 1, 7.99134116, 8.5542306, 8],
	],
};

const close = (actual: number, expected: number, label: string): void => {
	// The reference rounds every step to 8 decimals.
	assert.ok(
		Math.abs(actual - expected) <= Math.abs(expected) * 1e-6,
		`${label}: ${actual} ≉ ${expected}`,
	);
};

describe('FSRS-6 memory model', () => {
	test('has 21 default weights', () => {
		assert.equal(FSRS_PARAMS.length, 21);
	});

	for (const [name, steps] of Object.entries(REFERENCE)) {
		test(`matches reference: ${name}`, () => {
			let memory: MemoryState | null = null;
			steps.forEach(([t, g, s, d, ivl], index) => {
				memory = nextMemory(memory, t, g);
				close(memory.stability, s, `step ${index} stability`);
				close(memory.difficulty, d, `step ${index} difficulty`);
				assert.equal(
					nextInterval(memory.stability),
					ivl,
					`step ${index} interval`,
				);
			});
		});
	}

	test('retrievability is 0.9 after exactly S days', () => {
		close(forgettingCurve(10, 10), 0.9, 'R(S, S)');
		assert.equal(forgettingCurve(0, 5), 1);
	});
});

describe('nextState', () => {
	const noon = (day: number): number => new Date(2026, 0, day, 12).getTime();
	const fresh: Progress = {
		cardId: 7,
		direction: 'forward',
		state: 'Learning',
		due: noon(1),
		stability: 0,
		difficulty: 0,
		reps: 0,
		lapses: 0,
		lastReview: null,
		practiceExposures: 3,
		testable: true,
		lastTouchedDay: localDay(noon(1)),
	};

	test('a pass moves to Review, due at local midnight of the interval day', () => {
		const next = nextState(fresh, Rating.Good, noon(1));
		assert.equal(next.state, 'Review');
		assert.equal(next.testable, false);
		assert.equal(next.reps, 1);
		assert.equal(next.lapses, 0);
		assert.equal(next.lastReview, noon(1));
		assert.equal(next.due, new Date(2026, 0, 3).getTime());
		close(next.stability, 2.3065, 'S0(Good)');
		assert.equal(next.practiceExposures, 3);
	});

	test('Hard and Easy also pass', () => {
		assert.equal(nextState(fresh, Rating.Hard, noon(1)).state, 'Review');
		assert.equal(nextState(fresh, Rating.Easy, noon(1)).state, 'Review');
	});

	test('Again relearns, is due now and counts a lapse', () => {
		const reviewed = nextState(fresh, Rating.Good, noon(1));
		const failed = nextState(reviewed, Rating.Again, noon(5));
		assert.equal(failed.state, 'Relearning');
		assert.equal(failed.due, noon(5));
		assert.equal(failed.lapses, 1);
		assert.equal(failed.testable, false);
		assert.equal(failed.lastTouchedDay, localDay(noon(5)));
		assert.ok(failed.stability < reviewed.stability);
	});

	test('retrievability is 0 before the first test and falls over time', () => {
		assert.equal(retrievability(fresh, noon(1)), 0);
		const reviewed = nextState(fresh, Rating.Good, noon(1));
		const soon = retrievability(reviewed, noon(2));
		const later = retrievability(reviewed, noon(20));
		assert.ok(soon > later && later > 0);
	});
});
