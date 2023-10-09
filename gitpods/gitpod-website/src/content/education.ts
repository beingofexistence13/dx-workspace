import type { MarkdownMetadata, MdsvexImport } from './types';
import { parseReadContent } from './utils';
import { error } from '@sveltejs/kit';

export interface EducationCustomer extends MarkdownMetadata {
	title: string;
	excerpt: string;
	slug: string;
	image: string;
	date: string;
	pageTitle: string;
	pageDescription: string;
	keywords: string;
}

/**
 * Gets all the education customers metadata
 */
export function listEducationCustomers() {
	const customers = import.meta.glob<EducationCustomer>('./education/*.md', {
		eager: true,
		import: 'metadata',
	});

	return parseReadContent(customers);
}

export async function getEducationCustomer(slug: string) {
	try {
		const data: MdsvexImport<EducationCustomer> = await import(
			`./education/${slug}.md`
		);

		return {
			post: { ...data.metadata, slug },
			Component: data.default,
		};
	} catch {
		throw error(404, `Unable to find education customer "${slug}"`);
	}
}
