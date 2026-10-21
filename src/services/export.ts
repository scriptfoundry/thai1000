/**
 * Progress export/import (SPEC §12). The file holds progress records and the
 * hidden/queued flags only, never card content.
 */
import type { Card, CardState, Direction, Progress } from '../types';
import { get, request, transact } from './db';

export const EXPORT_FORMAT = 1;

export interface CardFlags {
	id: number;
	hidden: boolean;
	queued: boolean;
}

export interface ExportFile {
	format: typeof EXPORT_FORMAT;
	/** ISO 8601. */
	exportedAt: string;
	seedVersion: number | null;
	progress: Progress[];
	flags: CardFlags[];
}

export const buildExport = (
	cards: readonly Card[],
	progress: readonly Progress[],
	seedVersion: number | null,
	now: number,
): ExportFile => ({
	format: EXPORT_FORMAT,
	exportedAt: new Date(now).toISOString(),
	seedVersion,
	progress: progress.map((p) => ({ ...p })),
	flags: cards.map(({ id, hidden, queued }) => ({ id, hidden, queued })),
});

// --- Validation ---------------------------------------------------------

export type ValidationResult =
	| { ok: true; file: ExportFile }
	| { ok: false; errors: string[] };

const MAX_ERRORS = 5;
const DIRECTIONS: readonly Direction[] = ['forward', 'backward'];
const STATES: readonly CardState[] = [
	'New',
	'Learning',
	'Review',
	'Relearning',
];
const DAY = /^\d{4}-\d{2}-\d{2}$/;

type Json = Record<string, unknown>;

const isObject = (value: unknown): value is Json =>
	typeof value === 'object' && value !== null && !Array.isArray(value);
const isCount = (value: unknown): value is number =>
	Number.isInteger(value) && (value as number) >= 0;
const isId = (value: unknown): value is number =>
	Number.isInteger(value) && (value as number) > 0;
const isTime = (value: unknown): value is number =>
	typeof value === 'number' && Number.isFinite(value);

/** [field, check, expectation] for one progress record. */
const PROGRESS_FIELDS: [keyof Progress, (v: unknown) => boolean, string][] = [
	['cardId', isId, 'a positive integer'],
	[
		'direction',
		(v) => DIRECTIONS.includes(v as Direction),
		'forward or backward',
	],
	['state', (v) => STATES.includes(v as CardState), 'a card state'],
	['due', isTime, 'a timestamp'],
	['stability', (v) => isTime(v) && (v as number) >= 0, 'a number ≥ 0'],
	[
		'difficulty',
		(v) => isTime(v) && (v as number) >= 0 && (v as number) <= 10,
		'a number from 0 to 10',
	],
	['reps', isCount, 'a whole number'],
	['lapses', isCount, 'a whole number'],
	['lastReview', (v) => v === null || isTime(v), 'a timestamp or null'],
	['practiceExposures', isCount, 'a whole number'],
	['testable', (v) => typeof v === 'boolean', 'true or false'],
	[
		'lastTouchedDay',
		(v) => v === null || (typeof v === 'string' && DAY.test(v)),
		'YYYY-MM-DD or null',
	],
];

