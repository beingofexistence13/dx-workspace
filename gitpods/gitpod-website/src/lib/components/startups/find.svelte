<script>
	import { organisationsLists } from '$lib/contents/startups';
	import Search from '../search.svelte';
	import Section from '../section.svelte';
	import NotFound from './not-found.svelte';
	import OrganisationsEntry from './organisations-entry.svelte';
	import OrganisationsList from './organisations-list.svelte';
	import SideNav from './side-nav.svelte';
	let searchTerm = '';
	const allOrgs = [].concat(
		...organisationsLists.map((o) => o.organisations),
	);
	let filteredOrgs;

	$: {
		filteredOrgs = allOrgs.filter((o) =>
			o.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}
	const froms = [];
	organisationsLists.forEach((o) => froms.push(o.from));
</script>

<Section class="relative">
	<h2 class="h3 text-center">Find your VC or accelerator</h2>
	<Search label="Search  your VC or accelerator" bind:value={searchTerm} />
	<div>
		<SideNav {froms} />
		<div class="wrapper {!searchTerm ? 'space-y-32 sm:space-y-40' : ''}">
			{#if searchTerm}
				<OrganisationsList organisations={filteredOrgs} />
				{#if filteredOrgs.length === 0}
					<NotFound />
				{/if}
			{:else}
				{#each organisationsLists as orgs}
					<OrganisationsEntry
						from={orgs.from}
						organisations={orgs.organisations}
					/>
				{/each}
			{/if}
		</div>
	</div>
</Section>

<style lang="postcss">
	.wrapper {
		margin-top: -445px;
		min-height: 600px;

		@media (max-width: 1140px) {
			margin-top: -370px;
			min-height: 300px;
		}

		@media (max-width: 340px) {
			margin-top: 0;
		}
	}

	h2 {
		@apply mb-small;
	}
</style>
