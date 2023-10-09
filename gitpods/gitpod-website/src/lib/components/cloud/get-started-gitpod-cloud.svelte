<script>
	import LinkButton from '$lib/components/ui-library/link-button';
	import ButtonsWrapper from '../buttons-wrapper.svelte';
	import Card from '../ui-library/card/card.svelte';
</script>

<Card
	size="medium"
	class="max-w-[760px] mx-auto shadow-normal p-xx-small sm:p-x-small md:p-small mt-medium mb-x-large md:mb-0"
>
	<section
		class="flex flex-col sm:flex-row items-center sm:max-w-2xl mx-auto"
	>
		<img
			src="/images/cloud/enter-rug.webp"
			alt="Enter rug"
			class="w-48 md:dark:hidden hidden md:block"
		/>
		<img
			src="/images/cloud/enter-rug-dark.webp"
			alt="Enter rug"
			class="w-48 hidden md:dark:block transform scale-150"
		/>
		<div class="sm:ml-large">
			<h2 class="h4">Get started for free</h2>
			<p class="mb-x-small">
				Spin up a pre-configured development environments in seconds.
				Select a repo, choose your editor and start coding.
			</p>
			<ButtonsWrapper class="justify-start">
				<LinkButton
					target="_blank"
					variant="primary"
					size="medium"
					href="https://gitpod.io/login">Start for free</LinkButton
				>
				<LinkButton
					variant="gray"
					size="medium"
					href="/contact/get-demo">Get a demo</LinkButton
				>
			</ButtonsWrapper>
		</div>
	</section>
</Card>
