/**
 * Service worker registration with a prompt-style update (SPEC §10). No
 * runtime dependency: the generated Workbox worker (registerType 'prompt')
 * waits until it receives SKIP_WAITING, which `apply` sends.
 *
 * The browser checks for a new worker once, when this registers at startup.
 * Nothing polls later; offline, the check simply fails and the cached app runs.
 */

/** `apply` activates the waiting version and reloads the page. */
export type UpdateHandler = (apply: () => void) => void;

export const registerServiceWorker = (onUpdate: UpdateHandler): void => {
	// Vite's dev server has no generated worker.
	if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
		return;
	}
	const container = navigator.serviceWorker;
	let requested = false;

	const offer = (worker: ServiceWorker): void =>
		onUpdate(() => {
			requested = true;
			worker.postMessage({ type: 'SKIP_WAITING' });
		});

	// Only reload for an update the user asked for.
	container.addEventListener('controllerchange', () => {
		if (requested) {
			requested = false;
			window.location.reload();
		}
	});

	container
		.register(`${import.meta.env.BASE_URL}sw.js`, {
			scope: import.meta.env.BASE_URL,
		})
		.then((registration) => {
			// An update downloaded during an earlier session is still waiting.
			if (registration.waiting && container.controller) {
				offer(registration.waiting);
			}
			registration.addEventListener('updatefound', () => {
				const installing = registration.installing;
				installing?.addEventListener('statechange', () => {
					// With no controller this is the first install, not an update.
					if (
						installing.state === 'installed' &&
						container.controller
					) {
						offer(installing);
					}
				});
			});
		})
		.catch((error: unknown) =>
			console.warn('Service worker registration failed:', error),
		);
};
