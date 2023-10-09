import type { Feature } from '$lib/types/feature';
import type { Card } from '$lib/types/card';
import type { ContentCard } from '$lib/types/community';
import type { Testimonial } from '$lib/types/testimonial';

export const testimonials: Testimonial[] = [
	{
		name: 'Bruno Rocha',
		avatar: 'bruno-rocha.webp',
		text: `I migrated my entire development environment from Dynaconf to @gitpod the tool is amazing, I can access my complete workspaces from any device and run almost everything from vscodium + containers, right in the browser!`,
		org: '@rochacbruno',
	},
	{
		name: 'Bartłomiej Płotka',
		avatar: 'bwplotka.webp',
		text: `This @gitpod thing is magic! Pretty cool, without any extra configuration. Good work!`,
		org: '@bwplotka',
	},
	{
		name: 'Daniel Maricic',
		avatar: 'wossio.webp',
		text: `
    it has been 3 months since i started using and paying @gitpod as my default env (in browser), replacing WSL + vscode + docker. The benefits are huge! Disposable workspaces are the best feature.
    Also @AnagolayNet, @IdiyanaleNet & @kelp_digital are developed with them exclusively
    `,
		org: '@woss_io',
	},
	{
		name: 'Mike Fiedler, Code Gardener',
		avatar: 'mikefiedler.webp',
		text: `
    I gotta say, open source contribution with projects that have figured out @gitpod
    setup (and prebuilds!) is a freaking DREAM 🤩
    `,
		org: '@mikefiedler',
	},
];

export const contributeToGitpod: Feature = {
	title: 'Contribute to Gitpod',
	paragraph:
		'Gitpod’s source code is open-source and we are more than happy to receive community contributions.',
	moreButton: {
		href: 'https://www.gitpod.io/docs/help/contribute/features-and-patches',
		text: 'Contribute to Gitpod',
	},
	secondaryButton: {
		href: 'https://www.gitpod.io/docs/help/contribute/documentation',
		text: 'Contribute to website',
	},
	image: {
		src: '/images/community/contribute-to-gitpod.png',
		alt: "Gitpod's GitHub Repo README.md and the Open Issues",
	},
};

export const letsCollaborateActions: Card[] = [
	{
		title: 'Author a blog post',
		text: 'Do you have a cool story to share related to Gitpod? Publish a guest post on our blog.',
		link: {
			href: 'https://github.com/gitpod-io/website/issues/new/choose ',
			text: 'Open a PR',
		},
	},
	{
		title: 'Publish a guide',
		text: 'Do you have a project integration guide to share? Share it with the community on guides.',
		link: {
			href: 'https://github.com/gitpod-io/website/issues/new/choose',
			text: 'Open a PR',
		},
	},
	// Note: Commented out until its needed again
	// {
	//   title: "Join affiliate program",
	//   text: "Do you have some reach and regulary convince people about using Gitpod? Let’s discuss a collaboration.",
	//   link: {
	//     href: "/contact/support",
	//     text: "Get in contact",
	//   },
	// },
];

export const overviewCards = [
	{
		title: 'Learn',
		text: 'Learn how to optimize your Gitpod CDE setup and improve your dev workflows. Deep-dive into the projects our community is building on Gitpod.',
	},
	{
		title: 'Connect',
		text: 'Join a global community and connect with like-minded folks in every niche of software development. Get to know the engineers who are building Gitpod.',
	},
	{
		title: 'Build',
		text: 'Build awesome projects, utilizing the power in the cloud with Gitpod. Our community will support you along the way and make every step easier.',
	},
];

