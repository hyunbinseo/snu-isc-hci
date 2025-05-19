import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest: {
		name: '쓸모있조',
		browser_specific_settings: {
			gecko: {
				id: '{dbe837d3-dd6a-4ef2-87f6-26eb48dd6ceb}', // Random UUID v4
			},
		},
	},
	srcDir: 'src',
	modules: ['@wxt-dev/module-svelte'],
	vite: () => ({ plugins: [tailwindcss()] }),
});
