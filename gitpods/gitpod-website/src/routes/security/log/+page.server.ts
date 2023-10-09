import type { SecurityLog } from '$lib/types/security';
import type { MdsvexImport } from '$content/types';
import type { PageServerLoad } from './$types';
import { renderMdsvexComponent } from '$content/utils';

export const load: PageServerLoad = async () => {
	const logs = import.meta.glob<MdsvexImport<SecurityLog>>(
		'$content/security/*.md',
		{
			eager: true,
		},
	);

	return {
		logs: Object.values(logs)
			.map((log) => ({
				log: log.metadata,
				html: renderMdsvexComponent(log.default),
			}))
			.sort((a, b) => Date.parse(b.log.date) - Date.parse(a.log.date)),
	};
};
