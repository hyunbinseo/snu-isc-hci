<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import '../app.css';

	afterNavigate(() => (dialog.scrollTop = 0));
	onMount(() => goto('#/'));

	let { children } = $props();

	let dialog: HTMLDialogElement;
	let isOpen = $state(false);

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

	const close = () => {
		isOpen = false;
		dialog.close();
	};
</script>

<svelte:window
	onresize={() => {
		if (isOpen) open();
	}}
/>

<div class="fixed inset-6 flex flex-col-reverse items-end gap-y-4">
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
	oncancel={close}
	class="max-h-full max-w-full overflow-y-auto bg-gray-200 max-sm:w-full sm:right-6 sm:bottom-26 sm:ml-auto sm:h-160 sm:max-h-[calc(100%-var(--spacing)*32)] sm:w-96 sm:rounded-3xl sm:shadow-2xl"
>
	<form method="dialog" onsubmit={close} class="contents">
		<nav class="sticky top-0 flex h-12 bg-white *:flex *:items-center *:justify-center *:px-6">
			<!-- eslint-disable-next-line svelte/require-each-key -->
			{#each [['#/', 'Home'], ['#/all', 'All']] as [href, label]}
				{@const isActive = page.url.hash === href}
				<a class={['flex-1', isActive && 'bg-blue-700 text-white']} {href}>{label}</a>
			{/each}
			<button class="sm:hidden">Close</button>
		</nav>
		{@render children()}
	</form>
</dialog>

<style>
	nav {
		box-shadow:
			0px 2px 4px -3px rgba(0, 0, 0, 0.2),
			0px 4px 5px -2px rgba(0, 0, 0, 0.14),
			0px 1px 10px -10px rgba(0, 0, 0, 0.12);
	}

	dialog[open] {
		translate: 0 0;
	}

	dialog[open],
	dialog[open]::backdrop {
		opacity: 1;
	}

	@starting-style {
		dialog[open] {
			translate: 0 2rem;
		}

		dialog[open],
		dialog[open]::backdrop {
			opacity: 0;
		}
	}

	dialog,
	dialog::backdrop {
		opacity: 0;
		transition-duration: 0.5s;
		transition-property: opacity, translate;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@supports (transition-behavior: allow-discrete) and (overlay: auto) {
		dialog,
		dialog::backdrop {
			transition-behavior: allow-discrete;
			transition-property: opacity, translate, display, overlay;
		}
	}
</style>
