import type { Feature, verticalFeature } from '$lib/types/feature';
import { terminalSource, linuxSource } from '../terminal';
// @ts-ignore
import Workspaces from '$lib/components/workspaces.svelte';
import type { Card } from '$lib/types/card';

export const multiTrackDevelopmentFeature: Feature = {
	title: 'Multi track development with ease',
	paragraph:
		'You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const reduceDeveloperToil: Feature = {
	title: 'Collaborate with anyone',
	paragraph:
		'From QA to PMs to designers, anyone can preview, open or share a dev environment. Jump in with your immediate team or cross-functional stakeholders to preview changes live and shorten feedback cycles.',
	lottie: {
		src: '/lottie/share_workspace.json',
		id: 'share-workspace',
	},
};

export const worksOnAnyMachineFeature: Feature = {
	title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
	paragraph:
		'No more compatibility issues. Developers can work with the same tools, libraries, and dependencies, regardless of operating system, with a single click.',
	previewComponent: Workspaces,
};

export const collaborationFeature: Feature = {
	title: 'Collaborate with ease',
	paragraph:
		'Engineers, designers, product managers. With Gitpod, anyone on the team can run code with ease. Yes, your CTO as well 🫶</br></br>Share running workspaces for pair programming, use port forwarding or share a snapshot of your CDE.',
	// image: {
	//   src: "/images/features/collaboration.png",
	//   alt: "Collaboration",
	//   classNames: "shadow-medium",
	//   styles: "border-radius: 7px",
	// },
	lottie: {
		src: '/lottie/share_workspace.json',
		id: 'share-workspace',
	},
};

export const secureYourSoftwareSupplyChainFeature: Feature = {
	title: 'Secure your software supply chain',
	paragraph:
		"<a href='/cde'>CDEs</a> are ephemeral, short-lived, and isolated from other work. With Gitpod, there’s no need to download any code to your machine. </br></br>Gitpod builds artefacts from a central place enabling you to fix vulnerabilities instantly across your team.",
	previewComponent: Workspaces,
};

export const codeAnywhereFeature: Feature = {
	title: 'Code anywhere, on any device',
	paragraph:
		'You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ',
	image: {
		src: '/images/features/ipad.webp',
		alt: 'Gitpod Workspace on an iPad.',
		width: '100%',
		height: '100%',
	},
};

export const onboardNewHires: Feature = {
	title: 'Start developing instantly',
	paragraph:
		'Reduce time to first PR, drastically. With pre-configured environments, eliminate the need to setup any dev environments: local, VDI or homegrown.',
	terminal: {
		source: linuxSource,
		dark: true,
		shadow: false,
		narrow: true,
		skipToEnd: true,
	},
};

export const reduceTimeToResolution: Feature = {
	title: 'Reduce time to resolution',
	paragraph:
		'Pre-configured workspaces mean less support tickets and faster debugging time.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const otherFeatures: Feature[] = [
	reduceDeveloperToil,
	// {
	//   title: "Bringing dev closer to prod",
	//   paragraph:
	//     "Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",
	//   moreButton: {
	//     href: "https://gitpod.io/login/",
	//     text: "Start for free",
	//   },
	//   terminal: {
	//     source: linuxSource,
	//     dark: true,
	//     shadow: false,
	//     narrow: true,
	//     skipToEnd: true,
	//   },
	// },

	// moreButton: {
	//   href: "/docs/configure/workspaces/collaboration",
	//   text: "More on collaboration",
	// },
	// },
	{
		title: 'Data center performance, less overhead',
		paragraph:
			'Pre-built environments speed up development by building branches in the background, without killing your laptop battery.',
		terminal: {
			source: terminalSource,
		},
	},
];

export const carbonNeutralFeature: verticalFeature = {
	title: 'Code in a carbon-neutral workspace',
	paragraph:
		'Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.',
	moreButton: {
		href: 'https://cloud.google.com/sustainability',
		text: 'More on GCP carbon neutral',
		type: 'secondary',
	},
};

export const secondaryFeatures: Card[] = [
	{
		icon: {
			src: '/svg/icons/up-arrow.svg',
		},
		title: 'Onboard faster',
		text: 'Get new hires or contractors to commit their first PR on day 1 without shipping a company laptop.</br></br>Gitpod reduces complexity by providing a plug & play experience for software development.',
	},
	{
		icon: {
			src: '/svg/icons/gear-play.svg',
		},
		title: 'Remove friction',
		text: 'Give your developers full control over what device they use, wherever they are in the world.</br></br>Gitpod creates an identical developer experience for everyone, on every machine.',
	},
	{
		icon: {
			src: '/svg/icons/secure.svg',
		},
		title: 'Increase security',
		text: 'Remove your team’s local machines as an attack vector in your software supply chain.</br></br>Gitpod helps you retain control over your resources and protect your company source code from malicious attacks.',
	},
	{
		icon: {
			src: '/svg/icons/team.svg',
		},
		title: 'Collaborate easily',
		text: 'Enable faster collaboration across all team members, in realtime.</br></br>With Gitpod, teams can work on several workspaces in parallel and share them in seconds.',
	},
];

