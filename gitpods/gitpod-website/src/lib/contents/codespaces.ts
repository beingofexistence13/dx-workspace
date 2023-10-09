// @ts-ignore
import awsSvelte from '$lib/components/svgs/aws.svelte';
// @ts-ignore
import githubMarkSvelte from '$lib/components/svgs/github-mark.svelte';
import type { Card } from '$lib/types/card';
import type { verticalFeature } from '$lib/types/feature';
import type {
	FeatureTable,
	FeatureTableColumn,
	FeatureTableToc,
} from '../components/ui-library/feature-table/feature-table';

import type { Testimonial } from '$lib/types/testimonial';

export const testimonials: Testimonial[] = [
	{
		name: 'Alejandro Sánchez',
		avatar: 'alejandro-sanchez.jpeg',
		org: `
      <span>
        4GeeksAcademy
      </span>
    `,
		role: 'Founder of',
		text: `
        <p>
        We have tested Codespaces thoroughly this week, and it was more complex to configure than Gitpod, it's harder to use for students, and documentation is way worse.
        </p>
      `,
	},
	/**
	 * Avatar image taken from: https://github.com/soup-bowl
	 * Blog post: https://soupbowl.blog/2023/02/a-year-of-cloud-code-in-review
	 */
	{
		name: 'Casey LP',
		avatar: 'casey-lp.jpeg',
		org: `
    <span>
     Soupbowl.blog
     </span>
    `,
		role: 'DevOps Engineer and Author of',
		text: `
      <p>
      After a year spent with Gitpod and Codespaces, my particular stand out choice is - Gitpod. I've found Gitpod to be more flexible, easier to start with, generally more stable, and comes with a vibrant and helpful community over on Discord.
      </p>
    `,
	},
	{
		name: 'Tom Preston Werner',
		avatar: 'tom-preston-werner.jpg',
		org: `<span>
          GitHub
        </span>
        and
        <span>
          RedwoodJS
        </span>`,
		role: 'Creator and Co-founder of',
		text: `
      <p>
      Gitpod totally changed the development velocity for RedwoodJS - it removed any issues related to configurations of dev environments and made it incredibly easy to contribute.
      </p>
    `,
	},
];

export const codespacesToc: FeatureTableToc[] = [
	{
		type: 'text',
		data: {
			text: 'License',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Free Plan',
			tooltip:
				'Hours included in free plan for standard workspace (4 cores)',
		},
	},
	{
		type: 'image',
		data: {
			text: 'GitHub Integration',
			image: githubMarkSvelte,
		},
	},
	{
		type: 'image',
		data: {
			text: 'GitLab Integration',
			image: {
				alt: 'GitLab',
				path: '/svg/gitlab.svg',
			},
		},
	},
	{
		type: 'image',
		data: {
			text: 'Bitbucket Integration',
			image: {
				alt: 'Bitbucket',
				path: '/svg/bitbucket.svg',
			},
		},
	},
	{
		type: 'text',
		data: {
			text: 'Prebuilds',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Snapshots',
		},
	},
	{
		type: 'text',
		data: {
			text: 'VS Code extensions',
		},
	},
	{
		type: 'text',
		data: {
			text: 'iPad Support',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Virtual Desktop (VNC)',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Desktop VS Code',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Multi-IDE Support',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Private SaaS option',
			tooltip:
				"<a href='/dedicated' target='_blank'>Gitpod Dedicated</a> is a fully isolated, single-tenant deployment of Gitpod",
		},
	},
];

export const gitpodColumns: FeatureTableColumn = {
	isHighlighted: true,
	header: {
		headline: 'Gitpod',
		image: {
			alt: 'gitpod',
			path: '/images/gitpod-logo.svg',
		},
	},
	entries: [
		{
			items: [
				{
					term: 'License',
					text: 'Open Source',
				},
				{
					term: 'Free Plan',
					text: '50h',
				},
				{
					term: 'GitHub Integration',
					availability: true,
				},
				{
					term: 'GitLab Integration',
					availability: true,
				},
				{
					term: 'Bitbucket Integration',
					availability: true,
				},
				{
					term: 'Prebuilds',
					availability: true,
				},
				{
					term: 'Snapshots',
					availability: true,
				},
				{
					term: 'VS Code extensions',
					availability: true,
				},
				{
					term: 'iPad Support',
					availability: true,
				},
				{
					term: 'Virtual Desktop (VNC)',
					availability: true,
				},
				{
					term: 'Desktop VS Code',
					availability: true,
				},
				{
					term: 'Multi-IDE Support',
					availability: true,
				},
				{
					term: 'Private SaaS option',
					availability: true,
				},
			],
		},
	],
};

export const codespacesColumn: FeatureTableColumn = {
	isHighlighted: false,
	header: {
		headline: 'Codespaces',
		// @ts-ignore
		image: githubMarkSvelte,
	},
	entries: [
		{
			items: [
				{
					term: 'License',
					text: 'Proprietary',
				},
				{
					term: 'Free Plan',
					text: '30h',
				},
				{
					term: 'GitHub Integration',
					availability: true,
				},
				{
					term: 'GitLab Integration',
					availability: false,
				},
				{
					term: 'Bitbucket Integration',
					availability: false,
				},
				{
					term: 'Prebuilds',
					availability: true,
				},
				{
					term: 'Snapshots',
					availability: false,
				},
				{
					term: 'VS Code extensions',
					availability: true,
				},
				{
					term: 'iPad Support',
					availability: true,
				},
				{
					term: 'Virtual Desktop (VNC)',
					availability: true,
				},
				{
					term: 'Desktop VS Code',
					availability: true,
				},
				{
					term: 'Multi-IDE Support',
					availability: true,
				},
				{
					term: 'Private SaaS option',
					availability: false,
				},
			],
		},
	],
};

export const automationFirstFeature: verticalFeature = {
	title: 'Automation-first',
	paragraph:
		'Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of ephemeral workspaces, you’ll never want to go back to long-lived manually-maintained environments.',
	moreButton: {
		href: 'https://www.gitpod.io/docs/configure/workspaces',
		text: 'More on Gitpod YAML',
	},
};

export const codespacesComparison: FeatureTable = {
	toc: codespacesToc,
	columns: [gitpodColumns, codespacesColumn],
};

export const featureCards: {
	card: Card;
	pill?: { text: string; variant: 'pink' | 'orange' | 'gray' | 'violet' };
}[] = [
	{
		card: {
			title: 'Gitpod.io',
			text: 'Use Gitpod in our secure cloud with minimal setup time and effort. Scale users as you need with full flexibility. Reduce operational overhead.',
			icon: {
				src: '/svg/icons/cloud.svg',
				alt: 'Cloud Icon',
			},
			link: {
				href: 'https://gitpod.io/login/',
				text: 'Start for free',
			},
		},
	},
	{
		pill: {
			text: 'Early access',
			variant: 'pink',
		},
		card: {
			title: 'Gitpod Dedicated',
			text: 'In your cloud, get a dedicated, private instance of Gitpod managed by us. Set up VPC peering and private links to your dev resources. Best for large teams with high security and compliance requirements.',
			icon: {
				src: '/svg/icons/cloud.svg',
				alt: 'Cloud Icon',
			},
			link: {
				href: '/contact/sales?subject=enterprise',
				text: 'Talk to sales',
			},
		},
	},
];
