<script lang="ts">
	import GartnerReportGraph from './gartner-report-graph.svelte';
	import GartnerReportGraphDark from './gartner-report-graph-dark.svelte';
	import MobileGartnerReportGraph from './mobile-gartner-report-graph.svelte';
	import MobileGartnerReportGraphDark from './mobile-gartner-report-graph-dark.svelte';
	import Section from '$lib/components/section.svelte';
	import Card from '$lib/components/ui-library/card';
</script>

<Section class="relative hidden lg:block pt-medium">
	<div class="pt-3 pb-24">
		<GartnerReportGraph class="scale-100 mx-auto block dark:hidden" />
		<GartnerReportGraphDark class="scale-100 mx-auto hidden dark:block" />
	</div>
	<Card
		size="medium"
		class="shadow-normal flex items-start text-left md:mx-auto py-x-small px-micro sm:p-small w-1/2 max-w-[643px] absolute top-0 right-0 xl:right-14"
	>
		<div
			class="w-[484.25px] h-[267.70px] left-[59.38px] top-0 absolute -z-10 bg-amber-500 bg-opacity-25 rounded-full blur-[106.91px]"
		/>
		<div
			class="w-9 h-[83px] text-rose-300 text-[80px] font-bold leading-[88px]"
		>
			“
		</div>
		<div
			class="grow shrink basis-0 flex-col items-center gap-6 inline-flex max-w-md mx-auto"
		>
			<div
				class="self-stretch text-center text-important text-[32px] font-bold leading-10"
			>
				By 2026, 60% of cloud workloads will be built and deployed using
				CDEs.
			</div>
			<p class="text-base">
				<span class="font-bold">Gartner</span>, Hype cycle for emerging
				technologies (2023)
				<a
					href="https://www.gartner.com/en/documents/4597499"
					target="_blank">[1]</a
				>
			</p>
		</div>
		<div
			class="Text w-9 text-right text-rose-300 text-[80px] font-bold leading-[88px]"
		>
			”
		</div>
	</Card>
</Section>

<Section class="relative block lg:hidden">
	<Card
		size="small"
		class="shadow-normal flex mx-auto w-10/12 items-start text-left py-x-small px-micro sm:p-small top-0 right-0"
	>
		<div
			class="w-full h-[194.70px] -top-2 absolute -z-10 bg-amber-500 bg-opacity-25 rounded-full blur-[106.91px]"
		/>
		<div
			class="w-9 h-[83px] text-rose-300 text-[48px] font-bold leading-[56px]"
		>
			“
		</div>
		<div
			class="grow shrink basis-0 flex-col items-center gap-4 inline-flex mx-auto"
		>
			<div
				class="self-stretch text-center text-important text-[20px] font-bold leading-6"
			>
				By 2026, 60% of cloud workloads will be built and deployed using
				CDEs.
			</div>
			<p class="text-[14px] leading-5 text-center">
				<span class="font-bold">Gartner</span>, Hype cycle for emerging
				technologies (2023)
				<a
					href="https://www.gartner.com/en/documents/4597499"
					target="_blank">[1]</a
				>
			</p>
		</div>
		<div
			class="Text w-9 text-right text-rose-300 text-[48px] font-bold leading-[56px]"
		>
			”
		</div>
	</Card>

	<div
		class="mt-12 pb-micro z-10 block dark:hidden py-0 sm:py-12 lg:py-0 mb-0 md:mt-x-large lg:mt-12 md:mb-xxx-large lg:mb-0 md:pt-16"
	>
		<MobileGartnerReportGraph
			class="w-screen scale-100 sm:scale-125 md:scale-[1.8]"
		/>
	</div>
	<div
		class="mt-12 pb-micro z-10 hidden dark:block py-0 sm:py-12 lg:py-0 mb-0 md:mt-x-large lg:mt-12 md:mb-xxx-large lg:mb-0 md:pt-16"
	>
		<MobileGartnerReportGraphDark
			class="w-screen scale-100 sm:scale-125 md:scale-[1.8]"
		/>
	</div>
</Section>
