<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import ImageLightDark from '$lib/components/image-light-dark.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
</script>

<OpenGraph
	data={{
		norobots: true,
		description: '404 Oh, no! Something went wrong on our side.',
		title: 'Page Not Found',
	}}
/>

<Header>
	<div slot="content">
		<ImageLightDark
			image={{
				src: '/images/404.png',
				darkSrc: '/images/404-dark.png',
				alt: '404',
			}}
			class="mx-auto w-full max-w-xl mb-xx-small"
		/>
		<p class="mb-micro">You just hit a route that doesn't exist</p>
		<LinkButton variant="primary" size="large" href="/"
			>Back to safety</LinkButton
		>
	</div>
</Header>
