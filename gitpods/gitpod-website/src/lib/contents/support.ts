import type { Article } from '$lib/types/article';
import type { Card } from '$lib/types/card';

export const cards: Card[] = [
	{
		title: 'Getting started',
		text: 'Learn how to start your first workspace.',
		link: {
			href: '/docs/introduction/getting-started',
			text: 'Get started',
		},
	},
	{
		title: 'Videos',
		text: 'Watch videos to learn how to get started.',
		link: {
			href: '/screencasts',
			text: 'Watch videos',
		},
	},
	{
		title: 'Community',
		text: 'Always there to help and connect with like-minded people.',
		link: {
			href: 'https://www.gitpod.io/chat',
			text: 'Join Discord',
		},
	},
	{
		title: 'Docs',
		text: 'Explore the documentation to learn more about Gitpod.',
		link: {
			href: '/docs',
			text: 'View documentation',
		},
	},
	{
		title: 'Changelog',
		text: 'View the latest product improvements and updates.',
		link: {
			href: '/changelog',
			text: 'View changelog',
		},
	},
	{
		title: 'Blog',
		text: 'Read the latest news, article and opinions about Gitpod and CDEs.',
		link: {
			href: '/blog',
			text: 'View blogs',
		},
	},
	{
		title: 'Guides',
		text: 'Learn how to use Gitpod with any project.',
		link: {
			href: '/guides',
			text: 'View guides',
		},
	},
	{
		title: 'Gitpod samples',
		text: 'Explore sample projects & quickstarts to get started.',
		link: {
			href: 'https://github.com/gitpod-samples',
			text: 'Checkout Gitpod samples',
		},
	},
	{
		title: 'Status',
		text: 'Get informed on all past and current incidents.',
		link: {
			href: 'https://www.gitpodstatus.com/',
			text: 'View status page',
		},
	},
	{
		title: 'Account settings',
		text: 'Update your account preferences like editors, themes, variables, etc..',
		link: {
			href: 'https://gitpod.io/account',
			text: 'Go to account settings',
		},
	},
	{
		title: 'Support',
		text: 'Get help with any question or issue.',
		link: {
			href: '/contact/support',
			text: 'Contact support',
		},
	},
	{
		title: 'Report a bug or request a feature',
		text: '',
		link: {
			href: 'https://github.com/gitpod-io/gitpod/issues/new/choose',
			text: 'File an issue',
		},
	},
];

export const interestingReads: Card[] = [
	{
		title: '5h productivity gain per week/developer',
		text: "<p class='text-base'>Learn how customers leverage Gitpod to improve their developer experience, remote collaboration and security.</p>",
		link: {
			href: '/customers',
			text: 'View customer stories',
			btnVariant: 'primary',
		},
	},
	{
		title: 'CDEs the future of development',
		text: "<p class='text-base'>Our whitepaper explores a business perspective on CDEs and their benefits for engineering teams.</p>",
		link: {
			href: '/whitepaper/cde',
			text: 'Get white paper',
			btnVariant: 'secondary',
		},
	},
];

/** TODO: Clean popularArticles as we are not using it anywhere */
export const popularArticles: Article[] = [
	{
		title: 'Dev Environments as Code',
		text: 'Imagine that only a decade ago system administrators deployed, configured, and maintained software systems manually.',
		slug: 'dev-env-as-code',
	},
	{
		title: 'Gitpodify your project',
		text: 'If you follow this guide, you will end up with a button that launches pre-configured containers for your project, thus allowing everyone to check out your repository and run your code in a single click.',
		slug: 'gitpodify',
	},
	{
		title: 'I said goodbye to local development and so can you',
		text: 'Stop maintaining your local developer environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.',
		slug: 'i-said-goodbye-to-local-development-and-so-can-you',
	},
	{
		title: 'Gitpod Local Companion - localhost is going remote',
		text: 'While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost',
		slug: 'local-app',
	},
];
