import type { MarkdownMetadata, MdsvexImport } from './types';
import { parseReadContent } from './utils';
import { error } from '@sveltejs/kit';

export interface Guide extends MarkdownMetadata {
	author: string;
	date: string;
	excerpt: string;
	slug: string;
	teaserImage: string;
	image: string;
	title: string;
	tags?: string[];
}

/**
 * Gets all the guides metadata
 */
export function listGuides() {
	const guides = import.meta.glob<Guide>('./guides/*.md', {
		eager: true,
		import: 'metadata',
	});

	return parseReadContent(guides);
}

export async function getGuide(slug: string) {
	try {
		const data: MdsvexImport<Guide> = await import(`./guides/${slug}.md`);

		return {
			guide: { ...data.metadata, slug },
			Component: data.default,
		};
	} catch {
		throw error(404, `Unable to find guide "${slug}"`);
	}
}
