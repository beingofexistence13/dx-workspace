<script lang="ts">
	let clazz = 'h-6 w-6';
	export { clazz as class };
	export let title = 'No';
</script>

<svg
	class={clazz}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<title>{title}</title>
	<path
		d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
		fill="#ECE7E5"
		class="fill-sand-dark dark:fill-bg"
	/>
	<path
		d="M9 12h6.157"
		stroke="var(--sub)"
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>
