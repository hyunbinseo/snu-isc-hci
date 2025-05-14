import { mount } from 'svelte';
import App from '../lib/App.svelte';

export default defineContentScript({
	matches: import.meta.env.DEV ? ['<all_urls>'] : ['https://myetl.snu.ac.kr/*'],
	runAt: 'document_end',
	main() {
		mount(App, { target: document.body });
	},
});
