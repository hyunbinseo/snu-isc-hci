<script lang="ts">
	let { text, show }: { text: string; show: boolean } = $props();
</script>

<div class={show ? 'contents' : 'hidden'}>
	<div class="mt-4 flex flex-col gap-y-4 *:bg-white *:p-4 *:pb-32">
		{#each { length: 10 }, index}
			<article>{index + 1}. {text}</article>
		{/each}
	</div>
	<footer class="flex h-24 items-center justify-center">End of Document</footer>
</div>
