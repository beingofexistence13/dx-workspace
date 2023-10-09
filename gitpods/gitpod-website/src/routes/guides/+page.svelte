<script lang="ts">
	import PostPreview from '$lib/components/blog/post-preview.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Write from '$lib/components/guides/write.svelte';
	import Header from '$lib/components/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: gitpodifyGuide = data.guides.find(({ slug }) => slug == 'gitpodify');
</script>

<OpenGraph
	data={{
		description:
			'Use these guides to get started with Gitpod CDEs in any project',
		title: 'Gitpod Guides',
	}}
/>

<Header
	title="Guides"
	text="Use these guides to get started with Gitpod CDEs in any project"
	tight
/>

<div
	class="grid justify-items-center grid-cols-1 md:grid-cols-2 max-w-4xl m-auto lg:max-w-full lg:grid-cols-1 gap-xx-small"
>
	<!-- Pin Guide which has a slug "gitpodify" to the top and then show rest each of the other guides. -->
	{#if gitpodifyGuide}
		<PostPreview
			post={gitpodifyGuide}
			layout="row"
			type="guides"
			isMostRecent
		/>
	{/if}

	{#each data.guides.filter((guide) => guide.slug !== 'gitpodify') as guide}
		<PostPreview post={guide} layout="row" type="guides" isMostRecent />
	{/each}
</div>

<Write />
