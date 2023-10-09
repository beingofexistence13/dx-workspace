<script>
	import Explore from '$lib/components/explore.svelte';
	import Faqs from '$lib/components/pricing/faqs.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import GartnerReport from '$lib/components/cde/gartner-report.svelte';
	import PlansAndPricing from '$lib/components/pricing/plans-and-pricing.svelte';
	import PricingFeatures from '$lib/components/pricing/pricing-features.svelte';
	import {
		pricingPlans,
		dedicatedPricingPlans,
		cloudFeatures,
		dedicatedFeatures,
		cards,
	} from '$lib/contents/pricing';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import Resources from '$lib/components/resources.svelte';
	import Section from '$lib/components/section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Gitpod is free for 50h/month. Upgrade to unlock more features with Cloud - hosted and managed by us or Dedicated - hosted by you and managed by us.',
		title: 'Plans and pricing - Gitpod',
		keywords:
			'Pricing, Gitpod, costs, free, Cloud, SaaS, Dedicated, self-hosted, secure developer environment, cloud development environment, cde',
	}}
/>
<PlansAndPricing {pricingPlans} {dedicatedPricingPlans} />
<AnimatedLogos
	title="Speeding up 1M+ developers in teams like"
	class="md:!mt-xx-large"
/>
<PricingFeatures {cloudFeatures} {dedicatedFeatures} />
<Section>
	<div class="mb-small md:mb-x-medium">
		<h2 id="cost-estimator" class="text-center h2 mb-macro md:!mb-micro">
			Gitpod CDEs
		</h2>
		<p class="text-large text-center mx-auto">
			Get started for free, upgrade any time.
		</p>
		<div class="text-center mt-micro md:mt-x-small">
			<LinkButton variant="primary" size="large" href="/contact/get-demo"
				>Get a demo</LinkButton
			>
		</div>
	</div>
	<Resources {cards} />
</Section>
<GartnerReport />
<Faqs />
<Explore />
