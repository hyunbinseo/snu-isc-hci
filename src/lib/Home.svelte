<script lang="ts">
	import type { SvelteSet } from 'svelte/reactivity';
	import Card from './Card.svelte';
	import { articles, categories, categoryDescriptions } from './content';

	let { bookmarkIds }: { bookmarkIds: SvelteSet<string> } = $props();
	let isInboxZero = $state(false);
</script>

{#if isInboxZero}
	<div class="flex min-h-full flex-col items-center justify-center gap-y-2">
		<h2 class="text-xl font-bold">텅- 비었어요!</h2>
		<button
			type="button"
			onclick={() => (isInboxZero = false)}
			class="text-sm text-blue-600 underline underline-offset-4">잘못 눌렀어요.</button
		>
	</div>
{:else}
	<div class="flex min-h-full flex-col gap-y-4 bg-gray-200 pb-4">
		{#each categories as category, index}
			{@const description = categoryDescriptions[category]}
			<details open={index < 3}>
				<summary>
					<h2>{category}</h2>
					<p>{description}</p>
				</summary>
				<ul class="flex flex-col gap-y-0.5">
					{#each articles[category] as article}
						{@const isBookmarked = bookmarkIds.has(article.id)}
						<Card {article} {isBookmarked}></Card>
					{/each}
				</ul>
			</details>
		{/each}
		<button
			type="button"
			onclick={() => (isInboxZero = true)}
			class="mx-auto my-6 w-fit rounded-full bg-white px-4 py-2 shadow"
		>
			모두 읽음 처리
		</button>
	</div>
{/if}

<style>
	@reference './app.css';

	details {
		> summary {
			@apply sticky top-0 z-10 bg-white px-2 py-3 select-none;
			> h2 {
				@apply inline font-bold;
			}
			> p {
				@apply ml-3.5 text-xs text-gray-700;
			}
		}
		&[open] > summary {
			@apply h-10 border-b-2 border-gray-200 py-0 text-center leading-10;
			> p {
				@apply hidden;
			}
		}
		&:not([open]) > summary > h2::after {
			content: '\20*';
			@apply text-red-700;
		}
	}
</style>
