<script lang="ts">
	import { isEurope } from '$lib/utils/helpers';
</script>

<div class="mt-4 md:mt-8">
	<table
		class="rounded-2xl text-p-small border-collapse overflow-hidden table-fixed"
	>
		<thead class="bg-divider text-important">
			<th class="py-micro text-left px-xx-small border border-divider"
				>Workspaces</th
			>
			<th class="py-micro text-left border border-divider px-xx-small"
				>Usage rate</th
			>
		</thead>
		<tr>
			<td class="py-micro px-xx-small bg-bg border border-divider"
				><p class="font-bold text-important">Standard</p>
				up to 4 cores, 8 GB RAM, 30GB storage</td
			>
			<td class="py-micro px-xx-small border border-divider bg-bg"
				><p class="font-bold text-important">
					{isEurope() ? '€' : '$'}0.36/hour
				</p>
				(10 credits)</td
			>
		</tr>
		<tr>
			<td
				class="py-micro px-xx-small bg-bg rounded-bl-2xl border border-divider"
				><p class="font-bold text-important">Large</p>
				up to 8 cores, 16GB RAM, 50GB storage</td
			>
			<td
				class="py-micro px-xx-small bg-bg rounded-br-2xl border border-divider"
				><p class="font-bold text-important">
					{isEurope() ? '€' : '$'}0.72/hour
				</p>
				(20 credits)</td
			>
		</tr>
	</table>
	<p class="text-fine-print mt-micro text-left max-w-lg">
		Note: metered usage includes prebuilds. Storage metering is planned to
		start in the near future.
	</p>
</div>
