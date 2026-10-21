/**
 * FSRS-6 memory model as pure functions, verified against the reference
 * implementation (ts-fsrs 5.4.2, "FSRS-6.0"). See docs/decisions.md.
 *
 * Used in "long-term" mode: the app's practice decks replace FSRS learning
 * steps, so every test schedules whole days. Reviews on the same day use the
 * FSRS-6 short-term stability formula (w17–w19). Fuzz is disabled.
 */
import type { Progress } from '../types';
import { localDay, localDaysBetween, startOfLocalDayPlus } from './dates';

export const FSRS_VERSION = 'FSRS-6';

/** Published FSRS-6 default weights w0–w20 (w20 is the decay). */
export const FSRS_PARAMS: readonly number[] = Object.freeze([
	0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722,
	0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425,
	0.0912, 0.0658, 0.1542,
]);

export const REQUEST_RETENTION = 0.9;
export const MAXIMUM_INTERVAL = 36500;
const S_MIN = 0.001;
const S_MAX = 36500;

export const Rating = { Again: 1, Hard: 2, Good: 3, Easy: 4 } as const;
export type Rating = (typeof Rating)[keyof typeof Rating];
export const RATINGS: readonly Rating[] = [
	Rating.Again,
	Rating.Hard,
	Rating.Good,
	Rating.Easy,
];

export interface MemoryState {
	/** Days until retrievability falls to 90%. */
	stability: number;
	/** 1 (easy) – 10 (hard). */
	difficulty: number;
}

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

/** Weight by index; the array is fixed-length so a miss is a programming error. */
const weight = (w: readonly number[], index: number): number => {
	const value = w[index];
	if (value === undefined) {
		throw new Error(`FSRS weight w${index} missing`);
	}
	return value;
};

const curve = (w: readonly number[]) => {
	const decay = -weight(w, 20);
	const factor = 0.9 ** (1 / decay) - 1;
	return { decay, factor };
};

/** R(t, S): probability of recall after `elapsedDays`. */
export const forgettingCurve = (
	elapsedDays: number,
	stability: number,
	w: readonly number[] = FSRS_PARAMS,
): number => {
	const { decay, factor } = curve(w);
	return (1 + (factor * elapsedDays) / stability) ** decay;
};

const initStability = (w: readonly number[], g: Rating): number =>
	Math.max(weight(w, g - 1), 0.1);

/** Unclamped D0(G); clamped by callers where FSRS clamps it. */
const initDifficulty = (w: readonly number[], g: Rating): number =>
	weight(w, 4) - Math.exp((g - 1) * weight(w, 5)) + 1;

const nextDifficulty = (w: readonly number[], d: number, g: Rating): number => {
	const delta = -weight(w, 6) * (g - 3);
	const damped = d + (delta * (10 - d)) / 9;
	const w7 = weight(w, 7);
	return clamp(
		w7 * initDifficulty(w, Rating.Easy) + (1 - w7) * damped,
		1,
		10,
	);
};

const recallStability = (
	w: readonly number[],
	d: number,
	s: number,
	r: number,
	g: Rating,
): number => {
	const hardPenalty = g === Rating.Hard ? weight(w, 15) : 1;
	const easyBonus = g === Rating.Easy ? weight(w, 16) : 1;
	const growth =
		Math.exp(weight(w, 8)) *
		(11 - d) *
		s ** -weight(w, 9) *
		(Math.exp((1 - r) * weight(w, 10)) - 1) *
		hardPenalty *
		easyBonus;
	return clamp(s * (1 + growth), S_MIN, S_MAX);
};

const forgetStability = (
	w: readonly number[],
	d: number,
	s: number,
	r: number,
): number => {
	const lapsed =
		weight(w, 11) *
		d ** -weight(w, 12) *
		((s + 1) ** weight(w, 13) - 1) *
		Math.exp((1 - r) * weight(w, 14));
	const floor = s / Math.exp(weight(w, 17) * weight(w, 18));
	// Same as the reference: the short-term floor, capped by the lapse value.
	return Math.min(Math.max(floor, S_MIN), clamp(lapsed, S_MIN, S_MAX));
};

const shortTermStability = (
	w: readonly number[],
	s: number,
	g: Rating,
): number => {
	const sinc =
		s ** -weight(w, 19) * Math.exp(weight(w, 17) * (g - 3 + weight(w, 18)));
	const masked = g >= Rating.Hard ? Math.max(sinc, 1) : sinc;
	return clamp(s * masked, S_MIN, S_MAX);
};

/** Memory state after a rating; `memory` is null before the first test. */
export const nextMemory = (
	memory: MemoryState | null,
	elapsedDays: number,
	g: Rating,
	w: readonly number[] = FSRS_PARAMS,
): MemoryState => {
	if (!memory || memory.stability <= 0) {
		return {
			stability: initStability(w, g),
			difficulty: clamp(initDifficulty(w, g), 1, 10),
		};
	}
	const { stability: s, difficulty: d } = memory;
	const t = Math.max(0, elapsedDays);
	let stability: number;
	if (t === 0) {
		stability = shortTermStability(w, s, g);
	} else if (g === Rating.Again) {
		stability = forgetStability(w, d, s, forgettingCurve(t, s, w));
	} else {
		stability = recallStability(w, d, s, forgettingCurve(t, s, w), g);
	}
	return { stability, difficulty: nextDifficulty(w, d, g) };
};

/** Days until retrievability reaches REQUEST_RETENTION; at least 1. */
export const nextInterval = (
	stability: number,
	w: readonly number[] = FSRS_PARAMS,
): number => {
	const { decay, factor } = curve(w);
	const modifier = (REQUEST_RETENTION ** (1 / decay) - 1) / factor;
	return Math.min(
		Math.max(1, Math.round(stability * modifier)),
		MAXIMUM_INTERVAL,
	);
};

/** Retrievability of a tested direction now; 0 if it has never been tested. */
export const retrievability = (progress: Progress, now: number): number => {
	if (progress.stability <= 0 || progress.lastReview === null) {
		return 0;
	}
	return forgettingCurve(
		localDaysBetween(progress.lastReview, now),
		progress.stability,
	);
};

/**
 * Apply a test rating. Pass (Hard/Good/Easy) → Review, due at the start of
 * the local day `interval` days ahead. Again → Relearning, due now, and the
 * direction must be practiced again before it is testable.
 */
export const nextState = (
	progress: Progress,
	rating: Rating,
	now: number,
): Progress => {
	const elapsed =
		progress.lastReview === null
			? 0
			: localDaysBetween(progress.lastReview, now);
	const memory =
		progress.stability > 0
			? { stability: progress.stability, difficulty: progress.difficulty }
			: null;
	const next = nextMemory(memory, elapsed, rating);
	const failed = rating === Rating.Again;

	return {
		...progress,
		state: failed ? 'Relearning' : 'Review',
		due: failed
			? now
			: startOfLocalDayPlus(now, nextInterval(next.stability)),
		stability: next.stability,
		difficulty: next.difficulty,
		reps: progress.reps + 1,
		lapses: progress.lapses + (failed ? 1 : 0),
		lastReview: now,
		testable: false,
		lastTouchedDay: localDay(now),
	};
};
