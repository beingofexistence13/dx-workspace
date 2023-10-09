<script lang="ts">
	import Program from '$lib/components/security/program.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import UsedBy from '$lib/components/index/used-by.svelte';
	import Header from '$lib/components/header.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import ThanksSupport from '$lib/components/security/thanks-support.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Gitpod is secure and trusted by over 1M developers and companies that are movingtheir dev environments to the cloud.',
		title: 'Security at Gitpod',
	}}
/>

<Header
	title="Security at Gitpod"
	text="Gitpod is trusted by over 1M developers and companies that are moving
  their dev environments to the cloud."
	textClassNames="text-large max-w-2xl mx-auto mb-x-small"
	tight={true}
>
	<div
		slot="content"
		class="flex flex-wrap space-x-2 sm:space-x-8 justify-center m-auto text-center"
	>
		<LinkButton
			variant="primary"
			size="large"
			href="#program"
			class="mt-2 sm:mt-0">View security program</LinkButton
		>
		<LinkButton
			variant="cta"
			size="large"
			href="https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default"
			class="mt-2 sm:mt-0">View trust center</LinkButton
		>
	</div>
</Header>

<UsedBy title="Used by 1M+ developers" class="py-small" />
<div id="program">
	<Program />
</div>
<ThanksSupport />
