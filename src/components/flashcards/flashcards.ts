import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import { attachCardInput, type CardAction } from '../../services/gestures';
import {
	loadLibrary,
	markDeckTestable,
	recordReveal,
} from '../../services/progress';
import {
	buildPracticeDeck,
	CYCLES_BEFORE_TEST,
	type DeckEntry,
} from '../../services/scheduler';
import { speech } from '../../services/speech';
import type { AppContext, Direction } from '../../types';
import CardView, { type Face, type Side } from '../card/card';
import FLASHCARDS_CONTENTS from './flashcards.html?raw';
import './flashcards.scss';

export const DIRECTION_LABEL: Record<Direction, string> = {
	forward: 'Thai → English',
	backward: 'English → Thai',
};

export interface FlashcardsOptions {
	direction: Direction;
	/** Start a test on these cards (in the same direction). */
	onTestDeck: (cardIds: number[]) => void;
}

interface MessageAction {
	label: string;
	href: string;
}

/** Practice flow (SPEC §7): cycle a deck; practice never rates cards. */
export default class Flashcards extends BaseComponent {
	private readonly app: AppContext;
	private readonly options: FlashcardsOptions;
	private deck: DeckEntry[] = [];
	private position = 0;
	private face: Face = 'front';
	private cycles = 0;
	private card: CardView | null = null;
	private detachInput: (() => void) | null = null;
	private unmounted = false;

	constructor(app: AppContext, options: FlashcardsOptions) {
		super(FLASHCARDS_CONTENTS, {
			className: 'screen flashcards-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.app = app;
		this.options = options;
	}

	protected override onMount(): void {
		this.query('.deck-title').textContent =
			`Practice · ${DIRECTION_LABEL[this.options.direction]}`;
		this.query('.deck-next').addEventListener('click', () =>
			this.handle('next'),
		);
		this.query('.deck-prev').addEventListener('click', () =>
			this.handle('prev'),
		);
		this.query('.deck-test').addEventListener('click', () =>
			this.options.onTestDeck(this.deck.map((entry) => entry.card.id)),
		);
		void this.start();
	}

	protected override onUnmount(): void {
		this.unmounted = true;
		this.detachInput?.();
		this.detachInput = null;
		speech.cancel();
	}

	private async start(): Promise<void> {
		const { cards, index } = await loadLibrary(this.app.db);
		if (this.unmounted) {
			return;
		}
		this.deck = buildPracticeDeck(
			cards,
			index,
			Date.now(),
			this.options.direction,
		);
		if (this.deck.length === 0) {
			this.showMessage(this.emptyMessage(), [
				{ label: 'Home', href: '#/home' },
			]);
			return;
		}
		this.detachInput = attachCardInput(
			this.query('.card-stage'),
			(action) => this.handle(action),
		);
		this.show('right');
	}

	private emptyMessage(): string {
		return this.options.direction === 'backward'
			? 'Nothing to practise in this direction yet. English → Thai cards appear once a word passes its Thai → English test.'
			: 'Nothing to practise right now. Words due for review are waiting in Test.';
	}

	private handle(action: CardAction): void {
		if (this.deck.length === 0) {
			return;
		}
		switch (action) {
			case 'next':
				this.next();
				break;
			case 'prev':
				this.prev();
				break;
			case 'replay':
				this.card?.speak();
				break;
			default:
				// Grades only apply in tests.
				break;
		}
	}

	private next(): void {
		if (this.face === 'front') {
			this.face = 'back';
			this.reveal();
		} else {
			this.face = 'front';
			this.position++;
			if (this.position >= this.deck.length) {
				this.position = 0;
				this.completeCycle();
			}
		}
		this.show('right');
	}

	private prev(): void {
		if (this.position === 0) {
			return;
		}
		this.position--;
		this.face = 'front';
		this.show('left');
	}

	private reveal(): void {
		const entry = this.current();
		recordReveal(this.app.db, entry, Date.now())
			.then((progress) => {
				entry.progress = progress;
			})
			.catch((error: unknown) =>
				console.error('Saving reveal failed:', error),
			);
	}

	private completeCycle(): void {
		this.cycles++;
		if (this.cycles === 1) {
			markDeckTestable(this.app.db, this.deck).catch((error: unknown) =>
				console.error('Marking deck testable failed:', error),
			);
		}
		if (this.cycles >= CYCLES_BEFORE_TEST) {
			this.query('.deck-offer').hidden = false;
		}
	}

	private current(): DeckEntry {
		const entry = this.deck[this.position];
		if (!entry) {
			throw new Error(`No card at position ${this.position}`);
		}
		return entry;
	}

	/** Swap in the current face; the new card slides in from `from`. */
	private show(from: Side): void {
		const previous = this.card;
		this.card = new CardView({
			entry: this.current(),
			face: this.face,
			from,
		});
		void previous?.leave(from === 'right' ? 'left' : 'right');
		void this.card.mount(this.query('.card-stage'));
		this.updateControls();
	}

	private updateControls(): void {
		this.query('.deck-status').textContent =
			`Card ${this.position + 1} of ${this.deck.length} · Round ${this.cycles + 1}`;
		this.query('.deck-next').textContent =
			this.face === 'front' ? 'Show answer' : 'Next card';
		this.query<HTMLButtonElement>('.deck-prev').disabled =
			this.position === 0;
	}

	private showMessage(text: string, actions: MessageAction[]): void {
		const section = this.query('.deck-message');
		this.query('.deck-message-text').textContent = text;
		const nav = this.query('.deck-message-actions');
		nav.replaceChildren(
			...actions.map(({ label, href }) => {
				const link = document.createElement('a');
				link.className = 'button';
				link.href = href;
				link.textContent = label;
				return link;
			}),
		);
		section.hidden = false;
		for (const selector of [
			'.card-stage',
			'.deck-controls',
			'.deck-offer',
		]) {
			this.query(selector).hidden = true;
		}
	}
}
