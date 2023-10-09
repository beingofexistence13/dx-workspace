<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import PostPreview from '$lib/components/blog/post-preview.svelte';
	import Section from '$lib/components/section.svelte';
	import Header from '$lib/components/header.svelte';
	import FilterCategory from '$lib/components/blog/filter-category.svelte';
	import type { PageData } from './$types';
	import type { BlogTag } from '$lib/types/blog';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data: PageData;

	let filter: BlogTag | null = null;

	$: posts = data.posts.filter((post) =>
		filter ? post.tags?.includes(filter) : true,
	);

	onMount(() => {
		const tagParam = $page.url.searchParams.get('tag');

		if (!filter && typeof tagParam == 'string') {
			filter = tagParam as BlogTag;
		}
	});

	const displayAmount = 12;
</script>

<div class="blog-layout">
	<OpenGraph
		data={{
			description:
				'The latest news, articles, and opinions around developer experience and remote development in the cloud.',
			title: 'Gitpod Blog - News, ideas and background stories',
			keywords: 'blog, tutorial, news, articles',
		}}
	/>

	<Header
		title="Blog"
		text="The latest news, articles, and opinions around developer <br class='hidden sm:block'/>experience and remote development in the cloud."
		fullWidth={true}
		textClassNames="mb-small text-large"
	>
		<div slot="content">
			<FilterCategory
				class="mb-micro md:mb-x-small"
				bind:selected={filter}
			/>
			<div
				class="grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
			>
				{#each posts.slice(0, displayAmount) as post}
					<div class="flex justify-center min-w-[20rem] max-w-sm">
						<PostPreview {post} type="blog" isMostRecent />
					</div>
				{/each}
			</div>
		</div>
	</Header>

	{#if posts.slice(displayAmount).length > 0}
		<Section>
			<h2 class="mb-small text-center">Previous posts</h2>
			<div
				class="previous grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
			>
				{#each posts.slice(displayAmount) as post}
					<div class="flex justify-center min-w-[20rem] max-w-sm">
						<PostPreview {post} type="blog" />
					</div>
				{/each}
			</div>
		</Section>
	{/if}
</div>

<style lang="postcss">
	.blog-layout {
		@apply mb-xxx-large;

		@media (max-width: 972px) {
			@apply mb-x-large;
		}
	}
</style>
