<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
</script>

<Section class="flex flex-col">
	<div class="mt-small">
		<img
			class="object-cover dark:hidden mx-auto sm:w-[75%]"
			src="/images/community/squad.webp"
			alt="4 3d modeled characters representing a squad of community heroes"
			width="100%"
			height="100%"
		/>
		<img
			class="hidden dark:block object-cover mx-auto sm:max-w-[67.5rem]"
			src="/images/community/squad-dark.webp"
			alt="4 3d modeled characters representing a squad of community heroes"
			width="100%"
			height="100%"
		/>
	</div>

	<p class="text-center font-bold text-4xl text-important mx-auto mt-small">
		Backed by a strong community
	</p>
	<p
		class="text-center text-2xl text-[#565252] dark:text-body max-w-2xl mx-auto mt-micro"
	>
		Join 6k+ members on our thriving Discord server to learn, collaborate,
		and connect with Gitpod developers.
	</p>
	<div class="flex justify-center mt-micro lg:mt-x-small">
		<LinkButton variant="primary" size="large" href="/community"
			>Meet our community</LinkButton
		>
	</div>
</Section>
