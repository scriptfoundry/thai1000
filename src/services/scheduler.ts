/**
 * Deck building and card-status rules (SPEC §6–§7). Pure: callers load cards
 * and progress, these functions decide, and `progress.ts` persists.
 */
import type { Card, CardState, Direction, Progress } from '../types';
import { localDay } from './dates';
import { retrievability } from './fsrs';

/** Target practice deck size. */
export const PRACTICE_SIZE = 15;
/** Most NEW directions (queued included) introduced per practice deck. */
export const NEW_CAP = 10;
/** Largest test deck. */
export const TEST_MAX = 20;
/** Wraps of a practice deck before "Test this deck" is offered. */
export const CYCLES_BEFORE_TEST = 3;
/** Forward states that unlock the backward direction of a NEW word. */
export const BACKWARD_UNLOCK_STATES: readonly CardState[] = [
	'Review',
	'Relearning',
];

export const DIRECTIONS: readonly Direction[] = ['forward', 'backward'];

export const opposite = (direction: Direction): Direction =>
	direction === 'forward' ? 'backward' : 'forward';

export type ProgressIndex = Map<string, Progress>;

export const progressKey = (cardId: number, direction: Direction): string =>
	`${cardId}:${direction}`;

export const indexProgress = (records: Progress[]): ProgressIndex =>
	new Map(records.map((p) => [progressKey(p.cardId, p.direction), p]));

const lookup = (
	index: ProgressIndex,
	cardId: number,
	direction: Direction,
): Progress | null => index.get(progressKey(cardId, direction)) ?? null;

export interface DeckEntry {
	card: Card;
	direction: Direction;
	/** null while the direction is still NEW. */
	progress: Progress | null;
}

export const stateOf = (progress: Progress | null): CardState =>
	progress?.state ?? 'New';

/** Filter/status names shown in the UI. */
export type Status = 'NEW' | 'LEARNING' | 'REVIEW' | 'RELEARN' | 'HIDDEN';

const STATUS_BY_STATE: Record<CardState, Status> = {
	New: 'NEW',
	Learning: 'LEARNING',
	Review: 'REVIEW',
	Relearning: 'RELEARN',
};

/** HIDDEN overrides the per-direction status. */
export const statusOf = (card: Card, progress: Progress | null): Status =>
	card.hidden ? 'HIDDEN' : STATUS_BY_STATE[stateOf(progress)];

export const newProgress = (
	cardId: number,
	direction: Direction,
	now: number,
): Progress => ({
	cardId,
	direction,
	state: 'New',
	due: now,
	stability: 0,
	difficulty: 0,
	reps: 0,
	lapses: 0,
	lastReview: null,
	practiceExposures: 0,
	testable: false,
	lastTouchedDay: null,
});

/** Opposite direction was practiced or tested today (SPEC §6 direction gap). */
export const isGapBlocked = (
	index: ProgressIndex,
	cardId: number,
	direction: Direction,
	today: string,
): boolean =>
	lookup(index, cardId, opposite(direction))?.lastTouchedDay === today;

const isBackwardUnlocked = (index: ProgressIndex, cardId: number): boolean =>
	BACKWARD_UNLOCK_STATES.includes(stateOf(lookup(index, cardId, 'forward')));

export interface DeckOptions {
	/** Restrict to one direction; omit to mix directions. */
	direction?: Direction;
}

const candidates = (
	cards: Card[],
	index: ProgressIndex,
	now: number,
	direction: Direction | undefined,
): DeckEntry[] => {
	const today = localDay(now);
	const directions = direction ? [direction] : DIRECTIONS;
	const entries: DeckEntry[] = [];
	for (const card of cards) {
		if (card.hidden) {
			continue;
		}
		for (const dir of directions) {
			if (!isGapBlocked(index, card.id, dir, today)) {
				entries.push({
					card,
					direction: dir,
					progress: lookup(index, card.id, dir),
				});
			}
		}
	}
	return entries;
};

const byDue = (a: DeckEntry, b: DeckEntry): number =>
	(a.progress?.due ?? 0) - (b.progress?.due ?? 0) || b.card.id - a.card.id;

const byPriority = (a: DeckEntry, b: DeckEntry): number =>
	b.card.id - a.card.id;

/**
 * Practice deck (SPEC §7): RELEARN (oldest due) → LEARNING (oldest due) →
 * queued NEW → NEW (highest id), at most NEW_CAP new, never both directions
 * of one card, never REVIEW.
 */
