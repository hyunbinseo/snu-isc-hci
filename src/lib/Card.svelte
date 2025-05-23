<script lang="ts">
	import type { Article } from './content';

	let { article, isBookmarked }: { article: Article; isBookmarked: boolean } = $props();
</script>

<li>
	<label>
		<input type="checkbox" />
		<div class={[article.image === false && 'pr-10!']}>
			<button aria-label="북마크" name="bookmark" value={article.id}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill={isBookmarked ? 'yellow' : 'white'}
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
					/>
				</svg>
			</button>
			<p>{[article.keyword, article.sender].filter(Boolean).join(' / ')}</p>
			<h3>{article.title}</h3>
			<p>{article.detail}</p>
			<p>{article.at}</p>
		</div>
		{#if article.image !== false}
			<!-- svelte-ignore a11y_missing_attribute -->
			<img draggable="false" src="/{article.id}.avif" />
		{/if}
		{#if article.url}
			<a href={article.url} target="_blank">더 알아보기</a>
		{/if}
	</label>
</li>

<style>
	@reference './app.css';

	li {
		&:has(input:checked) {
			@apply m-2;
		}
		> label {
			@apply relative bg-white text-left break-keep select-none;
			> input[type='checkbox'] {
				@apply hidden;
			}
			&:has(input:not(:checked)) {
				@apply flex h-36;
				> img {
					@apply aspect-[3/4] h-full shrink-0 object-cover object-top-left;
				}
				> a {
					@apply hidden;
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
				> button {
					@apply absolute top-0 right-0 rounded-bl-xl p-2 backdrop-blur;
					> svg {
						@apply size-6;
					}
				}
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
			> a {
				@apply m-4 rounded bg-blue-600 p-2 text-center text-white hover:bg-blue-700;
			}
		}
	}
</style>
