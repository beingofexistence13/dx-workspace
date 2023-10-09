<script lang="ts">
	import Hero from '$lib/components/events/landing-page/hero.svelte';
	import Webinars from '$lib/components/events/landing-page/webinars.svelte';
	import Conferences from '$lib/components/events/landing-page/conferences.svelte';
	import Explore from '$lib/components/explore.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Gitpod Events: Learn about the latest in developer tools and technologies, attend developer conferences, meetups, and workshops, and hear from industry experts building CDEs.',
		title: "Gitpod Events: Latest developer conferences we're taking part in",
		keywords:
			'gitpod, events, conferences, meetups, CDE, workshops, development environment, cloud development environment, dev environment, webinars',
	}}
/>

<Hero
	title="Latest Events"
	text="Gitpod is heavily involved in workshops, webinars, and industry events focusing on remote development and developer experience."
	image={{
		isCut: false,
		src: '/images/events/skateboard.png',
		darkSrc: '/images/events/skateboard.png',
		alt: 'Cartoon Skateboard',
	}}
/>

<Webinars />
<Conferences />

<Explore contents={{ title: 'Try it out' }} />
