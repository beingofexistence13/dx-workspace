<script lang="ts">
	import BoothCard from './booth-card.svelte';
	import Section from '$lib/components/section.svelte';
	import DemoCard from '../demo-card.svelte';
	import SwagCard from '../swag-card.svelte';
	export let demoCards = [
		{
			heading: 'Product Demo',
			href: '/contact/get-demo',
			buttonLabel: 'Schedule a demo',
			description:
				'If you’re with us onsite, feel free to stop by for a demo! <br/> <br />If you’d like to book a online demo call with our Gitpod engineers, schedule one here.',
		},
		{
			heading: 'Join our community!',
			href: '/community',
			buttonLabel: 'More on  Community ',
			description:
				"Our community is at the centre of everything at Gitpod. We're excited to have you join us. 🧡 Find out ways that you can get involved.",
		},
	];
</script>

<Section class="flex justify-center w-full">
	<div>
		<div class="mb-micro md:mb-small">
			<h2 class="text-center h2 mb-macro md:mb-micro">Booth sessions</h2>

			<p class="text-large text-center mx-auto">
				Come by our booth, we’re excited to talk with you.
			</p>
		</div>

		<div class="flex flex-col gap-small">
			<BoothCard
				title="Meet Gitpod’s CEO and CTO at KubeCon EU."
				description="Come and meet Gitpod's CEO and CTO at KubeCon! You can schedule a meeting with them to discuss your needs and how Gitpod can help you improve developer experience in your organisation."
				linkText="Schedule a meeting today"
				link="/kubecon-demo"
				image="/images/events/meet-ceo-cto.webp"
			/>

			<BoothCard
				title="#KubeCrawl + #CloudNativeFest"
				description="Join us for the #KubeCrawl + #CloudNativeFest big celebration on the first official night of KubeCon + CloudNativeCon!"
				linkText="Learn More"
				link="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/attend/experiences/"
				image="/images/events/kubecrawl.webp"
			/>
		</div>

		<div
			class="mt-micro md:mt-small grid grid-cols-1 md:grid-cols-2 gap-micro lg:gap-small"
		>
			{#each demoCards as { heading, href, buttonLabel, description }}
				<DemoCard {heading} {href} {buttonLabel} {description} />
			{/each}
		</div>
	</div>
</Section>

<SwagCard />
