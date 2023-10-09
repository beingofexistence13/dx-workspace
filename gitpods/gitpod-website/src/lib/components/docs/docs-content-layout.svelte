<script lang="ts">
	import OpenGraph from '../open-graph.svelte';
	import FeedbackWidget from './feedback-widget.svelte';
	import docsCurrentSectionStore from '$lib/stores/docs-current-section';
	import docsCurrentSubSectionStore from '$lib/stores/docs-current-subsection';
	import PrevNext from './prev-next.svelte';
	import '$lib/assets/prism-solarized-light.css';

	export let section: string;
	export let title: string;
	export let description: string | undefined = undefined;
	export let subsection: string | undefined = undefined;

	$: $docsCurrentSectionStore = section;
	$: $docsCurrentSubSectionStore = subsection;
</script>

<OpenGraph
	data={{
		title: title ? `${title} - Gitpod Docs` : 'Gitpod Documentation',
		description: description
			? `Gitpod Documentation: ${description}`
			: 'Explore the documentation to learn more about Gitpod',
	}}
/>

<div class="flex">
	<div
		class="content-docs prose prose-h1:text-[32px] !prose-pre:rounded-xl md:px-4 max-w-none flex-auto min-w-0 xl:w-2/3"
	>
		<slot />
	</div>
</div>

<FeedbackWidget type="docs" class="my-huge" />
<PrevNext />
