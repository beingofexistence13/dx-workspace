import type { MarkdownMetadata, MdsvexImport } from './types';

export interface DocsMetadata extends MarkdownMetadata {
	description: string;
	section: string;
	subsection?: string;
	title: string;
}

const rawDocs = import.meta.glob<MdsvexImport<DocsMetadata>>('./docs/**/*.md');

const docsMap = Object.fromEntries(
	Object.entries(rawDocs).map(([key, load]) => [
		key.replace('./docs/', '').replace('/index.md', '.md').slice(0, -3),
		{ load, isIndex: key.endsWith('index.md') },
	]),
);

export function listDocsSlugs() {
	return Object.keys(docsMap);
}

export async function getDocsBySlug(slug: string) {
	const doc = docsMap[slug];
	if (!doc) return null;

	const data = await doc.load();

	return {
		Component: data.default,
		metadata: data.metadata,
		isIndex: doc.isIndex,
	};
}
