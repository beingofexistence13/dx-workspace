<script lang="ts">
	import PreviousKubecons from '$lib/components/events/previous-kubecons.svelte';
	import OurBooth from '$lib/components/events/kubecon-amsterdam/our-booth.svelte';
	import Header from '$lib/components/events/kubecon-amsterdam/header.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Explore from '$lib/components/explore.svelte';
</script>

<OpenGraph
	data={{
		title: 'Meet Gitpod at KubeCon EU in Amsterdam',
		description: 'Meet Gitpod at KubeCon EU in Amsterdam',
	}}
/>

<div class="flex flex-col items-center">
	<Header />
	<OurBooth />
	<PreviousKubecons />
	<Explore
		contents={{
			title: 'Get started for free',
			description:
				'Spin up a pre-configured development environments in seconds.',
		}}
	/>
</div>
