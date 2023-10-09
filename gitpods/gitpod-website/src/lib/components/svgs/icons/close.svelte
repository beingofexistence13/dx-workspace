<script lang="ts">
	export let active: boolean = false;
</script>

<svg
	viewBox="0 0 13 13"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<path
		d="M1.48975 1.49609L11.4976 11.5039M11.4976 1.49609L1.48975 11.5039"
		class={active ? 'stroke-important' : 'stroke-[#999795] dark:stroke-sub'}
		stroke-width="1.66797"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style lang="postcss">
	path {
		@apply transition-all duration-200;
	}
</style>
