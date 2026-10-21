import { BaseComponent } from '../../services/component';
import BANNER_CONTENTS from './banner.html?raw';
import './banner.scss';

/** Keep in sync with --card-transition. */
const BANNER_TRANSITION_MS = 200;

export type BannerKind = 'info' | 'warning' | 'error';

export interface BannerOptions {
	kind?: BannerKind;
	action?: { label: string; onClick: () => void };
}

/** A dismissible notice shown above the current screen. */
export default class Banner extends BaseComponent {
	private readonly message: string;
	private readonly options: BannerOptions;
	private closing = false;

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
	}

	public async close(): Promise<void> {
		if (this.closing) {
			return;
		}
		this.closing = true;
		await this.unmount();
	}
}
