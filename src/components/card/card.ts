import { BaseComponent, CARD_TRANSITION_MS } from '../../services/component';
import type { DeckEntry } from '../../services/scheduler';
import { speech } from '../../services/speech';
import type { Language } from '../../types';
import CARD_CONTENTS from './card.html?raw';
import './card.scss';

export type Face = 'front' | 'back';
export type Side = 'left' | 'right';

const LANG_ATTR: Record<Language, string> = { thai: 'th', english: 'en' };
const LANGUAGE_LABEL: Record<Language, string> = {
	thai: 'Thai',
	english: 'English',
};

/**
 * Forward (Thai→English): front speaks Thai with no text; back shows Thai and
 * English and speaks English. Backward is the mirror image.
 */
const layout = (entry: DeckEntry, face: Face) => {
	const [question, answer]: [Language, Language] =
		entry.direction === 'forward'
			? ['thai', 'english']
			: ['english', 'thai'];
	return {
		spoken: face === 'front' ? question : answer,
		primary: question,
		secondary: answer,
	};
};

const textOf = (entry: DeckEntry, language: Language): string =>
	language === 'thai' ? entry.card.thai : entry.card.english;

export interface CardOptions {
	entry: DeckEntry;
	face: Face;
	/** Side the card slides in from. */
	from: Side;
	/** The info button: show the word's detail. */
	onInfo: () => void;
}

export default class CardView extends BaseComponent {
	private readonly options: CardOptions;

	constructor(options: CardOptions) {
		super(CARD_CONTENTS, {
			className: `card card-${options.face}${options.from === 'left' ? ' from-left' : ''}`,
			tag: 'article',
			transitionMs: CARD_TRANSITION_MS,
		});
		this.options = options;
	}

	protected override onMount(): void {
		const { entry, face } = this.options;
		const { spoken, primary, secondary } = layout(entry, face);

		this.query('.card-language').textContent =
			face === 'front'
				? `Listen · ${LANGUAGE_LABEL[spoken]}`
				: `${LANGUAGE_LABEL[primary]} → ${LANGUAGE_LABEL[secondary]}`;

		const primaryText = this.query('.card-primary');
		primaryText.textContent = textOf(entry, primary);
		primaryText.lang = LANG_ATTR[primary];
		const secondaryText = this.query('.card-secondary');
		secondaryText.textContent = textOf(entry, secondary);
		secondaryText.lang = LANG_ATTR[secondary];

		this.query('.card-replay').addEventListener('click', () =>
			this.replay(),
		);
		this.query('.card-info').addEventListener('click', () =>
			this.options.onInfo(),
		);
		void speech.speak(textOf(entry, spoken), spoken);
	}

	/** Play again: the front repeats its word; the back says its word, then the front's. */
	public replay(): void {
		const { entry, face } = this.options;
		const { spoken, primary, secondary } = layout(entry, face);
		const order = face === 'front' ? [spoken] : [secondary, primary];
		void speech.speakAll(
			order.map(
				(language) => [textOf(entry, language), language] as const,
			),
		);
	}

	/** Slide out towards `side` and remove. */
	public leave(side: Side): Promise<void> {
		this.element.classList.toggle('to-right', side === 'right');
		return this.unmount();
	}
}
