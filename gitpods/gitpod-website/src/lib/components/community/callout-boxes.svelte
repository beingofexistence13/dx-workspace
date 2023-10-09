<script lang="ts">
	import FeatureBoxes from '$lib/components/vs/feature-boxes.svelte';
	import PostPreview from '$lib/components/blog/post-preview.svelte';
	import FeatureBox from '$lib/components/feature-box.svelte';
	import Section from '$lib/components/section.svelte';
	import type { BlogPost } from '$lib/types/blog';

	export let post: BlogPost;
</script>

<Section>
	<h2 class="text-center h2 !mb-x-small md:!mb-medium">
		Learn more about our community
	</h2>

	<FeatureBoxes>
		<FeatureBox
			feature={{
				title: 'Gitpod Community Heroes',
				paragraph:
					'Join us empowering developers to make engineering collaborative and joyful again. Are you our next community hero?',
				moreButton: {
					text: 'View Community Heroes Program',
					href: '/community/heroes',
				},
				image: {
					src: '/images/community/squad-background.jpg',
					alt: 'Community Heroes',
					classNames: 'rounded-2xl',
				},
			}}
		/>
		<FeatureBox
			feature={{
				title: 'Community Office Hours playlist',
				paragraph:
					'Our bi-weekly Office Hours are an opportunity to give the community the stage to share what they’ve built with Gitpod, for Gitpodders to share product insights and gain feedback.',
				moreButton: {
					text: 'Join Discord',
					href: 'https://www.gitpod.io/chat',
				},
				ctaButton: {
					text: 'View playlist',
					href: 'https://www.youtube.com/playlist?list=PL3TSF5whlprU4vRoYBK6-QhFAbwAsoKmu',
				},
				image: {
					src: '/images/illustration-screen.webp',
					darkSrc: '/images/illustration-screen-dark.webp',
					alt: 'Illustration of a monitor with orange background',
					classNames: 'scale-75',
				},
			}}
		/>
		<FeatureBox
			feature={{
				title: 'Host a Gitpod Community meet-up',
				paragraph:
					'Gitpod Community meet-ups are organized by passionate community members in their local area. They are an opportunity to connect with others and learn and share the best Gitpod practices and knowledge.',
				moreButton: {
					text: 'Hosting guidelines',
					href: 'https://www.notion.so/gitpod/Hosting-a-Gitpod-Community-meet-up-77bdde81c5b04d80b93e425ebdd568ef',
				},
				ctaButton: {
					text: 'View playlist',
					href: 'https://www.youtube.com/playlist?list=PL3TSF5whlprU4vRoYBK6-QhFAbwAsoKmu',
				},
				image: {
					src: '/images/community/meet-up.webp',
					alt: 'Gitpod community meet-up',
					classNames: 'rounded-2xl',
				},
			}}
		/>
	</FeatureBoxes>

	<div class="flex mt-x-small lg:mt-x-small max-w-7xl mx-auto justify-center">
		<PostPreview
			textWidth="max-w-2xl"
			badge="Blog Post"
			{post}
			type="blog"
			layout="row"
			isMostRecent={true}
		/>
	</div>
</Section>
