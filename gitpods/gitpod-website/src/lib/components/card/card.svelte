<script lang="ts">
	import Card from '$lib/components/ui-library/card';
	import Base from './base.svelte';
	let className: string = '';
	export { className as class };
	import type { Card as CardType } from '$lib/types/card';
	export let card: CardType;
	export let textAlign: 'left' | 'center' | 'right' = 'center';
</script>

<Card
	size="small"
	class="py-xx-small md:py-small max-w-sm px-xx-small md:px-x-small {className}"
>
	<Base {textAlign} {...$$restProps} {card} />
</Card>
