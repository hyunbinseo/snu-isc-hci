<script lang="ts">
	import type { SvelteSet } from 'svelte/reactivity';
	import Card from './Card.svelte';
	import { articleMap } from './content';

	let { bookmarkIds }: { bookmarkIds: SvelteSet<string> } = $props();
</script>

{#if !bookmarkIds.size}
	<div class="flex min-h-full flex-col items-center justify-center">
		<h2 class="text-xl font-bold">저장된 항목이 없습니다.</h2>
	</div>
{:else}
	<ul class="min-h-full space-y-0.5 bg-gray-200">
		{#each [...bookmarkIds].reverse() as id}
			{@const article = articleMap.get(id)}
			{#if article}
				<Card {article} isBookmarked={true}></Card>
			{/if}
		{/each}
	</ul>
{/if}
