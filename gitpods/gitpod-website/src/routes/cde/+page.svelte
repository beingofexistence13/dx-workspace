<script lang="ts">
	import Explore from '$lib/components/explore.svelte';
	import Whitepaper from '$lib/components/cde/whitepaper.svelte';
	import ChooseProject from '$lib/components/index/choose-project.svelte';
	import SectionScreenshot from '$lib/components/index/section-ides.svelte';
	import Titles from '$lib/components/cde/titles.svelte';
	import IntegrateDontDictate from '$lib/components/index/integrate-dont-dictate.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Hero from '$lib/components/cde/hero.svelte';
	import GartnerReport from '$lib/components/cde/gartner-report.svelte';
</script>

<OpenGraph
	data={{
		title: 'CDEs: Cloud Development Environments by Gitpod',
		description:
			'CDEs are on-demand and pre-configured with all tools, libraries and dependencies required to be ready-to-code.',
	}}
/>
<Hero />
<Titles />
<GartnerReport />
<IntegrateDontDictate class="py-small" />
<div id="choose-project-observer-target-top" />
<ChooseProject />
<div id="choose-project-observer-target-bottom">
	<SectionScreenshot />
</div>
<Whitepaper />
<Explore
	contents={{
		title: 'Open a workspace today',
		description:
			'Spin up a pre-configured development environment in seconds.',
	}}
/>
