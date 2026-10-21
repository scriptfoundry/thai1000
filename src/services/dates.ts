/** Local-calendar date helpers. Pure; no DOM. */

export const DAY_MS = 24 * 60 * 60 * 1000;

const pad = (value: number): string => String(value).padStart(2, '0');

/** Local `YYYY-MM-DD` for an epoch-ms time. */
export const localDay = (time: number): string => {
	const date = new Date(time);
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

/** Whole local calendar days from `from` to `to` (negative if `to` is earlier). */
export const localDaysBetween = (from: number, to: number): number => {
	const a = new Date(from);
	const b = new Date(to);
	const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	return Math.round((utcB - utcA) / DAY_MS);
};

/** Local midnight `days` calendar days after `time` (DST-safe). */
export const startOfLocalDayPlus = (time: number, days: number): number => {
	const date = new Date(time);
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() + days,
	).getTime();
};
