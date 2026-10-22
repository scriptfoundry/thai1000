import { BaseComponent } from '../../services/component';
import {
	loadWord,
	resetWord,
	setHidden,
	setQueued,
	type WordRecord,
} from '../../services/progress';
import { STATUS_BY_STATE, stateOf } from '../../services/scheduler';
import { speech } from '../../services/speech';
import type { Progress } from '../../types';
import WORD_DIALOG_CONTENTS from './word-dialog.html?raw';
import './word-dialog.scss';

export interface WordDialogOptions {
	db: IDBDatabase;
	cardId: number;
	/** Called after any change so the caller can refresh. */
	onChange: () => void;
}

const dateFormat = new Intl.DateTimeFormat(undefined, {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
});

const formatDue = (progress: Progress | null, now: number): string => {
	switch (stateOf(progress)) {
		case 'New':
			return '—';
		case 'Learning':
			return 'Ready to test';
		case 'Relearning':
			return progress?.testable ? 'Ready to test' : 'Practise first';
		default:
			return progress && progress.due <= now
				? 'Due now'
				: dateFormat.format(progress?.due);
	}
};

type Row = [label: string, value: (p: Progress | null, now: number) => string];

const ROWS: Row[] = [
	['Status', (p) => STATUS_BY_STATE[stateOf(p)]],
	['Due', formatDue],
	['Stability', (p) => (p?.stability ? `${p.stability.toFixed(1)} d` : '—')],
	['Difficulty', (p) => (p?.difficulty ? p.difficulty.toFixed(1) : '—')],
	['Reps', (p) => String(p?.reps ?? 0)],
	['Lapses', (p) => String(p?.lapses ?? 0)],
	[
		'Last review',
		(p) => (p?.lastReview ? dateFormat.format(p.lastReview) : '—'),
	],
	['Practice views', (p) => String(p?.practiceExposures ?? 0)],
];

/** Full detail for one word, with Hide/Unhide, Queue and Reset (SPEC §11). */
export default class WordDialog extends BaseComponent {
	private readonly options: WordDialogOptions;
	private word: WordRecord | null = null;
	private confirmingReset = false;

	constructor(options: WordDialogOptions) {
		super(WORD_DIALOG_CONTENTS, {
			className: 'word-dialog',
			tag: 'dialog',
		});
		this.options = options;
	}

	/** Close and remove; safe to call more than once. */
	public close(): void {
		if (this.dialog.open) {
			this.dialog.close();
		}
	}

	public get open(): boolean {
		return this.dialog.open;
	}

	private get dialog(): HTMLDialogElement {
		return this.element as HTMLDialogElement;
	}

	protected override onMount(): void {
		// Escape and form-less close both end up here.
		this.dialog.addEventListener('close', () => {
			void this.unmount();
		});
		// A click on the backdrop lands on the <dialog> itself.
		this.dialog.addEventListener('click', (event) => {
			if (event.target === this.dialog) {
				this.dialog.close();
			}
		});
		this.query('.word-close').addEventListener('click', () =>
			this.dialog.close(),
		);
		this.query('.speak-thai').addEventListener('click', () => {
			if (this.word) void speech.speak(this.word.card.thai, 'thai');
		});
		this.query('.word-examples').addEventListener('click', () => {
			if (this.word)
				void speech.speak(this.word.card.thaiExample, 'thai');
		});
		this.query('.word-hide').addEventListener('click', () =>
			this.run((word) =>
				setHidden(this.options.db, word.card.id, !word.card.hidden),
			),
		);
		this.query('.word-queue').addEventListener('click', () =>
			this.run((word) =>
				setQueued(this.options.db, word.card.id, !word.card.queued),
			),
		);
		this.query('.word-reset').addEventListener('click', () => {
			if (!this.confirmingReset) {
				this.confirmingReset = true;
				this.render();
				return;
			}
			this.confirmingReset = false;
			void this.run((word) => resetWord(this.options.db, word.card.id));
		});

		this.dialog.showModal();
		void this.reload();
	}

	protected override onUnmount(): void {
		speech.cancel();
	}

	private async reload(): Promise<void> {
		this.word = await loadWord(this.options.db, this.options.cardId);
		this.render();
	}

	/** Apply a change, refresh the dialog and tell the caller. */
	private async run(
		change: (word: WordRecord) => Promise<void>,
	): Promise<void> {
		const word = this.word;
		if (!word) {
			return;
		}
		this.setBusy(true);
		try {
			await change(word);
			await this.reload();
			this.options.onChange();
		} catch (error) {
			console.error('Updating word failed:', error);
			this.query('.word-notice').textContent =
				'That change could not be saved. Please try again.';
		} finally {
			this.setBusy(false);
		}
	}

	private setBusy(busy: boolean): void {
		for (const button of this.element.querySelectorAll<HTMLButtonElement>(
			'.word-actions button',
		)) {
			button.disabled = busy;
		}
	}

	private render(): void {
		const word = this.word;
		if (!word) {
			this.query('.word-notice').textContent =
				'This word no longer exists.';
			return;
		}
		const { card, forward, backward } = word;
		const now = Date.now();

		this.query('.word-id').textContent = `Word ${card.id}`;
		this.query('.word-thai').textContent = card.thai;
		this.query('.word-english').textContent = card.english;
		this.query('.word-category').textContent = card.category;
		this.query('.word-example-thai').textContent = card.thaiExample;
		this.query('.word-example-english').textContent = card.englishExample;
		this.query<HTMLButtonElement>('.word-examples').disabled =
			card.thaiExample === '';

		this.query('tbody').replaceChildren(
			...ROWS.map(([label, value]) => {
				const row = document.createElement('tr');
				const heading = document.createElement('th');
				heading.scope = 'row';
				heading.textContent = label;
				row.append(
					heading,
					cell(value(forward, now)),
					cell(value(backward, now)),
				);
				return row;
			}),
		);

		this.query('.word-notice').textContent = card.hidden
			? 'Hidden: this word is left out of every practice and test deck.'
			: card.queued
				? 'Queued: this word will be in your next practice deck.'
				: '';

		this.query('.word-hide').textContent = card.hidden ? 'Unhide' : 'Hide';

		const queue = this.query('.word-queue');
		const hasNew = forward === null || backward === null;
		queue.hidden = card.hidden || !hasNew;
		queue.textContent = card.queued
			? 'Remove from queue'
			: 'Queue for next practice';

		const reset = this.query<HTMLButtonElement>('.word-reset');
		reset.hidden = forward === null && backward === null;
		reset.textContent = this.confirmingReset
			? 'Tap again to reset'
			: 'Reset to NEW';
		reset.classList.toggle('button-secondary', !this.confirmingReset);
	}
}

const cell = (text: string): HTMLTableCellElement => {
	const td = document.createElement('td');
	td.textContent = text;
	return td;
};