/**Onboarding Features,
 * Using on /solutions/onboarding page
 *
 */

export const onboardDevsWithOneClick: Feature = {
	title: 'Onboard developers with one click',
	paragraph:
		'With a single click, developers can spin up perfectly configured environments and start coding immediately.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const debugFasterThenEver: Feature = {
	title: 'Reproducible and controllable environments',
	paragraph:
		'CDEs enable developers to work with the same tools, libraries, and dependencies, regardless of operating system, device or IDE they use.',
	terminal: {
		source: terminalSource,
	},
};

export const oneCofigToRuleThemAll: Feature = {
	title: 'One config to rule them all',
	paragraph:
		'Shared development setup and isolated environments means less time worry about configuration drift and broken dev environments.',
	image: {
		src: '/images/features/cloud-automation.webp',
		darkSrc: '/images/features/cloud-automation-dark.webp',
		alt: 'All your data secured',
		width: '65%',
	},
};

export const quicklyRampContractors: Feature = {
	title: 'Quickly ramp contractors',
	paragraph:
		'Stop worrying about access management, environment setups or shipping managed devices. CDEs enable anyone working on your product to access the exact same setup as a full-time developer.',
	previewComponent: Workspaces,
};

export const onboardFeatures: Feature[] = [
	onboardDevsWithOneClick,
	quicklyRampContractors,
	debugFasterThenEver,
	oneCofigToRuleThemAll,
];

/**Software Supply Chain Security Features,
 * Using on /solutions/supply-chain-security page
 *
 */

export const isolatedEnvironments: Feature = {
	title: 'Fix vulnerabilities, centrally',
	paragraph:
		'CDEs run on fully isolated and secured single-use containers, limiting the impact of changes to dependencies. Admins decide which configs and images to apply globally and can fix vulnerabilities instantly across an entire team.',
	terminal: {
		source: linuxSource,
		dark: true,
		shadow: false,
		narrow: true,
		skipToEnd: true,
	},
};

export const allYourDataSecured: Feature = {
	title: 'Your code, secured',
	paragraph:
		'Source code is centrally and safely stored in the cloud, never locally. Additionally, all data is encrypted at rest and connections to CDEs are encrypted in transit.',
	image: {
		src: '/images/features/encoded-data.webp',
		darkSrc: '/images/features/encoded-data-dark.webp',
		alt: 'Secure data movement',
		width: '90%',
		height: '90%',
	},
};

export const lockDownYourSourceCode: Feature = {
	title: 'Centrally manage configs and secrets ',
	paragraph:
		'Platform teams can enforce organisational security policies within CDEs. Manage and share dev environment configurations and secrets data from one place and access third-party applications through secretless authorization.',
	image: {
		src: '/images/features/cloud-automation.webp',
		darkSrc: '/images/features/cloud-automation-dark.webp',
		alt: 'All your data secured',
		width: '65%',
		height: '50%',
	},
};

export const secureDataMovement: Feature = {
	title: 'Secure data movement',
	paragraph:
		'Gitpod is GDPR compliant, SOC 2 Type II compliant and provides clients with Data Processing Agreements (DPA) incorporating the Standard Contractual Clauses (SCC) for International Data Transfers.',
	image: {
		src: '/images/features/secure-data.webp',
		darkSrc: '/images/features/secure-data-dark.webp',
		alt: 'Secure data movement',
		width: '50%',
	},
	moreButton: {
		href: 'https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default',
		text: 'View trust center',
	},
};

export const supplyChainSecurityFeatures: Feature[] = [
	lockDownYourSourceCode,
	isolatedEnvironments,
	allYourDataSecured,
	secureDataMovement,
];

export const features: Feature[] = [
	worksOnAnyMachineFeature,
	onboardNewHires,
	allYourDataSecured,
	// reduceTimeToResolution,
	// {
	//   title: "Works on my machine - and yours",
	//   paragraph:
	//     "Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won’t go back to the friction of long-living stateful environments. ",
	//   previewComponent: Workspaces,
	// },
];

