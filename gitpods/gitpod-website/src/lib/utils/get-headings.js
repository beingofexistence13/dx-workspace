import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

export default () => (tree, vFile) => {
	let headers = [];
	visit(tree, (node) => {
		if (node.type === 'heading') {
			if (node.depth !== 1) {
				const sanitizedString = toString(node).replace(
					/{(.*?)}/,
					(_, token) => {
						return vFile.data.fm[token] || token;
					},
				);
				headers.push({
					title: sanitizedString,
					level: node.depth,
					slug: node.data.id,
					children: [],
				});
			}
		}
	});

	const stack = [];
	const sortedHeaders = [];

	//const sort Header to tree
	const sortHeader = (header) => {
		while (stack.length !== 0 && header.level <= stack[0].level) {
			stack.shift();
		}

		if (stack.length === 0) {
			sortedHeaders.push(header);
			stack.push(header);
		} else {
			(stack[0].children ??= []).push(header);
			stack.unshift(header);
		}
	};

	headers.forEach((_, index) => {
		const header = headers[index];
		sortHeader(header);
	});

	if (!vFile.data.fm) vFile.data.fm = {};
	vFile.data.fm.headings = sortedHeaders;
	return tree;
};
