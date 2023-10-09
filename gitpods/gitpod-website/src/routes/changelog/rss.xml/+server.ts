import { getChangelogSlug, listChangelogs } from '$content/changelog';
import type { RequestHandler } from './$types';
import RSS from 'rss';

export const GET: RequestHandler = async ({ locals }) => {
	const changelogs = listChangelogs();
	const ttlInMin = 60;

	const feed = new RSS({
		title: 'Gitpod Changelog',
		description: 'New features and improvements to Gitpod.',
		copyright: `${new Date().getFullYear()} Gitpod GmbH. All rights reserved`,
		ttl: ttlInMin,
		feed_url: 'https://www.gitpod.io/changelog',
		site_url: 'https://www.gitpod.io/',
		image_url: 'https://www.gitpod.io/favicon192.png',
		language: 'en',
		pubDate: new Date(changelogs[0].metadata.date).toUTCString(),
		generator: 'Gitpod',
	});

	for (const { metadata, html } of changelogs) {
		const url = `https://www.gitpod.io/changelog/${getChangelogSlug(
			metadata,
		)}`;

		feed.item({
			title: metadata.title,
			description: html.replace(
				/src="\//g,
				'src="https://www.gitpod.io/',
			),
			date: metadata.date,
			url,
			guid: url,
			enclosure: {
				url: `https://www.gitpod.io/images/changelog/${metadata.image}`,
				type: 'image/webp',
			},
			author: 'Gitpod',
		});
	}

	return new Response(feed.xml(), {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${ttlInMin * 60}`,
			'Content-Type': 'application/xml',
		},
	});
};
