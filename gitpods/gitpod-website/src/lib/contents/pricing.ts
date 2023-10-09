import type { Pricing, FeatureList } from '$lib/types/pricing';
import { isEurope } from '$lib/utils/helpers';
import type { Card } from '$lib/types/card';
import type {
	FeatureTable,
	FeatureTableColumn,
	FeatureTableToc,
} from '../components/ui-library/feature-table/feature-table';
import type { FAQ } from '../types/faq';
import githubMarkSvelte from '$lib/components/svgs/github-mark.svelte';
import { dedicatedPricingSalesCtaFeatureFlagStatus } from '$lib/utils/feature-flag-provider';

export const pricingPlans: Pricing[] = [
	{
		title: `${isEurope() ? '€' : '$'}0`,
		description: 'For individuals trialing Gitpod Cloud.',
		price: 'Free',
		priceDuration: 'hour',
		features: [
			'50 hours per month for free',
			'access to basic Gitpod Cloud features',
		],
		btnText: 'Start for free',
		btnHref: 'https://gitpod.io/login',
		trackingName: 'cloud-starter',
	},
	{
		title: `${isEurope() ? '€' : '$'}0.36`,
		description: 'Hosted and managed by Gitpod.',
		price: 'Pay-as-you-go',
		priceDuration: 'hour',
		features: [
			`no installation`,
			'zero platform maintenance or overhead',
			`multi-tenant set-up to minimize cloud costs`,
		],
		btnText: 'Get started',
		btnHref: 'https://gitpod.io/login',
		spiced: true,
		trackingName: 'cloud-pay-as-you-go',
	},
];
export const dedicatedPricingPlans: Pricing[] = [
	{
		title: 'Custom',
		description: 'Hosted by you, managed by Gitpod.',
		price: 'Gitpod Dedicated',
		priceDuration: 'user/month',
		features: [
			'single-tenant installation for maximum security and control',
			'data and source code isolation',
			'access to private networking',
			'SSO, custom SLAs and dedicated support',
		],
		btnText: `${
			dedicatedPricingSalesCtaFeatureFlagStatus
				? 'Talk to sales'
				: 'Contact sales'
		}`,
		btnHref: '/contact/sales',
		trackingName: 'dedicated',
		experimentName: `${
			dedicatedPricingSalesCtaFeatureFlagStatus
				? 'dedicated_pricing_cta_talk_to_sales_clicked'
				: 'dedicated_pricing_cta_contact_sales_clicked'
		}`,
		spiced: true,
	},
];

export const cloudFeatures: FeatureList[] = [
	{
		title: 'Gitpod Cloud',
		description: 'Hosted and managed by Gitpod.',
		features: [
			`<div class='block'><b>No installation required:</b> get started right away on Gitpod.io</div>`,
			`<div class='block'><b>No commitments:</b> consumption-based usage that you pay-as-you-go</div>`,
			`<div class='block'><b>Minimize costs:</b> multi-tenant set-up allows for organizations to minimize cloud costs</div>`,
			`<div class='block'><b>Free trial available:</b> 50 hours free per month with access to basic Gitpod Cloud functionality</div>`,
		],
		btnText: 'Start for free',
		btnHref: 'https://gitpod.io/login',
	},
];

export const dedicatedFeatures: FeatureList[] = [
	{
		title: 'Gitpod Dedicated',
		description: 'Hosted by you, managed by Gitpod.',
		features: [
			`<div class='block'><b>Enhanced security:</b> single-tenant installations ensure source code, dependencies and dev environments remain private and protected</div>`,
			`<div class='block'><b>Access private resources:</b> run within your VPC to access resources that aren’t exposed to the internet</div>`,
			`<div class='block'><b>Support for air gapped networks:</b> protected from unauthorized data transfers, malware infiltration and external network connections</div>`,
			`<div class='block'><b>Built for enterprise:</b> SSO, custom SLAs and dedicated support experts to help scale your team</div>`,
		],
		btnText: 'Talk to sales',
		btnHref: '/contact/sales',
	},
];

