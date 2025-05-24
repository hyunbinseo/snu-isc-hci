<script lang="ts">
	let isClicked = $state(false);
</script>

<div class="flex min-h-full flex-col-reverse">
	<nav class="p-3 pb-4.5">
		<button
			type="button"
			onclick={() => (isClicked = true)}
			class="flex w-full items-center justify-between rounded-full bg-gray-100 px-4 py-3"
		>
			<span class="text-sm">검색어를 입력해 주세요.</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>
		</button>
	</nav>
	{#if isClicked}
		<h2 class="flex flex-1 items-center justify-center text-xl font-bold">검색은 준비 중입니다.</h2>
	{/if}
</div>
