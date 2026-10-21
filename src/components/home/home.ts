import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import { loadLibrary } from '../../services/progress';
import {
	countByDirection,
	DIRECTIONS,
	type DirectionCounts,
} from '../../services/scheduler';
import type { AppContext } from '../../types';
import HOME_CONTENTS from './home.html?raw';
import './home.scss';

/** Per-direction counts with Practice and Test for each direction. */
export default class Home extends BaseComponent {
	private readonly app: AppContext;
	private unmounted = false;

	constructor(app: AppContext) {
		super(HOME_CONTENTS, {
			className: 'screen home-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.app = app;
	}

	protected override onMount(): void {
		void this.loadCounts();
	}

	protected override onUnmount(): void {
		this.unmounted = true;
	}

	private async loadCounts(): Promise<void> {
		const { cards, index } = await loadLibrary(this.app.db);
		if (this.unmounted) {
			return;
		}
		const counts = countByDirection(cards, index, Date.now());
		for (const direction of DIRECTIONS) {
			const section = this.query(
				`.home-direction[data-direction="${direction}"]`,
			);
			const values = counts[direction];
			for (const dd of section.querySelectorAll<HTMLElement>(
				'[data-count]',
			)) {
				const key = dd.dataset.count as keyof DirectionCounts;
				dd.textContent = String(values[key]);
			}
			// Test stays available (it explains itself) but looks quieter when idle.
			section
				.querySelector('.home-test')
				?.classList.toggle('home-idle', values.dueForTest === 0);
		}
	}
}
