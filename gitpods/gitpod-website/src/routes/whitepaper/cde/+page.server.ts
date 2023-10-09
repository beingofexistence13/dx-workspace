import { getBlogPostMetadata } from '$content/blog';

export async function load() {
	return {
		featuredPosts: [
			await getBlogPostMetadata('gitpod-jetbrains'),
			await getBlogPostMetadata('cloud-based-development-for-everyone'),
			await getBlogPostMetadata(
				'i-said-goodbye-to-local-development-and-so-can-you',
			),
		],
	};
}
