<script>
	import { exploreContents } from '$lib/contents/startups';

	import Explore from '$lib/components/explore.svelte';
	import Find from '$lib/components/startups/find.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Header from '$lib/components/header.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
</script>

<OpenGraph
	data={{
		title: 'Approved Organisations | Gitpod for Startups',
		description:
			'If your startup is affiliated with a Gitpod approved VC, incubator or accelerator we will extend the Gitpod startup program from 1 year to 2 years.',
	}}
/>

<Header
	title="Approved Organisations"
	text="If your startup is affiliated with a Gitpod approved VC, incubator or
  accelerator we will extend the Gitpod startup program from 1 year to 2
  years."
>
	<LinkButton
		slot="content"
		href="/discover/startups"
		class="mt-x-small"
		variant="primary"
		size="large">View Startup program</LinkButton
	>
</Header>

<Find />

<Explore contents={exploreContents} />
