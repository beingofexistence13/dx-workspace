<script>
	import { brands } from '$lib/contents/blog';
	import Card from '$lib/components/ui-library/card';
</script>

<Card size="small" class="text-center py-micro px-small mt-x-large">
	<div class="flex flex-wrap justify-around mt-small">
		{#each brands as { logo, alt }}
			<div class="flex justify-center mb-small w-32">
				<img src="/{logo}" {alt} class="h-7 w-28" />
			</div>
		{/each}
	</div>
</Card>
