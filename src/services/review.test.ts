import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { reviewSummary } from './review';

const DAY = 24 * 60 * 60 * 1000;
const NOW = 1_700_000_000_000;

describe('reviewSummary', () => {
	test('days until due, rounded up, or od', () => {
		const due = (offset: number) =>
			reviewSummary({ due: NOW + offset, difficulty: 5 }, NOW).due;
		assert.equal(due(12 * DAY), '12d');
		assert.equal(due(11.2 * DAY), '12d');
		assert.equal(due(60_000), '1d');
		assert.equal(due(0), 'od');
		assert.equal(due(-3 * DAY), 'od');
	});

	test('blocks run from one eighth at 1 to full at 10', () => {
		const block = (difficulty: number) =>
			reviewSummary({ due: NOW, difficulty }, NOW).block;
		assert.equal(block(1), '▁');
		assert.equal(block(5.5), '▅');
		assert.equal(block(10), '█');
		assert.equal(block(0.5), '▁');
		assert.equal(block(12), '█');
	});

	test('colour bands follow the rounded difficulty in pairs', () => {
		const band = (difficulty: number) =>
			reviewSummary({ due: NOW, difficulty }, NOW).band;
		assert.deepEqual(
			[1, 2.4, 2.6, 4, 5, 6.4, 7, 8.4, 8.6, 10].map(band),
			[1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
		);
	});
});
