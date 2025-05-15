import { mount, unmount } from 'svelte';
import App from '../lib/App.svelte';

export default defineContentScript({
	matches: import.meta.env.DEV ? ['<all_urls>'] : ['https://myetl.snu.ac.kr/*'],
	cssInjectionMode: 'ui',
	main: async (ctx) => {
		let app: Record<string, any>;
		createShadowRootUi(ctx, {
			name: 'news-widget',
			position: 'overlay',
			anchor: 'body',
			onMount: (uiContainer) => {
				app = mount(App, { target: uiContainer });
			},
			onRemove: () => unmount(app),
		}).then((ui) => ui.mount());
	},
});
