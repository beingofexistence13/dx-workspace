import { listBlogPosts } from '$content/blog';
import type { PageServerLoad } from './$types';

const slugs = [
	'i-said-goodbye-to-local-development-and-so-can-you',
	'cloud-based-development-for-everyone',
];

export const load: PageServerLoad = () => {
	return {
		posts: listBlogPosts().filter((post) => slugs.includes(post.slug)),
	};
};
