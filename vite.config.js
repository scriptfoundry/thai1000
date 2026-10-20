import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	base: './',
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico'],
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
