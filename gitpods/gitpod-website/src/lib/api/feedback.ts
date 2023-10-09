import { submitFeedback as submitExtensionFeedback } from '$lib/api/browser-extension';
import { submitFeedback as submitManualFeedback } from '$lib/api/manual';

export const routeToHandler = (type: string) => {
	if (type === 'docs' || type === 'guides' || type === 'digests') {
		return submitManualFeedback;
	} else if (type === 'browser-extension') {
		return submitExtensionFeedback;
	}
	return () => {
		throw new Error('Please provide a feedback type.');
	};
};
