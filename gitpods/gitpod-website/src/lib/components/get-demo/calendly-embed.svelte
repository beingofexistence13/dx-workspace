<script lang="ts">
	import { onMount } from 'svelte';
	import { getVisitorId } from '../segment.svelte';

	let visitorId = null;

	onMount(async () => {
		await getVisitorId().then((id) => {
			visitorId = id;
		});

		const script = document.createElement('script');
		script.setAttribute(
			'src',
			'https://calendly.com/assets/external/widget.js',
		);

		document.body.appendChild(script);
	});
	export let calendlyUrl = '';
</script>

<svelte:head>
	<link
		href="https://calendly.com/assets/external/widget.css"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="calendly-inline-widget"
	data-url={calendlyUrl + '&utm_source=' + visitorId}
	style="min-width:250px;height:780px;"
/>

<style lang="postcss">
	div :global(iframe) {
		@apply rounded-2xl shadow-normal;
	}
</style>
