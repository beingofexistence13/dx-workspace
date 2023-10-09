<script lang="ts">
	import BlogContentLayout from '$lib/components/blog/blog-content-layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BlogContentLayout featuredPosts={data.featuredPosts} post={data.post}>
	<svelte:component this={data.Component} />
</BlogContentLayout>
