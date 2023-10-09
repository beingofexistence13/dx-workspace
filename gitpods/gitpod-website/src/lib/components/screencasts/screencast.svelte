<script lang="ts">
	import type { Screencast } from '$lib/types/screencasts';
	import Duration from './duration.svelte';
	import Preview from './preview.svelte';

	export let screencast: Screencast;
	export let headlineOrder: 'h3' | '' = '';
	import { stringToBeautifiedFragment } from '$lib/utils/helpers';
	import Card from '$lib/components/ui-library/card';
</script>

<article>
	<a
		href={screencast.href ||
			`/screencasts/${stringToBeautifiedFragment(
				screencast.title.slice(0, -3),
			)}`}
		class="no-underline pointer"
		data-analytics={`{"variant":"preview"}`}
	>
		<Card
			class="h-full pb-xx-small hover:shadow-normal focus:shadow-normal hover:text-important focus:text-important"
			size="small"
		>
			<Preview {headlineOrder} {screencast} />
			<div class="pl-xx-small">
				<Duration
					duration={screencast.duration}
					class="text-xs inline-block px-3 py-0.5 font-bold rounded-lg shadow-light bg-sand-dark dark:bg-light-black whitespace-nowrap mb-micro"
				/>
				<p class="text-base max-w-xs">{screencast.description}</p>
			</div>
		</Card>
	</a>
</article>
