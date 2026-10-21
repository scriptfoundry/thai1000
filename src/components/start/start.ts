import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import Title from '../title/title';
import START_CONTENTS from './start.html?raw';
import './start.scss';

/**
 * First screen of every session. Chrome on Android only allows speech after
 * a user gesture, so the Start tap is what unlocks audio.
 */
export default class Start extends BaseComponent {
	private readonly title = new Title('Thai Flashcards');
	private readonly onStart: () => void;

	constructor(onStart: () => void) {
		super(START_CONTENTS, {
			className: 'screen start-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.onStart = onStart;
	}

	protected override onMount(): void {
		void this.title.mount(this.query('.start-title'));
		this.query<HTMLButtonElement>('.start-button').addEventListener(
			'click',
			() => this.onStart(),
			{ once: true },
		);
	}
}
