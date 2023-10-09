<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import Download from '$lib/components/whitepaper/cloud-dev-environments/download.svelte';
	import Card from '$lib/components/ui-library/card';
	import OtherCdeBuilders from '$lib/components/svgs/customers/otherCDEBuilders.svelte';
</script>

<Section>
	<Card
		size="medium"
		class="feature-box shadow-normal py-small px-xx-small sm:p-small lg:p-16 max-w-7xl mx-auto"
	>
		<div
			class="md:grid md:grid-cols-2 justify-center items-center lg:gap-32 md:gap-small"
		>
			<div class="mt-x-small md:my-0 flex-wrap">
				<div class="text-large">
					<h3 class="h3">
						Develop like Google, Facebook, Shopify, Uber, Stripe and
						Slack
					</h3>
					<p class="mt-6 md:mt-8 max-w-lg">
						What big tech companies are trying to build internally,
						Gitpod’s developer platform is bringing to the rest of
						the world. Read more about the benefits of CDEs for
						organizations.
					</p>
				</div>
				<div class="flex items-start -ml-6 mt-4 md:mt-8 mb-8 md:mb-0">
					<OtherCdeBuilders />
				</div>
				<div class="flex flex-wrap gap-4" />
			</div>
			<div class="w-full mx-auto">
				<Download
					class="mx-auto lg:m-0"
					toType="cde-whitepaper"
					eventType="white paper"
				/>
			</div>
		</div>
	</Card>
</Section>
