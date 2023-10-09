import type { MarkdownMetadata } from '$content/types';

export interface SecurityLog extends MarkdownMetadata {
	title: string;
	excerpt: string;
	date: string;
	alt: string;
}
