import { getBlogPostMetadata } from '$content/blog';

export async function load() {
	return {
		featuredPosts: [
			await getBlogPostMetadata('future-of-software-cdes'),
			await getBlogPostMetadata('gitpod-core-values'),
			await getBlogPostMetadata(
				'what-we-learned-growing-a-community-from-500-5000',
			),
		],
	};
}
