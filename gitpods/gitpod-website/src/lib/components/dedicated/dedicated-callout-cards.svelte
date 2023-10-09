<script lang="ts">
	import Card from '$lib/components/ui-library/card';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
</script>

<div
	class="flex flex-col flex-wrap justify-center md:flex-row !mb-x-large md:!mb-0 space-y-3 md:space-y-0 max-w-[1104px] gap-x-4 gap-y-4 mx-auto mt-x-small md:mt-small"
>
	<Card
		size="medium"
		class="gap-small shadow-normal md:p-x-large flex items-start text-left mx-auto py-small px-xx-small max-w-[400px] md:max-w-[544px]"
	>
		<div
			class="flex flex-wrap flex-col text-left h-full w-full justify-between"
		>
			<h2 class="h3 !mb-8">Get started</h2>
			<ol class="inline-flex flex-col space-y-micro text-left">
				<li class="relative inline-flex">
					<span class="font-bold text-primary pr-4">1.</span>
					Request a CloudFormation template.
				</li>
				<li class="relative inline-flex">
					<span class="font-bold text-primary pr-4">2.</span>
					Execute CloudFormation template within your Cloud account.
				</li>
				<li class="relative inline-flex">
					<span class="font-bold text-primary pr-4">3.</span>
					Spin-up a Gitpod CDE.
				</li>
			</ol>
			<div class="mt-8">
				<LinkButton
					variant="primary"
					size="large"
					href="/contact/sales?subject=Dedicated%20self-serve"
					>Request template</LinkButton
				>
			</div>
		</div>
	</Card>
	<Card
		size="medium"
		class="gap-small shadow-normal md:p-x-large flex items-start text-left mx-auto py-small px-xx-small max-w-[400px] md:max-w-[544px]"
	>
		<div
			class="flex flex-wrap flex-col text-left h-full w-full justify-between"
		>
			<h2 class="h3">Help from an expert</h2>
			<p class="text-lg">
				Our team is available to help answer any questions about CDEs or
				your use case to get started as soon as possible!
			</p>
			<div class="mt-12">
				<LinkButton
					variant="cta"
					size="large"
					href="/contact/sales?subject=enterprise"
					>Talk to an expert</LinkButton
				>
			</div>
		</div>
	</Card>
</div>
