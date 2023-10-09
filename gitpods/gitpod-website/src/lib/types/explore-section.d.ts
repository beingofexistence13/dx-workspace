type Link = {
	text: string;
	href: string;
};

export type ExploreSection = {
	title?: string;
	description?: string;
	note?: string;
	link?: Link;
	secondaryLink?: Link;
	secondaryLinkExist?: boolean = true;
	useKumquatIllustration?: boolean;
};
