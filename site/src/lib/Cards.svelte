<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div class="mt-4 flex flex-col gap-y-4 *:bg-white *:p-4 *:pb-32">
	{#each { length: 10 }}
		<article>{text}</article>
	{/each}
</div>
<footer class="flex h-24 items-center justify-center">End of Document</footer>
