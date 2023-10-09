<script lang="ts">
	import { onMount } from 'svelte';
	export let froms: string[];
	const refs = [];

	onMount(() => {
		setTimeout(() => {
			document.body.style.overflowX = 'initial';
			document.documentElement.style.scrollBehavior = 'smooth';
		}, 500);

		return () => {
			document.body.style.overflowX = 'hidden';
			document.documentElement.style.scrollBehavior = 'initial';
		};
	});
</script>

<div class="sticky z-10 sm:top-36 top-28 parent">
	<div class="inline-flex flex-col sm:mt-large">
		{#each froms as from, index}
			<a
				bind:this={refs[index]}
				href="#{from}"
				class="text-h5 font-semibold border-solid border-l-4 border-divider px-macro sm:px-x-small py-micro hover:border-primary active:border-primary sidenav-link"
				on:click={() => {
					refs.forEach((r) => r.classList.remove('border-primary'));
					refs[index].classList.add('border-primary');
				}}>{from}</a
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	.parent {
		position: -webkit-sticky;
		max-width: 120px;

		@media (max-width: 1140px) {
			max-width: 105px;
		}

		@media (max-width: 768px) {
			max-width: 73px;
		}

		@media (max-width: 400px) {
			max-width: 57px;
		}

		@media (max-width: 340px) {
			@apply hidden;
		}
	}
</style>
