<script lang="ts">
	import Card from '$lib/components/ui-library/card/card.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';

	export let title: string;
	export let description: string;
	export let link: string;
	export let linkText: string;
	export let image: string;
</script>

<Card
	class="flex flex-col shadow-normal py-small justify-between md:p-x-large px-xx-small"
	size="medium"
>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-small lg:gap-xxx-large">
		<img
			class="w-full hidden lg:block mx-auto max-w-md md:max-w-lg"
			alt="JetBrains’ IDEs within Gitpod"
			src={image}
		/>

		<div
			class="flex flex-col items-centers items-start justify-center gap-6"
		>
			<h3 class="h3">{title}</h3>

			<p class="text-large max-w-[595px]">
				{description}
			</p>

			<LinkButton variant="primary" size="medium" href={link}>
				{linkText}
			</LinkButton>
		</div>
	</div>
</Card>