export const empowermentFeatures: Card[] = [
	{
		title: 'Pro OSS developers',
		text: 'Professional open source developers can apply for our OSS program.',
		link: {
			text: 'Apply today',
			href: '/discover/opensource',
		},
	},
	{
		title: 'Startups',
		text: 'Startups can get all our services at a 50% discount, for up to 2 years, no matter how fast your developers and workloads scale.',
		link: {
			text: 'View Startup Program',
			href: '/discover/startups',
		},
	},
];

export const starterPlanTableData: FeatureTableColumn = {
	link: {
		href: 'https://gitpod.io/login',
		label: 'Start for free',
	},
	header: {
		headline: 'Starter',
	},
	entries: [
		{
			users: 'Free',
			items: [
				{
					isHeadline: true,
					term: 'CREDIT LOGIC',
					text: '',
				},
				{
					term: 'Base price',
					isCurrency: true,
					text: '0/ mo',
				},
				{
					term: 'Credits in base price',
					text: '500',
				},
				{
					term: 'Additional credits',
					availability: false,
				},
				{
					isHeadline: true,
					term: 'FEATURES',
					text: '',
				},
				{
					term: 'Workspace classes',
					availability: true,
				},
				{
					term: 'Parallel workspaces',
					text: '4',
				},
				{
					term: 'Inactivity timeout',
					text: '30 mins',
				},
				{
					term: 'Timeout boost',
					availability: false,
				},
				{
					term: 'Public & private repos',
					availability: true,
				},
				{
					term: 'Snapshots',
					availability: true,
				},
				{
					term: 'Prebuilds',
					availability: true,
				},
				{
					term: 'Encrypted backups',
					availability: true,
				},
				{
					term: 'Multi-IDE support',
					availability: true,
				},
				{
					term: 'GitLab',
					availability: true,
				},
				{
					term: 'GitHub',
					availability: true,
				},
				{
					term: 'Bitbucket',
					availability: true,
				},
				{
					isHeadline: true,
					term: 'DEPLOYMENT',
					text: '',
				},
				{
					term: 'Private, isolated instance',
					availability: false,
				},
				{
					term: 'Private connections',
					availability: false,
				},
				{
					term: 'Cloud region of choice',
					availability: false,
				},
				{
					term: 'Run in your cloud',
					availability: false,
				},
				{
					isHeadline: true,
					term: 'ADMIN & SUPPORT',
					text: '',
				},
				{
					term: 'Single sign-on',
					availability: false,
				},
				{
					term: 'Centralized organization billing',
					availability: true,
				},
				{
					term: 'Admin dashboard',
					availability: false,
				},
				{
					term: 'Premium support',
					availability: false,
				},
				{
					term: 'SLAs',
					availability: false,
				},
			],
		},
	],
};

export const organizationPlanTableData: FeatureTableColumn = {
	link: {
		href: 'https://gitpod.io/login',
		label: 'Start for free',
	},
	header: {
		headline: 'Organization',
	},
	entries: [
		{
			users: 'Pay-as-you-go',
			items: [
				{
					isHeadline: true,
					term: 'CREDIT LOGIC',
					text: '',
				},
				{
					term: 'Base price',
					isCurrency: true,
					text: '9/ mo',
				},
				{
					term: 'Credits in base price',
					text: '1000',
				},
				{
					term: 'Additional credits',
					isCurrency: true,
					text: '0.036 / credit',
				},
				{
					isHeadline: true,
					term: 'FEATURES',
					text: '',
				},
				{
					term: 'Workspace classes',
					availability: true,
				},
				{
					term: 'Parallel workspaces',
					text: '16',
				},
				{
					term: 'Inactivity timeout',
					text: '60 mins',
				},
				{
					term: 'Timeout boost',
					availability: true,
				},
				{
					term: 'Public & private repos',
					availability: true,
				},
				{
					term: 'Snapshots',
					availability: true,
				},
				{
					term: 'Prebuilds',
					availability: true,
				},
				{
					term: 'Encrypted backups',
					availability: true,
				},
				{
					term: 'Multi-IDE support',
					availability: true,
				},

				{
					term: 'GitLab',
					availability: true,
				},
				{
					term: 'GitHub',
					availability: true,
				},
				{
					term: 'Bitbucket',
					availability: true,
				},
				{
					isHeadline: true,
					term: 'DEPLOYMENT',
					text: '',
				},
				{
					term: 'Private, isolated instance',
					availability: false,
				},
				{
					term: 'Private connections',
					availability: false,
				},
				{
					term: 'Cloud region of choice',
					availability: false,
				},
				{
					term: 'Run in your cloud',
					availability: false,
				},
				{
					isHeadline: true,
					term: 'ADMIN & SUPPORT',
					text: '',
				},
				{
					term: 'Single sign-on',
					availability: false,
				},
				{
					term: 'Centralized organization billing',
					availability: true,
				},
				{
					term: 'Admin dashboard',
					availability: false,
				},
				{
					term: 'Premium support',
					availability: false,
				},
				{
					term: 'SLAs',
					availability: false,
				},
			],
		},
	],
};

