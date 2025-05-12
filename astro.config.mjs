// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://brybree.github.io',
	base: '/WebSite',
	integrations: [
		starlight({
			plugins: [starlightImageZoom(), starlightBlog()],
			customCss: [
				'./src/styles/custom.css',
			],
			title: 'My Docs',
			defaultLocale:'en',
			social: {
				github: 'https://github.com/brybree',
			},
			sidebar: [
				{
					label: 'How To',
					collapsed: true,
					autogenerate: { directory: 'howto'},
				},
				{ 
					label: 'Hello', slug: 'hello', 
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
