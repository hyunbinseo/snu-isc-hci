import { mount, unmount } from 'svelte';
import App from '../lib/App.svelte';

export default defineContentScript({
	matches: ['<all_urls>'],
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
