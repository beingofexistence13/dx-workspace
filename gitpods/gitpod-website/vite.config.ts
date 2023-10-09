import { writeFile, readFile } from 'fs/promises';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { existsSync } from 'fs';

async function getStars(): Promise<string> {
	// Cache incase something reloads vite config too much
	if (existsSync('.stars-cache')) {
		return await readFile('.stars-cache', 'utf-8');
	}

	const res = await fetch('https://api.github.com/repos/gitpod-io/gitpod');
	const data = await res.json();

	const stars = `${data.stargazers_count ?? 11200}`;

	await writeFile('.stars-cache', stars, 'utf-8');

	return stars;
}

export default defineConfig({
	plugins: [sveltekit()],

	resolve: {
		preserveSymlinks: true,
	},

	define: {
		__GITHUB_STARS__: await getStars(),
	},

	build: {
		// to resolve https://github.com/vitejs/vite/issues/6985
		target: 'esnext',
	},
});
