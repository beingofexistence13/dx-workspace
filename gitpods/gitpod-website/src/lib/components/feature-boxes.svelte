<script>
	import FeatureBox from './feature-box.svelte';
	export let features = [];
</script>

{#each features as feature}
	<FeatureBox {feature} />
{/each}
