<script lang="ts">
	import { onMount } from 'svelte';
	import OrganisationsList from './organisations-list.svelte';

	export let from: string;
	export let organisations: { name: string; url: string }[];

	let options = {
		threshold: [0],
	};

	onMount(() => {
		const sideNavLinks = document.querySelectorAll('.sidenav-link');

		let observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					Array.from(sideNavLinks).forEach((a) => {
						if (a.textContent === from) {
							a.classList.add('border-primary');
						} else {
							a.classList.remove('border-primary');
						}
					});
				}
			});
		}, options);

		observer.observe(document.querySelector(`.e-${from}`));

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="organisations-list e-{from}" id={from}>
	<h3 class="h2">{from}</h3>
	<OrganisationsList {organisations} />
</div>

<style lang="postcss">
	div {
		max-width: 250px;
		@apply whitespace-nowrap mx-auto;

		@media (max-width: 540px) {
			@apply ml-auto mr-0;
		}

		@media (max-width: 340px) {
			@apply mx-auto;
		}
	}

	h3 {
		@apply mb-x-small text-center;

		@media (max-width: 540px) {
			@apply text-left;
		}
	}
</style>
