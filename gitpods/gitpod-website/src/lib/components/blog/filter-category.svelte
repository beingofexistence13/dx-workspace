<script lang="ts">
	import type { BlogTag } from '$lib/types/blog';
	import Button from '$lib/components/ui-library/button/button.svelte';
	export let selected: BlogTag;
	let className = '';
	export { className as class };
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let options: BlogTag[] = [
		'Company building',
		'Engineering',
		'Gitpod updates',
		'Developer experience',
	];

	const clickHandler = (value: BlogTag) => {
		if (value === selected) {
			goto(`/blog`, { keepFocus: true, noScroll: true });
			selected = '';
			return;
		}
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('tag', value);
		goto(`?${query.toString()}`, { keepFocus: true, noScroll: true });
		selected = value;
	};
</script>

<section class="flex justify-center flex-col items-center {className}">
	<p class="font-semibold text-important mb-macro md:mb-micro">
		Sort by category
	</p>
	<ul class="flex flex-wrap justify-center gap-macro">
		{#each options as option}
			<li>
				<Button
					class={option === selected
						? 'dark:!bg-primary dark:!text-black !bg-black !text-white'
						: ''}
					variant="cta"
					size="medium"
					on:click={() => clickHandler(option)}
				>
					{option}
				</Button>
			</li>
		{/each}
	</ul>
</section>