export const dedicatedPlanTableData: FeatureTableColumn = {
	isHighlighted: true,
	link: {
		href: '/contact/sales',
		label: 'Talk to sales',
	},
	header: {
		headline: 'Enterprise',
	},
	entries: [
		{
			users: 'Custom',
			items: [
				{
					isHeadline: true,
					term: 'CREDIT LOGIC',
					text: '',
				},
				{
					term: 'Base price',
					text: 'Custom',
				},
				{
					term: 'Credits in base price',
					text: 'Custom',
				},
				{
					term: 'Additional credits',
					text: 'Custom',
				},
				{
					isHeadline: true,
					term: 'FEATURES',
					text: '',
				},
				{
					term: 'Workspace classes',
					availability: true,
				},
				{
					term: 'Parallel workspaces',
					text: 'Custom',
				},
				{
					term: 'Inactivity timeout',
					text: '60 mins',
				},
				{
					term: 'Timeout boost',
					availability: true,
				},
				{
					term: 'Public & private repos',
					availability: true,
				},
				{
					term: 'Snapshots',
					availability: true,
				},
				{
					term: 'Prebuilds',
					availability: true,
				},
				{
					term: 'Encrypted backups',
					availability: true,
				},
				{
					term: 'Multi-IDE support',
					availability: true,
				},
				{
					term: 'GitLab',
					availability: true,
				},
				{
					term: 'GitHub',
					availability: true,
				},
				{
					term: 'Bitbucket',
					availability: true,
				},
				{
					isHeadline: true,
					term: 'DEPLOYMENT',
					text: '',
				},
				{
					term: 'Private, isolated instance',
					availability: true,
				},
				{
					term: 'Private connections',
					availability: true,
				},
				{
					term: 'Cloud region of choice',
					availability: true,
				},
				{
					term: 'Run in your cloud',
					availability: true,
				},
				{
					isHeadline: true,
					term: 'ADMIN & SUPPORT',
					text: '',
				},
				{
					term: 'Single sign-on',
					availability: true,
				},
				{
					term: 'Centralized organization billing',
					availability: true,
				},
				{
					term: 'Admin dashboard',
					availability: true,
				},
				{
					term: 'Premium support',
					availability: true,
				},
				{
					term: 'SLAs',
					availability: true,
				},
			],
		},
	],
};

