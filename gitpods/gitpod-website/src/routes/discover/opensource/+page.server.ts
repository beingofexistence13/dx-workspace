import { getBlogPostMetadata } from '$content/blog';
import type { BlogPost } from '$lib/types/blog';

export async function load() {
	return {
		featuredPosts: [
			await getBlogPostMetadata('gitpod-open-source-sustainability-fund'),
			{
				title: 'Open-Source Funding during DevX Conf',
				excerpt:
					"It's time to start giving back. Participants voted for their favourite nominated open-source projects and we distributed USD $10,000 between these projects.",
				image: '/images/opensource/devxconf.png',
				teaserImage: '/images/opensource/devxconf.png',
				isNotAnActualPost: true,
				href: 'https://devxconf.org/opensource',
				headings: [],
			},
			{
				title: 'Platform to Foster OSS Contributions',
				excerpt:
					'We created contribute.dev to showcase open-source project with an automated developer environment. Here new contributors can easily find new projects for frictionless open-source contributions.',
				image: '/images/opensource/contribute.dev.png',
				teaserImage: '/images/opensource/contribute.dev.png',
				isNotAnActualPost: true,
				href: 'https://contribute.dev',
				headings: [],
			},
		] satisfies BlogPost[],
	};
}
