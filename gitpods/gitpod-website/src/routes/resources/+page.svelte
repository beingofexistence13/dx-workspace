<script>
	import OpenGraph from '$lib/components/open-graph.svelte';
	import { cards } from '$lib/contents/support';
	import Resources from '$lib/components/resources.svelte';
	import SectionCommon from '$lib/components/section-common.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Browse our collection of helpful articles, videos, guides and tutorials and find answers to your questions quickly. Or contact our team for individual support requests.',
		title: 'Helpful Resources | Gitpod Docs',
		keywords:
			'help, docs, documentation, question, customer service, gitpod',
	}}
/>

<SectionCommon title="Helpful Resources">
	<Resources {cards} slot="content" />
</SectionCommon>
