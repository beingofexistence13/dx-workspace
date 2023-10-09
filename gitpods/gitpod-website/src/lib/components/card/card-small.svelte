<script lang="ts">
	import Card from '$lib/components/ui-library/card';
	import Base from './base.svelte';
	let className: string = '';
	export { className as class };
	let additionalIconClassNames: string = '';
	export { additionalIconClassNames as iconClassNames };
	import type { Card as CardType } from '$lib/types/card';
	export let card: CardType;
</script>

<Card size="small" styles="max-width: 315px" class="p-x-small {className}">
	<Base
		{card}
		{...$$restProps}
		iconClassNames="h-12 w-14 {additionalIconClassNames}"
	/>
	<slot />
</Card>
