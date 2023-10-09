import type { MarkdownMetadata } from '$content/types';

export interface ChangelogEntry extends MarkdownMetadata {
	title: string;
	excerpt: string;
	date: string;
	image: string;
	alt: string;
	fileName: string;
	tag?: string;
	ogImage?: string;
	customSlug?: string;
}
