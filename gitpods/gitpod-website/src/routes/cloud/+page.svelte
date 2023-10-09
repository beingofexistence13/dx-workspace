<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Hero from '$lib/components/cloud/hero-text.svelte';
	import GetStartedGitpodCloud from '$lib/components/cloud/get-started-gitpod-cloud.svelte';
	import { cloudPageFeatures } from '$lib/contents/home/features';
	import SectionFeatures from '$lib/components/section-features.svelte';
	import Explore from '$lib/components/explore.svelte';
	import { integrateFeatures } from '$lib/contents/enterprise';
	import Integrate from '$lib/components/enterprise/integrate.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
	import Section from '$lib/components/section.svelte';
</script>

<OpenGraph
	data={{
		title: 'Gitpod Cloud: CDEs with no installation required',
		keywords:
			'cloud, gitpod, cde, cloud development environment, dev environment, SaaS solution, flexible cloud development environment',
		description:
			"Get started with Gitpod Cloud, our no installation CDE & flexible offering. It's hosted and managed by us and a great solution for teams with less security constraints.",
	}}
/>

<Hero />
<GetStartedGitpodCloud />
<SectionFeatures
	title="CDEs with no installation required"
	features={cloudPageFeatures}
/>
<Integrate features={integrateFeatures} />

<Section>
	<div class="mb-small md:mb-x-medium">
		<div
			class="text-center h4 mb-macro font-bold text-important md:!mb-micro"
		>
			Have additional security requirements?
		</div>
		<p class="text-lg md:text-2xl text-center mx-auto max-w-2xl">
			Gitpod Dedicated is an isolated, single-tenant installation of
			Gitpod CDEs that is hosted within your Cloud environment, and
			managed by us.
		</p>
		<div class="text-center mt-micro md:mt-x-small">
			<LinkButton variant="primary" size="large" href="/dedicated"
				>Learn more about Gitpod Dedicated</LinkButton
			>
		</div>
	</div>
</Section>

<Explore
	contents={{
		title: 'Get started with CDEs',
		description:
			"Gitpod Cloud is our no installation CDE offering. It's hosted and managed by us and a great solution for teams with less security constraints.",
		link: {
			href: 'https://gitpod.io/login',
			text: 'Start for free',
		},
	}}
/>
