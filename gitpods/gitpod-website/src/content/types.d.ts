export interface MarkdownHeading {
	title: string;
	slug: string;
	level: number;
	children: MarkdownHeading[];
}

export interface MarkdownMetadata {
	headings: MarkdownHeading[];
}

export interface MdsvexImport<T extends MarkdownMetadata = MarkdownMetadata> {
	// Technically not correct but needed to make language-tools happy
	default: ConstructorOfATypedSvelteComponent;
	metadata: T;
}
