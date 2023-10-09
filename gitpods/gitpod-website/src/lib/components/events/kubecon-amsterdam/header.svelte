<script lang="ts">
	import HeaderDescription from '../header-description.svelte';
	import Card from '$lib/components/ui-library/card/card.svelte';
	import Section from '$lib/components/section.svelte';
</script>

<Section class="grid grid-cols-1 gap-x-small lg:grid-cols-2">
	<HeaderDescription
		class="!m-0"
		title="Meet us at KubeCon EU in Amsterdam"
		label="Conference"
		date="April 19-21"
		location="Amsterdam, Netherlands"
		description="We'll be at Booth SU22. Come visit us in person or see us in our virtual booth online."
	/>
	<div class="lg:flex hidden items-center justify-center">
		<Card
			size="medium"
			class="flex w-[560px] shadow-normal p-small md:py-large md:px-x-large items-center justify-center"
		>
			<img
				src="/images/events/kubecon-eu-2023.webp"
				alt="Kubecon EU 2023 Logo"
			/>
		</Card>
	</div>
	<div class="lg:hidden w-[300px] mt-8">
		<img
			src="/images/events/kubecon-eu-2023.webp"
			alt="Kubecon EU 2023 Logo"
		/>
	</div>
</Section>
