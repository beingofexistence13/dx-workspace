import { listBlogPosts } from '$content/blog';

export const load = async () => {
	return {
		posts: listBlogPosts(),
	};
};
