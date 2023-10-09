<script lang="ts">
	import Newsletter from '$lib/components/forms/newsletter.svelte';
	import PostContentLayout from '../post-content-layout.svelte';
	import FeedbackWidget from '../docs/feedback-widget.svelte';
	import DigestHeader from './digest-header.svelte';
	import type { BlogPost } from '$lib/types/blog';
	import MoreArticles from '../more-articles.svelte';

	export let post: BlogPost;
	export let featuredPosts: BlogPost[];
</script>

<PostContentLayout
	{...post}
	imagesDirectoryName="blog"
	baseUrl="https://www.gitpod.io/blog/"
>
	<slot />

	{#if post.type === 'digest'}
		<DigestHeader />
	{/if}
</PostContentLayout>

{#if post.type === 'digest'}
	<FeedbackWidget class="mt-large mb-huge" type="digests" />
{/if}

<MoreArticles posts={featuredPosts} />

<Newsletter
	title="Stay in the loop"
	description="Get a weekly email with our latest thinking, news, and insights."
/>
