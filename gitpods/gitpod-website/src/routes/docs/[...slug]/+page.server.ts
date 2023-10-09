import { listDocsSlugs } from '$content/docs';

export const entries = () => listDocsSlugs().map((slug) => ({ slug }));
