<script lang="ts">
	import type { PartnershipCard } from '../../types/enterprise';

	export let partnershipItems: PartnershipCard[];
	import PartnershipItem from './partnership-item.svelte';
	import Section from '$lib/components/section-common.svelte';
</script>

<Section title="Strong partnerships make us better together">
	<div
		slot="content"
		class="flex justify-center mt-small items-center flex-wrap gap-4"
	>
		{#each partnershipItems as item}
			<PartnershipItem partnershipData={item} />
		{/each}
	</div>
</Section>
