import { visit } from 'unist-util-visit';

const youtubeEmbedRegex = new RegExp(`\(youtube\):\(\.\*\)`, 'i');

const embedVideoHtml = (videoId, options) => `
<span class="relative mt-medium not-prose block overflow-hidden max-w-full after:block after:pt-[56.26%]"><iframe
  title="${options.title ? options.title : 'Youtube Video'}"
  width="${options.width}"
  height="${options.height}"
  src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0"
  class="absolute top-0 left-0 w-full h-full"
  ${options.noIframeBorder ? 'style="border:0"' : ''}
  allowfullscreen
  sandbox="allow-same-origin allow-scripts allow-popups">
</iframe></span>`;

const visitor = (options) => (node) => {
	if (node.type === 'inlineCode') {
		const regexResult = node.value.match(youtubeEmbedRegex);
		if (regexResult) {
			node.type = 'html';
			node.value = embedVideoHtml(regexResult[2].trim(), options);
		}
	}
};

export default (options) => (tree) => {
	visit(tree, visitor(options));
	return tree;
};