/** Check format version and every field's type before anything is written. */
export const validateExport = (data: unknown): ValidationResult => {
	const errors: string[] = [];
	const fail = (message: string): void => {
		if (errors.length < MAX_ERRORS) {
			errors.push(message);
		}
	};

	if (!isObject(data)) {
		return { ok: false, errors: ['The file is not a progress export.'] };
	}
	if (data.format !== EXPORT_FORMAT) {
		return {
			ok: false,
			errors: [
				`Unsupported format ${String(data.format)}; expected ${EXPORT_FORMAT}.`,
			],
		};
	}
	if (
		typeof data.exportedAt !== 'string' ||
		Number.isNaN(Date.parse(data.exportedAt))
	) {
		fail('exportedAt must be a date.');
	}
	if (data.seedVersion !== null && !isCount(data.seedVersion)) {
		fail('seedVersion must be a whole number or null.');
	}

	const progress: Progress[] = [];
	if (!Array.isArray(data.progress)) {
		fail('progress must be a list.');
	} else {
		const seen = new Set<string>();
		data.progress.forEach((record: unknown, i) => {
			if (!isObject(record)) {
				fail(`progress[${i}] is not an object.`);
				return;
			}
			const bad = PROGRESS_FIELDS.find(
				([field, check]) => !check(record[field]),
			);
			if (bad) {
				fail(`progress[${i}].${bad[0]} must be ${bad[2]}.`);
				return;
			}
			const key = `${record.cardId}:${record.direction}`;
			if (seen.has(key)) {
				fail(
					`progress[${i}] repeats card ${record.cardId} ${record.direction}.`,
				);
				return;
			}
			seen.add(key);
			// Copy known fields only; anything extra in the file is dropped.
			progress.push(
				Object.fromEntries(
					PROGRESS_FIELDS.map(([field]) => [field, record[field]]),
				) as unknown as Progress,
			);
		});
	}

	const flags: CardFlags[] = [];
	if (!Array.isArray(data.flags)) {
		fail('flags must be a list.');
	} else {
		data.flags.forEach((flag: unknown, i) => {
			if (
				!isObject(flag) ||
				!isId(flag.id) ||
				typeof flag.hidden !== 'boolean' ||
				typeof flag.queued !== 'boolean'
			) {
				fail(`flags[${i}] must be { id, hidden, queued }.`);
				return;
			}
			flags.push({
				id: flag.id,
				hidden: flag.hidden,
				queued: flag.queued,
			});
		});
	}

	if (errors.length > 0) {
		return { ok: false, errors };
	}
	return {
		ok: true,
		file: {
			format: EXPORT_FORMAT,
			exportedAt: data.exportedAt as string,
			seedVersion: data.seedVersion as number | null,
			progress,
			flags,
		},
	};
};

// --- Database -------------------------------------------------------------

export const createExport = async (db: IDBDatabase): Promise<ExportFile> => {
	const tx = db.transaction(['cards', 'progress']);
	const [cards, progress] = await Promise.all([
		request(tx.objectStore('cards').getAll() as IDBRequest<Card[]>),
		request(tx.objectStore('progress').getAll() as IDBRequest<Progress[]>),
	]);
	const seedVersion = (await get<number>(db, 'meta', 'seedVersion')) ?? null;
	return buildExport(cards, progress, seedVersion, Date.now());
};

export interface ImportResult {
	imported: number;
	/** Records or flags whose card id is not in the database. */
	ignored: number;
}

/**
 * Replace all progress and flags in one transaction. Unknown card ids are
 * ignored; cards absent from the file end up NEW, unhidden and unqueued.
 */
export const importExport = (
	db: IDBDatabase,
	file: ExportFile,
): Promise<ImportResult> =>
	transact(db, ['cards', 'progress'], async (tx) => {
		const cardStore = tx.objectStore('cards');
		const progressStore = tx.objectStore('progress');
		const cards = await request(cardStore.getAll() as IDBRequest<Card[]>);
		const known = new Set(cards.map((card) => card.id));
		const flags = new Map(file.flags.map((flag) => [flag.id, flag]));

		progressStore.clear();
		let imported = 0;
		let ignored = 0;
		for (const record of file.progress) {
			if (known.has(record.cardId)) {
				progressStore.put(record);
				imported++;
			} else {
				ignored++;
			}
		}
		ignored += file.flags.filter((flag) => !known.has(flag.id)).length;

		for (const card of cards) {
			const flag = flags.get(card.id);
			const hidden = flag?.hidden ?? false;
			const queued = flag?.queued ?? false;
			if (card.hidden !== hidden || card.queued !== queued) {
				cardStore.put({ ...card, hidden, queued });
			}
		}
		return { imported, ignored };
	});
