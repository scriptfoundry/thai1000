import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import { type Library, loadLibrary } from '../../services/progress';
import { reviewSummary } from '../../services/review';
import { progressKey, type Status, statusOf } from '../../services/scheduler';
import { textMatcher } from '../../services/search';
import type { AppContext, Card, Direction, Progress } from '../../types';
import WordDialog from '../word-dialog/word-dialog';
import WORDS_CONTENTS from './words.html?raw';
import './words.scss';

type DirectionStatus = Exclude<Status, 'HIDDEN'>;

/** ALL, HIDDEN, or one status in one direction, e.g. `forward:NEW`. */
type Filter = 'ALL' | 'HIDDEN' | `${Direction}:${DirectionStatus}`;

const DIRECTION_STATUSES: readonly DirectionStatus[] = [
	'NEW',
	'LEARNING',
	'REVIEW',
	'RELEARN',
];

const byDirection = (direction: Direction): Filter[] =>
	DIRECTION_STATUSES.map((status): Filter => `${direction}:${status}`);

/** Chip rows: ALL and HIDDEN, then each status per direction. */
const FILTER_GROUPS: readonly { label: string | null; filters: Filter[] }[] = [
	{ label: null, filters: ['ALL', 'HIDDEN'] },
	{ label: 'TH→EN', filters: byDirection('forward') },
	{ label: 'EN→TH', filters: byDirection('backward') },
];

/** Chip text without the direction, which the row label already shows. */
const chipLabel = (filter: Filter): string =>
	filter.split(':').at(-1) ?? filter;

/** Rows added per batch as the user scrolls. */
const BATCH = 100;

/** All words, most frequent (highest id) first, with search and status filters. */
export default class Words extends BaseComponent {
	private readonly app: AppContext;
	private library: Library | null = null;
	private filter: Filter = 'ALL';
	private search = '';
	private matches: Card[] = [];
	private rendered = 0;
	private observer: IntersectionObserver | null = null;
	private dialog: WordDialog | null = null;
	private unmounted = false;

	constructor(app: AppContext) {
		super(WORDS_CONTENTS, {
			className: 'screen words-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.app = app;
	}

	protected override onMount(): void {
		this.query('.word-chips').replaceChildren(
			...FILTER_GROUPS.map(({ label, filters }) => {
				const group = document.createElement('div');
				group.className = 'word-chip-group';
				if (label) {
					group.setAttribute('role', 'group');
					group.setAttribute('aria-label', label);
					const heading = document.createElement('span');
					heading.className = 'word-chip-label';
					heading.textContent = label;
					group.append(heading);
				}
				group.append(
					...filters.map((filter) => {
						const chip = document.createElement('button');
						chip.type = 'button';
						chip.className = 'chip';
						chip.dataset.filter = filter;
						chip.addEventListener('click', () =>
							this.setFilter(filter),
						);
						return chip;
					}),
				);
				return group;
			}),
		);

		const search = this.query<HTMLInputElement>('.word-search-input');
		search.addEventListener('input', () => {
			this.search = search.value;
			this.applyFilter();
			this.element.scrollTo({ top: 0 });
		});

		const body = this.query('tbody');
		body.addEventListener('click', (event) => this.openFromEvent(event));
		body.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				this.openFromEvent(event);
			}
		});

