<script lang="ts">
	import { testimonials } from '$lib/contents/home/index';
	import { features, otherFeatures } from '$lib/contents/home/features';

	import Section from '$lib/components/section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import Features from '$lib/components/features.svelte';
	import ChooseProject from '$lib/components/index/choose-project.svelte';
	import Hero from '$lib/components/index/hero.svelte';
	import SectionScreenshot from '$lib/components/index/section-ides.svelte';
	import Testimonials from '$lib/components/index/testimonials.svelte';
	import GetStarted from '$lib/components/index/get-started/index.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import Titles from '$lib/components/index/titles.svelte';
	import Newsletter from '$lib/components/forms/newsletter.svelte';
	import IntegrateDontDictate from '$lib/components/index/integrate-dont-dictate.svelte';
</script>

<OpenGraph
	data={{
		description:
			"Gitpod is a cloud development environment for teams to efficiently and securely develop software. Improve your team's developer experience by coding in a CDE.",
		title: 'Gitpod: Always ready-to-code.',
		keywords:
			'cloud dev environment, cde, remote development, open-source, integration, coding, developer experience, automation',
	}}
/>

<svelte:head>
	<!-- Preloading the IDE screenshots so that the IDE switcher works swiftly -->
	<link rel="preload" as="image" href="/images/index/vscode-desktop.webp" />
	<link rel="preload" as="image" href="/images/index/vscode-browser.webp" />
	<link rel="preload" as="image" href="/images/index/Intellij.webp" />
	<link rel="preload" as="image" href="/images/index/goland.webp" />
	<link rel="preload" as="image" href="/images/index/pycharm.webp" />
	<link rel="preload" as="image" href="/images/index/phpstorm.webp" />
	<link rel="preload" as="image" href="/images/index/rubymine.webp" />
	<link rel="preload" as="image" href="/images/index/vim.webp" />
	<link rel="preload" as="image" href="/images/index/webstorm.webp" />
	<link rel="preload" as="image" href="/images/index/rider.webp" />

	<!-- Preload Top Most (Hero) Images -->
	<link rel="preload" as="image" href="/images/illustration-large.webp" />
	<link
		rel="preload"
		as="image"
		href="/images/illustrattion-large-dark.webp"
	/>
</svelte:head>

<Hero />
<AnimatedLogos />
<Titles cardContainsLinks={true} />
<ChooseProject />
<div id="choose-project-observer-target-bottom">
	<SectionScreenshot />
</div>
<Section
	class="translate-y-6 md:translate-y-[5.5rem] items-center mx-auto w-full md:w-11/12"
>
	<h3 class="text-left sm:text-center text-2xl sm:text-5xl font-bold">
		What's a cloud development environment?
	</h3>
	<p
		class="text-left sm:text-center text-lg sm:text-2xl my-micro mx-auto max-w-4xl"
	>
		CDEs are on-demand development environments that are pre-configured with
		all tools, libraries and dependencies needed to write and review code.
	</p>
	<div
		class="text-left md:text-center m-auto mb-x-small space-x-0 md:space-x-2 space-y-2 md:space-y-0 mt-0 md:mt-8"
	>
		<LinkButton variant="primary" size="large" href="/cde"
			>Learn more about CDEs</LinkButton
		>
		<LinkButton variant="gray" size="large" href="https://gitpod.io/login"
			>Start for free</LinkButton
		>
	</div>
</Section>
<Features {features} />
<IntegrateDontDictate class="py-small" />
<Features features={otherFeatures} />
<Testimonials
	title="Trusted by developers globally"
	class="-mb-20"
	{testimonials}
/>
<GetStarted />
