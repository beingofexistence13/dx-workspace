<script lang="ts">
	let clazz = '';

	export { clazz as class };
</script>

<div class="flex flex-wrap gap-4 {clazz}" {...$$restProps}>
	<slot />
</div>
