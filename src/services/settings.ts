import type { Settings } from '../types';
import { get, put } from './db';

const KEY = 'app';

export const RATE_MIN = 0.5;
export const RATE_MAX = 1.5;

export const DEFAULT_SETTINGS: Readonly<Settings> = Object.freeze({
	thaiRate: 0.7,
	englishRate: 1,
});

const rate = (value: unknown, fallback: number): number =>
	typeof value === 'number' && value >= RATE_MIN && value <= RATE_MAX
		? value
		: fallback;

/** Stored settings merged over defaults; invalid values fall back. */
export const loadSettings = async (db: IDBDatabase): Promise<Settings> => {
	const stored = await get<Partial<Settings>>(db, 'settings', KEY);
	return {
		thaiRate: rate(stored?.thaiRate, DEFAULT_SETTINGS.thaiRate),
		englishRate: rate(stored?.englishRate, DEFAULT_SETTINGS.englishRate),
	};
};

export const saveSettings = (
	db: IDBDatabase,
	settings: Settings,
): Promise<void> => put(db, 'settings', { ...settings }, KEY);
