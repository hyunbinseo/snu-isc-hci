<script lang="ts">
	let isOpen = $state(false);
</script>

<div class="fixed inset-6 flex flex-col-reverse items-end gap-y-4 sm:inset-8">
	<button
		type="button"
		aria-label={!isOpen ? 'Open' : 'Close'}
		onclick={() => (isOpen = !isOpen)}
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
	<!-- TODO Convert this to modal dialog on mobile. -->
	<div
		class={[
			!isOpen && 'hidden',
			'w-full overflow-y-auto shadow-2xl',
			'max-sm:fixed max-sm:inset-0',
			'sm:max-h-160 sm:w-96 sm:flex-1 sm:rounded-3xl',
			'flex flex-col gap-y-8 bg-gray-200 *:bg-white *:p-4',
		]}
	>
		<header class="sticky top-0 flex h-16 shrink-0 items-center justify-end sm:hidden">
			<button type="button" onclick={() => (isOpen = false)}>Close</button>
		</header>
		{#each { length: 10 }}
			<article class="aspect-square">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</article>
		{/each}
		<footer class="flex h-24 shrink-0 items-center justify-center">End of Document</footer>
	</div>
</div>

<style>
	header {
		box-shadow:
			0px 2px 4px -3px rgba(0, 0, 0, 0.2),
			0px 4px 5px -2px rgba(0, 0, 0, 0.14),
			0px 1px 10px -10px rgba(0, 0, 0, 0.12);
	}
</style>
