import type { Action } from '$lib/types/action';

import type { Card } from '$lib/types/card';

export const secureParagraphs = [
	'Storing copies of your source code locally on countless unsecured devices and networks is a bad practice. At the same time, it has become a reality for many organisations to enable their employees to work remotely with BYOD policies.',
	'With Gitpod, your source code is safely stored in the cloud on the carbon-neutral Google Cloud Platform and never stored locally.',
	"No packages or dependencies are downloaded to users' devices. Gitpod developer environments run in the cloud and are short-lived, protecting your local machines and other corporate resources from malicious attacks through the execution of arbitrary code.",
];

export const programFeatures: Card[] = [
	{
		title: 'Security operations',
		text: '<p>Gitpod is a key part of our customers’ software development life cycle.  A top company priority is securing its product, people and systems.</p>',
		icon: {
			src: '/svg/icons/lock.svg',
			alt: 'Secure Lock',
		},
		link: {
			href: 'https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default',
			text: 'View trust center',
		},
		transform: 'scale(.8) translateX(-.7rem)',
	},
	{
		title: 'Product security',
		text: '<p>The platform was developed with security front and center, including how it’s built and deployed.</p>',
		icon: {
			src: '/svg/icons/secure.svg',
			alt: 'Secure',
		},
		link: {
			href: '/docs/references/security/faq',
			text: 'View security FAQ',
		},
		transform: 'scale(.8) translateX(-.7rem)',
	},
	{
		title: 'Compliance',
		text: '<p>Gitpod is SOC 2 Type II compliant and conducts pentesting at least annually. The company is also GDPR compliant.</p>',
		icon: {
			src: '/svg/security/compliance.svg',
			alt: 'SOC 2 & GDPR Compliance',
		},
		transform: 'scale(1.5) translateY(.2rem) translateX(.5rem)',
	},
	{
		title: 'Vulnerability disclosure',
		text: '<p>Gitpod gratefully welcomes feedback from users, researchers and the general public. Report concerns <a href="/contact/support?subject=security">here</a>.</p>',
		icon: {
			src: '/svg/icons/chat.svg',
			alt: 'chat',
		},
		link: {
			href: '/security/report',
			text: 'See Disclosure Policy',
		},
		transform: 'scale(.7) translateX(-.7rem)',
	},
];

export const thanksAction: Action = {
	title: 'Thanks',
	description:
		'Big thanks to the following people who responsibly disclosed their security findings.',
	link: {
		href: '/security/thanks',
		text: 'View contributors',
	},
};

export const reportAction: Action = {
	title: 'Security Vulnerability Disclosure Policy',
	description:
		'We welcome feedback from security researchers and the general public to help improve our security.',
	link: {
		href: '/security/report',
		text: 'View report process',
	},
};
export const assessmentAction: Action = {
	title: 'View our Security Self-Assessment',
	description:
		'You can find our CAIQ self-asssessment inside the Cloud Security Alliance STAR Registry. A framework dedicated to providing an industry-accepted way of transperency around cloud security controls.',
	link: {
		href: 'https://cloudsecurityalliance.org/star/registry/gitpod-gmbh',
		text: 'View our CAIQ self-assessment',
	},
};
