<script>
	let clazz = '';

	export { clazz as class };
</script>

<div class="{clazz} flex items-start overflow-x-scroll space-x-6" dir="ltr">
	<slot />
</div>

<style lang="postcss">
	div {
		scroll-snap-type: x mandatory;
		scrollbar-width: thin;
		scrollbar-color: var(--divider) var(--white);
	}

	:global(body.dark) div {
		scrollbar-color: var(--divider) var(--card);
	}

	div::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	div::-webkit-scrollbar:horizontal {
		height: 0.375rem;
	}

	div::-webkit-scrollbar-thumb {
		background-color: var(--divider);
		border-radius: 0.625rem;
		border: 2px solidvar(--white);
	}

	div::-webkit-scrollbar-track {
		border-radius: 0.625rem;
		background-color: var(--white);
	}
</style>
