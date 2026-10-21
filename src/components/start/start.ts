import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import Title from '../title/title';
import START_CONTENTS from './start.html?raw';
import './start.scss';

export interface StartOptions {
	/** Settles when the app is ready; a rejection is shown as a fatal error. */
	ready: Promise<unknown>;
	/** Turns a boot failure into a message for the user. */
	describeError: (error: unknown) => string;
	onStart: () => void;
}

/**
 * First screen of every session. Chrome on Android only allows speech after
 * a user gesture, so the Start tap is what unlocks audio. Start stays
 * disabled until the word list is ready.
 */
export default class Start extends BaseComponent {
	private readonly title = new Title('Thai Flashcards');
	private readonly options: StartOptions;

	constructor(options: StartOptions) {
		super(START_CONTENTS, {
			className: 'screen start-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.options = options;
	}

	protected override onMount(): void {
		void this.title.mount(this.query('.start-title'));

		const status = this.query('.start-status');
		const start = this.query<HTMLButtonElement>('.start-button');
		const retry = this.query<HTMLButtonElement>('.start-retry');

		status.textContent = 'Loading words…';
		start.addEventListener('click', () => this.options.onStart(), {
			once: true,
		});
		retry.addEventListener('click', () => window.location.reload());

		this.options.ready.then(
			() => {
				status.textContent = '';
				start.disabled = false;
				start.focus();
			},
			(error: unknown) => {
				status.textContent = this.options.describeError(error);
				status.classList.add('start-error');
				start.hidden = true;
				retry.hidden = false;
			},
		);
	}
}
