import type { Component } from '../types';

export type RouteParams = Record<string, string>;

/** Return null when the params are invalid; the router then uses the fallback. */
export type RouteFactory = (params: RouteParams) => Component | null;

export interface RouterOptions {
	/** Path patterns such as `/practice/:dir`. */
	routes: Record<string, RouteFactory>;
	/** Path shown for unknown routes. */
	fallback: string;
	/** Return another path to redirect to, or null to continue. */
	guard?: (path: string) => string | null;
}

interface CompiledRoute {
	regex: RegExp;
	keys: string[];
	factory: RouteFactory;
}

export const currentPath = (): string =>
	window.location.hash.replace(/^#/, '') || '/';

const compile = (pattern: string, factory: RouteFactory): CompiledRoute => {
	const keys: string[] = [];
	const source = pattern
		.split('/')
		.map((segment) => {
			if (segment.startsWith(':')) {
				keys.push(segment.slice(1));
				return '([^/]+)';
			}
			return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		})
		.join('/');
	return { regex: new RegExp(`^${source}$`), keys, factory };
};

/** Hash router. Screens cross-fade: the old one unmounts while the new one mounts. */
export class Router {
	private readonly container: HTMLElement;
	private readonly options: RouterOptions;
	private readonly routes: CompiledRoute[];
	private current: Component | null = null;
	private rendering = false;
	private pending = false;

	constructor(container: HTMLElement, options: RouterOptions) {
		this.container = container;
		this.options = options;
		this.routes = Object.entries(options.routes).map(([pattern, factory]) =>
			compile(pattern, factory),
		);
	}

	public start(): void {
		window.addEventListener('hashchange', () => {
			void this.render();
		});
		void this.render();
	}

	/** Go to a path. Navigating to the current path re-renders it. */
	public navigate(path: string): void {
		if (path === currentPath()) {
			void this.render();
		} else {
			window.location.hash = path;
		}
	}

	private async render(): Promise<void> {
		if (this.rendering) {
			this.pending = true;
			return;
		}
		this.rendering = true;
		try {
			do {
				this.pending = false;
				await this.renderPath(currentPath());
			} while (this.pending);
		} finally {
			this.rendering = false;
		}
	}

	private async renderPath(path: string): Promise<void> {
		const redirect = this.options.guard?.(path) ?? null;
		if (redirect !== null && redirect !== path) {
			this.replace(redirect);
			return;
		}

		const next = this.resolve(path);
		if (!next) {
			if (path === this.options.fallback) {
				throw new Error(`Fallback route does not resolve: ${path}`);
			}
			this.replace(this.options.fallback);
			return;
		}

		const previous = this.current;
		this.current = next;
		await Promise.all([previous?.unmount(), next.mount(this.container)]);
	}

	private resolve(path: string): Component | null {
		for (const route of this.routes) {
			const match = route.regex.exec(path);
			if (match) {
				const params: RouteParams = {};
				route.keys.forEach((key, index) => {
					params[key] = decodeURIComponent(match[index + 1] ?? '');
				});
				return route.factory(params);
			}
		}
		return null;
	}

	/** Swap the URL without a history entry; replaceState fires no hashchange. */
	private replace(path: string): void {
		window.history.replaceState(null, '', `#${path}`);
		this.pending = true;
	}
}
