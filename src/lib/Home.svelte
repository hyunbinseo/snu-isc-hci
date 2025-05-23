<script lang="ts">
	import Card from './Card.svelte';
	import { articles, categories, categoryDescriptions } from './content';
</script>

<div class="flex min-h-full flex-col gap-y-4 bg-gray-200">
	{#each categories as category, index}
		{@const description = categoryDescriptions[category]}
		<details open={index < 3}>
			<summary>
				<h2>{category}</h2>
				<p>{description}</p>
			</summary>
			<ul class="flex flex-col gap-y-0.5">
				{#each articles[category] as article}
					<li id={article.id}>
						<Card {article}></Card>
					</li>
				{/each}
			</ul>
		</details>
	{/each}
	<button class="mx-auto my-8 w-fit rounded-full bg-white px-4 py-2 shadow">
		모두 읽음 처리
	</button>
	<nav
		class="sticky bottom-0 mt-auto flex justify-center gap-x-10 rounded-t-xl bg-white/75 px-6 backdrop-blur select-none"
	>
		<form method="dialog" class="contents">
			<button type="button" class="active">소식</button>
			<button type="button">보관함</button>
			<button type="button">검색</button>
			<button class="ml-auto sm:hidden">닫기</button>
		</form>
	</nav>
</div>

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
	nav {
		box-shadow:
			0px -2px 4px -3px rgba(0, 0, 0, 0.2),
			0px -4px 5px -2px rgba(0, 0, 0, 0.14),
			0px -1px 10px -10px rgba(0, 0, 0, 0.12);
		button {
			@apply border-t-6 border-transparent pt-3.5 pb-4;
			&.active {
				@apply border-yellow-200 font-bold;
			}
		}
	}
</style>
