// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: 'https://brybree.github.io',
	base: '/WebSite',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			customCss: [
				'./src/styles/custom.css',
			],
			title: 'My Docs',
			defaultLocale:'en',
			social: [
				{ icon: 'github', label: 'Github', href: 'https://github.com/brybree'},
			],
			sidebar: [
				{
					label: 'How To',
					collapsed: false,
					autogenerate: { directory: 'howto'},
				},
				{ 
					label: 'Hello', slug: 'hello', 
				},
			],
		}),
	],
});
