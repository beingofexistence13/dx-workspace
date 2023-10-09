<script lang="ts">
	import CalloutCard from '$lib/components/card/callout-card.svelte';
	import Header from '$lib/components/header.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
</script>

<OpenGraph
	data={{
		description: 'Request a free community license',
		title: 'Community License',
		norobots: true,
	}}
/>

<Header>
	<div slot="content">
		<h1 class="h2">Signup for Gitpod Dedicated</h1>
		<p class="text-large max-w-xl !mb-0 text-center mx-auto">
			Built for developers, trusted by enterprise.
		</p>
		<LinkButton
			variant="primary"
			size="large"
			href="/contact/sales?subject=enterprise"
			slot="content"
			class="mt-x-small">Talk to sales</LinkButton
		>
	</div>
</Header>

<Header tight={true}>
	<div slot="content">
		<h1 class="h3">Download the license file</h1>
	</div>
</Header>

<CalloutCard class="text-black text-p-small max-w-xl gap-small mx-auto my-8">
	<p>
		The last update of Gitpod Self-hosted product was
		<a href="/changelog/november-self-hosted-release">November 2022</a>.
		Users can still request our
		<a href="/community-license">free community license</a>
		however there will be no support or updates to the product. If you are interested
		in an isolated, private installation of Gitpod, take a look at
		<a href="/dedicated">Gitpod Dedicated</a>.
		<br />
		<br />
		Read
		<a
			class="dark:hover:text-black !underline"
			href="/blog/introducing-gitpod-dedicated"
			>our blog on Gitpod Dedicated</a
		> to learn why we made the decision to discontinue self-hosted.
	</p>
</CalloutCard>

<Header
	title=""
	text="The file needs to be uploaded during the installation process.<br class='hidden sm:block' />View our <a href='/docs/configure/self-hosted/latest'>getting started</a> guides for instructions how to do so."
>
	<LinkButton
		variant="primary"
		size="large"
		href="/Community.yaml"
		download="Community.yaml"
		slot="content"
		class="mt-x-small"
	>
		Download
	</LinkButton>
</Header>
