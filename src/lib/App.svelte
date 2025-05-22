<script lang="ts">
	import './app.css';

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
	oncancel={close}
	class="z-10 max-h-full max-w-full overflow-y-auto bg-gray-200 max-sm:w-full sm:fixed sm:right-6 sm:bottom-26 sm:mt-auto sm:ml-auto sm:h-160 sm:max-h-[calc(100%-var(--spacing)*32)] sm:w-96 sm:rounded-3xl sm:shadow-2xl"
>
	<!-- TODO -->
</dialog>

<style>
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
