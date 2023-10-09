<script>
	import Section from '../section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
</script>

<Section>
	<div
		class="bg-card shadow-normal rounded-4xl text-center p-medium sm:p-large max-w-xl mx-auto"
	>
		<h2 class="h3">Report security concerns</h2>
		<p class="my-x-small">
			We welcome close collaboration with the worldwide security research
			community.
		</p>
		<LinkButton
			variant="secondary"
			size="medium"
			href="/contact/support?subject=security">Contact support</LinkButton
		>
	</div>
</Section>
