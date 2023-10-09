<script lang="ts">
	import CustomersContentLayout from '$lib/components/customers/customers-content-layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CustomersContentLayout customers={data.customers} {...data.post}>
	<svelte:component this={data.Component} />
</CustomersContentLayout>
