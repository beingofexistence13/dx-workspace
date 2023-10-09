import { getBlogPostMetadata } from '$content/blog';

export async function load() {
	return {
		featuredPosts: [
			await getBlogPostMetadata('introducing-gitpod-dedicated'),
			await getBlogPostMetadata('future-of-software-cdes'),
			await getBlogPostMetadata(
				'securing-cncf-software-supply-chains-with-cd-es',
			),
		],
	};
}
