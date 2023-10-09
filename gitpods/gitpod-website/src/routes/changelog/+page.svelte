<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import '$lib/assets/markdown-commons.scss';
	import TwitterFollowButton from '$lib/components/t-button.svelte';
	import { formatDate } from '$lib/utils/helpers';
	import ChangelogDate from '$lib/components/changelog/changelog-date.svelte';
	import ChangelogLink from '$lib/components/changelog/changelog-link.svelte';
	import Wrapper from '$lib/components/changelog/wrapper.svelte';
	import Header from '$lib/components/header.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import ButtonsWrapper from '$lib/components/buttons-wrapper.svelte';
	import RSS from '$lib/components/svgs/rss.svelte';
	import '$lib/assets/prism-solarized-light.css';
	import type { PageData } from './$types';
	import { getChangelogSlug } from '$content/changelog';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		description:
			"A sum-up of Gitpod's latest product improvements, feature releases and community contributions.",
		title: 'Gitpod Changelog - Latest releases and product updates',
		type: 'website',
		keywords:
			'changelog, gitpod, news, updates, product, changes, features, releases, bugs, fixes, version, updates, improvements',
	}}
/>

<div class="flex">
	<div class="hidden w-4/12 flex-shrink-0 md:block" />
	<Header
		centered={false}
		title="Changelog"
		text="Gitpod’s latest product improvements, feature releases and community contributions."
		class="w-full pb-x-small"
		textAlign="left"
	>
		<ButtonsWrapper slot="content" class="pt-x-small">
			<LinkButton
				target="_blank"
				data-analytics={`{"context":"dashboard"}`}
				href="https://gitpod.io/notifications"
				variant="primary"
				size="medium">Signup for the newsletter</LinkButton
			>
			<LinkButton
				target="_blank"
				data-analytics={`{"context":"changelog"}`}
				href="https://gitpod.io/changelog/rss.xml"
				variant="secondary"
				size="medium"
				><RSS class="inline-block my-0 mx-1 h-4 w-4" />Subscribe to RSS</LinkButton
			>
			<TwitterFollowButton variant="cta" />
		</ButtonsWrapper>
	</Header>
</div>

<div
	class="flex flex-col space-y-x-large md:space-y-xxx-large divide-y divide-divider pt-x-large md:pt-xx-large border-y border-divider"
>
	{#each data.changelogs as { metadata, html }, i}
		{@const { date, title, image, alt } = metadata}

		<div
			class="changelog-entry flex flex-col md:flex-row last:pb-x-large md:last:pb-xxx-large {i !==
				0 &&
				i !== data.changelogs.length &&
				'pt-x-large md:pt-xxx-large'}"
		>
			<ChangelogDate
				date={formatDate(date)}
				href={`/changelog/${getChangelogSlug(metadata)}`}
			/>

			<Wrapper class="content-changelog w-full md:w-8/12">
				<img
					src="/images/changelog/{image}"
					class="rounded-3xl"
					width="800"
					height="435"
					loading={i === 0 ? 'eager' : 'lazy'}
					decoding="async"
					{alt}
				/>

				<h2>
					<ChangelogLink
						href={`/changelog/${getChangelogSlug(metadata)}`}
					>
						{title}
					</ChangelogLink>
				</h2>

				{@html html}
			</Wrapper>
		</div>
	{/each}
</div>
