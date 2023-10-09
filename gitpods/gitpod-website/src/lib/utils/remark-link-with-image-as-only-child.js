import { visit } from 'unist-util-visit';

const visitor = (node) => {
	node.data = node.data || {};
	node.data.hProperties = node.data.hProperties || {};
	if (node.type === 'link') {
		if (
			node.children &&
			node.children.length &&
			node.children.length === 1
		) {
			if (node.children[0].type === 'image') {
				node.data.hProperties.class = 'after:hidden';
			}
		}
	}
};

export default () => async (tree) => {
	visit(tree, visitor);
	return tree;
};
