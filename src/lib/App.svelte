<script lang="ts">
	import suitWoff2 from '@sun-typeface/suit/fonts/variable/woff2/SUIT-Variable.woff2?url';
	import { DEV } from 'esm-env';
	import { SvelteSet } from 'svelte/reactivity';
	import './app.css';
	import Bookmarks from './Bookmarks.svelte';
	import { articles, categories } from './content';
	import Home from './Home.svelte';
	import Search from './Search.svelte';
	import Welcome from './Welcome.svelte';

	const pageIds = ['Home', 'Bookmarks', 'Search'] as const;
	const pages = { Home, Bookmarks };

	type PageId = (typeof pageIds)[number];
	let pageId = $state<PageId>('Home'); // TODO Set to undefined.

	const titles: Record<PageId, string> = {
		Home: '소식',
		Bookmarks: '보관함',
		Search: '검색',
	};

	const bookmarkIds = new SvelteSet<string>();

	let dialog: HTMLDialogElement;
	let isOpen = $state(false);
	const breakpoint = 640;

	const open = () => {
		isOpen = true;
		if (window.innerWidth < breakpoint) {
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
	onbeforeunload={(e) => {
		if (isOpen && !DEV) e.preventDefault();
	}}
/>

<div class="fixed right-6 bottom-6 z-10 flex flex-col-reverse items-end gap-y-4">
	<button
		type="button"
		aria-label={!isOpen ? 'Open' : 'Close'}
		onclick={!isOpen
			? open
			: () => {
					dialog.close();
					isOpen = false;
				}}
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
	onsubmit={(e) => {
		const isManuallyClosed =
			e.target instanceof HTMLFormElement && //
			e.target.method === 'dialog';

		if (isManuallyClosed) isOpen = false;
	}}
	class="z-10 max-h-full max-w-full overflow-y-auto bg-white open:fixed open:flex open:flex-col max-sm:w-full max-sm:open:h-full sm:right-6 sm:bottom-26 sm:mt-auto sm:ml-auto sm:h-160 sm:max-h-[calc(100%-var(--spacing)*32)] sm:w-96 sm:shadow-2xl"
>
	<form
		class="flex-1"
		onsubmit={(e) => {
			e.preventDefault();
			if (e.submitter instanceof HTMLButtonElement && e.submitter.name === 'bookmark') {
				const button = e.submitter;
				if (bookmarkIds.has(button.value)) {
					bookmarkIds.delete(button.value);
				} else {
					bookmarkIds.add(button.value);
				}
			}
		}}
	>
		<!-- TODO Keep scroll state when navigating between tabs. -->
		{#each ['Home', 'Bookmarks'] as const as id}
			{@const Page = pages[id]}
			<div class={[pageId === id ? 'contents' : 'hidden']}>
				<Page {bookmarkIds}></Page>
			</div>
		{/each}
		{#if pageId === 'Search'}
			<Search></Search>
		{:else if pageId === undefined}
			<Welcome></Welcome>
		{/if}
	</form>
	<nav
		class="sticky bottom-0 z-10 mt-auto flex justify-center gap-x-10 rounded-t-xl bg-white/75 px-6 backdrop-blur select-none"
	>
		<form method="dialog" class="contents">
			{#each pageIds as id}
				{@const onclick = () => {
					dialog.scrollTop = 0;
					pageId = id;
				}}
				<button type="button" {onclick} class={[pageId === id && 'active']}>
					{titles[id]}
				</button>
			{/each}
			<button class="ml-auto sm:hidden">닫기</button>
		</form>
	</nav>
</dialog>

<style>
	@reference './app.css';

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

	nav {
		box-shadow:
			0px -2px 4px -3px rgba(0, 0, 0, 0.2),
			0px -4px 5px -2px rgba(0, 0, 0, 0.14),
			0px -1px 10px -10px rgba(0, 0, 0, 0.12);
		button {
			@apply border-t-6 border-transparent pt-3.5 pb-4;
			&.active {
				@apply border-yellow-200 font-bold;
			}
		}
	}
</style>
