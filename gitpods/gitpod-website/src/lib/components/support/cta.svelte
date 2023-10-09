<script>
	import LinkButton from '$lib/components/ui-library/link-button';
	import ButtonsWrapper from '../buttons-wrapper.svelte';
	import Card from '../ui-library/card/card.svelte';
</script>

<Card
	size="medium"
	class="max-w-[810px] mx-auto shadow-normal p-xx-small sm:p-x-small md:p-small"
>
	<section
		class="flex flex-col sm:flex-row items-center sm:max-w-2xl mx-auto"
	>
		<img
			src="/images/support/monitor.png"
			alt="Monitor"
			class="w-40 md:dark:hidden hidden md:block"
		/>
		<img
			src="/images/support/monitor-dark.png"
			alt="Monitor"
			class="w-40 hidden md:dark:block transform scale-110"
		/>
		<div class="sm:ml-large">
			<h2 class="h4">
				Did you face a bug or do you have a support request?
			</h2>
			<p class="mb-x-small">
				Please get in contact and we'll get onto it right away.
			</p>
			<ButtonsWrapper class="justify-start">
				<LinkButton
					target="_blank"
					variant="primary"
					size="medium"
					href="https://www.gitpodstatus.com/"
					>View status page</LinkButton
				>
				<LinkButton variant="gray" size="medium" href="/contact/support"
					>Contact support</LinkButton
				>
			</ButtonsWrapper>
		</div>
	</section>
</Card>
