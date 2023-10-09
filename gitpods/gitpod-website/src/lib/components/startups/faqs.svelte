<script lang="ts">
	import { faqs } from '$lib/contents/startups';
	import Faqs from '../faqs/faqs.svelte';
	import Section from '../section.svelte';
</script>

<Section>
	<Faqs faq={faqs} />
</Section>
