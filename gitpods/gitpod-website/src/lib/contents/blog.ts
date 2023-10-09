import type { Quote } from '$lib/types/quote';
import type { Brand } from '$lib/types/brand';
import githubMarkSvelte from '$lib/components/svgs/github-mark.svelte';
import redwoodjsSvelte from '$lib/components/svgs/customers/redwoodjs.svelte';
import prismaSvelte from '$lib/components/svgs/opensource/prisma.svelte';
import prometheusSvelte from '$lib/components/svgs/opensource/prometheus.svelte';

export const quotes: Quote[] = [
	{
		text: '“Gitpod’s move to open source their technology will improve the productivity of developers who run VS Code in the browser. Extension developers can further automate end-to-end tests in a DevOps platform like GitLab, improving the overall developer flow from ideation through CI/CD pipelines.”',
		author: 'Sid Sijbrandij',
		jobTitle: 'Co-founder and CEO at GitLab',
		companyLogo: {
			src: '/svg/gitlab.svg',
			alt: 'GitLab',
		},
	},
	{
		text: '“At Uber, we’ve invested in remote development solutions [..]. OpenVSCode Server will allow us to keep a current and easy-to-maintain developer experience, while providing the latest tooling to our developers. We’re thrilled to partner with Gitpod to integrate this new project.”',
		author: 'Ty Smith',
		jobTitle: 'Tech Lead for Uber’s Developer Platform',
		companyLogo: {
			src: '/svg/blog/uber.svg',
			alt: 'Uber',
		},
	},
	{
		text: "“OpenVSCode Server's technical alignment with the core VS Code open-source project provides an ideal architecture, and we are excited to integrate it into future versions of RStudio Workbench.”",
		author: 'JJ. Allaire',
		jobTitle: 'Founder & CEO RStudio',
		companyLogo: {
			src: '/svg/blog/rstudio.svg',
			alt: 'RStudio',
		},
	},
	{
		text: '“As usual, Gitpod is at the forefront of delivering solutions that move the entire industry forward.”',
		author: 'Chris Aniszczyk',
		jobTitle: 'CTO at CNCF',
		companyLogo: {
			src: '/svg/blog/cncf.svg',
			alt: 'Cloud Native Computing Foundation',
		},
	},
	{
		text: '“Independently maintained projects like OpenVSCode Server play an important role as an alternative to vertically integrated dev ecosystems.”',
		author: 'Beyang Liu',
		jobTitle: 'Co-Founder & CTO Sourcegraph',
		companyLogo: {
			src: '/svg/blog/sourcegraph.svg',
			alt: 'Sourcegraph',
		},
	},
];

export const jetbrains_quotes: Quote[] = [
	{
		text: 'Through our partnership with Gitpod, we are enabling our mutual users to accelerate productivity, save resources and time while strengthening security compliance. Remote development is meant to simplify daily work. This really helps to supercharge developers’ performance.',
		author: 'Max Shafirov',
		jobTitle: 'CEO at JetBrains',
		companyLogo: {
			src: '/svg/blog/jetbrains.svg',
			alt: 'JetBrains',
		},
	},
	{
		text: 'Companies like Google, Facebook, Shopify, GitHub, and LinkedIn all have moved software development to the cloud, leaving brittle local development behind. With the JetBrains and Gitpod partnership, every software team and individual developer can reap the same benefits while continuing to use the tools of their choice.',
		author: 'Tom Preston-Werner',
		jobTitle: 'GitHub Founder & former CEO',
		companyLogo: githubMarkSvelte,
	},
	{
		text: 'As a long time fan of JetBrains’ work, I am very excited about this partnership, as it combines the peace of mind and convenience of automated, cloud-based developer environments with the best professional Desktop IDEs out there.',
		author: 'Sven Efftinge',
		jobTitle: 'Founder & Co-CEO Gitpod',
		companyLogo: {
			src: '/svg/blog/gitpod.svg',
			alt: 'Gitpod',
		},
	},
];

export const linuxfoundation_quotes: Quote[] = [
	{
		text: 'Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!',
		author: 'Tom Preston-Werner',
		jobTitle: 'Co-founder of GitHub',
		companyLogo: redwoodjsSvelte,
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
		text: `Gitpod has been invaluable for increasing my productivity in the Prometheus pull request review process. Instead of having to check and build the (untrusted!) submitted code locally, I can simply jump into a pre-built Gitpod workspace and start testing, debugging, and modifying the proposed code changes immediately in a secure, cloud-based development environment. This saves me time and frustration and really streamlines the review process`,
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

export const brands: Brand[] = [
	{
		alt: 'GitLab',
		logo: 'svg/gitlab.svg',
	},
	{
		alt: 'VMware',
		logo: 'svg/blog/vmware.svg',
	},
	{
		alt: 'Uber',
		logo: 'svg/blog/uber.svg',
	},
	{
		alt: 'SAP',
		logo: 'svg/blog/sap.svg',
	},
	{
		alt: 'Sourcegraph',
		logo: 'svg/blog/sourcegraph.svg',
	},
	{
		alt: 'RStudio',
		logo: 'svg/blog/rstudio.svg',
	},
	{
		alt: 'openSUSE',
		logo: 'svg/blog/opensuse.svg',
	},
	{
		alt: 'Tabnine',
		logo: 'svg/blog/tabnine.svg',
	},
	{
		alt: 'Render',
		logo: 'svg/blog/render.svg',
	},
	{
		alt: 'TypeFox',
		logo: 'svg/blog/typefox.svg',
	},
];
