<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
	import ButtonsWrapper from '$lib/components/buttons-wrapper.svelte';
	// import Testimonials from "$lib/components/index/testimonials.svelte";
	// import { testimonials } from "$lib/contents/community/index";
</script>

<Section class="flex flex-col">
	<p class="text-center font-bold text-h3 text-important max-w-3xl mx-auto">
		Join our community of 6k+ developers from all over the world
	</p>
	<ButtonsWrapper class="justify-center mt-micro lg:mt-x-small">
		<LinkButton
			variant="primary"
			size="large"
			href="https://www.gitpod.io/chat">Join Discord</LinkButton
		>
		<LinkButton variant="gray" size="large" href="https://gitpod.io/login"
			>Start for free</LinkButton
		>
	</ButtonsWrapper>

	<!-- Community Quotes -->
	<!-- <Testimonials class="!mt-small !mb-0 lg:!mt-x-large" {testimonials} /> -->
</Section>
