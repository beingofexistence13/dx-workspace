<script lang="ts">
	import {
		programBenefits,
		cards,
		exploreContents,
		features,
	} from '$lib/contents/opensource';

	import SectionFeatures from '$lib/components/section-features.svelte';
	import ProgramBenefits from '$lib/components/program-benefits.svelte';
	import Eligibility from '$lib/components/eligibility.svelte';
	import Faqs from '$lib/components/opensource/faqs.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import SectionCommon from '$lib/components/section-common.svelte';
	import Explore from '$lib/components/explore.svelte';
	import ActionsSpeakLouderThanWords from '$lib/components/opensource/towards-a-maintainer-economy.svelte';
	import CardSmall from '$lib/components/card/card-small.svelte';
	import Header from '$lib/components/header.svelte';
	import Quotes from '$lib/components/quotes.svelte';
	import ButtonsWrapper from '$lib/components/buttons-wrapper.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import { quotes } from '$lib/contents/opensource';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		description:
			"Gitpod's Open Source Program provides 2,500 credits to open source project maintainers. Spend less time reviewing pull requests and onboarding contributors with CDEs.",
		title: 'Gitpod CDE Open Source Program',
	}}
/>

<Header
	title="CDE Open Source Program"
	text="Gitpod's Open Source Program provides Gitpod Cloud users with 2,500 credits per month of free CDE usage."
	textClassNames="text-large max-w-5xl mx-auto"
	fullWidth={true}
>
	<div slot="content">
		<ButtonsWrapper class="mt-micro md:mt-x-small mb-medium justify-center">
			<LinkButton
				variant="primary"
				size="large"
				href="https://bit.ly/gitpod-for-opensource-application-form"
				>Apply now</LinkButton
			>
			<LinkButton variant="cta" size="large" href="/cloud"
				>Learn more about Gitpod Cloud</LinkButton
			>
		</ButtonsWrapper>
		<Quotes {quotes} />
	</div>
</Header>

<SectionFeatures
	title="Always ready-to-code"
	text="CDEs are on-demand and pre-configured with all tools, libraries and dependencies you need."
	{features}
/>

<ProgramBenefits cards={programBenefits} />

<Eligibility
	text="To qualify for Gitpod’s startup program, meet one of these criteria:"
	list={[
		'You are a maintainer, core contributor to a well-established open-source project.',
		'You are an author, core contributor of extensions for editors such as VS Code, VIM, eMacs, et al. or of developer tools such as build systems, programming languages, compilers, and editor tooling such as Language Server Protocol (LSP) implementations.',
		'A significant part of your income is from maintaining or producing open-source work.',
	]}
	link={{
		href: 'https://docs.google.com/forms/d/1TE0YGgnUpHxQIH-2Sibn4LldB2ZLlhc_nQo90bJya3w/viewform?edit_requested=true',
		text: 'Apply now',
	}}
	ulMaxWidth="638px"
/>

<Faqs />

<SectionCommon
	title="Open source is in our DNA"
	text="Gitpod is open source and so are all the tools we develop and contribute to."
>
	<div
		class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
		slot="content"
	>
		{#each cards as card}
			<CardSmall
				class="m-macro px-xx-small"
				{card}
				titleClassNames="h5"
			/>
		{/each}
	</div>
</SectionCommon>

<ActionsSpeakLouderThanWords posts={data.featuredPosts} />

<Explore contents={exploreContents} />
