<script lang="ts">
	import LinkButton from '$lib/components/ui-library/link-button/link-button.svelte';
	import { isEurope } from '$lib/utils/helpers';
	import TickList from '$lib/components/tick-list.svelte';
	export let members: number;
	export let workspaceHours: number;
	export let largeWorkspaces: number;
	export let standardWorkspaces: number;

	const largeWorkspacePrice = 0.72;
	const standardWorkspacePrice = 0.36;

	$: monthlyHours = workspaceHours * 4.3;

	$: calculatedPrice =
		standardWorkspacePrice *
			(standardWorkspaces / 100) *
			members *
			monthlyHours +
		largeWorkspacePrice * (largeWorkspaces / 100) * members * monthlyHours;

	$: usedCredits =
		(10 * monthlyHours * (standardWorkspaces / 100) +
			20 * monthlyHours * (largeWorkspaces / 100)) *
		members;

	$: toalHoursUsingOrgMembers = members * monthlyHours;

	$: displayValue = getResult(
		members,
		usedCredits,
		// @ts-ignore
		calculatedPrice,
		toalHoursUsingOrgMembers,
	);

	const getResult = (
		members: number,
		usedCredits: number,
		// calculatedPrice: number,
		// toalHoursUsingOrgMembers: number
	) => {
		// if total hours is 0, return 0 => no price for inactive members
		if (toalHoursUsingOrgMembers === 0) {
			return 0;
		}
		if (members === 1) {
			if (usedCredits <= 500) {
				return 0;
			}
			if (usedCredits <= 1000) {
				return 9;
			} else {
				return 9 + (usedCredits - 1000) * 0.036;
			}
		} else if (members >= 2) {
			if (usedCredits <= 1000) {
				return 9;
			} else {
				return 9 + (usedCredits - 1000) * 0.036;
			}
		}
	};
</script>

<div class="flex flex-col">
	{#if members >= 100}<br />
	{:else}
		<p class="text-body">
			For all users per month <span class="text-grey !font-normal"
				>(excl. VAT)</span
			>
		</p>
	{/if}
	<p class="h2 mt-micro font-bold text-important">
		{members >= 100
			? 'Custom'
			: `${isEurope() ? '€' : '$'}${displayValue
					.toFixed(0)
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
	</p>
	<div>
		{#if members >= 100}
			<p>Custom pricing for teams 100+</p>
			<br />
			<LinkButton
				variant="primary"
				size="large"
				href="/contact/sales?subject=enterprise"
			>
				Talk to sales
			</LinkButton>
		{:else if members === 1}
			<div class="mb-xx-small">
				{#if displayValue < 9}
					<TickList
						textClassNames="max-w-xs"
						list={['Includes 500 credits per month for free']}
					/>
				{:else}
					<TickList
						textClassNames="max-w-xs"
						list={[
							'Includes 1,000 credits for up to 100 hours per month',
							'Pay-as-you-go after 1,000 credits are used',
						]}
					/>
				{/if}
			</div>
			<LinkButton
				size="large"
				variant="primary"
				href="https://gitpod.io/login">Start for free</LinkButton
			>
		{:else}
			<div class="mb-xx-small">
				<TickList
					textClassNames="max-w-xs"
					list={[
						'Pay for total team usage and manage billing from a central account',
					]}
				/>
			</div>
			<LinkButton
				href="https://gitpod.io/orgs/new"
				variant="primary"
				size="large">Create organization for free</LinkButton
			>
		{/if}
	</div>
</div>
