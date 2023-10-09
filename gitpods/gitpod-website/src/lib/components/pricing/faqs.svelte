<script lang="ts">
	import Section from '../section.svelte';
	import Faqs from '../faqs/faqs.svelte';

	import { pricingFAQ, faqOldPlan } from '$lib/contents/pricing';
	import StructuredData from '../faqs/structured-data.svelte';
</script>

<Section>
	<Faqs
		useStructuredData={false}
		headlineClasses="!mb-micro"
		faq={pricingFAQ}
	/>

	<StructuredData
		faq={{
			headline: 'Pricing FAQ',
			items: [...pricingFAQ.items, ...faqOldPlan.items],
		}}
	/>
</Section>
