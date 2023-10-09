import type { ChangelogEntry } from '$lib/types/changelog-entry';
import { stringToBeautifiedFragment } from '$lib/utils/helpers';
import { dateSort, renderMdsvexComponent } from './utils';
import type { MdsvexImport } from './types';

const changelogs = import.meta.glob<MdsvexImport<ChangelogEntry>>(
	'./changelog/*.md',
	{
		eager: true,
	},
);

export function getChangelogSlug(changelog: ChangelogEntry) {
	return stringToBeautifiedFragment(
		changelog.customSlug ? changelog.customSlug : changelog.title,
	);
}

export function findChangelog(slug: string) {
	const changelog = Object.entries(changelogs)
		.filter(([file]) => !file.endsWith('_template.md'))
		.map(([, changelog]) => changelog)
		.find(
			({ metadata }) =>
				metadata?.customSlug == slug ||
				getChangelogSlug(metadata) == slug,
		);

	return changelog
		? {
				metadata: changelog.metadata,
				html: renderMdsvexComponent(changelog.default),
		  }
		: null;
}

export function listChangelogsMeta() {
	return Object.entries(changelogs)
		.filter(([file]) => !file.endsWith('_template.md'))
		.map(([file, data]) => data.metadata)
		.sort(dateSort);
}

export function listChangelogs() {
	// @NOTE For changelog custom css/js in the mdsvex file won't be rendered
	// this is because historically it hasn't so it won't break anything
	// and allows for a more performant rendering of individual changelog pages
	return Object.entries(changelogs)
		.filter(([file]) => !file.endsWith('_template.md'))
		.map(([file, data]) => ({
			html: renderMdsvexComponent(data.default),
			fileName: file.split('/').at(-1),
			metadata: data.metadata,
		}))
		.sort((a, b) => dateSort(a.metadata, b.metadata));
}

export function listRawChangelogs() {
	const changelogs = import.meta.glob<string>('./changelog/*.md', {
		eager: true,
		as: 'raw',
	});

	return Object.entries(changelogs)
		.filter(([file]) => !file.endsWith('_template.md'))
		.map(([file, raw]) => ({
			fileName: file.split('/').at(-1),
			raw,
		}));
}
