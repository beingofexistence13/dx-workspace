<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import GitpodIllustration from '$lib/components/gitpod-illustration.svelte';
	import Card from '$lib/components/ui-library/card';
	import { onMount } from 'svelte';

	onMount(() => {
		const footer: HTMLElement =
			document.querySelector('[data-id="footer"]');
		footer.style.display = 'none';
	});
</script>

<OpenGraph
	data={{
		title: 'Subscribed',
		description:
			'You will now stay updated on the latest news and updates around CDEs and Gitpod',
		norobots: true,
	}}
/>
<div>
	<Card
		size="small"
		class="pb-0 mt-x-large sm:mt-large shadow-normal p-xx-small sm:py-small sm:px-x-small md:p-medium pb mb-medium text-center sm:mx-8"
	>
		<h1 class="text-h4 mb-micro mt-0">Welcome to our Newsletter</h1>
		<p class="max-w-2xl text-large mx-auto">
			You will now stay updated on the latest news and updates around CDEs
			and Gitpod.
		</p>
		<div class="-mb-medium">
			<GitpodIllustration />
		</div>
	</Card>
</div>
