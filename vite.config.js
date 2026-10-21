import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { version } = JSON.parse(
	readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

export default defineConfig({
	base: './',
	define: {
		__APP_VERSION__: JSON.stringify(version),
	},
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico'],
			workbox: {
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
				description: 'Top 1000+ Thai words',
				theme_color: '#69b0f8',
				icons: [
					{
						src: 'icon_192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'icon_512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
});
