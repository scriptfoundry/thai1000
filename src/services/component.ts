import type { Component } from '../types';
import { wait, waitAnimationFrames } from './utils';

/** Keep in sync with --screen-transition. */
export const SCREEN_TRANSITION_MS = 300;

export interface ComponentOptions {
	/** Space-separated classes for the root element. */
	className: string;
	tag?: string;
	/** Fade/slide duration; 0 mounts and unmounts instantly. */
	transitionMs?: number;
}

/**
 * Shared mount/unmount plumbing. Subclasses pass their `?raw` HTML and
 * attach behaviour in `onMount`; anything registered outside `element`
 * (window listeners, timers) must be released in `onUnmount`.
 */
export abstract class BaseComponent implements Component {
	protected readonly element: HTMLElement;
	private readonly transitionMs: number;

	constructor(
		html: string,
		{ className, tag = 'div', transitionMs = 0 }: ComponentOptions,
	) {
		this.element = document.createElement(tag);
		this.element.classList.add(...className.split(' '));
		this.element.innerHTML = html;
		this.transitionMs = transitionMs;
	}

	public async mount(parent: HTMLElement): Promise<void> {
		parent.appendChild(this.element);
		this.onMount();
		if (this.transitionMs > 0) {
			await waitAnimationFrames(2);
			this.element.classList.add('visible');
			await wait(this.transitionMs);
		}
	}

	public async unmount(): Promise<void> {
		this.onUnmount();
		if (this.transitionMs > 0) {
			this.element.classList.remove('visible');
			this.element.classList.add('leaving');
			await wait(this.transitionMs);
		}
		this.element.remove();
	}

	protected onMount(): void {
		// Optional hook.
	}

	protected onUnmount(): void {
		// Optional hook.
	}

	/** Find a required child element; a missing one is a template bug. */
	protected query<T extends Element = HTMLElement>(selector: string): T {
		const found = this.element.querySelector<T>(selector);
		if (!found) {
			throw new Error(`Missing element: ${selector}`);
		}
		return found;
	}
}
