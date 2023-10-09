import { getDocsBySlug } from '$content/docs.js';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ url, params }) => {
	if (url.pathname == '/docs') {
		throw redirect(301, '/docs/introduction');
	}

	// Temporary workaround for Redirections in Gitpod Dedicated Docs
	if (url.pathname == '/docs/gitpod-dedicated/reference') {
		throw redirect(
			301,
			'/docs/gitpod-dedicated/reference/aws-iam-permission-requirements',
		);
	}

	if (url.pathname == '/docs/gitpod-dedicated/background') {
		throw redirect(
			301,
			'/docs/gitpod-dedicated/background/data-observability',
		);
	}

	if (url.pathname == '/docs/gitpod-dedicated/guides') {
		throw redirect(301, '/docs/gitpod-dedicated/guides/getting-started');
	}

	const doc = await getDocsBySlug(params.slug);

	if (!doc) {
		throw error(404, `Unable to find "${params.slug}" in the docs`);
	}

	return doc;
};
