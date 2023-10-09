<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Wrapper from '$lib/components/webinars/wrapper.svelte';
	import Download from '$lib/components/workshop/aws/download.svelte';
</script>

<OpenGraph
	data={{
		description: "Workshop signup page for Gitpod's CDE",
		title: 'Gitpod <> AWS workshop',
		keywords: 'Gitpod, CDE, AWS, Workshop',
		norobots: true,
	}}
/>

<div class="pt-small md:pt-x-large w-11/12 sm:w-full max-w-5xl mx-auto">
	<img
		src="/images/workshop-login/aws/gitpod-aws.webp"
		alt="Logo of Gitpod & AWS"
		class="flex dark:hidden sm:mx-auto w-1/2 sm:w-1/3 mb-xx-small md:mb-small"
	/>
	<img
		src="/images/workshop-login/aws/gitpod-aws-dark.webp"
		alt="Logo of Gitpod & AWS"
		class="hidden dark:flex sm:mx-auto w-1/2 sm:w-1/3 mb-xx-small md:mb-small"
	/>
	<h1
		class="text-important text-2xl md:text-5xl !leading-[2.3rem] md:!leading-[4rem] !mb-macro md:!mb-micro text-left sm:text-center max-w-4xl mx-auto"
	>
		Sign up for Gitpod's CDEs
	</h1>
	<p
		class="text-large sm:text-x-large mx-auto max-w-xl lg:max-w-4xl text-left sm:text-center"
	>
		CDEs are pre-configured with all tools, libraries and dependencies
		needed to write, test and review code during your workshop.
	</p>
	<Wrapper
		class="px-xx-small py-x-small sm:p-x-small xl:px-x-large xl:pt-12 xl:pb-[72px] !mx-auto w-full mt-xx-small md:mt-small !max-w-[720px]"
	>
		<Download class="mx-auto lg:m-0" toType="aws-workshop" />
	</Wrapper>
</div>
