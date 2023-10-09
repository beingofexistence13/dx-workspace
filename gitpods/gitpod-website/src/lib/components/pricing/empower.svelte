<script>
	import { empowermentFeatures as cards } from '$lib/contents/pricing';
	import Resources from '../resources.svelte';

	import Section from '../section.svelte';
</script>

<Section>
	<h2 class="text-center">We love to empower creative minds</h2>
	<Resources {cards} />
</Section>
