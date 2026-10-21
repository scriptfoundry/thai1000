import Banner, { type BannerOptions } from './components/banner/banner';
import Flashcards, { type DeckMode } from './components/flashcards/flashcards';
import Home from './components/home/home';
import SettingsScreen from './components/settings/settings';
import Start from './components/start/start';
import Words from './components/words/words';
import { openDb } from './services/db';
import { Router } from './services/router';
import { SeedUnavailableError, syncSeed } from './services/seed-sync';
import { loadSettings, ratesOf } from './services/settings';
import { speech } from './services/speech';
import type { AppContext, Direction } from './types';
import './styles/main.scss';

const parseDirection = (value: string | undefined): Direction | null =>
	value === 'forward' || value === 'backward' ? value : null;

/** `?cards=1,2,3` → [1, 2, 3]; anything malformed is dropped. */
const parseCardIds = (value: string | undefined): number[] | undefined =>
	value
		?.split(',')
		.map(Number)
		.filter((id) => Number.isInteger(id) && id > 0);

const requireElement = (id: string): HTMLElement => {
	const element = document.getElementById(id);
	if (!element) {
		throw new Error(`Missing #${id}`);
	}
	return element;
};

const main = (): void => {
	const container = requireElement('app');
	const notices = requireElement('notices');

	const showNotice = (message: string, options?: BannerOptions): void => {
		void new Banner(message, options).mount(notices);
	};

	const boot = async (): Promise<AppContext> => {
		const db = await openDb();
		const [result, settings, voiceWarnings] = await Promise.all([
			syncSeed(db),
			loadSettings(db),
			speech.init(),
		]);
		speech.setRates(ratesOf(settings));
		for (const warning of voiceWarnings) {
			showNotice(warning, { kind: 'warning' });
		}
		if (result.added || result.updated || result.deleted) {
			console.info(
				`Seed sync: ${result.added} added, ${result.updated} updated, ${result.deleted} deleted`,
			);
		}
		if (result.warning) {
			showNotice(result.warning, { kind: 'warning' });
		}
		return { db, settings };
	};

	// Set once boot succeeds; the router guard keeps other screens behind Start.
	let app: AppContext | null = null;
	const ready = boot().then((context) => {
		app = context;
		return context;
	});
	ready.catch((error: unknown) => console.error('Startup failed:', error));

	// Every session begins at Start (speech needs a user gesture); a deep
	// link opened before then is remembered and resumed afterwards.
	let started = false;
	let resumePath: string | null = null;

	const deckScreen = (
		mode: DeckMode,
		dir: string | undefined,
		cardIds?: number[],
	): Flashcards | null => {
		const direction = parseDirection(dir);
		return app && direction
			? new Flashcards(app, {
					mode,
					direction,
					cardIds,
					navigate: (path) => router.navigate(path),
				})
			: null;
	};

	const router = new Router(container, {
		routes: {
			'/': () =>
				new Start({
					ready,
					describeError: (error) =>
						error instanceof SeedUnavailableError
							? error.message
							: 'Something went wrong while starting. Please try again.',
					onStart: () => {
						speech.unlock();
						started = true;
						router.navigate(resumePath ?? '/home');
						resumePath = null;
					},
				}),
			'/home': () => new Home(),
			'/practice/:dir': ({ dir }) => deckScreen('practice', dir),
			'/test/:dir': ({ dir, cards }) =>
				deckScreen('test', dir, parseCardIds(cards)),
			'/settings': () => (app ? new SettingsScreen(app) : null),
			'/words': () => (app ? new Words(app) : null),
		},
		fallback: '/home',
		guard: (path) => {
			if (!started) {
				if (path !== '/') {
					resumePath = path;
				}
				return '/';
			}
			return path === '/' ? '/home' : null;
		},
	});
	router.start();
};

main();