export const pricingTableToc: FeatureTableToc[] = [
	{
		type: 'text',
		data: {
			text: '',
		},
	},
	{
		type: 'tooltip',
		isHeadline: true,
		headlineText: 'CREDIT LOGIC',
	},
	{
		type: 'tooltip',
		data: {
			text: 'Base price',
			tooltip: 'Minimum price charged per month.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Credits in base price',
			tooltip:
				'Credits are used to measure Gitpod usage. <br/>Note that the included credits for the individual paid plan cost significantly less per-credit than the standard pay-as-you-go rate. <br/> Included credits expire at the end of each month.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Additional credits',
			tooltip:
				'Credits are used to measure Gitpod usage. With flexible pricing, you pay for usage at a per-credit rate.',
		},
	},
	{
		type: 'tooltip',
		isHeadline: true,
		headlineText: 'FEATURES',
	},
	{
		type: 'tooltip',
		data: {
			text: 'Workspace classes',
			tooltip:
				'Choose between standard and large workspaces. <br/>Use project settings to configure workspace classes. Projects are created in an organization.<br/>Different classes (sizes) of workspaces are metered at different rates.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Parallel workspaces',
			tooltip: 'Run multiple workspaces at the same time.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Inactivity timeout',
			tooltip: 'Time after which workspaces are automatically stopped.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Timeout boost',
			tooltip: 'Manually extend workspace timeout up to 24 hours.',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Public & private repos',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Snapshots',
			tooltip:
				'Create a copy of your workspace by sharing a snapshot with your organization.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Prebuilds',
			tooltip:
				'Use projects (in an organization) to activate and configure prebuilds. <br/>Prebuilds to continuously build your Git branches, so your organization can start coding right away..',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Encrypted backups',
			tooltip:
				"Keeps your data safe. More on <a href='/security'>security</a>.",
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Multi-IDE support',
			tooltip:
				"Connect Gitpod with your favourite IDE. View <a href='/docs/references/ides-and-editors'>docs/IDE</a> to see all suported IDE’s.",
		},
	},
	{
		type: 'image',
		data: {
			text: 'GitLab',
			image: {
				path: '/svg/gitlab.svg',
				alt: 'GitLab',
			},
		},
	},
	{
		type: 'image',
		data: {
			text: 'GitHub',
			image: githubMarkSvelte,
		},
	},
	{
		type: 'image',
		data: {
			text: 'Bitbucket',
			image: {
				path: '/svg/bitbucket.svg',
				alt: 'Bitbucket',
			},
		},
	},
	{
		type: 'tooltip',
		isHeadline: true,
		headlineText: 'DEPLOYMENT',
	},
	{
		type: 'tooltip',
		data: {
			text: 'Private, isolated instance',
			tooltip:
				'A single-tenant installation of Gitpod that is exclusive to you. It runs in its own cloud account, and no Gitpod resources are shared with other customers. ',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Private connections',
			tooltip:
				'Connect directly to your internal or private development resources (such as source control management system, development databases) via a private connection. No need to run your own VPN.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Cloud region of choice',
			tooltip:
				'Pick the AWS region closest to you - minimising latency and ensuring compliance regarding data residency restrictions.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Run in your cloud',
			tooltip:
				"Run a fully isolated instance of <a href='/dedicated'>Gitpod Dedicated</a> in your cloud account or ours",
		},
	},
	{
		type: 'tooltip',
		isHeadline: true,
		headlineText: 'ADMIN & SUPPORT',
	},
	{
		type: 'tooltip',
		data: {
			text: 'SSO',
			tooltip: 'Single sign-on',
		},
	},
	{
		type: 'text',
		data: {
			text: 'Centralized organization billing',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Admin dashboard',
			tooltip:
				'Administer your Gitpod instance with a view on all users, organizations and projects.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'Premium support',
			tooltip: 'Private Slack channel and dedicated success managers.',
		},
	},
	{
		type: 'tooltip',
		data: {
			text: 'SLAs',
			tooltip: 'Custom service level agreements.',
		},
	},
];

export const pricingTable: FeatureTable = {
	toc: pricingTableToc,
	columns: [
		starterPlanTableData,
		organizationPlanTableData,
		dedicatedPlanTableData,
	],
};

export const faqOldPlan: FAQ = {
	headline: '',
	items: [
		{
			title: 'I am on one of the old plans. Where can I find the details of my plan?',
			content: `To see the details of your old plan, login to <a href="https://gitpod.io">gitpod.io</a> and go to the plans or organization plans section of your <a href="https://gitpod.io/settings">account settings</a>`,
		},
		{
			title: 'I am on one of the old plans. How can I switch to the new pricing model?',
			content: `To use large workspaces with the new pricing, you first need to cancel your existing plan in your <a href="https://gitpod.io/settings">account settings</a> or organization settings`,
		},
		{
			title: 'I am on one of the old plans. How long can I continue to use the old pricing model?',
			content: `Existing paid plans will keep working until the end of March, 2023. However, we recommend you look at the new prices`,
		},
	],
};

