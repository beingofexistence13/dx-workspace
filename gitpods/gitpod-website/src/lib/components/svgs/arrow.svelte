<script lang="ts">
	let clazz = '';

	export { clazz as class };
	export let fillClass = 'fill-important';
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$props}
	class="{clazz} transition-all duration-200"
	><path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M21.593 8.463l-8.914 9.245a.935.935 0 01-1.358 0L2.407 8.463a1.482 1.482 0 010-2.04 1.357 1.357 0 011.967 0l7.627 7.908 7.624-7.909a1.358 1.358 0 011.968 0 1.482 1.482 0 010 2.04z"
		class="{fillClass} transition-all duration-200"
	/></svg
>
