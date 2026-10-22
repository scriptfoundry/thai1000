import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import { Rating } from '../../services/fsrs';
import { attachCardInput, type CardAction } from '../../services/gestures';
import {
	loadLibrary,
	loadWord,
	markDeckTestable,
	recordGrade,
	recordReveal,
} from '../../services/progress';
import {
	buildPracticeDeck,
	buildTestDeck,
	CYCLES_BEFORE_TEST,
	type DeckEntry,
	testCandidates,
} from '../../services/scheduler';
import { speech } from '../../services/speech';
import { shuffle } from '../../services/utils';
import type { AppContext, Direction } from '../../types';
import CardView, { type Face, type Side } from '../card/card';
import WordDialog from '../word-dialog/word-dialog';
import FLASHCARDS_CONTENTS from './flashcards.html?raw';
import './flashcards.scss';

export const DIRECTION_LABEL: Record<Direction, string> = {
	forward: 'Thai → English',
	backward: 'English → Thai',
};

export type DeckMode = 'practice' | 'test';

export interface FlashcardsOptions {
	mode: DeckMode;
	direction: Direction;
	/** Test only these cards (a test launched from a practice deck). */
	cardIds?: readonly number[];
	/** Router navigation; re-renders when the path is unchanged. */
	navigate: (path: string) => void;
}

interface MessageAction {
	label: string;
	path: string;
	secondary?: boolean;
}

const GRADES: Partial<Record<CardAction, Rating>> = {
	'grade-again': Rating.Again,
	'grade-hard': Rating.Hard,
	'grade-good': Rating.Good,
	'grade-easy': Rating.Easy,
};

/**
 * Practice (SPEC §7): cycle a deck; never rates cards.
 * Test: flip, rate on the back, commit each rating at once, then summarise.
 */
export default class Flashcards extends BaseComponent {
	private readonly app: AppContext;
	private readonly options: FlashcardsOptions;
	private deck: DeckEntry[] = [];
	private position = 0;
	private face: Face = 'front';
	private cycles = 0;
	private passed = 0;
	private failed = 0;
	private card: CardView | null = null;
	private detachInput: (() => void) | null = null;
	private dialog: WordDialog | null = null;
	private unmounted = false;

