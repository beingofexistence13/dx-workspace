<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/ui-library/button';
	import { topics } from '$lib/contents/screencasts';
	export let currentTopic: string;

	const dispatch = createEventDispatcher();

	const handleTopicSetup = (e: Event, topic: string) => {
		const target = e.target as HTMLElement;
		target.parentElement.childNodes.forEach((t: HTMLElement) => {
			if (undefined !== t.classList) {
				t.classList.remove('active');
			}
		});
		target.classList.add('active');
		if (topic !== currentTopic) {
			dispatch('setTopic', topic);
			console.log(topic, currentTopic);
		} else {
			dispatch('setTopic', '');
			console.log(topic, currentTopic);
			target.classList.remove('active');
		}
	};
</script>

<div class="md:mt-x-large mb-small">
	<p class="h5 text-center text-important font-bold mb-xx-small">
		Suggested topics
	</p>
	<div
		class="flex flex-wrap justify-center max-w-3xl mx-auto sm:space-x-macro buttons-wrapper"
	>
		{#each topics as topic}
			<Button
				on:click={(e) => handleTopicSetup(e, topic)}
				class=" mb-macro mx-0.5 sm:mx-0"
				variant="cta"
				size="medium"
			>
				{topic}
			</Button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.buttons-wrapper :global(button.active) {
		@apply bg-primary text-black;
	}
</style>
