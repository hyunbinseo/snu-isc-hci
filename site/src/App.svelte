<script lang="ts">
	import './app.css';
	import Cards from './lib/Cards.svelte';

	const tabIds = ['home', 'all'] as const;
	type TabId = (typeof tabIds)[number];

	let activeTabId = $state<TabId>(tabIds[0]);

	const setTabId = (e: { currentTarget: HTMLButtonElement }) => {
		activeTabId = e.currentTarget.value as TabId;
	};

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
	<nav class="sticky top-0 flex h-12 bg-white *:flex *:items-center *:justify-center *:px-6">
		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each tabIds as tabId}
			<button
				type="button"
				onclick={setTabId}
				value={tabId}
				class={['flex-1 capitalize', activeTabId === tabId && 'bg-blue-700 text-white']}
				>{tabId}</button
			>
		{/each}
		<button type="button" onclick={close} class="sm:hidden">Close</button>
	</nav>
	<Cards
		text={activeTabId === 'home'
			? '대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다.'
			: '국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.'}
	></Cards>
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
