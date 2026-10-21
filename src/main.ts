import Home from './components/home/home';
import Start from './components/start/start';
import { Router } from './services/router';
import './styles/main.scss';

const main = (): void => {
	const container = document.getElementById('app');
	if (!container) {
		throw new Error('Missing #app container');
	}

	// Every session begins at Start (speech needs a user gesture); a deep
	// link opened before then is remembered and resumed afterwards.
	let started = false;
	let resumePath: string | null = null;

	const router = new Router(container, {
		routes: {
			'/': () =>
				new Start(() => {
					started = true;
					router.navigate(resumePath ?? '/home');
					resumePath = null;
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
