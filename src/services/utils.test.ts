import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { shuffle } from './utils';

describe('shuffle', () => {
	test('keeps every item and leaves the input alone', () => {
		const items = [1, 2, 3, 4, 5, 6, 7, 8];
		const result = shuffle(items);
		assert.deepEqual(items, [1, 2, 3, 4, 5, 6, 7, 8]);
		assert.deepEqual(
			[...result].sort((a, b) => a - b),
			items,
		);
	});

	test('uses the given random source', () => {
		// random() = 0 always swaps with index 0: [a, b, c] → [b, c, a].
		assert.deepEqual(
			shuffle(['a', 'b', 'c'], () => 0),
			['b', 'c', 'a'],
		);
	});
});
