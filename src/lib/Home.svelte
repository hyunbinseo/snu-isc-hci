<script lang="ts">
	import Card from './Card.svelte';
	import { articles, categories, type Category, categoryDescriptions } from './content';

	let {
		bookmarkSet,
		categorySet,
	}: {
		bookmarkSet: Set<string>;
		categorySet: Set<Category>;
	} = $props();

	let isInboxZero = $state(false);
</script>

{#snippet details(category: Category, open?: true)}
	<details {open}>
		<summary>
			<h2>{category}</h2>
			<p>{categoryDescriptions[category]}</p>
		</summary>
		<ul class="space-y-0.5">
			{#each articles[category] as article}
				{@const isBookmarked = bookmarkSet.has(article.id)}
				<Card {article} {isBookmarked}></Card>
			{/each}
		</ul>
	</details>
{/snippet}

{#if isInboxZero}
	<div class="flex min-h-full flex-col items-center justify-center">
		<!-- https://icons.pqoqubbw.dev/ -->
		<svg
			name="thumbs-up"
			xmlns="http://www.w3.org/2000/svg"
			class="size-24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="black"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M7 10v12" />
			<path
				d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
			/>
		</svg>
		<h2 class="mt-6 text-xl font-bold">텅- 비었어요!</h2>
		<button
			type="button"
			onclick={() => (isInboxZero = false)}
			class="mt-2 text-sm text-blue-600 underline underline-offset-4">잘못 눌렀어요.</button
		>
	</div>
{:else}
	<div class="flex min-h-full flex-col gap-y-4 bg-gray-200 pb-4">
		{#each categorySet as category}
			{@render details(category, true)}
		{/each}
		{#each categories as category}
			{#if !categorySet.has(category)}
				{@render details(category)}
			{/if}
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

	ul > :global(*) {
		--card-sticky-top: calc(var(--spacing) * 10);
	}

	svg[name='thumbs-up'] {
		transform: translate(-1px, -2px) rotate(-12deg);
		animation: thumbs-up 2s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes thumbs-up {
		0%,
		100% {
			transform: translate(-1px, -2px) rotate(-12deg);
		}
		50% {
			transform: translate(0, 0) rotate(0deg);
		}
	}

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
