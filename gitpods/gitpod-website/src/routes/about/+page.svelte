<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import LinkIconExternal from '$lib/components/ui-library/link-icon-external.svelte';
	import FeatureTitles from '$lib/components/feature-titles.svelte';
	import {
		featureTitles,
		imagesBottom,
		imagesTop,
	} from '$lib/contents/about';
	import Quote from '$lib/components/about/quote.svelte';
	import Images from '$lib/components/about/images.svelte';
	import Content from '$lib/components/about/content.svelte';
	import Team from '$lib/components/about/team.svelte';
	import MoreArticles from '$lib/components/more-articles.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		description:
			"Open source developer platform. Originally from Kiel now fully-remote from all around the globe. On a mission to make developers' lives easier!",
		title: 'About Gitpod',
	}}
/>

<Header
	title="About Gitpod"
	text="Gitpod is an open source developer platform automating the provisioning
  of ready-to-code developer environments."
	textClassNames="max-w-[770px] text-large mx-auto mb-x-small"
	tight={true}
>
	<div slot="content">
		<LinkIconExternal
			href="https://www.notion.so/gitpod/Gitpod-s-Direction-be35d064c0704fbda61c542b84e07ef6"
			icon="🍊"
			size="big"
		>
			Gitpod’s Direction
		</LinkIconExternal>
		<Quote />
	</div>
</Header>

<Section>
	<FeatureTitles {featureTitles} swap={true} />
</Section>

<Images images={imagesTop} class="mt-medium" />

<Content />

<Team />

<Images images={imagesBottom} class="mt-medium" />

<MoreArticles title="Additional Resources" posts={data.featuredPosts} />

<!-- Un-comment this when we have some open positions -->

<!-- <Explore
  contents={{
    title: "We have open positions",
    description: "Come join us.",
    link: {
      text: "See openings",
      href: "/careers",
    },
    secondaryLink: null,
  }}
/> -->
