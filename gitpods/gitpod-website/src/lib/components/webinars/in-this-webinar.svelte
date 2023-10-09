<script lang="ts">
	import Section from '../section.svelte';
</script>

<Section>
	<h2 class="h3">In this webinar, you'll learn:</h2>
	<ul class="list-disc pl-5 text-large space-y-x-small mt-xx-small">
		<slot name="list-items" />
	</ul>
</Section>
