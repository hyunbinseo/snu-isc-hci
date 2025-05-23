<script lang="ts">
	import type { Article } from './content';

	let { article }: { article: Article } = $props();
</script>

<label>
	<input type="checkbox" />
	<div>
		<p>{[article.keyword, article.sender].filter(Boolean).join(' / ')}</p>
		<h3>{article.title}</h3>
		<p>{article.detail}</p>
		<p>{article.at}</p>
	</div>
	{#if article.image !== false}
		<!-- svelte-ignore a11y_missing_attribute -->
		<img draggable="false" src="/{article.id}.avif" />
	{/if}
</label>

<style>
	@reference './app.css';

	label {
		> input[type='checkbox'] {
			@apply hidden;
		}
		@apply bg-white text-left break-keep select-none;
		&:has(input:not(:checked)) {
			@apply flex h-36;
			> img {
				@apply aspect-[3/4] h-full shrink-0 object-cover object-top-left;
			}
		}
		&:has(input:checked) {
			@apply flex flex-col;
			> div {
				@apply sticky top-10 bg-white;
			}
			> img {
				@apply w-full;
			}
		}
		> div {
			@apply flex w-full flex-col overflow-x-hidden p-3;
			> h3 {
				@apply mt-0.5 mb-3.5 line-clamp-2 text-[17px]/tight font-bold text-balance;
			}
			> p {
				@apply truncate text-xs;
			}
			> :last-child {
				@apply mt-auto;
			}
		}
	}
</style>
