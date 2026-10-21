import Banner, { type BannerOptions } from './components/banner/banner';
import Home from './components/home/home';
import Start from './components/start/start';
import { openDb } from './services/db';
import { Router } from './services/router';
import { SeedUnavailableError, syncSeed } from './services/seed-sync';
import './styles/main.scss';

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

	const boot = async (): Promise<IDBDatabase> => {
		const db = await openDb();
		const result = await syncSeed(db);
		if (result.added || result.updated || result.deleted) {
			console.info(
				`Seed sync: ${result.added} added, ${result.updated} updated, ${result.deleted} deleted`,
			);
		}
		if (result.warning) {
			showNotice(result.warning, { kind: 'warning' });
		}
		return db;
	};

	const ready = boot();
	ready.catch((error: unknown) => console.error('Startup failed:', error));

	// Every session begins at Start (speech needs a user gesture); a deep
	// link opened before then is remembered and resumed afterwards.
	let started = false;
	let resumePath: string | null = null;

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
						started = true;
						router.navigate(resumePath ?? '/home');
						resumePath = null;
					},
				}),
			'/home': () => new Home(),
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
