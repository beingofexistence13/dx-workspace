import type { create_ssr_component } from 'svelte/internal';

export function dateSort<T extends { date?: string }>(a: T, b: T): number {
	return Date.parse(b.date) - Date.parse(a.date);
}

export function renderMdsvexComponent(component: any): string {
	if (typeof component['render'] != 'function') {
		throw new Error(
			"Unable to render something that isn't a mdsvex component",
		);
	}

	return (component as ReturnType<typeof create_ssr_component>).render().html;
}

export function mdPathToSlug(path: string) {
	return path.split('/').at(-1).slice(0, -3);
}

export function parseReadContent<T extends { date?: string }>(
	data: Record<string, T>,
): T[] {
	return Object.entries(data)
		.map(([file, data]) => ({
			slug: mdPathToSlug(file),
			...data,
		}))
		.sort(dateSort);
}