		// The screen element is the scroll container.
		this.observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					this.renderMore();
				}
			},
			{ root: this.element, rootMargin: '400px' },
		);
		this.observer.observe(this.query('.word-sentinel'));

		void this.refresh();
	}

	protected override onUnmount(): void {
		this.unmounted = true;
		this.observer?.disconnect();
		this.observer = null;
		this.dialog?.close();
	}

	private async refresh(): Promise<void> {
		const library = await loadLibrary(this.app.db);
		if (this.unmounted) {
			return;
		}
		library.cards.sort((a, b) => b.id - a.id);
		this.library = library;
		this.applyFilter();
	}

	private setFilter(filter: Filter): void {
		this.filter = filter;
		this.applyFilter();
		this.element.scrollTo({ top: 0 });
	}

	/** Direction filters never match hidden words (HIDDEN overrides both). */
	private matchesFilter(card: Card, filter: Filter): boolean {
		if (filter === 'ALL') {
			return true;
		}
		if (filter === 'HIDDEN') {
			return card.hidden;
		}
		const [direction, status] = filter.split(':') as [
			Direction,
			DirectionStatus,
		];
		const progress =
			this.library?.index.get(progressKey(card.id, direction)) ?? null;
		return statusOf(card, progress) === status;
	}

	private applyFilter(): void {
		// The search narrows every chip as well as the table.
		const matcher = textMatcher(this.search);
		const cards = (this.library?.cards ?? []).filter((c) =>
			matcher(c.english),
		);
		for (const chip of this.element.querySelectorAll<HTMLButtonElement>(
			'.chip',
		)) {
			const filter = chip.dataset.filter as Filter;
			const count = cards.filter((c) =>
				this.matchesFilter(c, filter),
			).length;
			chip.textContent = `${chipLabel(filter)} ${count}`;
			chip.setAttribute('aria-pressed', String(filter === this.filter));
		}

		this.matches = cards.filter((c) => this.matchesFilter(c, this.filter));
		this.query('.word-count').textContent =
			`${this.matches.length} ${this.matches.length === 1 ? 'word' : 'words'}`;
		this.query('tbody').replaceChildren();
		this.rendered = 0;
		this.renderMore();
	}

	private renderMore(): void {
		const next = this.matches.slice(this.rendered, this.rendered + BATCH);
		if (next.length === 0) {
			return;
		}
		this.query('tbody').append(...next.map((card) => this.row(card)));
		this.rendered += next.length;
	}

	private row(card: Card): HTMLTableRowElement {
		const row = document.createElement('tr');
		row.tabIndex = 0;
		row.dataset.id = String(card.id);
		row.append(
			cell(String(card.id), 'word-id'),
			cell(card.thai),
			cell(card.english),
		);
		row.cells[1]?.setAttribute('lang', 'th');

		// A hidden word shows one HIDDEN across both direction columns.
		if (card.hidden) {
			const hidden = cell('HIDDEN', 'status');
			hidden.colSpan = 2;
			row.append(hidden);
			return row;
		}
		const now = Date.now();
		for (const direction of ['forward', 'backward'] as const) {
			const progress =
				this.library?.index.get(progressKey(card.id, direction)) ??
				null;
			row.append(statusCell(statusOf(card, progress), progress, now));
		}
		return row;
	}

	private openFromEvent(event: Event): void {
		const row =
			event.target instanceof Element ? event.target.closest('tr') : null;
		const id = Number(row?.dataset.id);
		if (!Number.isInteger(id) || id <= 0) {
			return;
		}
		this.dialog?.close();
		const dialog = new WordDialog({
			db: this.app.db,
			cardId: id,
			onChange: () => {
				void this.refreshKeepingScroll();
			},
		});
		this.dialog = dialog;
		void dialog.mount(document.body);
	}

	/** After a change in the dialog: same filter, same scroll position. */
	private async refreshKeepingScroll(): Promise<void> {
		const top = this.element.scrollTop;
		const shown = this.rendered;
		await this.refresh();
		while (this.rendered < shown && this.rendered < this.matches.length) {
			this.renderMore();
		}
		this.element.scrollTop = top;
	}
}

const cell = (text: string, className?: string): HTMLTableCellElement => {
	const td = document.createElement('td');
	td.textContent = text;
	if (className) {
		td.className = className;
	}
	return td;
};

/** REVIEW shows days until due and a difficulty bar instead of its name. */
const statusCell = (
	status: Status,
	progress: Progress | null,
	now: number,
): HTMLTableCellElement => {
	if (status !== 'REVIEW' || !progress) {
		return cell(status, 'status');
	}
	const { due, block, band } = reviewSummary(progress, now);
	const td = cell(`${due} `, 'status status-review');
	td.title = `REVIEW · ${due === 'od' ? 'overdue' : `due in ${due}`} · difficulty ${progress.difficulty.toFixed(1)}`;
	const bar = document.createElement('span');
	bar.className = `difficulty difficulty-${band}`;
	bar.textContent = block;
	bar.setAttribute('aria-hidden', 'true');
	const label = document.createElement('span');
	label.className = 'visually-hidden';
	label.textContent = `REVIEW, difficulty ${Math.round(progress.difficulty)}`;
	td.append(bar, label);
	return td;
};