	constructor(app: AppContext, options: FlashcardsOptions) {
		super(FLASHCARDS_CONTENTS, {
			className: 'screen flashcards-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.app = app;
		this.options = options;
	}

	private get testing(): boolean {
		return this.options.mode === 'test';
	}

	protected override onMount(): void {
		const label = this.testing ? 'Test' : 'Practice';
		this.query('.deck-title').textContent =
			`${label} · ${DIRECTION_LABEL[this.options.direction]}`;

		this.query('.deck-next').addEventListener('click', () =>
			this.handle('next'),
		);
		this.query('.deck-prev').addEventListener('click', () =>
			this.handle('prev'),
		);
		for (const button of this.element.querySelectorAll<HTMLButtonElement>(
			'.grade',
		)) {
			button.addEventListener('click', () =>
				this.handle(button.dataset.grade as CardAction),
			);
		}
		this.query('.deck-test').addEventListener('click', () => {
			const ids = this.deck.map((entry) => entry.card.id).join(',');
			this.options.navigate(
				`/test/${this.options.direction}?cards=${ids}`,
			);
		});
		void this.start();
	}

	protected override onUnmount(): void {
		this.unmounted = true;
		this.detachInput?.();
		this.detachInput = null;
		this.dialog?.close();
		speech.cancel();
	}

	private async start(): Promise<void> {
		const { cards, index } = await loadLibrary(this.app.db);
		if (this.unmounted) {
			return;
		}
		const now = Date.now();
		const { direction, cardIds } = this.options;
		// The scheduler picks which cards; the order they are shown in is random.
		this.deck = shuffle(
			this.testing
				? buildTestDeck(cards, index, now, {
						direction,
						cardIds: cardIds ? new Set(cardIds) : undefined,
					})
				: buildPracticeDeck(cards, index, now, direction),
		);

		if (this.deck.length === 0) {
			this.showEmpty();
			return;
		}
		this.detachInput = attachCardInput(
			this.query('.card-stage'),
			(action) => this.handle(action),
		);
		this.show('right');
	}

	private showEmpty(): void {
		const { direction } = this.options;
		if (this.testing) {
			this.showMessage(
				'Nothing to test',
				'No cards in this direction are ready. Practise some cards first, or come back when reviews are due.',
				[
					{ label: 'Practice', path: `/practice/${direction}` },
					{ label: 'Home', path: '/home', secondary: true },
				],
			);
			return;
		}
		this.showMessage(
			'Nothing to practise',
			direction === 'backward'
				? 'English → Thai cards appear once a word passes its Thai → English test.'
				: 'Every word is in review. Due reviews are waiting in Test.',
			[
				{ label: 'Test', path: `/test/${direction}` },
				{ label: 'Home', path: '/home', secondary: true },
			],
		);
	}

	private handle(action: CardAction): void {
		// Keys still reach the window while the word dialog is open.
		if (this.dialog?.open) {
			return;
		}
		if (this.deck.length === 0 || this.position >= this.deck.length) {
			return;
		}
		if (action === 'replay') {
			this.card?.replay();
			return;
		}
		if (this.testing) {
			this.handleTest(action);
			return;
		}
		if (action === 'next') {
			this.nextPractice();
		} else if (action === 'prev') {
			this.prevPractice();
		}
		// Grades only apply in tests.
	}

	// --- Practice ---------------------------------------------------------

	private nextPractice(): void {
		if (this.face === 'front') {
			this.face = 'back';
			this.reveal();
		} else {
			this.face = 'front';
			this.position++;
			if (this.position >= this.deck.length) {
				this.position = 0;
				this.reshuffle();
				this.completeCycle();
			}
		}
		this.show('right');
	}

	private prevPractice(): void {
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

	/** A new round: reshuffle, without repeating the card just shown. */
	private reshuffle(): void {
		const last = this.deck[this.deck.length - 1];
		this.deck = shuffle(this.deck);
		if (this.deck.length > 1 && this.deck[0] === last) {
			this.deck.push(...this.deck.splice(0, 1));
		}
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

	// --- Test -------------------------------------------------------------

	private handleTest(action: CardAction): void {
		if (this.face === 'front') {
			if (action === 'next') {
				this.face = 'back';
				this.show('right');
			}
			return;
		}
		const rating = GRADES[action];
		if (rating === undefined) {
			return;
		}
		const entry = this.current();
		if (rating === Rating.Again) {
			this.failed++;
		} else {
			this.passed++;
		}
		recordGrade(this.app.db, entry, rating, Date.now())
			.then((progress) => {
				entry.progress = progress;
			})
			.catch((error: unknown) =>
				console.error('Saving grade failed:', error),
			);

		this.position++;
		this.face = 'front';
		if (this.position < this.deck.length) {
			this.show('right');
		} else {
			void this.finishTest();
		}
	}

	private async finishTest(): Promise<void> {
		this.detachInput?.();
		this.detachInput = null;
		void this.card?.leave('left');
		this.card = null;
		speech.cancel();

		// Count what is still eligible once this deck's ratings have committed.
		const { cards, index } = await loadLibrary(this.app.db);
		if (this.unmounted) {
			return;
		}
		const { direction } = this.options;
		const remaining = testCandidates(cards, index, Date.now(), {
			direction,
		}).length;

		const actions: MessageAction[] = [];
		if (remaining > 0) {
			actions.push({
				label: 'Another test deck',
				path: `/test/${direction}`,
			});
		}
		actions.push(
			{
				label: 'Practice',
				path: `/practice/${direction}`,
				secondary: remaining > 0,
			},
			{ label: 'Home', path: '/home', secondary: true },
		);
		const total = this.passed + this.failed;
		this.showMessage(
			'Test complete',
			`Memorized ${this.passed} of ${total} · Failed ${this.failed}` +
				(remaining > 0 ? ` · ${remaining} more ready to test` : ''),
			actions,
		);
	}

	// --- Shared -----------------------------------------------------------

	private current(): DeckEntry {
		const entry = this.deck[this.position];
		if (!entry) {
			throw new Error(`No card at position ${this.position}`);
		}
		return entry;
	}

	/** The word dialog for `entry`, which picks up any change made there. */
	private showInfo(entry: DeckEntry): void {
		this.dialog?.close();
		this.dialog = new WordDialog({
			db: this.app.db,
			cardId: entry.card.id,
			onChange: () => {
				void loadWord(this.app.db, entry.card.id).then((word) => {
					if (word) {
						entry.card = word.card;
						entry.progress = word[entry.direction];
					}
				});
			},
		});
		void this.dialog.mount(document.body);
	}

	/** Swap in the current face; the new card slides in from `from`. */
	private show(from: Side): void {
		const previous = this.card;
		const entry = this.current();
		this.card = new CardView({
			entry,
			face: this.face,
			from,
			onInfo: () => this.showInfo(entry),
		});
		void previous?.leave(from === 'right' ? 'left' : 'right');
		void this.card.mount(this.query('.card-stage'));
		this.updateControls();
	}

	private updateControls(): void {
		const status = `Card ${this.position + 1} of ${this.deck.length}`;
		this.query('.deck-status').textContent = this.testing
			? status
			: `${status} · Round ${this.cycles + 1}`;

		const onBack = this.face === 'back';
		this.query('.deck-next').textContent = onBack
			? 'Next card'
			: 'Show answer';
		this.query<HTMLButtonElement>('.deck-prev').disabled =
			this.position === 0;
		// Tests rate the back face instead of moving on or back.
		this.query('.deck-controls').hidden = this.testing && onBack;
		this.query('.deck-prev').hidden = this.testing;
		this.query('.deck-grades').hidden = !(this.testing && onBack);
	}

	private showMessage(
		title: string,
		text: string,
		actions: MessageAction[],
	): void {
		this.query('.deck-message-title').textContent = title;
		this.query('.deck-message-text').textContent = text;
		this.query('.deck-message-actions').replaceChildren(
			...actions.map(({ label, path, secondary }) => {
				const button = document.createElement('button');
				button.type = 'button';
				button.className = secondary
					? 'button button-secondary'
					: 'button';
				button.textContent = label;
				button.addEventListener('click', () =>
					this.options.navigate(path),
				);
				return button;
			}),
		);
		this.query('.deck-message').hidden = false;
		for (const selector of [
			'.card-stage',
			'.deck-controls',
			'.deck-grades',
			'.deck-offer',
			'.deck-status',
		]) {
			this.query(selector).hidden = true;
		}
	}
}
