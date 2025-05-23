<script lang="ts">
	import suitWoff2 from '@sun-typeface/suit/fonts/variable/woff2/SUIT-Variable.woff2?url';
	import { onMount } from 'svelte';
	import './app.css';
	import { articles, categories } from './content';
	import Home from './Home.svelte';
	import Welcome from './Welcome.svelte';

	let url = $state<keyof typeof pages>();
	const pages = { Home, Welcome };
	const Page = $derived(url && pages[url]);

	onMount(() => (url = 'Home'));

	let dialog: HTMLDialogElement;
	let isOpen = $state(false);

	const close = () => {
		isOpen = false;
		dialog.close();
	};

	const open = () => {
		isOpen = true;
		if (window.innerWidth < 640) {
			try {
				dialog.showModal();
			} catch {
				dialog.close();
				dialog.showModal();
			}
		} else {
			try {
				if (dialog.open) {
					dialog.showModal();
					dialog.close();
				}
				// eslint-disable-next-line no-empty
			} catch {}
			dialog.show();
		}
	};
</script>

<svelte:head>
	{#each categories as category}
		{#each articles[category] as article}
			{#if article.image !== false}
				<link rel="preload" href="/{article.id}.avif" as="image" />
			{/if}
		{/each}
	{/each}
	<link rel="preload" href={suitWoff2} as="font" type="font/woff2" />
</svelte:head>

<svelte:window
	onresize={() => {
		if (isOpen) open();
	}}
/>

<div class="fixed right-6 bottom-6 z-10 flex flex-col-reverse items-end gap-y-4">
	<button
		type="button"
		aria-label={!isOpen ? 'Open' : 'Close'}
		onclick={!isOpen ? open : close}
		class="flex size-14 items-center justify-center rounded-3xl bg-indigo-700 text-white shadow-2xl"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
			class={[isOpen && 'rotate-45', 'size-7 transition-transform']}
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
</div>

<dialog
	bind:this={dialog}
	oncancel={() => (isOpen = false)}
	class="z-10 max-h-full max-w-full overflow-y-auto bg-white open:fixed max-sm:w-full max-sm:open:h-full sm:right-6 sm:bottom-26 sm:mt-auto sm:ml-auto sm:h-160 sm:max-h-[calc(100%-var(--spacing)*32)] sm:w-96 sm:shadow-2xl"
>
	<Page></Page>
</dialog>

<style>
	dialog[open] {
		translate: 0 0;
		opacity: 1;
		&::backdrop {
			opacity: 0;
		}
	}

	@starting-style {
		dialog[open] {
			translate: 0 2rem;
			opacity: 0;
		}
	}

	dialog {
		opacity: 0;
		transition-duration: 0.5s;
		transition-property: opacity, translate;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@supports (transition-behavior: allow-discrete) and (overlay: auto) {
		dialog {
			transition-behavior: allow-discrete;
			transition-property: opacity, translate, display, overlay;
		}
	}
</style>
