import { BaseComponent } from '../../services/component';
import CONFIRM_CONTENTS from './confirm-dialog.html?raw';
import './confirm-dialog.scss';

export interface ConfirmOptions {
	title: string;
	message: string;
	confirmLabel: string;
}

/** Modal yes/no question; `window.confirm` is avoided so it matches the app. */
class ConfirmDialog extends BaseComponent {
	private readonly options: ConfirmOptions;
	private readonly onAnswer: (confirmed: boolean) => void;

	constructor(
		options: ConfirmOptions,
		onAnswer: (confirmed: boolean) => void,
	) {
		super(CONFIRM_CONTENTS, { className: 'confirm-dialog', tag: 'dialog' });
		this.options = options;
		this.onAnswer = onAnswer;
	}

	protected override onMount(): void {
		const dialog = this.element as HTMLDialogElement;
		this.query('.confirm-title').textContent = this.options.title;
		this.query('.confirm-message').textContent = this.options.message;
		this.query('.confirm-ok').textContent = this.options.confirmLabel;
		// <form method="dialog"> sets returnValue to the pressed button's value;
		// Escape leaves it empty.
		dialog.addEventListener('close', () => {
			this.onAnswer(dialog.returnValue === 'confirm');
			void this.unmount();
		});
		dialog.showModal();
	}
}

export const confirmDialog = (options: ConfirmOptions): Promise<boolean> =>
	new Promise((resolve) => {
		void new ConfirmDialog(options, resolve).mount(document.body);
	});
