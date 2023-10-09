<script lang="ts">
	import Pill from '$lib/components/pill.svelte';
	export let title: string;
	export let label: string;
	export let description: string;
</script>

<div class="mx-auto max-w-6xl text-left sm:text-center">
	<Pill text={label} class="mb-3 !text-left sm:!text-center items-center" />
	<h2 class="h1 !mb-macro md:!mb-micro text-left sm:text-center mx-auto">
		{@html title}
	</h2>
	<div class="text-large">
		<p class="text-large max-w-4xl text-left sm:text-center mx-auto">
			{description}
		</p>
	</div>
</div>
