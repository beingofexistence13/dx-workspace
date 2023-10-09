/// <reference types="@sveltejs/kit" />
/// <reference types="mdsvex/globals" />

import type { BannerData } from '$lib/types/banner';
import type { BlogPost } from './lib/types/blog';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface PageData {
			bannerData: BannerData;
		}
	}

	const __GITHUB_STARS__: number;
}
