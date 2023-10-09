import { visit } from 'unist-util-visit';
import regexCreator from 'emoji-regex';
const emojiRegex = regexCreator();

const nonAlphanumericsAtTheBeginningRegex = /^\W+/g;
const nonAlphanumericsAtTheEndRegex = /\W+$/g;

const beautifyFragment = (str = '') =>
	str
		.replace(emojiRegex, '')
		.replace(nonAlphanumericsAtTheBeginningRegex, '')
		.replace(nonAlphanumericsAtTheEndRegex, '');

const visitor = (node) => {
	node.data = node.data || {};
	node.data.hProperties = node.data.hProperties || {};

	if (node.type === 'heading') {
		let fragment = node.data.id;
		fragment = beautifyFragment(fragment);

		const lastChildrenIdx = node.children.length - 1;
		const headingPermalink = node.children[lastChildrenIdx];
		headingPermalink.url = `#${fragment}`;

		node.data.hProperties.id = fragment;
		node.data.id = fragment;
	}
};

export default () => async (tree) => {
	visit(tree, visitor);
	return tree;
};
