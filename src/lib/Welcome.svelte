<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import { categories, type Category, categoryDescriptions } from './content';

	let {
		categorySet: gCategorySet,
		dialog,
	}: {
		categorySet: Set<Category>;
		dialog: HTMLDialogElement;
	} = $props();

	const minCount = 3;
	let isSelected = $state(false);
	const categorySet = new SvelteSet<Category>();
</script>

{#snippet header(title: string, description?: string)}
	<header class="my-4 tracking-tight">
		<h1 class="text-xl font-bold">{title}</h1>
		<p class="mt-0.5 text-sm">{description}</p>
	</header>
{/snippet}

{#snippet label(category: Category, opts: { checked?: true; disabled?: true } = {})}
	<label>
		<input type="checkbox" value={category} checked={opts.checked} disabled={opts.disabled} />
		<h2>{category}</h2>
		<p>{categoryDescriptions[category]}</p>
	</label>
{/snippet}

<form
	class="flex min-h-full flex-col gap-y-3 p-4"
	onchange={({ target }) => {
		if (!(target instanceof HTMLInputElement && target.type === 'checkbox')) return;
		if (target.checked) {
			categorySet.add(target.value as Category);
		} else {
			categorySet.delete(target.value as Category);
		}
	}}
>
	<div class={!isSelected ? 'contents' : 'hidden'}>
		{@render header(
			categorySet.size < minCount
				? `관심 항목을 ${minCount}개 이상 선택하세요.`
				: '관심 항목을 모두 선택하세요.', //
			'누른 순서대로 먼저 보여드릴게요.',
		)}
		{#each categories as category}
			{#if category !== '기타'}
				{@render label(category)}
			{/if}
		{/each}
		<button
			type="button"
			disabled={categorySet.size < minCount}
			onclick={() => {
				isSelected = true;
				dialog.scrollTop = 0;
			}}
			class="primary mt-auto"
		>
			{categorySet.size < minCount ? '더 골라주세요.' : '다 골랐어요!'}
		</button>
	</div>
	{#if isSelected}
		{@render header(
			'고른 항목을 검토해 주세요.', //
			'다음 순서로 표시됩니다:',
		)}
		{#each categorySet as category}
			{@render label(category, { checked: true, disabled: true })}
		{/each}
		{#each categories as category}
			{#if !categorySet.has(category)}
				{@render label(category, { disabled: true })}
			{/if}
		{/each}
		<nav class="mt-auto flex gap-x-3 pt-4">
			<button
				type="button"
				onclick={() => {
					isSelected = false;
					dialog.scrollTop = 0;
				}}>뒤로가기</button
			>
			<button
				type="button"
				onclick={() => {
					categorySet.forEach((c) => gCategorySet.add(c));
					dialog.scrollTop = 0;
				}}
				class="primary flex-1"
			>
				맞아요! 이대로 보여주세요.
			</button>
		</nav>
	{/if}
</form>

<style>
	@reference './app.css';

	label {
		@apply border-1 border-gray-400 p-3;
		&:has(input:checked) {
			@apply border-blue-600 bg-blue-50;
		}
		> input[type='checkbox'] {
			@apply hidden;
		}
		> h2 {
			@apply font-bold;
		}
		> p {
			@apply text-xs;
		}
	}

	button {
		@apply border px-3.5 py-2 text-center text-sm;
		&.primary {
			@apply border-transparent bg-blue-600 text-white disabled:bg-gray-100 disabled:text-gray-800;
		}
	}
</style>
