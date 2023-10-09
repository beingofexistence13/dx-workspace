<script lang="ts">
	import MoreCustomersStories from './more-customers-stories.svelte';
	import type { Customer } from '$content/customers';
	import OpenGraph from '../open-graph.svelte';
	import Share from '../share.svelte';

	const baseUrl = 'https://www.gitpod.io/customers/';

	export let slug: string;
	export let title: string;
	export let pageTitle: string;
	export let pageDescription: string;
	export let keywords: string;
	export let image: string;
	export let norobots = false;
	export let customers: Customer[];

	const shareLinks = [
		{
			href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
				`${title} ${baseUrl}${slug}`,
			)}`,
			icon: {
				src: '/svg/brands/twitter.svg',
				alt: 'Twitter',
			},
			trackingName: 'twitter',
		},
		{
			href: `https://www.reddit.com/submit?url=${encodeURIComponent(
				`${baseUrl}${slug}&title=${title}`,
			)}`,
			icon: {
				src: '/svg/brands/reddit.svg',
				alt: 'Reddit',
			},
			trackingName: 'reddit',
		},
		{
			href: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
				`${baseUrl}${slug}`,
			)}&t=${encodeURIComponent(title)}`,
			icon: {
				src: '/svg/brands/hackernews.svg',
				alt: 'HackerNews',
			},
			trackingName: 'hackernews',
		},
	];
</script>

<OpenGraph
	data={{
		title: pageTitle,
		keywords,
		description: pageDescription,
		type: 'article',
		image: `images/customers/${slug}/${image}`,
		imageTwitter: `images/customers/${slug}/${image}`,
		norobots,
	}}
/>

<slot />

<div class="max-w-3xl mx-auto">
	<Share
		text="Share this story"
		{shareLinks}
		class="border-t border-solid border-divider pt-xx-small md:pt-micro mt-small"
	/>
</div>

<MoreCustomersStories {customers} />
