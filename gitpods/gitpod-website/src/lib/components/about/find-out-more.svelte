<script>
	import ButtonsWrapper from '../buttons-wrapper.svelte';
	import Section from '../section.svelte';
	import Card from '../ui-library/card/card.svelte';
	import LinkIconExternal from '../ui-library/link-icon-external.svelte';
</script>

<Section class="max-w-3xl mx-auto">
	<Card
		size="medium"
		class="flex flex-col items-center max-w-lg mx-auto md:max-w-none md:flex-row py-medium px-small shadow-normal"
	>
		<img
			src="/images/docs/book.png"
			alt="Book"
			class="w-32 mb-x-small md:mb-0 lg:w-44 mr-small"
		/>
		<div>
			<h2 class="h3">Find out more</h2>
			<p class="mb-x-small">
				We have always built in the open. If you want to learn more take
				a look through of our public Notion pages.
			</p>
			<ButtonsWrapper>
				<LinkIconExternal
					icon="💻"
					href="https://www.notion.so/gitpod/How-we-work-0f9159f282d24f9d9776372e0c7dbab4"
					variant="gray"
				>
					How we work
				</LinkIconExternal>
				<LinkIconExternal
					icon="🔨"
					href="https://www.notion.so/gitpod/How-we-develop-e8ce7e562478458a9223eb9b797415b2"
					variant="gray"
				>
					How we develop
				</LinkIconExternal>
			</ButtonsWrapper>
		</div>
	</Card>
</Section>
