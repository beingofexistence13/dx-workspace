import type { MarkdownMetadata, MdsvexImport } from './types';
import { parseReadContent } from './utils';
import { error } from '@sveltejs/kit';

export interface Customer extends MarkdownMetadata {
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
 * Gets all the customers metadata
 */
export function listCustomers() {
	const customers = import.meta.glob<Customer>('./customers/*.md', {
		eager: true,
		import: 'metadata',
	});

	return parseReadContent(customers);
}

export async function getCustomer(slug: string) {
	try {
		const data: MdsvexImport<Customer> = await import(
			`./customers/${slug}.md`
		);

		return {
			post: { ...data.metadata, slug },
			Component: data.default,
		};
	} catch {
		throw error(404, `Unable to find customer "${slug}"`);
	}
}
