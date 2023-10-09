import { listBlogPosts } from '$content/blog';
import { error } from '@sveltejs/kit';

function shuffle<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export async function load({ params }) {
	const posts = listBlogPosts();
	const currentPost = posts.find((post) => post.slug == params.slug);

	if (!currentPost) {
		throw error(404, `Unable to find blog post "${params.slug}"`);
	}

	shuffle(posts);

	return {
		featuredPosts: posts
			.filter((post) => post.slug != params.slug)
			.filter((p) => p.tags?.some((t) => currentPost.tags?.includes(t)))
			.slice(0, 3),
	};
}
