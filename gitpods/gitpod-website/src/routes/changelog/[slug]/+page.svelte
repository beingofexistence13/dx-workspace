<script lang="ts">
	import Wrapper from '$lib/components/changelog/wrapper.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import type { PageData } from './$types';
	import '$lib/assets/markdown-commons.scss';
	import '$lib/assets/prism-solarized-light.css';
	import BackLink from '$lib/components/changelog/back-link.svelte';
	import { formatDate } from '$lib/utils/helpers';

	export let data: PageData;

	$: ({ date, title, excerpt, image, alt, ogImage } = data.metadata);
</script>

<OpenGraph
	data={{
		description: excerpt,
		title,
		type: 'article',
		image: `images/changelog/${ogImage ? ogImage : image}`,
		imageTwitter: `images/changelog/${ogImage ? ogImage : image}`,
		norobots: true,
	}}
/>

<Wrapper class="pt-small pb-x-large md:pb-xxx-large">
	<div class="entry max-w-[800px] mx-auto flex flex-col md:flex-row">
		<div class="content-changelog">
			<BackLink />
			<img
				src="/images/changelog/{image}"
				class="rounded-xl sm:rounded-3xl"
				{alt}
			/>
			<div class="mt-xx-small">
				<p>{formatDate(date)}</p>
				<h2 class="!text-h3">
					{title}
				</h2>
				{@html data.html}
			</div>
		</div>
	</div>
</Wrapper>

<style lang="postcss">
	.entry :global(img) {
		@apply rounded-tl-lg rounded-tr-lg sm:rounded-tl-2xl sm:rounded-tr-2xl;
	}
</style>
