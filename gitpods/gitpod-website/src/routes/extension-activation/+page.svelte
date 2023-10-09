<script lang="ts">
	import Feature from '$lib/components/feature.svelte';
	import { feature } from '$lib/contents/extension-activation';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Header from '$lib/components/header.svelte';

	const currentBrowser =
		['Opera', 'Chrome', 'Firefox', 'IE'].find(
			(browser) =>
				typeof window !== 'undefined' &&
				window.navigator.userAgent.includes(browser),
		) || 'Chrome';
</script>

<OpenGraph
	data={{
		description:
			'The Gitpod browser extension has been successfully installed.',
		title: 'Extension Activation',
		norobots: true,
	}}
/>

<Header
	title="Gitpod for {currentBrowser} is now active"
	text="The browser extension has been installed. To see it in action, select your SCM provider:"
	class="max-w-6xl !text-left md:!text-center justify-start"
/>

<div
	class="mx-auto max-w-6xl justify-center items-center flex flex-col space-y-2 md:space-y-0 md:flex-row gap-x-4 -mt-10"
>
	<a
		href="https://gitpod.io/login"
		class="transition-all duration-200 delay-[50ms] flex shadow-light dark:shadow-none items-center py-3 px-8 font-semibold whitespace-nowrap bg-none text-black bg-sand-dark dark:bg-light-black dark:text-sand-dark hover:bg-sand-dark-hover focus:bg-sand-dark-hover hover:dark:bg-light-black-hover focus:dark:bg-light-black-hover text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl text-center"
	>
		<svg
			width="36"
			height="28"
			viewBox="0 0 40 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="mr-1 -translate-y-0.5"
		>
			<g id="Google_Cloud_Logo 1" clip-path="url(#clip0_10443_26774)">
				<g id="Group">
					<path
						id="Logo"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.0647 1.00001C14.8445 0.996664 11.7284 2.16477 9.27478 4.295C6.82117 6.42523 5.19045 9.37833 4.67485 12.6251C4.15926 15.8719 4.79249 19.2 6.46108 22.0132C8.12967 24.8264 10.7245 26.9407 13.7807 27.9773C14.4628 28.1047 14.704 27.6714 14.704 27.306C14.704 26.9406 14.704 26.108 14.704 24.9524C10.9191 25.7936 10.1205 23.0916 10.1205 23.0916C9.86941 22.2542 9.33596 21.5347 8.61485 21.0609C7.39202 20.2112 8.71467 20.2112 8.71467 20.2112C9.14332 20.2731 9.55258 20.4337 9.91144 20.681C10.2703 20.9283 10.5694 21.2558 10.786 21.6387C10.97 21.9796 11.2182 22.28 11.5162 22.5227C11.8142 22.7653 12.1562 22.9455 12.5225 23.0529C12.8889 23.1603 13.2724 23.1927 13.651 23.1483C14.0296 23.1039 14.396 22.9836 14.729 22.7942C14.7812 22.0952 15.0762 21.4383 15.5608 20.9419C12.5495 20.5936 9.38847 19.404 9.38847 14.1445C9.36779 12.7706 9.86519 11.4411 10.7777 10.4314C10.3713 9.2368 10.4188 7.92987 10.9108 6.76931C10.9108 6.76931 12.0504 6.39546 14.6375 8.18828C16.859 7.56526 19.2039 7.56526 21.4254 8.18828C24.0125 6.39546 25.1438 6.76931 25.1438 6.76931C25.6426 7.91759 25.702 9.21514 25.3102 10.4059C26.2226 11.4156 26.72 12.7451 26.6994 14.119C26.6994 19.438 23.53 20.6021 20.5104 20.9164C20.8342 21.2489 21.0842 21.6486 21.2435 22.0884C21.4028 22.5282 21.4677 22.9978 21.4337 23.4655C21.4337 25.3178 21.4337 26.8132 21.4337 27.2635C21.4337 27.7139 21.675 28.0622 22.3654 27.9263C25.3867 26.8624 27.9427 24.7421 29.5819 21.9398C31.221 19.1376 31.8377 15.8338 31.3232 12.6121C30.8086 9.3904 29.1958 6.45813 26.7697 4.33331C24.3437 2.20849 21.2604 1.02787 18.0647 1.00001Z"
						fill="#12100C"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_10443_26774">
					<rect
						width="35"
						height="27"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
		GitHub
	</a>
	<a
		href="https://gitpod.io/login"
		class="transition-all duration-200 delay-[50ms] flex shadow-light dark:shadow-none items-center py-3 px-8 font-semibold whitespace-nowrap bg-none text-black bg-sand-dark dark:bg-light-black dark:text-sand-dark hover:bg-sand-dark-hover focus:bg-sand-dark-hover hover:dark:bg-light-black-hover focus:dark:bg-light-black-hover text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl text-center"
	>
		<svg
			width="35"
			height="28"
			viewBox="0 0 35 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="mr-2"
		>
			<g clip-path="url(#clip0_10443_26779)">
				<g clip-path="url(#clip1_10443_26779)">
					<path
						d="M29.7552 11.8762L29.7218 11.788L26.3593 3.07838C26.2912 2.90737 26.1701 2.76229 26.0135 2.66416C25.8967 2.58988 25.7639 2.54382 25.6259 2.52966C25.4879 2.51551 25.3485 2.53365 25.2188 2.58265C25.0891 2.63165 24.9728 2.71013 24.8792 2.81181C24.7855 2.91348 24.7172 3.03553 24.6796 3.16816L22.4099 10.0682H13.2184L10.9487 3.16816C10.9109 3.03573 10.8424 2.91391 10.7487 2.81243C10.655 2.71095 10.5387 2.6326 10.4092 2.58365C10.2796 2.53469 10.1403 2.51648 10.0024 2.53045C9.86447 2.54443 9.73175 2.59022 9.61481 2.66416C9.4582 2.76229 9.3371 2.90737 9.26904 3.07838L5.90808 11.7896L5.87319 11.8762C5.38931 13.132 5.3297 14.5099 5.70334 15.8022C6.07698 17.0946 6.86362 18.2312 7.94464 19.0409L7.95733 19.0503L7.98588 19.0724L13.1011 22.8791L15.6388 24.7833L17.1805 25.9409C17.3614 26.0766 17.5819 26.15 17.8086 26.15C18.0353 26.15 18.2558 26.0766 18.4367 25.9409L19.9784 24.7833L22.5162 22.8791L27.6678 19.0503L27.6821 19.0393C28.7631 18.23 29.5498 17.0937 29.9237 15.8017C30.2976 14.5096 30.2385 13.132 29.7552 11.8762Z"
						fill="#E24329"
					/>
					<path
						d="M29.7573 11.8763L29.724 11.7881C28.0857 12.1219 26.5421 12.8114 25.2036 13.8072L17.8203 19.3511L22.5215 22.8791L27.6732 19.0503L27.6875 19.0393C28.7679 18.2296 29.554 17.0931 29.9273 15.8011C30.3007 14.5091 30.241 13.1316 29.7573 11.8763Z"
						fill="#FC6D26"
					/>
					<path
						d="M13.1016 22.8791L15.6393 24.7832L17.181 25.9408C17.3619 26.0765 17.5824 26.1499 17.8091 26.1499C18.0358 26.1499 18.2563 26.0765 18.4372 25.9408L19.9789 24.7832L22.5167 22.8791L17.8155 19.3511L13.1016 22.8791Z"
						fill="#FCA326"
					/>
					<path
						d="M10.4269 13.8072C9.08895 12.8119 7.54579 12.1229 5.90808 11.7896L5.87319 11.8762C5.38931 13.132 5.3297 14.5099 5.70334 15.8022C6.07698 17.0946 6.86362 18.2312 7.94464 19.0408L7.95733 19.0503L7.98588 19.0723L13.1011 22.8791L17.8054 19.3511L10.4269 13.8072Z"
						fill="#FC6D26"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_10443_26779">
					<rect
						width="35"
						height="27"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
				<clipPath id="clip1_10443_26779">
					<rect
						width="27"
						height="24.975"
						fill="white"
						transform="translate(4.3125 1.85001)"
					/>
				</clipPath>
			</defs>
		</svg>

		GitLab
	</a>
	<a
		href="https://gitpod.io/login"
		class="flex transition-all duration-200 delay-[50ms] shadow-light dark:shadow-none items-center py-3 px-8 font-semibold whitespace-nowrap bg-none text-black bg-sand-dark dark:bg-light-black dark:text-sand-dark hover:bg-sand-dark-hover focus:bg-sand-dark-hover hover:dark:bg-light-black-hover focus:dark:bg-light-black-hover text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl text-center"
	>
		<svg
			width="35"
			height="28"
			viewBox="0 0 35 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="mr-2"
		>
			<g clip-path="url(#clip0_10443_26784)">
				<path
					d="M7.60833 4.49091C7.60528 4.49091 7.60257 4.49091 7.59952 4.49091C7.22783 4.49091 6.92188 4.79686 6.92188 5.16855C6.92188 5.20481 6.92492 5.24106 6.93068 5.27697L9.80729 22.7399C9.88081 23.1794 10.263 23.5053 10.7086 23.509H24.5088C24.8429 23.5134 25.1329 23.2698 25.1865 22.9398L28.0631 5.28036C28.0688 5.24445 28.0719 5.20819 28.0719 5.17194C28.0719 4.80025 27.7659 4.49429 27.3942 4.49429C27.3912 4.49429 27.3885 4.49429 27.3854 4.49429L7.60833 4.49091ZM19.7212 17.1121H15.3165L14.1239 10.8811H20.7885L19.7212 17.1121Z"
					fill="#2684FF"
				/>
				<path
					d="M27.1459 10.8811H20.7862L19.7189 17.1121H15.3142L10.1133 23.2854C10.2779 23.4281 10.4884 23.5074 10.7062 23.5091H24.5099C24.8439 23.5135 25.134 23.2698 25.1875 22.9398L27.1459 10.8811Z"
					fill="url(#paint0_linear_10443_26784)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_10443_26784"
					x1="28.6164"
					y1="12.6261"
					x2="18.1061"
					y2="20.829"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#0052CC" />
					<stop offset="0.18" stop-color="#0052CC" />
					<stop offset="1" stop-color="#2684FF" />
				</linearGradient>
				<clipPath id="clip0_10443_26784">
					<rect
						width="35"
						height="27"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
		Bitbucket
	</a>
</div>
<img
	src="/images/extension-activation/extension-screenshot-dark.webp"
	class="mx-auto w-full md:w-3/4 mt-small mb-x-large md:mb-xxx-large shadow-highlight rounded-3xl"
	alt="Gitpod Extension activation on GitHub"
/>
<h2 class="text-center -mb-8 lg:-mb-28">Next step</h2>
<Feature {feature} />
