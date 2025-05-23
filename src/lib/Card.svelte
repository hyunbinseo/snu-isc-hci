<script lang="ts">
	import type { Article } from './content';

	let { article }: { article: Article } = $props();
</script>

<li id={article.id}>
	<div>
		<p>{[article.keyword, article.sender].filter(Boolean).join(' / ')}</p>
		<h2>{article.title}</h2>
		<p>{article.detail}</p>
		<p>{article.at}</p>
	</div>
	{#if article.image !== false}
		<!-- svelte-ignore a11y_missing_attribute -->
		<img draggable="false" src="/{article.id}.avif" />
	{/if}
</li>

<style>
	@reference './app.css';

	li {
		@apply flex h-36 bg-white break-keep;
		> div:first-child {
			@apply flex w-full flex-col overflow-x-hidden p-3;
			> h2 {
				@apply mt-0.5 mb-3.5 line-clamp-2 text-[17px]/tight font-bold text-balance;
			}
			> p {
				@apply truncate text-xs;
			}
			> :last-child {
				@apply mt-auto;
			}
		}
		> img:last-child {
			@apply aspect-[3/4] h-full shrink-0 object-cover object-top-left;
		}
	}
</style>
