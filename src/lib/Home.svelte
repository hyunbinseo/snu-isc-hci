<script lang="ts">
	import Card from './Card.svelte';
	import { articles, categories } from './content';
</script>

<ul class="flex flex-col gap-y-0.5 bg-gray-200 py-6">
	{#each categories as category}
		{#each articles[category] as article}
			<Card {article}></Card>
		{/each}
	{/each}
</ul>
