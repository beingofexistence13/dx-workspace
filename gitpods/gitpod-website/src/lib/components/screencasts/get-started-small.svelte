<script lang="ts">
	import Card from '../ui-library/card/card.svelte';
	import LinkButton from '../ui-library/link-button/link-button.svelte';
</script>

<Card
	size="medium"
	class="flex items-center mx-auto p-x-small md:py-medium md:px-small gap-small shadow-normal max-w-sm md:max-w-2xl"
>
	<img
		src="/images/screencasts/monitor-plant.png"
		alt="Workspace setup"
		class="w-44 hidden md:block"
	/>
	<div>
		<h3 class="h4">Get started</h3>
		<p class="mb-micro">
			Spin up a pre-configured development environments in seconds.
		</p>
		<LinkButton href="https://gitpod.io/login/" variant="primary"
			>Start for free</LinkButton
		>
		<LinkButton href="/docs" variant="gray">View docs</LinkButton>
	</div>
</Card>
