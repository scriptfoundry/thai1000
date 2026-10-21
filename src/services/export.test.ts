import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import type { Card, Progress } from '../types';
import { buildExport, EXPORT_FORMAT, validateExport } from './export';

const card = (id: number, hidden = false, queued = false): Card => ({
	id,
	version: 1,
	thai: `t${id}`,
	english: `e${id}`,
	thaiExample: 'content must not be exported',
	englishExample: '',
	category: '',
	hidden,
	queued,
});

const progress = (
	cardId: number,
	overrides: Partial<Progress> = {},
): Progress => ({
	cardId,
	direction: 'forward',
	state: 'Review',
	due: 1_800_000_000_000,
	stability: 12.345678901,
	difficulty: 4.2,
	reps: 3,
	lapses: 1,
	lastReview: 1_790_000_000_000,
	practiceExposures: 7,
	testable: false,
	lastTouchedDay: '2026-10-01',
	...overrides,
});

const sample = () =>
	buildExport(
		[card(1, true), card(2, false, true)],
		[
			progress(1),
			progress(2, {
				direction: 'backward',
				state: 'Learning',
				stability: 0,
				difficulty: 0,
				lastReview: null,
				lastTouchedDay: null,
				testable: true,
			}),
		],
		4,
		Date.UTC(2026, 9, 21),
	);

describe('buildExport', () => {
	test('holds progress and flags only, no card content', () => {
		const file = sample();
		assert.equal(file.format, EXPORT_FORMAT);
		assert.equal(file.exportedAt, '2026-10-21T00:00:00.000Z');
		assert.equal(file.seedVersion, 4);
		assert.deepEqual(file.flags, [
			{ id: 1, hidden: true, queued: false },
			{ id: 2, hidden: false, queued: true },
		]);
		assert.ok(
			!JSON.stringify(file).includes('content must not be exported'),
		);
	});
});

describe('validateExport', () => {
	test('a JSON round trip restores everything exactly', () => {
		const file = sample();
		const result = validateExport(JSON.parse(JSON.stringify(file)));
		assert.ok(result.ok);
		assert.deepEqual(result.file, file);
	});

	test('rejects non-objects and other formats', () => {
		assert.equal(validateExport('nope').ok, false);
		assert.equal(validateExport([]).ok, false);
		const result = validateExport({ ...sample(), format: 2 });
		assert.ok(!result.ok);
		assert.match(result.errors[0] ?? '', /Unsupported format 2/);
	});

	test('reports field type errors', () => {
		const file = JSON.parse(JSON.stringify(sample()));
		file.progress[0].state = 'Mastered';
		file.progress[1].reps = -1;
		file.flags[0].hidden = 'yes';
		const result = validateExport(file);
		assert.ok(!result.ok);
		assert.deepEqual(result.errors, [
			'progress[0].state must be a card state.',
			'progress[1].reps must be a whole number.',
			'flags[0] must be { id, hidden, queued }.',
		]);
	});

	test('rejects duplicate progress records', () => {
		const file = JSON.parse(JSON.stringify(sample()));
		file.progress.push(file.progress[0]);
		const result = validateExport(file);
		assert.ok(!result.ok);
		assert.match(result.errors[0] ?? '', /repeats card 1 forward/);
	});

	test('drops unknown fields', () => {
		const file = JSON.parse(JSON.stringify(sample()));
		file.progress[0].extra = 'ignored';
		const result = validateExport(file);
		assert.ok(result.ok);
		assert.equal('extra' in (result.file.progress[0] ?? {}), false);
	});

	test('caps the number of errors reported', () => {
		const file = JSON.parse(JSON.stringify(sample()));
		file.progress = Array.from({ length: 20 }, () => ({ cardId: 0 }));
		const result = validateExport(file);
		assert.ok(!result.ok);
		assert.equal(result.errors.length, 5);
	});
});