export const pricingFAQ: FAQ = {
	headline: 'FAQs',
	items: [
		{
			title: 'Can I always use Gitpod for free?',
			content:
				'<p> Yes! Gitpod is always for free for public and private repositories for up to 50h per month. If you need more hours or would like to unlock more features, you can upgrade your subscription at any time. If you’re a professional open-source developer and need more hours, you can apply to our free <a href="/discover/opensource">Professional Open Source plan</a> </p>',
		},
		{
			title: 'How can I pay?',
			content:
				'<p>You can pay with MasterCard, Visa card, American Express Card or UnionPay.</p><div class="flex my-xx-small space-x-xx-small"> <img class="mr-4" src="/svg/brands/mastercard.svg" alt="Mastercard" width="52" height="40" /> <img class="mr-4" src="/svg/brands/visa.svg" alt="Visa" width="72" height="40" /> <img class="mr-4" src="/svg/brands/amex.svg" alt="AmEx Logo" width="50" height="36" /><img src="/svg/brands/union-pay.svg" alt="Union Pay Logo" width="50" height="36" /></div> <p>For enterprise customers, additional payment options are available. Please <a href="/contact/sales">Talk to sales</a> for annual billing.</p> ',
		},
		{
			title: 'Can I create an organization plan?',
			content:
				'<p> Sure, if you would like to manage subscriptions for a whole organization on a single invoice, you can create a <a href="https://gitpod.io/orgs/new">organization plan.</a> </p> <p> In case you need more information on how to setup an organization subscription, visit <a href="/docs/configure/orgs">gitpod.io/docs/configure/orgs</a> </p>',
		},
		{
			title: 'Can I change my subscription at any time?',
			content:
				'<p> Yes, you can upgrade or downgrade whenever you want on <a href="https://gitpod.io/billing/">gitpod.io/billing</a >. Your billing cycle starts with the creation date of your subscription. After 30 days it will automatically renew itself. </p> <p> If you choose to upgrade, the pricing difference will be added to your next month’s invoice. If you choose to downgrade, you’ll be credited on your next month’s invoice </p>',
		},
		{
			title: 'What if I decide to cancel?',
			content:
				'<p> If you wish to stop using Gitpod, you may cancel your subscription at any time. Your cancellation will take effect after that month’s billing cycle </p>',
		},
		{
			title: 'What are the benefits of Gitpod?',
			content:
				'<p> Gitpod enables cloud based development without friction. Pre-configured and automated dev environments prevent "works on my machine issues", let you work on multiple issues or features at once and let\'s you easily collaborate with colleagues. All in your favorite IDE with the tools and extensions you love. In the browser or in your desktop version </p>',
		},
		{
			title: 'Is Gitpod secure?',
			content:
				'<p> Gitpod is secure by design and at the heart of what we do. Your source code is safely stored in the cloud, never locally. Each Gitpod workspace and prebuild runs on a secured single-use container providing fast startup times without compromising on security. Learn more at <a href="/security">gitpod.io/security</a>. Gitpod is SOC 2 Type II certified </p>',
		},
		{
			title: 'Still have more questions?',
			content:
				'<p> We are happy to answer them, please <a href="/contact/support">Contact support</a></p>',
		},
	],
};

export const cards: Card[] = [
	{
		title: 'One-click onboarding',
		text: 'With a single click, developers can launch perfectly configured environments and start coding instantly.',
	},
	{
		title: 'Configured to your spec',
		text: 'Pre-configured environments, out-of-the-box, eliminate the need to setup any dev environments: local, VDI or homegrown.',
	},
	{
		title: 'Bring-your-own tool',
		text: 'Integrate into your orgs existing development infrastructure, from git provider to IDE to cloud.',
	},
	{
		title: 'Secure code',
		text: 'Source code is centrally and safely stored in the cloud, never locally.',
	},
	{
		title: 'Works on any machine',
		text: 'Work with the same tools, libraries, and dependencies, regardless of operating system, device or IDE.',
	},
	{
		title: 'Share snapshots',
		text: 'Seamlessly share dev environment configurations, changes to configurations, or real-time projects for easier collaboration.',
	},
	{
		title: 'One config to rule all',
		text: 'Shared development setup and isolated environments means less time worry about configuration drift and broken dev environments.',
	},
	{
		title: 'Fix vulnerabilities, centrally',
		text: 'Admins control configs and image globally, and can fix vulnerabilities instantly across an entire team.',
	},
];