export const contributionHighlights: Record<string, ContentCard[]> = {
	'June 2023': [
		{
			badge: 'Content',
			contributor: 'Ibrahim Gharbi',
			title: 'Gitpod: Your mobile dev cloud IDE',
			text: 'Learn how to develop with android studio in the cloud with Gitpod',
			link: {
				text: 'Read the post',
				href: 'https://blog.worldline.tech/2023/06/27/android-dev-with-gitpod.html',
			},
		},
		{
			badge: 'Open Source',
			contributor: 'William Ghelfi',
			title: 'Gitpod and Nx',
			text: 'Quickly create a new Nx workspace in Gitpod and start hacking away',
			link: {
				text: 'View on GitHub',
				href: 'https://github.com/trumbitta/gitpod-nx',
			},
		},
		{
			badge: 'Gitpod Community',
			contributor: 'Gitpod & Elastic',
			title: 'DevX meetup in Athens',
			text: 'A community meetup hosted by Gitpod & Elastic on DevX in Athens',
			link: {
				text: 'View the event',
				href: 'https://guild.host/events/developer-experience-82e9r3',
			},
		},
	],
	'May 2023': [
		{
			badge: 'Open Source',
			contributor: 'Derroylo',
			title: 'A DDEV alternative',
			text: 'A lightweight DDEV Alternative for PHP that makes web development easier in Gitpod',
			link: {
				text: 'View the GitHub Repository',
				href: 'https://github.com/Derroylo/gitpod-tool',
			},
		},
		{
			badge: 'Community office hours',
			contributor: 'Lou',
			title: 'Secretless Workspace',
			text: 'Lou takes us through integrating with providers through OIDC',
			link: {
				text: 'Watch the VOD',
				href: 'https://www.youtube.com/watch?v=iHtAd2Vfz-Q',
			},
		},
		{
			badge: 'Content',
			contributor: 'Dr. Ernesto Lee',
			title: 'AgentGPT and AutoGPT',
			text: 'How to Run AgentGPT and AutoGPT in Gitpod in 5 Minutes',
			link: {
				text: 'Read the Article',
				href: 'https://drlee.io/how-to-run-agentgpt-and-autogpt-in-gitpod-in-5-minutes-265684caefff',
			},
		},
	],
	'April 2023': [
		{
			badge: 'Gitpod Community',
			contributor: 'Gitpod Community',
			title: 'Gitpod x DevX in Berlin and Munich',
			text: 'Gitpod organises DevX meetups in Berlin and Munich',
			link: {
				href: 'https://guild.host/gitpod',
				text: 'View our Guild page',
			},
		},
		{
			badge: 'Content',
			contributor: 'Jean-Phi Baconnais',
			title: 'Gitpod and Google Cloud',
			text: 'A new Gitpod template for Google cloud',
			link: {
				href: 'https://twitter.com/ZenikaIT/status/1650750235348545536',
				text: 'Read post',
			},
		},
		{
			badge: 'Gitpod Community',
			contributor: 'Gitpod Community',
			title: 'KubeconEU Livestream with Gitpod',
			text: 'Livestream Pre-KubeconEU discussing all the things to come at this massive conference',
			link: {
				href: 'https://www.youtube.com/watch?v=Hd0L1C6pVr4',
				text: 'Watch Stream',
			},
		},
	],
	'March 2023': [
		{
			badge: 'Community office hours',
			contributor: 'Henit & Palani',
			title: 'Gitpod Raycast Extension',
			text: 'Henit & Palani lead this office hours session to show us their new Gitpod Raycast extension',
			link: {
				href: 'https://youtu.be/X_8O9soJ-Mg',
				text: 'Watch Recording',
			},
		},
		{
			badge: 'Gitpod Community',
			contributor: 'Gitpod Community',
			title: 'Gitpod Amsterdam and Brest',
			text: 'Our community continues to have more in person meetups all over the world',
			link: {
				href: 'https://guild.host/gitpod',
				text: 'View our Guild page',
			},
		},
		{
			badge: 'Content',
			contributor: 'Thilo Maier',
			title: 'Customise Gitpod',
			text: 'Five awesome ways to customise your Gitpod workspaces',
			link: {
				href: 'https://maier.tech/posts/five-ways-to-customize-a-gitpod-workspace',
				text: 'Read post',
			},
		},
	],
	'February 2023': [
		{
			badge: 'Content',
			contributor: 'soupbowl',
			title: 'A year of Cloud Coding in Review',
			text: "Soupbowl writes about their experience using CDE's over the past year",
			link: {
				href: 'https://soupbowl.blog/2023/02/a-year-of-cloud-code-in-review',
				text: 'Read Blog Post',
			},
		},
		{
			badge: 'Gitpod Community',
			contributor: 'Gitpod Community',
			title: 'Gitpod London Meetup!',
			text: 'We had our second Gitpod Community meetup in London this month',
			link: {
				href: 'https://beta.guild.host/events/gitpod-london-february-iro7kj',
				text: 'View Event',
			},
		},
		{
			badge: 'Content',
			contributor: 'Benvp',
			title: 'Remote Development in Elixir with Gitpod',
			text: 'Ben shows us how to setup Elixir in Gitpod for easy and fast development',
			link: {
				href: 'https://benvp.co/blog/remote-development-in-elixir-with-gitpod',
				text: 'Read Blog Post',
			},
		},
	],

	'January 2023': [
		{
			badge: 'Community office hours',
			contributor: 'Sébastien Blanc',
			title: 'Build a VS Code extension with Gitpod and Aiven',
			text: 'Sébastien shows us how you can use Gitpod and Aiven to easily build VS Code Extensions',
			link: {
				href: 'https://twitter.com/sebi2706/status/1615640594071654401',
				text: 'View Tweet',
			},
		},
		{
			badge: 'Gitpod Community',
			contributor: 'Jean-Phi Baconnais',
			title: 'First Gitpod Community Meetup!',
			text: "Jean-Phi Baconnais has organised our very first Gitpod community meetup, and it's taking place in France",
			link: {
				href: 'https://twitter.com/gitpod/status/1613557635088777220',
				text: 'View Tweet',
			},
		},
		{
			badge: 'Content',
			contributor: 'Alex Patterson',
			title: 'Appwrite + Gitpod: One Click Setup',
			text: 'In this blog post, Alex shows us how you can use Appwrite in your Gitpod workspace',
			link: {
				href: 'https://dev.to/appwrite/appwrite-gitpod-one-click-setup-2894',
				text: 'Read Post',
			},
		},
	],

	'December 2022': [
		{
			badge: 'Content',
			contributor: 'Laurent Kempé',
			text: 'Laurent Kempé shares his experiences of using Gitpod with the Jetbrains integration on this podcast.',
			title: 'How to use JetBrains tools with Gitpod',
			link: {
				href: 'https://devdevdev.net/tr-12-22-des-outils-pour-kubernetes-de-lia-gitpod-maui-viva-et-projet-volterra/',
				text: 'Listen to the Podcast',
			},
		},
		{
			badge: 'Open Source',
			contributor: 'M. Palanikannan',
			text: 'M. Palanikannan successfully integrated Gitpod with RocketChat to allow for easier contributions to the open source project.',
			title: 'RocketChat has been Gitpodified!',
			link: {
				href: 'https://github.com/RocketChat/RC4Community/pull/203',
				text: 'View Pull Request',
			},
		},
		{
			badge: 'Content',
			contributor: 'Marco Zille',
			text: 'In this workshop, Marco shows how to set up GDK and a Gitpod workspace to start contributing to GitLab.',
			title: 'Contributing to GitLab with Gitpod and the GDK',
			link: {
				href: 'https://twitter.com/marco_zille/status/1603526381274537984',
				text: 'View Tweet',
			},
		},
	],

	'November 2022': [
		{
			badge: 'Community office hours',
			contributor: 'Evan Mattiza',
			title: 'Nix',
			text: 'In our Community Office hours Evan Mattiza shows us what you can do with Nix and Gitpod',
			link: {
				href: 'https://www.youtube.com/watch?v=GpcLaV5Srpw',
				text: 'Watch on YouTube',
			},
		},
		{
			badge: 'Content',
			contributor: 'Airball',
			title: 'J-Fall Conf',
			text: 'Airball did a presentation about sustainability and Gitpod at J-Fall Conf',
			link: {
				href: 'https://twitter.com/jlengrand/status/1588457884358414337',
				text: 'View Tweet',
			},
		},
		{
			badge: 'Open Source',
			contributor: 'Tyler van der Hoeven',
			title: 'Stellar Quest Game',
			text: 'You can participate in Stellar Quest code challenge game using Gitpod',
			link: {
				href: 'https://twitter.com/tyvdh/status/1591893088561254401',
				text: 'View Tweet',
			},
		},
	],

	'October 2022': [
		{
			badge: 'Content',
			contributor: 'Maciej Walkowiak',
			text: 'Maciej Walkowiak published a guide on how to use a custom Java distribution on Gitpod',
			title: 'How to use a custom Java distribution on Gitpod',
			link: {
				href: '/guides/custom-java-distribution-on-gitpod',
				text: 'View Guide',
			},
		},
		{
			badge: 'Community office hours',
			contributor: 'Evan Mattiza',
			text: 'During our Community Office Hours, Evan Mattiza gave a deep dive into Nix and how he uses Nix with Gitpod.',
			title: 'Demo during our community office hours',
			link: {
				href: 'https://www.youtube.com/watch?v=GpcLaV5Srpw',
				text: 'View Recording',
			},
		},
		{
			badge: 'Discord contribution',
			contributor: 'David Bakin',
			text: 'David Bakin (david.bakin#0108) has been actively helping the community with questions in our Discord server. In the past 30 days, he’s contributed 89 times across the server by answering questions and contributing to discussions! ✨',
			title: '89 amazing Discord contributions',
		},
	],

	'September 2022': [
		{
			badge: 'Content',
			contributor: 'William J. Ghelfi',
			text: 'William J. Ghelfi wrote this blog post, “Idiomatic Gitpod” to explain the power of ephemeral nature of Gitpod workspaces.',
			title: 'Idiomatic Gitpod',
			link: {
				href: 'https://www.williamghelfi.com/blog/2022-09-26-idiomatic-gitpod/ ',
				text: 'Read Post',
			},
		},
		{
			badge: 'Content',
			contributor: 'Julien and Tom',
			text: 'We hosted a panel with two community Heroes: Julien and Tom about Java development on Gitpod.',
			title: 'Success and failure stories of Java developers shifting to remote',
			link: {
				href: 'https://www.youtube.com/watch?v=Tgb7CBoqoqg',
				text: 'Watch recording',
			},
		},
		{
			badge: 'Content',
			contributor: 'Josep Jaume',
			text: 'Josep Jaume started a Gitpod workspace on his Steam Deck - because why not?',
			title: 'Run Gitpod…anywhere!',
			link: {
				href: 'https://twitter.com/josepjaume/status/1567490383373914114',
				text: 'View Tweet',
			},
		},
	],
};
