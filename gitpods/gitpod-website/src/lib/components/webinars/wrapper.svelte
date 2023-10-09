<script lang="ts">
	import Card from '../ui-library/card/card.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<Card size="small" class="max-w-[642px] z-10 shadow-normal {clazz}">
	<slot />
</Card>
