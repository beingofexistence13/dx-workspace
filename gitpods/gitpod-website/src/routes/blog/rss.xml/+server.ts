import { listBlogPosts } from '$content/blog';
import RSS from 'rss';

export const GET = async () => {
	const posts = listBlogPosts();

	/*
    The RSS feed is a JavaScript object that contains information about the blog feed.
    It has a title, description, copyright, and other properties.
    It also has an array of categories that can be used to filter the blog feed.
    The pubDate property indicates when the feed was last updated.
    */

	const feed = new RSS({
		title: 'Gitpod Blog - News, ideas and background stories',
		description:
			'The latest news, articles, and opinions around developer experience and remote development in the cloud.',
		copyright: `Copyright © ${new Date().getFullYear()} Gitpod GmbH. All rights reserved`,
		ttl: 1800,
		feed_url: 'https://www.gitpod.io/blog',
		site_url: 'https://www.gitpod.io',
		image_url: 'https://www.gitpod.io/favicon192.png',
		language: 'en',
		categories: [
			'Gitpod updates',
			'Developer experience',
			'Engineering',
			'Company building',
		],
		pubDate: new Date().toUTCString(),
		generator: 'Gitpod',
	});

	// This code creates an RSS feed. It does so by iterating over all posts and
	// adding each post to the feed.

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.excerpt,
			url: `https://www.gitpod.io/blog/${post.slug}`,
			guid: `https://www.gitpod.io/blog/${post.slug}`,
			categories: post.tags,
			date: post.date,
			enclosure: {
				url: `https://www.gitpod.io/images/blog/${post.slug}/${post.image}`,
				type: 'image/webp',
			},
			author: post.author,
		});
	});

	return new Response(feed.xml(), {
		headers: {
			'Cache-Control': 'max-age=0, s-max-age=3600',
			'Content-Type': 'application/xml',
		},
	});
};
