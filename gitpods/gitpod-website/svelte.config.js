import adapterNetlify from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import headings from 'remark-autolink-headings';
import remarkExternalLinks from 'remark-external-links';
import slug from 'remark-slug';
import remarkSetImagePath from './src/lib/utils/remark-set-image-path.js';
import remarkEmbedVideo from './src/lib/utils/remark-embed-video.js';
import remarkLinkWithImageAsOnlyChild from './src/lib/utils/remark-link-with-image-as-only-child.js';
import remarkHeadingsPermaLinks from './src/lib/utils/remark-headings-permalinks.js';
import { toString } from 'mdast-util-to-string';
import rehypeWrap from 'rehype-wrap-all';
import rehypeImgSize from 'rehype-img-size';
import { highlightCode } from './src/lib/utils/highlight.js';
import { mdsvexGlobalComponents } from './src/lib/utils/mdsvex-global-components.js';
import { h } from 'hastscript';
import { visit } from 'unist-util-visit';
import getHeadings from './src/lib/utils/get-headings.js';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapterNetlify({
			edge: false,
			split: false,
		}),

		// Temporary workaround for https://github.com/sveltejs/kit/issues/8026#issuecomment-1605293431 in dev mode
		csrf: {
			checkOrigin: process.env.NODE_ENV === 'development' ? false : true,
		},

		prerender: {
			crawl: true,
			handleMissingId: 'warn',
			handleHttpError: (details) => {
				// Handle docs trying to prerender relative links that it can't
				if (
					details.status == 404 &&
					details.path.startsWith('/docs') &&
					details.referenceType == 'linked'
				) {
					console.warn(`PRERENDER ignored route ${details.path}`);
					return;
				}

				throw new Error(
					`${details.status} ${details.path} from ${details.referrer}`,
				);
			},
		},

		alias: {
			$content: 'src/content',
		},
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
	preprocess: [
		vitePreprocess(),
		mdsvexGlobalComponents({
			dir: `$lib/components`,
			list: [['CodeFence', 'code-fence.svelte']],
			extensions: ['.md'],
		}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: highlightCode,
			},
			rehypePlugins: [
				[
					rehypeWrap,
					{ selector: 'table', wrapper: 'div.overflow-auto' },
				],
				[rehypeImgSize, { dir: './static' }],
				[
					/** Custom rehype plugin to add loading="lazy" to all images */
					() => {
						return (tree) => {
							visit(tree, 'element', (node) => {
								if (node.tagName === 'img') {
									node.properties.loading = 'lazy';
								}
							});
						};
					},
				],
			],
			remarkPlugins: [
				[
					remarkExternalLinks,
					{
						target: '_blank',
					},
				],
				slug,
				[
					headings,
					{
						behavior: 'append',
						linkProperties: {},
						content: function (node) {
							return [
								h('span.icon.icon-link header-anchor', {
									ariaLabel: toString(node) + ' permalink',
								}),
							];
						},
					},
				],
				remarkSetImagePath,
				remarkLinkWithImageAsOnlyChild,
				remarkHeadingsPermaLinks,
				getHeadings,
				[
					remarkEmbedVideo,
					{
						width: 800,
						height: 400,
						noIframeBorder: true,
					},
				],
			],
		}),
	],
};

export default config;
