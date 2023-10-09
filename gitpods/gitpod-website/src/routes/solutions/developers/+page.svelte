<script lang="ts">
	import { developersFeatures } from '$lib/contents/home/features';
	import { testimonials } from '$lib/contents/home/index';
	import Testimonials from '$lib/components/index/testimonials.svelte';
	import SectionFeatures from '$lib/components/section-features.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import Quote from '$lib/components/solutions/quote.svelte';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import Explore from '$lib/components/explore.svelte';
	import IntegrateDontDictate from '$lib/components/index/integrate-dont-dictate.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Learn how cloud development environments can help developers work more efficiently with Gitpod',
		title: 'Solution: How CDEs help developers - Gitpod',
		keywords:
			'cloud development environment, cde, remote development, developer experience, automation, developers, secure developer environment',
	}}
/>

<div class="flex flex-col lg:flex-row lg:pt-x-large">
	<div
		class="items-center justify-between max-w-7xl py-micro md:py-xx-large mx-auto my-macro"
	>
		<h2 class="h1 !mb-micro md:!mb-x-small max-w-2xl">
			Extensible and fast, development.
		</h2>
		<p class="text-large max-w-md mb-xx-small">
			Develop quickly, and more securely, regardless of task.
		</p>
	</div>
	<Quote
		quote="With Gitpod, I can review any PR in a coding environment where I can edit, build and test the contribution, by just prepending <span class='text-dark-grey inline-block px-micro mt-macro bg-tertiary rounded-xl justify-center text-lg font-normal'><code>gitpod.io/#</code></span>"
		author={{
			name: 'Johannes Schickling',
			jobTitle: 'Co-founder at Prisma',
		}}
		svgClazz="h-20 w-20"
	/>
</div>
<div class="mt-xx-large sm:mt-xxx-large mb-xx-large sm:mb-0">
	<AnimatedLogos title="Empowering 1M+ developers" />
</div>
<SectionFeatures
	title="More time building, less time troubleshooting"
	features={developersFeatures}
/>

<IntegrateDontDictate
	class="py-small"
	title="Customize your development experience"
/>

<Section>
	<Testimonials
		title="Empowering the most productive developers"
		class="-mb-20"
		{testimonials}
	/>
</Section>
<Explore />
