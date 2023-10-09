import { removeTrailingSlash } from '$lib/utils/helpers';
import type { RequestHandler } from './$types';
import { listBlogPosts } from '$content/blog';
import { listGuides } from '$content/guides';
import { listEducationCustomers } from '$content/education';
import { listDocsSlugs } from '$content/docs';
import { listChangelogs, getChangelogSlug } from '$content/changelog';
import { listCustomers } from '$content/customers';

// prettier-ignore
const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>		
		${pages.map((page) => `<url><loc>${removeTrailingSlash(page)}</loc></url>`).join('')}
	</urlset>
`;

export const GET: RequestHandler = async () => {
	const staticPages = Object.keys(
		// For other static pages. Except content pages - changelogs, guides, blog posts, guides etc.
		import.meta.glob('/src/routes/**/!(_)*.{svelte,md}'),
	)
		.filter((page) => {
			const filters = [
				'/src/routes/index.svelte',
				'_',
				'404',
				'slug]',
				'title]',
				'src/routes/docs/introduction/getting-started',
				'extension-activation',
				'unsubscribe',
				'subscribe',
				'stay-connected',
				'extension-uninstall',
				'+error',
				'+layout',
			];
			return !filters.find((filter) => page.includes(filter));
		})
		.map((page) => {
			return page
				.replace('/src/routes', 'https://www.gitpod.io')
				.replace('/index.md', '/')
				.replace('.md', '/')
				.replace('/index.svelte', '/')
				.replace('.svelte', '/')
				.replace('/+page', '');
		});

	const blogPosts = listBlogPosts().map(
		(post) => `https://www.gitpod.io/blog/${post.slug}`,
	);
	const guidePosts = listGuides().map(
		(post) => `https://www.gitpod.io/guides/${post.slug}`,
	);
	const educationPosts = listEducationCustomers().map(
		(post) => `https://www.gitpod.io/discover/education/${post.slug}`,
	);
	const docsPosts = listDocsSlugs().map(
		(slug) => `https://www.gitpod.io/docs/${slug}`,
	);
	const changeLogs = listChangelogs().map(
		(post) =>
			`https://www.gitpod.io/changelog/${getChangelogSlug(
				post.metadata,
			)}`,
	);
	const customersPages = listCustomers().map(
		(post) => `https://www.gitpod.io/customers/${post.slug}`,
	);

	const renderedSitemap = sitemap([
		...staticPages,
		...blogPosts,
		...guidePosts,
		...educationPosts,
		...docsPosts,
		...changeLogs,
		...customersPages,
	]);

	return new Response(renderedSitemap, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml',
		},
	});
};
