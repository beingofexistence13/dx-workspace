import type { Feature } from '$lib/types/feature';
import type { Quote } from '$lib/types/quote';
// @ts-ignore
import Workspaces from '$lib/components/workspaces.svelte';
import { linuxSource } from './terminal';
import type { Card } from '$lib/types/card';
import type { ExploreSection } from '$lib/types/explore-section';
import {
	codeAnywhereFeature,
	multiTrackDevelopmentFeature,
} from './home/features';
import type { FAQ } from '$lib/types/faq';
// @ts-ignore
import redwoodjsSvelte from '$lib/components/svgs/customers/redwoodjs.svelte';
// @ts-ignore
import prismaSvelte from '$lib/components/svgs/opensource/prisma.svelte';
// @ts-ignore
import prometheusSvelte from '$lib/components/svgs/opensource/prometheus.svelte';
// @ts-ignore
import theiaSvelte from '$lib/components/svgs/opensource/theia.svelte';
import openVscodeSvelte from '$lib/components/svgs/opensource/open-vscode.svelte';
import werftSvelte from '$lib/components/svgs/opensource/werft.svelte';

export const quotes: Quote[] = [
	{
		text: 'Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!',
		author: 'Tom Preston-Werner',
		jobTitle: 'Co-founder of GitHub',
		companyLogo: redwoodjsSvelte,
		link: { href: '/customers/redwoodjs', text: 'View Customer Story' },
		img: {
			src: '/images/opensource/mojombo.jpg',
			square: true,
			alt: '',
		},
	},
	{
		text: "I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud development environments.",
		author: 'Johannes Schickling',
		jobTitle: 'Co-founder of Prisma',
		companyLogo: prismaSvelte,
		img: {
			src: '/images/opensource/schickling.jpg',
			square: true,
			alt: '',
		},
	},
	{
		text: `With Gitpod, I can review at any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.`,
		author: 'Julius Volz',
		jobTitle: 'Co-founder of Prometheus',
		companyLogo: prometheusSvelte,
		img: {
			src: '/images/opensource/juliusv.jpg',
			square: true,
			alt: '',
		},
	},
];

export const features: Feature[] = [
	{
		title: 'Onboard contributors in seconds',
		paragraph:
			'With Gitpod, contributing to your project becomes seamless. Forget tedious setups and guides; now, a single click is all it takes.',
		previewComponent: Workspaces,
	},
	{
		...codeAnywhereFeature,
		paragraph:
			'A Chromebook or even an iPad will work just fine. Anyone can contribute, no matter their hardware.',
	},
	{
		title: 'Collaboration made easy',
		paragraph:
			'Easily share dev environment configurations, changes to configurations, or real-time projects for easier collaboration.',
		lottie: {
			src: '/lottie/share_workspace.json',
			id: 'share-workspace',
		},
	},
	{
		title: 'Accept contributions safely',
		paragraph:
			'Source code is centrally and safely stored in the cloud, never locally, inhibiting malicious actors from infiltrating your workstations.',
		terminal: {
			source: linuxSource,
			dark: true,
			shadow: false,
			narrow: true,
			skipToEnd: true,
		},
	},
];

export const programBenefits: Card[] = [
	{
		icon: {
			src: '/svg/media-kit/logo-mark.svg',
			alt: 'Gitpod',
		},
		transform: 'scale(.95)',
		title: 'Free Gitpod Cloud',
		text: 'Maintainers get 2,500 credits per month for use Gitpod Cloud. This is equivalent to 250 hours of Standard workspace usage.',
	},
	{
		icon: {
			src: '/svg/icons/chat.svg',
			alt: 'Personal onboarding',
			transform: 'scale(.85)',
		},
		title: 'Onboarding support',
		text: 'One of our community engineers will be happy to help you get the most out of using CDEs for your open-source projects.',
	},
];

export const faqs: FAQ = {
	headline: 'FAQs',
	items: [
		{
			title: "I'm not eligible but still want to use Gitpod",
			content:
				"We have a very generous <a href='/pricing'>free plan</a> which includes 500 credits, or up to 50h a month of Standard workspace usage, including private repos.",
		},
	],
};

export const cards: Card[] = [
	{
		icon: {
			src: '/svg/opensource/openvsx.svg',
			alt: 'Open VSX Registry',
		},
		title: 'Open VSX Registry',
		text: 'A marketplace for open-source VS Code extensions that can be used for any compatible editor.',
		link: {
			href: 'https://github.com/eclipse/openvsx',
			text: 'View on GitHub',
		},
	},
	{
		icon: {
			src: '/svg/opensource/leeway.svg',
			alt: 'Leeway',
		},
		title: 'Leeway',
		text: 'Leeway is a heavily caching build system for Go, Yarn and Docker projects.',
		link: {
			href: 'https://github.com/gitpod-io/leeway',
			text: 'View on GitHub',
		},
	},
	{
		icon: theiaSvelte,
		title: 'Theia',
		text: 'An extensible framework to develop full-fledged multi-language Cloud & Desktop IDEs.',
		link: {
			href: 'https://github.com/eclipse-theia/theia',
			text: 'View on GitHub',
		},
	},
	{
		icon: openVscodeSvelte,
		transform: 'scale(1.5)',
		title: 'OpenVSCode',
		text: 'A version of VS Code that runs a server on a remote machine and allows access through a modern web browser.',
		link: {
			href: 'https://github.com/gitpod-io/openvscode-server',
			text: 'View on GitHub',
		},
	},
	{
		icon: {
			src: '/svg/opensource/dazzle.svg',
			alt: 'Dazzle',
		},
		title: 'Dazzle',
		text: 'An Docker/OCI image builder to build independent layers where a change to one layer does not invalidate the ones sitting "above" it.',
		link: {
			href: 'https://github.com/gitpod-io/dazzle/',
			text: 'View on GitHub',
		},
	},
	{
		icon: werftSvelte,
		title: 'Werft',
		text: 'Werft is a Kubernetes-native CI system. It knows no pipelines, just jobs and each job is a Kubernetes pod. What you do in that pod is up to you.',
		link: {
			href: 'https://github.com/csweichel/werft',
			text: 'View on GitHub',
		},
	},
];

export const exploreContents: ExploreSection = {
	title: 'Get started',
	description:
		'Spend less time reviewing pull-requests or onboarding contributors, and more time building great things. ',
	link: {
		text: 'Apply now',
		href: 'https://bit.ly/gitpod-for-opensource-application-form',
	},
	secondaryLinkExist: false,
};
