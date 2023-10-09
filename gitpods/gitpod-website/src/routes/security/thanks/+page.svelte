<script>
	import Report from '$lib/components/security/report.svelte';
	import Thanks from '$lib/components/security/thanks.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Big thanks the following people who responsibly disclosed their security findings.',
		title: 'Thanks for your help',
	}}
/>

<Thanks />
<Report />
