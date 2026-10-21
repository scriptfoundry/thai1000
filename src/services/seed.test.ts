import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import type { Card } from '../types';
import { diffSeed, parseSeed, SEED_COLUMNS, SeedFormatError } from './seed';

const HEADER = SEED_COLUMNS.join('\t');
const row = (...values: (string | number)[]): string => values.join('\t');
const seedText = (version: number, ...rows: string[]): string =>
	[`#seedVersion\t${version}`, HEADER, ...rows].join('\n');

const card = (id: number, overrides: Partial<Card> = {}): Card => ({
	id,
	version: 1,
	thai: `thai${id}`,
	english: `english${id}`,
	thaiExample: '',
	englishExample: '',
	category: 'nouns',
	hidden: false,
	queued: false,
	...overrides,
});

describe('parseSeed', () => {
	test('parses metadata, header and rows', () => {
		const parsed = parseSeed(
			seedText(3, row(1, 1, 'ร่ม', 'umbrella', 'ex', 'example', 'nouns')),
		);
		assert.equal(parsed.seedVersion, 3);
		assert.deepEqual(parsed.rows, [
			{
				id: 1,
				version: 1,
				thai: 'ร่ม',
				english: 'umbrella',
				thaiExample: 'ex',
				englishExample: 'example',
				category: 'nouns',
			},
		]);
		assert.deepEqual(parsed.errors, []);
	});

	test('handles BOM, CRLF, blank lines and padding', () => {
		const text = `\uFEFF${seedText(
			1,
			'',
			row(' 2 ', '1', ' มี ', ' to have ', '', '', 'verbs '),
			'   ',
		).replaceAll('\n', '\r\n')}\r\n`;
		const parsed = parseSeed(text);
		assert.equal(parsed.rows.length, 1);
		assert.equal(parsed.rows[0]?.thai, 'มี');
		assert.equal(parsed.rows[0]?.english, 'to have');
		assert.equal(parsed.rows[0]?.category, 'verbs');
		assert.deepEqual(parsed.errors, []);
	});

	test('reports bad rows without throwing and remembers their ids', () => {
		const parsed = parseSeed(
			seedText(
				1,
				row(1, 1, 'a', 'b', '', '', 'x'),
				row(2, 1, 'a', 'b'),
				row('x', 1, 'a', 'b', '', '', 'x'),
				row(4, 0, 'a', 'b', '', '', 'x'),
				row(5, 1, '', 'b', '', '', 'x'),
				row(1, 2, 'dup', 'dup', '', '', 'x'),
			),
		);
		assert.deepEqual(
			parsed.rows.map((r) => r.id),
			[1],
		);
		assert.equal(parsed.rows[0]?.thai, 'a');
		assert.deepEqual(parsed.skippedIds, [2, 4, 5]);
		assert.equal(parsed.errors.length, 5);
		assert.match(parsed.errors[0] ?? '', /line 4: expected 7 columns/);
	});

	test('rejects a bad metadata line', () => {
		assert.throws(
			() => parseSeed(`version: 1\n${HEADER}\n`),
			SeedFormatError,
		);
	});

	test('rejects a missing or wrong header', () => {
		assert.throws(
			() =>
				parseSeed(
					`#seedVersion\t1\n${row(1, 1, 'a', 'b', '', '', 'x')}`,
				),
			SeedFormatError,
		);
	});

	test('parses the bundled seed file cleanly', async () => {
		const { readFile } = await import('node:fs/promises');
		const text = await readFile(
			new URL('../../public/data/seed.tsv', import.meta.url),
			'utf8',
		);
		const parsed = parseSeed(text);
		assert.deepEqual(parsed.errors, []);
		assert.ok(parsed.rows.length > 900);
	});
});

describe('diffSeed', () => {
	const seedOf = (
		cards: Card[],
		skippedIds: number[] = [],
	): ReturnType<typeof parseSeed> => ({
		seedVersion: 2,
		rows: cards.map(({ hidden: _h, queued: _q, ...content }) => content),
		skippedIds,
		errors: [],
	});

	test('adds new cards as visible and unqueued', () => {
		const diff = diffSeed(seedOf([card(1), card(2)]), [card(1)]);
		assert.deepEqual(diff.added, [card(2)]);
		assert.deepEqual(diff.updated, []);
		assert.deepEqual(diff.deletedIds, []);
	});

	test('deletes cards missing from the seed', () => {
		const diff = diffSeed(seedOf([card(1)]), [card(1), card(2)]);
		assert.deepEqual(diff.deletedIds, [2]);
	});

	test('keeps cards whose seed row was rejected', () => {
		const diff = diffSeed(seedOf([card(1)], [2]), [card(1), card(2)]);
		assert.deepEqual(diff.deletedIds, []);
	});

	test('updates content only when the version increases', () => {
		const stored = [
			card(1, { hidden: true, queued: true }),
			card(2, { version: 3 }),
		];
		const seed = seedOf([
			card(1, { version: 2, english: 'new' }),
			card(2, { version: 3, english: 'same version' }),
		]);
		const diff = diffSeed(seed, stored);
		assert.deepEqual(diff.updated, [
			card(1, { version: 2, english: 'new', hidden: true, queued: true }),
		]);
	});
});
