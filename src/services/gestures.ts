/**
 * Pointer and keyboard input → semantic card actions (SPEC §8).
 *
 * | pointers | gesture     | keyboard      | action      |
 * | 1        | swipe left  | →             | next        |
 * | 1        | swipe right | ←             | prev        |
 * | 1        | double tap  | Space         | replay      |
 * | 2        | swipe up    | Shift + ↑     | grade-easy  |
 * | 2        | swipe down  | Shift + ↓     | grade-hard  |
 * | 2        | swipe right | Shift + →     | grade-good  |
 * | 2        | double tap  | Shift + Space | grade-again |
 *
 * Anything else (3+ pointers, triple taps, diagonal or short drags) is
 * discarded. `GestureRecognizer` is DOM-free so it can be unit-tested.
 */

export type CardAction =
	| 'next'
	| 'prev'
	| 'replay'
	| 'grade-again'
	| 'grade-hard'
	| 'grade-good'
	| 'grade-easy';

/** Minimum centroid travel for a swipe, in CSS px. */
export const SWIPE_MIN = 50;
/** The dominant axis must be this many times the other. */
export const AXIS_RATIO = 1.5;
/** Maximum travel of any pointer for a tap. */
export const TAP_SLOP = 10;
/** Maximum duration of a tap, first down to last up. */
export const TAP_MAX_MS = 300;
/** Maximum gap between taps of a multi-tap, and the wait before acting on one. */
export const MULTI_TAP_MS = 300;

export interface PointerSample {
	id: number;
	x: number;
	y: number;
	/** Milliseconds, any monotonic origin. */
	time: number;
}

interface Track {
	startX: number;
	startY: number;
	x: number;
	y: number;
}

/** Injected timer so tests can drive the multi-tap window. */
export interface Scheduler {
	set: (callback: () => void, ms: number) => unknown;
	clear: (handle: unknown) => void;
}

const SWIPES: Record<1 | 2, Partial<Record<Direction, CardAction>>> = {
	1: { left: 'next', right: 'prev' },
	2: { up: 'grade-easy', down: 'grade-hard', right: 'grade-good' },
};
const DOUBLE_TAPS: Record<1 | 2, CardAction> = {
	1: 'replay',
	2: 'grade-again',
};

type Direction = 'up' | 'down' | 'left' | 'right';

export class GestureRecognizer {
	private readonly onAction: (action: CardAction) => void;
	private readonly scheduler: Scheduler;
	private readonly active = new Map<number, Track>();
	private readonly ended: Track[] = [];
	private maxPointers = 0;
	private startTime = 0;
	private cancelled = false;

	private tapPointers: 1 | 2 | null = null;
	private tapCount = 0;
	private lastTapTime = 0;
	private tapTimer: unknown = null;

	constructor(onAction: (action: CardAction) => void, scheduler: Scheduler) {
		this.onAction = onAction;
		this.scheduler = scheduler;
	}

	public down(sample: PointerSample): void {
		if (this.active.size === 0) {
			this.ended.length = 0;
			this.maxPointers = 0;
			this.startTime = sample.time;
			this.cancelled = false;
		}
		this.active.set(sample.id, {
			startX: sample.x,
			startY: sample.y,
			x: sample.x,
			y: sample.y,
		});
		this.maxPointers = Math.max(this.maxPointers, this.active.size);
	}

	public move(sample: PointerSample): void {
		const track = this.active.get(sample.id);
		if (track) {
			track.x = sample.x;
			track.y = sample.y;
		}
	}

	public up(sample: PointerSample): void {
		const track = this.active.get(sample.id);
		if (!track) {
			return;
		}
		track.x = sample.x;
		track.y = sample.y;
		this.active.delete(sample.id);
		this.ended.push(track);
		if (this.active.size === 0) {
			this.finish(sample.time);
		}
	}

	/** Pointer cancelled (e.g. the browser took over): the gesture is discarded. */
	public cancel(sample: PointerSample): void {
		this.cancelled = true;
		this.up(sample);
	}

	public dispose(): void {
		this.clearTapTimer();
		this.active.clear();
	}

	private finish(endTime: number): void {
		const pointers = this.maxPointers;
		if (this.cancelled || (pointers !== 1 && pointers !== 2)) {
			this.resetTaps();
			return;
		}

		const dx = average(this.ended.map((t) => t.x - t.startX));
		const dy = average(this.ended.map((t) => t.y - t.startY));
		const travel = Math.max(Math.abs(dx), Math.abs(dy));

		if (travel >= SWIPE_MIN) {
			this.resetTaps();
			const direction = dominant(dx, dy);
			const action = direction ? SWIPES[pointers][direction] : undefined;
			if (action) {
				this.onAction(action);
			}
			return;
		}

		const still = this.ended.every(
			(t) => Math.hypot(t.x - t.startX, t.y - t.startY) <= TAP_SLOP,
		);
		if (still && endTime - this.startTime <= TAP_MAX_MS) {
			this.tap(pointers, endTime);
		} else {
			this.resetTaps();
		}
	}

