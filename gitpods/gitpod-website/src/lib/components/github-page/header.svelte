<script lang="ts">
	import Header from '../header.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';

	export let title: string;
</script>

<Header {title}>
	<div slot="content">
		<p class="text-large mb-x-small">
			<slot name="description" />
		</p>
		<LinkButton
			variant="primary"
			size="large"
			target="_blank"
			href="https://gitpod.io/plans">Claim Offer</LinkButton
		>
	</div>
</Header>