export const featureCards: {
	card: Card;
	pill?: { text: string; variant: 'pink' | 'orange' | 'gray' | 'violet' };
}[] = [
	{
		card: {
			title: 'Gitpod Cloud',
			text: 'Hosted by us, managed by us. Cloud requires zero set-up and is great for teams who want to get started right away.',
			icon: {
				src: '/svg/icons/cloud.svg',
				alt: 'Cloud Icon',
			},
			link: {
				href: 'https://gitpod.io/login',
				text: 'Start for free',
				btnSize: 'large',
			},
		},
	},
	{
		card: {
			title: 'Gitpod Dedicated',
			text: 'Hosted by you, managed by us. Dedicated is great for organizations who require maximum control of their cloud resources and data storage.',
			icon: {
				src: '/svg/icons/secure.svg',
				alt: 'Cloud Icon',
			},
			link: {
				href: '/dedicated',
				text: 'More on Gitpod Dedicated',
				btnSize: 'large',
			},
		},
	},
];

/**Increased Productivity Features,
 * Using on /solutions/increased-productivity page
 *
 */

export const worksOnAnyMachineFeatureForProductivity: Feature = {
	title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
	paragraph: `CDEs enable developers to work with the same tools, libraries, and dependencies, regardless of operating system, device or IDE they use.`,
	previewComponent: Workspaces,
};

export const parallelDevelopmentForProductivity: Feature = {
	title: 'Onboard developers with one click',
	paragraph:
		'With a single click, developers can spin up perfectly configured environments and start coding immediately.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const collaborationMadeEasierForProductivity: Feature = {
	title: 'Collaboration made easier',
	paragraph:
		'Seamlessly share dev environment configurations, changes to configurations, or real-time projects for easier collaboration.',
	lottie: {
		src: '/lottie/share_workspace.json',
		id: 'share-workspace',
	},
};

export const previewWorkspacesAcrossTeams: Feature = {
	title: 'Preview work across any team',
	paragraph:
		'QA, PMs, Designers alike, can easily jump into a CDE and preview changes to shorten feedback cycles between teams.',
	image: {
		src: '/images/features/multiple-workspaces.webp',
		darkSrc: '/images/features/multiple-workspaces-dark.webp',
		alt: 'Multiple workspaces',
		width: '85%',
		height: '75%',
	},
};

export const increasedProductivityFeatures: Feature[] = [
	worksOnAnyMachineFeatureForProductivity,
	parallelDevelopmentForProductivity,
	oneCofigToRuleThemAll,
	collaborationMadeEasierForProductivity,
	previewWorkspacesAcrossTeams,
];

/**Platform Teams Features,
 * Using on /solutions/platform-teams
 *
 */

export const centralConfigSecretsManagement: Feature = {
	title: 'Central config and secrets management',
	paragraph:
		'Platform teams can enforce organizational security policies within CDEs. Manage and share dev environment configurations and secrets data from one place.',
	image: {
		src: '/images/features/cloud-automation.webp',
		darkSrc: '/images/features/cloud-automation-dark.webp',
		alt: 'All your data secured',
		width: '60%',
	},
};

export const noBrokenDevEnvironments: Feature = {
	title: 'No more broken environments',
	paragraph:
		'From homegrown remote development environments to VDIs, they all have custom configs and are difficult to manage. Gitpod CDEs can spin up in seconds, with the same config as a developer across the world.',
	previewComponent: Workspaces,
};

export const efficientForLargeApplications: Feature = {
	title: 'Efficient for even the largest applications',
	paragraph:
		'Gitpod CDEs are available on-demand, when you need them and spun-down when you don’t. They’re powerful enough to handle any size application without draining your resources.',
	terminal: {
		source: terminalSource,
	},
};

export const mitigateExfiltrationRisk: Feature = {
	title: 'Mitigate exfiltration risk',
	paragraph:
		'Source code is stored in the cloud, reducing the risk of external actors compromising your codebase and kept away from difficult to control laptops.',
	image: {
		src: '/images/features/encoded-data.webp',
		darkSrc: '/images/features/encoded-data-dark.webp',
		alt: 'Secure data movement',
		width: '90%',
		height: '90%',
	},
};

export const platformTeamsFeatures: Feature[] = [
	centralConfigSecretsManagement,
	noBrokenDevEnvironments,
	efficientForLargeApplications,
	mitigateExfiltrationRisk,
];

/**Developers Solutions Page Features,
 * Using on /solutions/developers
 *
 */

