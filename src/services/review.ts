import type { Progress } from '../types';

const DAY_MS = 24 * 60 * 60 * 1000;

export interface ReviewSummary {
	/** Whole days until due, rounded up (`12d`), or `od` once overdue. */
	due: string;
	/** Lower-eighth to full block (U+2581–U+2588) for difficulty 1–10. */
	block: string;
	/** Colour band 1–5: rounded difficulty 1–2, 3–4, 5–6, 7–8, 9–10. */
	band: number;
}

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

/** The Words-list summary of a REVIEW direction. */
export const reviewSummary = (
	progress: Pick<Progress, 'due' | 'difficulty'>,
	now: number,
): ReviewSummary => {
	const difficulty = clamp(progress.difficulty, 1, 10);
	const eighths = 1 + Math.round(((difficulty - 1) * 7) / 9);
	return {
		due:
			progress.due <= now
				? 'od'
				: `${Math.ceil((progress.due - now) / DAY_MS)}d`,
		block: String.fromCodePoint(0x2580 + eighths),
		band: Math.ceil(Math.round(difficulty) / 2),
	};
};
