<script lang="ts">
	import type { Article } from './content';

	let { article, isBookmarked }: { article: Article; isBookmarked: boolean } = $props();

	const images = import.meta.glob<string>('./images/**.avif', { query: '?url', import: 'default' });

	const bodyPromise = import('./bodies.json').then((m) => {
		const json = m.default as Partial<Record<string, string>>;
		const body = json[article.id];
		if (!body) throw new Error();
		return body;
	});
</script>

{#snippet image()}
	{#if article.image !== false}
		{#await images[`./images/${article.id}.avif`]() then src}
			<!-- svelte-ignore a11y_missing_attribute -->
			<img draggable="false" {src} />
		{/await}
	{/if}
{/snippet}

<li>
	<details>
		<summary>
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
			{@render image()}
		</summary>
		{@render image()}
		{#await bodyPromise then body}
			<p>{body}</p>
		{:catch}
			<!-- Avoid Uncaught (in promise) Error: -->
		{/await}
		{#if article.url}
			<nav>
				<a href={article.url} target="_blank">더 알아보기</a>
			</nav>
		{/if}
	</details>
</li>

<style>
	@reference './app.css';

	details {
		@apply relative bg-white text-left break-keep select-none;
		> summary {
			@apply flex h-36;
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
				> p:last-child {
					@apply mt-auto;
				}
			}
			> img {
				@apply block aspect-[3/4] h-full shrink-0 object-cover object-top-left;
			}
		}
		&:open {
			@apply m-3.5 flex flex-col;
			summary {
				@apply sticky top-(--card-sticky-top,0) h-auto border-b-2 border-gray-200 bg-white;
				> img {
					@apply hidden;
				}
			}
		}
		> p {
			@apply p-4 text-xs whitespace-pre-line;
		}
		> nav {
			@apply flex flex-col p-4;
			> a {
				@apply rounded bg-blue-600 p-2 text-center text-sm text-white;
			}
		}
		> p + nav {
			@apply pt-0;
		}
	}
</style>