export const onboardInMinutes: Feature = {
	title: 'Onboard in minutes, anywhere',
	paragraph:
		"With a single click, developers can spin up perfectly configured environments and start coding immediately, no matter where they're located.",
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const onDemandGlobally: Feature = {
	title: 'On-demand, globally',
	paragraph:
		"Accessible from anywhere, Gitpod CDE's spin-up in seconds with the same configuration as your teammate across the world, no matter the device your on.",
	image: {
		src: '/images/features/multiple-workspaces.webp',
		darkSrc: '/images/features/multiple-workspaces-dark.webp',
		alt: 'Multiple workspaces',
		width: '85%',
		height: '75%',
	},
};

export const whereTeamsCodeTogether: Feature = {
	title: 'Where teams code together',
	paragraph:
		'Collaborate on tasks without making changes to your dev environment. Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.',
	lottie: {
		src: '/lottie/share_workspace.json',
		id: 'share-workspace',
	},
};

export const worksOnAnyMachineDeveloperFeature: Feature = {
	title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
	paragraph:
		'CDEs enable developers to work with the same tools, libraries, and dependencies, regardless of operating system, device or IDE they use.',
	previewComponent: Workspaces,
};

export const developersFeatures: Feature[] = [
	onboardInMinutes,
	onDemandGlobally,
	whereTeamsCodeTogether,
	worksOnAnyMachineDeveloperFeature,
];

/**Dedicated Page Features,
 * Using on /dedicated
 *
 */

export const enterpriseReady: Feature = {
	title: 'Enterprise-ready',
	paragraph:
		'SSO, custom SLAs and dedicated support experts will help you scale Cloud Development Environments for your organization.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const limitedOverHead: Feature = {
	title: 'Dedicated resources',
	paragraph:
		'Faster startup times and lower latency with resources exclusively available for your organization and with the exact specs you need.',
	terminal: {
		source: terminalSource,
	},
};

export const enhancedSecurity: Feature = {
	title: 'Runs in your Cloud & your region',
	paragraph:
		'Isolated, single-tenant installations ensure source code, dependencies and dev environments are private and protected. All within the cloud region of your choice.',
	image: {
		src: '/images/features/encoded-data.webp',
		darkSrc: '/images/features/encoded-data-dark.webp',
		alt: 'Secure data movement',
		width: '90%',
		height: '90%',
	},
};

export const privateResourceAccess: Feature = {
	title: 'Air gapped resource access',
	paragraph:
		'Running within your VPC enables secure access to your private resources.',
	terminal: {
		source: linuxSource,
		dark: true,
		shadow: false,
		narrow: true,
		skipToEnd: true,
	},
};
export const compliantDataMovement: Feature = {
	title: 'Compliant data movement',
	paragraph:
		'Gitpod is GDPR compliant, SOC 2 Type II compliant and provides clients with Data Processing Agreements (DPA) incorporating the Standard Contractual Clauses (SCC) for International Data Transfers.',
	image: {
		src: '/images/features/secure-data.webp',
		darkSrc: '/images/features/secure-data-dark.webp',
		alt: 'Secure data movement',
		width: '50%',
	},
	moreButton: {
		href: 'https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default',
		text: 'View trust center',
		type: 'gray',
	},
};

export const dedicatedPageFeatures: Feature[] = [
	enhancedSecurity,
	limitedOverHead,
	privateResourceAccess,
	enterpriseReady,
	compliantDataMovement,
];

/**Cloud Page Features,
 * Using on /cloud
 *
 */

export const flexibleSaasSolution: Feature = {
	title: 'The flexibility of any SaaS solution',
	paragraph:
		"Gitpod Cloud is fully deployed and managed by Gitpod, removing any overhead from your team's ability to get started with CDEs.",
	previewComponent: Workspaces,
};

export const onboardDevsInSeconds: Feature = {
	title: 'Onboard developers in seconds',
	paragraph:
		'Developers are ready-to-code with the click of a button on day one.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const noCommitments: Feature = {
	title: 'No commitments',
	paragraph:
		'Pay-as-you-go with consumption-based pricing to enable your teams to start and stop when needed.',
	image: {
		src: '/images/features/cloud-automation.webp',
		darkSrc: '/images/features/cloud-automation-dark.webp',
		alt: 'All your data secured',
		width: '65%',
	},
};

export const minimizeCosts: Feature = {
	title: 'Minimize costs',
	paragraph:
		'Gitpod Cloud’s multi-tenant set-up allows for multiple organizations to minimize their cloud costs.',
	lottie: {
		src: '/lottie/share_workspace.json',
		id: 'share-workspace',
	},
};

export const cloudPageFeatures: Feature[] = [
	flexibleSaasSolution,
	onboardDevsInSeconds,
	noCommitments,
	minimizeCosts,
];

/**Dedicated Features
 * Using on /self-hosted page
 *
 */

export const maximizeControl: Feature = {
	title: 'Full speed and flexibility',
	paragraph:
		'The maintenance and operation of your single-tenant instance are fully managed by us.</br></br>Your team always works with the latest version of Gitpod.',
	lottie: {
		src: '/lottie/edit_workspace.json',
		id: 'edit_workspace',
	},
};

export const devsDontCareAboutMachines: Feature = {
	title: 'Maximize compliance and control',
	paragraph:
		'Meet complex compliance and deployment needs with an installation of Gitpod in your region of choice.</br></br>Increase data protection and isolation with private connections.',
	previewComponent: Workspaces,
};

export const dedicatedFeatures: Feature[] = [enhancedSecurity, enterpriseReady];
