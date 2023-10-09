import { getBlogPost, listBlogPosts } from '$content/blog.js';
import type { PageLoad } from './$types';

export const entries = () =>
	listBlogPosts().map((post) => ({ slug: post.slug }));

export const load: PageLoad = async ({ params, parent }) => {
	await parent();
	return await getBlogPost(params.slug);
};
