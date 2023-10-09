<script lang="ts">
	import MoreArticles from '$lib/components/more-articles.svelte';
	import Explore from '$lib/components/explore.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<link rel="preload" as="image" href="/images/illustration-crop.png" />
	<link rel="preload" as="image" href="/images/illustration-crop-dark.png" />
</svelte:head>

<slot />

<MoreArticles
	title="Additional resources"
	text="If you are curious to learn more on remote development, have a read through these blog posts."
	textMaxW="max-w-2xl"
	posts={data.featuredPosts}
/>

<Explore contents={{ title: 'Try it out' }} />
