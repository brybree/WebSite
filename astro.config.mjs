// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	// site: 'https://www.google.com',
	integrations: [
		starlight({
			plugins: [starlightImageZoom(), starlightBlog()],
			customCss: [
				'./src/styles/custom.css',
			],
			title: 'My Docs',
			defaultLocale:'en',
			locales:{
				en:{
					label: 'English',
				},
				fr:{
					label: 'Français',
				},
			},
			social: {
				github: 'https://github.com/bonnty',
			},
			sidebar: [
				{
					label: 'Guides',
					translations: {
						'fr': 'Le guide ahah',
					},
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Hello', slug: 'hello', 
							badge: {
								text: {
									en: 'new',
									fr: 'nouveau',
								},
								variant: 'tip', 
							},
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
