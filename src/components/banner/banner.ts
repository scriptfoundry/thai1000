import { BaseComponent } from '../../services/component';
import BANNER_CONTENTS from './banner.html?raw';
import './banner.scss';

/** Keep in sync with --card-transition. */
const BANNER_TRANSITION_MS = 200;

/** Warnings close themselves after this long unless dismissed first. */
export const WARNING_DISMISS_MS = 10_000;

export type BannerKind = 'info' | 'warning' | 'error';

export interface BannerOptions {
	kind?: BannerKind;
	action?: { label: string; onClick: () => void };
	/** Close automatically after this many ms; defaults to WARNING_DISMISS_MS for warnings. */
	dismissAfterMs?: number;
}

/** A dismissible notice shown above the current screen. */
export default class Banner extends BaseComponent {
	private readonly message: string;
	private readonly options: BannerOptions;
	private closing = false;
	private dismissTimer: number | null = null;

	constructor(message: string, options: BannerOptions = {}) {
		const kind = options.kind ?? 'info';
		super(BANNER_CONTENTS, {
			className: `banner banner-${kind}`,
			transitionMs: BANNER_TRANSITION_MS,
		});
		this.message = message;
		this.options = options;
	}

	protected override onMount(): void {
		this.query('.banner-message').textContent = this.message;

		const { action } = this.options;
		if (action) {
			const button = this.query<HTMLButtonElement>('.banner-action');
			button.textContent = action.label;
			button.hidden = false;
			button.addEventListener('click', () => action.onClick());
		}

		this.query('.banner-close').addEventListener('click', () => {
			void this.close();
		});

		const dismissAfterMs =
			this.options.dismissAfterMs ??
			(this.options.kind === 'warning' ? WARNING_DISMISS_MS : undefined);
		if (dismissAfterMs !== undefined) {
			this.dismissTimer = window.setTimeout(() => {
				void this.close();
			}, dismissAfterMs);
		}
	}

	protected override onUnmount(): void {
		if (this.dismissTimer !== null) {
			window.clearTimeout(this.dismissTimer);
			this.dismissTimer = null;
		}
	}

	public async close(): Promise<void> {
		if (this.closing) {
			return;
		}
		this.closing = true;
		await this.unmount();
	}
}
