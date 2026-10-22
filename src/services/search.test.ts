import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { textMatcher } from './search';

const WORDS = ['to go', 'today', 'TO', 'potato', 'go to sleep'];

const matching = (query: string): string[] => WORDS.filter(textMatcher(query));

describe('textMatcher', () => {
	test('empty matches everything', () => {
		assert.deepEqual(matching(''), WORDS);
	});

	test('a case-insensitive substring', () => {
		assert.deepEqual(matching('to'), [
			'to go',
			'today',
			'TO',
			'potato',
			'go to sleep',
		]);
	});

	test('spaces are kept', () => {
		assert.deepEqual(matching(' to '), ['go to sleep']);
		assert.deepEqual(matching('to '), ['to go', 'go to sleep']);
	});
});
