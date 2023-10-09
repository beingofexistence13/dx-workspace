<script lang="ts">
	import { dev } from '$app/environment';
	import Header from '$lib/components/header.svelte';
	import ImageLightDark from '$lib/components/image-light-dark.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import { page } from '$app/stores';

	// Don't remove, useful for debugging in prod/dev
	$: console.error('SK-ERROR', { status: $page.status, error: $page.error });
</script>

<OpenGraph
	data={{
		description: `${$page.status} Oh, no! Something went wrong on our side.`,
		title: 'Page Not Found',
	}}
/>

<Header title={`${$page.status}`}>
	<div slot="content">
		<ImageLightDark
			image={{
				src: '/images/404.png',
				darkSrc: '/images/404-dark.png',
				alt: '404',
			}}
			class="mx-auto w-full max-w-xl mb-xx-small"
		/>

		<p class="mb-micro">
			{$page.status == 404
				? "You just hit a route that doesn't exist"
				: 'Something went wrong'}
		</p>

		<LinkButton variant="primary" size="large" href="/">
			Back to safety
		</LinkButton>

		{#if dev}
			<p class="mt-x-small">{$page.error.message}</p>
		{/if}
	</div>
</Header>