export const buildPracticeDeck = (
	cards: Card[],
	index: ProgressIndex,
	now: number,
	{ direction }: DeckOptions = {},
): DeckEntry[] => {
	const pool = candidates(cards, index, now, direction);
	const inState = (state: CardState): DeckEntry[] =>
		pool.filter((entry) => stateOf(entry.progress) === state);

	const fresh = inState('New').filter(
		(entry) =>
			entry.direction === 'forward' ||
			isBackwardUnlocked(index, entry.card.id),
	);
	const ordered = [
		...inState('Relearning').sort(byDue),
		...inState('Learning').sort(byDue),
		...fresh.filter((entry) => entry.card.queued).sort(byPriority),
		...fresh.filter((entry) => !entry.card.queued).sort(byPriority),
	];

	const deck: DeckEntry[] = [];
	const used = new Set<number>();
	let newCount = 0;
	for (const entry of ordered) {
		if (deck.length >= PRACTICE_SIZE) {
			break;
		}
		if (used.has(entry.card.id)) {
			continue;
		}
		if (entry.progress === null) {
			if (newCount >= NEW_CAP) {
				continue;
			}
			newCount++;
		}
		used.add(entry.card.id);
		deck.push(entry);
	}
	return deck;
};

/** SPEC §7 test eligibility (hidden and gap-blocked are filtered earlier). */
const isTestable = (progress: Progress | null, now: number): boolean => {
	switch (stateOf(progress)) {
		case 'Learning':
		case 'Relearning':
			return progress?.testable === true;
		case 'Review':
			return (progress?.due ?? Number.POSITIVE_INFINITY) <= now;
		default:
			return false;
	}
};

export interface TestDeckOptions {
	direction: Direction;
	/** Only these cards (a test launched from a practice deck). */
	cardIds?: ReadonlySet<number>;
	limit?: number;
}

/** All test-eligible entries in one direction, weakest memory first. */
export const testCandidates = (
	cards: Card[],
	index: ProgressIndex,
	now: number,
	{ direction, cardIds }: TestDeckOptions,
): DeckEntry[] =>
	candidates(cards, index, now, direction)
		.filter(
			(entry) =>
				(!cardIds || cardIds.has(entry.card.id)) &&
				isTestable(entry.progress, now),
		)
		.map((entry) => ({
			entry,
			r: entry.progress ? retrievability(entry.progress, now) : 0,
		}))
		.sort((a, b) => a.r - b.r || byDue(a.entry, b.entry))
		.map(({ entry }) => entry);

export const buildTestDeck = (
	cards: Card[],
	index: ProgressIndex,
	now: number,
	options: TestDeckOptions,
): DeckEntry[] =>
	testCandidates(cards, index, now, options).slice(
		0,
		options.limit ?? TEST_MAX,
	);

export interface DirectionCounts {
	new: number;
	learning: number;
	relearn: number;
	review: number;
	dueForTest: number;
}

/** Home screen counts per direction; hidden cards are excluded. */
export const countByDirection = (
	cards: Card[],
	index: ProgressIndex,
	now: number,
): Record<Direction, DirectionCounts> => {
	const counts = (direction: Direction): DirectionCounts => {
		const result: DirectionCounts = {
			new: 0,
			learning: 0,
			relearn: 0,
			review: 0,
			dueForTest: testCandidates(cards, index, now, { direction }).length,
		};
		for (const card of cards) {
			if (card.hidden) {
				continue;
			}
			const state = stateOf(lookup(index, card.id, direction));
			if (state === 'New') result.new++;
			else if (state === 'Learning') result.learning++;
			else if (state === 'Relearning') result.relearn++;
			else result.review++;
		}
		return result;
	};
	return { forward: counts('forward'), backward: counts('backward') };
};

/** Back face shown in practice: NEW becomes LEARNING; RELEARN stays. */
export const revealInPractice = (
	progress: Progress | null,
	cardId: number,
	direction: Direction,
	now: number,
): Progress => {
	const base = progress ?? newProgress(cardId, direction, now);
	return {
		...base,
		state: base.state === 'New' ? 'Learning' : base.state,
		due: base.state === 'New' ? now : base.due,
		practiceExposures: base.practiceExposures + 1,
		lastTouchedDay: localDay(now),
	};
};

/** First full cycle of a practice deck: LEARNING/RELEARN become testable. */
export const markTestable = (progress: Progress): Progress =>
	progress.state === 'Learning' || progress.state === 'Relearning'
		? { ...progress, testable: true }
		: progress;
