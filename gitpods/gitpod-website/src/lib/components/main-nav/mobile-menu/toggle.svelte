<script lang="ts">
	import { showHideOverflowY, useMediaQuery } from '$lib/utils/helpers';

	import menuState from './state';

	$: shouldHide = useMediaQuery('(min-width: 1190px)');

	const handleToggle = () => {
		$menuState = !$menuState;
		if ($menuState) {
			showHideOverflowY(true);
		} else {
			showHideOverflowY(false);
		}
	};
</script>

<button
	on:click={handleToggle}
	aria-label="Show / hide nav items"
	class="py-3"
	hidden={$shouldHide}
	aria-hidden={$shouldHide}
	tabindex={$shouldHide ? -1 : 0}
>
	<div
		class="flex flex-col items-center justify-center h-6 w-12 rounded-xl transition-all duration-200 {$menuState
			? 'bg-sand-dark dark:bg-light-black'
			: 'bg-important dark:bg-light-black'}"
		class:open={$menuState}
	/>
</button>

<style lang="postcss">
	div {
		&::before,
		&::after {
			content: '';
			@apply h-0.5 w-4 rounded-[2px] bg-[#f4f2f1] origin-center transition-all duration-200 ease-out;
		}

		&::before {
			@apply mb-1;
		}

		:global(body.dark) &.open {
			&::before,
			&::after {
				@apply bg-important;
			}
		}

		&.open {
			&::before,
			&::after {
				@apply bg-[#565252];
			}

			&:before {
				transform: rotate(-135deg);
				@apply -mb-0.5;
			}

			&::after {
				transform: rotate(135deg);
			}
		}

		@media (min-width: 1190px) {
			@apply hidden;
		}
	}
</style>
