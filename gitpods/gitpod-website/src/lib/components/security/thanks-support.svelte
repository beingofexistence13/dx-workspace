<script lang="ts">
	import Card from '$lib/components/ui-library/card';
	import LinkButton from '$lib/components/ui-library/link-button';
	import Section from '$lib/components/section.svelte';
</script>

<Section>
	<Card
		textAlign="left"
		size="medium"
		class="flex flex-row bg-card shadow-normal rounded-6xl text-left p-medium sm:p-large max-w-4xl mx-auto"
	>
		<img
			src="/images/docs/book.png"
			alt="Book"
			class="hidden lg:block w-32 mb-x-small md:mb-0 lg:w-44 mr-small"
		/>
		<div>
			<h2 class="h4">Thanks for your support</h2>
			<p class="mb-x-small text-lg max-w-lg">
				Big thanks the following people who responsibly disclosed their
				security findings.
			</p>
			<div class="flex flex-wrap gap-4 justify-start">
				<LinkButton
					data-sveltekit-preload-data="hover"
					href="/security/thanks"
					variant="cta">View contributors</LinkButton
				>
			</div>
		</div>
	</Card>
</Section>
