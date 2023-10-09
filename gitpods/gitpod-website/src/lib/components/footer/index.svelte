<script lang="ts">
	import ThemeSwitcher from '../theme-switcher.svelte';
	import FooterLink from './link.svelte';
	import Section from './section.svelte';
	import Modal from '../ui-library/modal/modal.svelte';
	import CookieSettings from '../cookie-settings.svelte';

	const socialLinks = [
		{
			href: 'https://twitter.com/gitpod',
			alt: 'Twitter',
			icon: '/svg/brands/twitter.svg',
		},
		{
			href: 'https://github.com/gitpod-io',
			alt: 'GitHub',
			icon: '/svg/brands/github.svg',
		},
		{
			href: 'https://www.gitpod.io/chat',
			alt: 'Discord',
			icon: '/svg/brands/discord.svg',
		},
		{
			href: 'https://www.linkedin.com/company/gitpod/',
			alt: 'LinkedIn',
			icon: '/svg/brands/linkedin.svg',
		},
		{
			href: 'https://staging.bsky.app/profile/gitpod.io',
			alt: 'BlueSky',
			icon: '/svg/brands/bluesky.svg',
		},
	];

	let isModalOpen: boolean = false;

	const handleClose = () => (isModalOpen = false);
</script>

<div class="pb-8 bg-card text-p-footer" data-id="footer">
	<footer
		class="py-large m-auto px-xx-small md:max-w-6xl md:py-small md:px-xx-small"
	>
		<div
			class="flex gap-x-x-small sm:gap-x-small md:gap-0 justify-between flex-wrap pb-micro md:pb-small"
		>
			<Section title="Gitpod">
				<li>
					<FooterLink href="/docs/introduction/getting-started"
						>Getting started</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/cde">CDEs</FooterLink>
				</li>
				<li>
					<FooterLink href="/cloud">Cloud</FooterLink>
				</li>
				<li>
					<FooterLink href="/dedicated">Dedicated</FooterLink>
				</li>
				<li><FooterLink href="/pricing">Pricing</FooterLink></li>
				<li><FooterLink href="/support">Support</FooterLink></li>
				<li><FooterLink href="/customers">Customers</FooterLink></li>
				<li>
					<FooterLink
						href="https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml"
						target="_blank"
						rel="noopener">Report a bug</FooterLink
					>
				</li>
				<li>
					<FooterLink
						href="https://www.gitpodstatus.com/"
						target="_blank"
						rel="noopener">Status</FooterLink
					>
				</li>
			</Section>
			<Section title="Resources">
				<li><FooterLink href="/docs">Docs</FooterLink></li>
				<li><FooterLink href="/changelog">Changelog</FooterLink></li>
				<li><FooterLink href="/blog">Blog</FooterLink></li>
				<li><FooterLink href="/guides">Guides</FooterLink></li>
				<li><FooterLink href="/screencasts">Videos</FooterLink></li>
				<li><FooterLink href="/community">Community</FooterLink></li>
				<li><FooterLink href="/events">Events</FooterLink></li>
				<li>
					<FooterLink href="/discover/opensource"
						>Open Source</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/discover/education">Education</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/discover/startups">Startups</FooterLink>
				</li>
			</Section>
			<Section title="Solutions">
				<li>
					<FooterLink href="/solutions/onboarding"
						>Onboarding</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/solutions/supply-chain-security"
						>Supply chain security</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/solutions/increased-productivity"
						>Productivity</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/solutions/developers"
						>Developers</FooterLink
					>
				</li>
				<li>
					<FooterLink href="/solutions/platform-teams"
						>Platform teams</FooterLink
					>
				</li>
			</Section>
			<Section title="Compare">
				<li>
					<FooterLink href="/vs/local-development"
						>Local development
					</FooterLink>
				</li>
				<li>
					<FooterLink href="/vs/github-codespaces"
						>GitHub Codespaces
					</FooterLink>
				</li>
				<li>
					<FooterLink href="/vs/jetbrains-space"
						>JetBrains Space</FooterLink
					>
				</li>
			</Section>
			<Section title="Company">
				<li><FooterLink href="/about">About</FooterLink></li>
				<li><FooterLink href="/about/team">Team</FooterLink></li>
				<li>
					<!-- <FooterLink href="/careers" highlight>Careers</FooterLink> -->
					<FooterLink href="/careers">Careers</FooterLink>
				</li>
				<li><FooterLink href="/media-kit">Media kit</FooterLink></li>
				<li><FooterLink href="/security">Security</FooterLink></li>
				<li><FooterLink href="/contact">Contact</FooterLink></li>
			</Section>
		</div>
		<div class="border-t border-solid border-divider pt-micro">
			<div
				class="flex flex-wrap flex-row sm:flex-row-reverse justify-between mt-micro md:mt-0"
			>
				<div class="flex space-x-macro lg:mt-macro">
					{#each socialLinks as link}
						<FooterLink
							href={link.href}
							target="_blank"
							class="hover:opacity-80"
							analytics={`{"variant":"social_media","context":"` +
								link.alt.toLowerCase() +
								`_visit"}`}
						>
							<img
								src={link.icon}
								alt={link.alt}
								height="24"
								width="24"
								class="mx-1 sm:m-2"
							/>
						</FooterLink>
					{/each}
				</div>
				<div class="mt-0 lg:mt-micro">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
		<div>
			<div
				class="flex flex-wrap gap-x-4 gap-y-4 sm:gap-y-0 mt-xx-small w-5/10"
			>
				<FooterLink href="/imprint">Imprint</FooterLink>

				<FooterLink href="/terms">Terms of service</FooterLink>

				<FooterLink href="/privacy">Privacy policy</FooterLink>

				<FooterLink href="/cookies">Cookie policy</FooterLink>

				<button class="text-left" on:click={() => (isModalOpen = true)}
					>Cookie preferences</button
				>
			</div>
			<p class="mt-9 sm:mt-6">
				Copyright &copy; {new Date().getFullYear()} Gitpod
			</p>
		</div>
	</footer>
</div>

<Modal on:close={handleClose} isOpen={isModalOpen}>
	<CookieSettings {handleClose} />
</Modal>
