import { getBlogPostMetadata } from '$content/blog';

export async function load() {
	const post = await getBlogPostMetadata(
		'i-said-goodbye-to-local-development-and-so-can-you',
	);

	return {
		post,
	};
}