	private tap(pointers: 1 | 2, time: number): void {
		const continues =
			this.tapPointers === pointers &&
			time - this.lastTapTime <= MULTI_TAP_MS;
		this.tapCount = continues ? this.tapCount + 1 : 1;
		this.tapPointers = pointers;
		this.lastTapTime = time;

		// Wait out the window so a triple tap is not taken for a double tap.
		this.clearTapTimer();
		this.tapTimer = this.scheduler.set(() => {
			this.tapTimer = null;
			if (this.tapCount === 2) {
				this.onAction(DOUBLE_TAPS[pointers]);
			}
			this.resetTaps();
		}, MULTI_TAP_MS);
	}

	private resetTaps(): void {
		this.clearTapTimer();
		this.tapPointers = null;
		this.tapCount = 0;
	}

	private clearTapTimer(): void {
		if (this.tapTimer !== null) {
			this.scheduler.clear(this.tapTimer);
			this.tapTimer = null;
		}
	}
}

const average = (values: number[]): number =>
	values.reduce((sum, value) => sum + value, 0) / Math.max(values.length, 1);

const dominant = (dx: number, dy: number): Direction | null => {
	const ax = Math.abs(dx);
	const ay = Math.abs(dy);
	if (ax >= ay * AXIS_RATIO) {
		return dx > 0 ? 'right' : 'left';
	}
	if (ay >= ax * AXIS_RATIO) {
		return dy > 0 ? 'down' : 'up';
	}
	return null;
};

/** Keyboard equivalent of a gesture, or null if the key is not handled. */
export const keyAction = (event: {
	key: string;
	shiftKey: boolean;
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
}): CardAction | null => {
	if (event.altKey || event.ctrlKey || event.metaKey) {
		return null;
	}
	switch (event.key) {
		case 'ArrowRight':
			return event.shiftKey ? 'grade-good' : 'next';
		case 'ArrowLeft':
			return event.shiftKey ? null : 'prev';
		case ' ':
			return event.shiftKey ? 'grade-again' : 'replay';
		case 'ArrowUp':
			return event.shiftKey ? 'grade-easy' : null;
		case 'ArrowDown':
			return event.shiftKey ? 'grade-hard' : null;
		default:
			return null;
	}
};

const isTextInput = (target: EventTarget | null): boolean =>
	target instanceof HTMLElement &&
	(target.isContentEditable ||
		['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

/**
 * Listen for gestures on `surface` (which should have `touch-action: none`)
 * and for keys on the window. Returns a function that removes everything.
 */
export const attachCardInput = (
	surface: HTMLElement,
	onAction: (action: CardAction) => void,
): (() => void) => {
	const recognizer = new GestureRecognizer(onAction, {
		set: (callback, ms) => window.setTimeout(callback, ms),
		clear: (handle) => window.clearTimeout(handle as number),
	});
	const sample = (event: PointerEvent): PointerSample => ({
		id: event.pointerId,
		x: event.clientX,
		y: event.clientY,
		time: event.timeStamp,
	});

	const onDown = (event: PointerEvent): void => {
		if (event.pointerType === 'mouse' && event.button !== 0) {
			return;
		}
		// Taps on buttons inside the surface are clicks, not gestures.
		if (
			event.target instanceof Element &&
			event.target.closest('button, a')
		) {
			return;
		}
		surface.setPointerCapture(event.pointerId);
		recognizer.down(sample(event));
	};
	const onMove = (event: PointerEvent): void =>
		recognizer.move(sample(event));
	const onUp = (event: PointerEvent): void => recognizer.up(sample(event));
	const onCancel = (event: PointerEvent): void =>
		recognizer.cancel(sample(event));
	const onKey = (event: KeyboardEvent): void => {
		if (event.repeat || isTextInput(event.target)) {
			return;
		}
		const action = keyAction(event);
		if (action) {
			event.preventDefault();
			onAction(action);
		}
	};

	surface.addEventListener('pointerdown', onDown);
	surface.addEventListener('pointermove', onMove);
	surface.addEventListener('pointerup', onUp);
	surface.addEventListener('pointercancel', onCancel);
	window.addEventListener('keydown', onKey);

	return () => {
		recognizer.dispose();
		surface.removeEventListener('pointerdown', onDown);
		surface.removeEventListener('pointermove', onMove);
		surface.removeEventListener('pointerup', onUp);
		surface.removeEventListener('pointercancel', onCancel);
		window.removeEventListener('keydown', onKey);
	};
};
