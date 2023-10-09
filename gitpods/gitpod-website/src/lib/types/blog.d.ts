import type { MarkdownMetadata } from '$content/types';

export type BlogTag =
	| 'Company building'
	| 'Engineering'
	| 'Gitpod updates'
	| 'Developer experience'
	| '';

export interface BlogPost extends MarkdownMetadata {
	author?: string;
	date?: string;
	excerpt: string;
	image: string;
	slug?: string;
	href?: string;
	tags?: BlogTag[];
	subtitle?: string;
	teaserImage: string;
	title: string;
	isNotAnActualPost?: boolean;
	type?: string;
}
