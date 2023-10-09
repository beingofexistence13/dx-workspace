import { getBlogPostMetadata } from '$content/blog';

export async function load() {
	const post = await getBlogPostMetadata(
		'what-we-learned-growing-a-community-from-500-5000',
	);

	return {
		featuredPost: post,
	};
}
