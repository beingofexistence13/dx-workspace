<script lang="ts">
	import RSS from '$lib/components/svgs/rss.svelte';

	export let href: string;
</script>

<span class="prose my-small md:my-0">
	<a
		{href}
		target="_blank"
		rel="noopener noreferrer"
		class="text-xs inline-flex items-center"
	>
		<RSS class="inline-block my-0 mx-1 h-4 w-4" />
		<span class="mr-2"> subscribe to RSS </span>
	</a>
</span>

<style lang="scss">
	a {
		span {
			text-decoration-line: underline !important;
		}
		&:hover {
			span {
				text-decoration-color: #0000;
			}
		}
	}
</style>
