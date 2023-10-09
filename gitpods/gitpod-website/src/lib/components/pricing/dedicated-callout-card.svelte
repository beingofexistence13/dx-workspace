<script lang="ts">
	import LinkButton from '../ui-library/link-button/link-button.svelte';
</script>

<div
	class="flex flex-col mx-auto mt-x-small md:mt-small md:max-w-[752px] max-w-[368px] p-8 rounded-2xl bg-sand-dark dark:bg-card border-t border-solid border-white dark:border-black"
>
	<div class="justify-center items-start">
		<div class="justify-start items-start">
			<div class="text-important text-xl font-bold">
				Get started on your own
			</div>
			<div class="text-base mt-2">
				<ol class="inline-flex flex-col space-y-macro text-left">
					<li class="relative inline-flex">
						<span class="pr-2">1.</span>
						Request a CloudFormation template.
					</li>
					<li class="relative inline-flex">
						<span class="pr-2">2.</span>
						Execute CloudFormation template within your Cloud account.
					</li>
					<li class="relative inline-flex">
						<span class="pr-2">3.</span>
						Spin-up a Gitpod CDE.
					</li>
				</ol>
			</div>
			<LinkButton
				href="/contact/sales?subject=Dedicated%20self-serve"
				variant="customTertiary"
				size="medium"
				class="mt-4">Request template</LinkButton
			>
		</div>
	</div>
</div>
