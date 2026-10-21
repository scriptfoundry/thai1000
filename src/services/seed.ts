/**
 * Pure seed parsing and diffing. No DOM or IndexedDB here, so it runs under
 * `node --test`; the network/DB side lives in `seed-sync.ts`.
 */
import type { Card, CardContent } from '../types';

export const SEED_COLUMNS = [
	'id',
	'version',
	'thai',
	'english',
	'thaiExample',
	'englishExample',
	'category',
] as const;

const METADATA = /^#seedVersion\t(\d+)$/;
const POSITIVE_INT = /^[1-9]\d*$/;

export interface ParsedSeed {
	seedVersion: number;
	rows: CardContent[];
	/** Ids of rows that were rejected; their stored cards must not be deleted. */
	skippedIds: number[];
	/** One message per rejected line, for the console. */
	errors: string[];
}

/** The file itself is unusable (as opposed to individual bad rows). */
export class SeedFormatError extends Error {
	override name = 'SeedFormatError';
}

export const parseSeed = (text: string): ParsedSeed => {
	const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/);

	const metadata = METADATA.exec(lines[0]?.trim() ?? '');
	if (!metadata) {
		throw new SeedFormatError(
			'Line 1 must be "#seedVersion<TAB><integer>"',
		);
	}
	const seedVersion = Number(metadata[1]);

	const header = (lines[1] ?? '').split('\t').map((value) => value.trim());
	if (header.join('\t') !== SEED_COLUMNS.join('\t')) {
		throw new SeedFormatError(
			`Line 2 must be the header: ${SEED_COLUMNS.join(', ')}`,
		);
	}

	const rows: CardContent[] = [];
	const skippedIds: number[] = [];
	const errors: string[] = [];
	const seen = new Set<number>();

	lines.slice(2).forEach((line, index) => {
		if (line.trim() === '') {
			return;
		}
		const lineNumber = index + 3;
		const values = line.split('\t').map((value) => value.trim());
		const [
			id,
			version,
			thai,
			english,
			thaiExample,
			englishExample,
			category,
		] = values;
		const idValid = id !== undefined && POSITIVE_INT.test(id);

		const reject = (reason: string): void => {
			errors.push(`Seed line ${lineNumber}: ${reason}`);
			if (idValid) {
				skippedIds.push(Number(id));
			}
		};

		if (values.length !== SEED_COLUMNS.length) {
			reject(
				`expected ${SEED_COLUMNS.length} columns, found ${values.length}`,
			);
			return;
		}
		if (!idValid) {
			reject(`invalid id "${id}"`);
			return;
		}
		if (version === undefined || !POSITIVE_INT.test(version)) {
			reject(`invalid version "${version}"`);
			return;
		}
		if (!thai || !english) {
			reject('thai and english are required');
			return;
		}
		const numericId = Number(id);
		if (seen.has(numericId)) {
			// Keep the first row, and don't mark the id as skipped: it is present.
			errors.push(`Seed line ${lineNumber}: duplicate id ${numericId}`);
			return;
		}
		seen.add(numericId);
		rows.push({
			id: numericId,
			version: Number(version),
			thai,
			english,
			thaiExample: thaiExample ?? '',
			englishExample: englishExample ?? '',
			category: category ?? '',
		});
	});

	return { seedVersion, rows, skippedIds, errors };
};

export interface SeedDiff {
	added: Card[];
	/** Existing cards with new content; hidden/queued are carried over. */
	updated: Card[];
	deletedIds: number[];
}

export const diffSeed = (seed: ParsedSeed, stored: Card[]): SeedDiff => {
	const storedById = new Map(stored.map((card) => [card.id, card]));
	const seedIds = new Set(seed.rows.map((row) => row.id));
	const skipped = new Set(seed.skippedIds);

	const added: Card[] = [];
	const updated: Card[] = [];
	for (const row of seed.rows) {
		const existing = storedById.get(row.id);
		if (!existing) {
			added.push({ ...row, hidden: false, queued: false });
		} else if (row.version > existing.version) {
			updated.push({
				...row,
				hidden: existing.hidden,
				queued: existing.queued,
			});
		}
	}

	const deletedIds = stored
		.filter((card) => !seedIds.has(card.id) && !skipped.has(card.id))
		.map((card) => card.id);

	return { added, updated, deletedIds };
};
