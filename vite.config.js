import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { version } = JSON.parse(
	readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

const THEME_COLOR = '#69b0f8';
const BACKGROUND_COLOR = '#ffffff';

export default defineConfig({
	base: './',
	define: {
		__APP_VERSION__: JSON.stringify(version),
	},
	plugins: [
		VitePWA({
			// The app shows its own "new version" banner (src/services/pwa.ts)
			// and registers the worker itself, so nothing is injected.
			registerType: 'prompt',
			injectRegister: false,
			workbox: {
				// Manifest icons are added by the plugin itself.
				globPatterns: ['**/*.{js,css,html,ico}'],
				// The seed is fetched network-first rather than precached, so a new
				// seed is picked up when online and the cached copy is used offline.
				runtimeCaching: [
					{
						urlPattern: /\/data\/seed\.tsv$/,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'seed',
							networkTimeoutSeconds: 3,
						},
					},
				],
			},
			manifest: {
				name: 'Thai Flashcards',
				short_name: 'Thai',
				description: 'Learn the 1000 most frequent Thai words by ear',
				lang: 'en',
				start_url: './',
				scope: './',
				display: 'standalone',
				orientation: 'portrait',
				theme_color: THEME_COLOR,
				background_color: BACKGROUND_COLOR,
				icons: [
					{
						src: 'icon_192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icon_512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
				],
			},
		}),
	],
});
