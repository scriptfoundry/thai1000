import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';
import {
	type CardAction,
	GestureRecognizer,
	keyAction,
	MULTI_TAP_MS,
	type Scheduler,
} from './gestures';

/** Manual clock: `advance` fires due timers. */
class FakeClock implements Scheduler {
	public now = 0;
	private timers = new Map<number, { at: number; callback: () => void }>();
	private nextId = 1;

	public set = (callback: () => void, ms: number): unknown => {
		const id = this.nextId++;
		this.timers.set(id, { at: this.now + ms, callback });
		return id;
	};

	public clear = (handle: unknown): void => {
		this.timers.delete(handle as number);
	};

	public advance(ms: number): void {
		this.now += ms;
		for (const [id, timer] of [...this.timers]) {
			if (timer.at <= this.now) {
				this.timers.delete(id);
				timer.callback();
			}
		}
	}
}

let clock: FakeClock;
let actions: CardAction[];
let recognizer: GestureRecognizer;

beforeEach(() => {
	clock = new FakeClock();
	actions = [];
	recognizer = new GestureRecognizer((a) => actions.push(a), clock);
});

/** Pointers move together by (dx, dy) over `ms`. */
const gesture = (pointers: number, dx: number, dy: number, ms = 120): void => {
	for (let id = 1; id <= pointers; id++) {
		recognizer.down({ id, x: 100 * id, y: 300, time: clock.now });
	}
	clock.advance(ms / 2);
	for (let id = 1; id <= pointers; id++) {
		recognizer.move({
			id,
			x: 100 * id + dx / 2,
			y: 300 + dy / 2,
			time: clock.now,
		});
	}
	clock.advance(ms / 2);
	for (let id = 1; id <= pointers; id++) {
		recognizer.up({ id, x: 100 * id + dx, y: 300 + dy, time: clock.now });
	}
};

const taps = (pointers: number, count: number): void => {
	for (let i = 0; i < count; i++) {
		gesture(pointers, 0, 0, 80);
		clock.advance(100);
	}
	clock.advance(MULTI_TAP_MS);
};

describe('swipes', () => {
	test('one pointer: left = next, right = prev, vertical ignored', () => {
		gesture(1, -120, 10);
		gesture(1, 120, 0);
		gesture(1, 0, -150);
		assert.deepEqual(actions, ['next', 'prev']);
	});

	test('two pointers: up = easy, down = hard, right = good, left ignored', () => {
		gesture(2, 0, -100);
		gesture(2, 0, 100);
		gesture(2, 100, 0);
		gesture(2, -100, 0);
		assert.deepEqual(actions, ['grade-easy', 'grade-hard', 'grade-good']);
	});

	test('short, diagonal and three-pointer gestures are discarded', () => {
		gesture(1, 40, 0);
		gesture(1, 80, 70);
		gesture(3, 120, 0);
		clock.advance(MULTI_TAP_MS);
		assert.deepEqual(actions, []);
	});

	test('a cancelled pointer discards the gesture', () => {
		recognizer.down({ id: 1, x: 0, y: 0, time: 0 });
		recognizer.cancel({ id: 1, x: 200, y: 0, time: 50 });
		assert.deepEqual(actions, []);
	});
});

describe('taps', () => {
	test('double tap: one pointer = replay, two = again', () => {
		taps(1, 2);
		taps(2, 2);
		assert.deepEqual(actions, ['replay', 'grade-again']);
	});

	test('waits out the multi-tap window before acting', () => {
		gesture(1, 0, 0, 80);
		clock.advance(100);
		gesture(1, 0, 0, 80);
		assert.deepEqual(actions, []);
		clock.advance(MULTI_TAP_MS);
		assert.deepEqual(actions, ['replay']);
	});

	test('single and triple taps do nothing', () => {
		taps(1, 1);
		taps(1, 3);
		taps(2, 3);
		assert.deepEqual(actions, []);
	});

	test('slow taps are not a double tap', () => {
		gesture(1, 0, 0, 80);
		clock.advance(MULTI_TAP_MS + 50);
		gesture(1, 0, 0, 80);
		clock.advance(MULTI_TAP_MS);
		assert.deepEqual(actions, []);
	});

	test('a long press is not a tap', () => {
		gesture(1, 0, 0, 600);
		gesture(1, 0, 0, 600);
		clock.advance(MULTI_TAP_MS);
		assert.deepEqual(actions, []);
	});
});

describe('keyAction', () => {
	const key = (k: string, shiftKey = false) => ({
		key: k,
		shiftKey,
		altKey: false,
		ctrlKey: false,
		metaKey: false,
	});

	test('maps the SPEC §8 keys', () => {
		assert.equal(keyAction(key('ArrowRight')), 'next');
		assert.equal(keyAction(key('ArrowLeft')), 'prev');
		assert.equal(keyAction(key(' ')), 'replay');
		assert.equal(keyAction(key('ArrowUp', true)), 'grade-easy');
		assert.equal(keyAction(key('ArrowDown', true)), 'grade-hard');
		assert.equal(keyAction(key('ArrowRight', true)), 'grade-good');
		assert.equal(keyAction(key(' ', true)), 'grade-again');
	});

	test('ignores other keys and modifier combinations', () => {
		assert.equal(keyAction(key('ArrowUp')), null);
		assert.equal(keyAction(key('a')), null);
		assert.equal(keyAction({ ...key('ArrowRight'), metaKey: true }), null);
	});
});
