import * as configcat from 'configcat-js-ssr';
import { getOrSetCookieId } from '$lib/components/segment.svelte';
import { PUBLIC_CONFIGCAT_KEY } from '$env/static/public';

const configCatClient = configcat.getClient(
	PUBLIC_CONFIGCAT_KEY,
	configcat.PollingMode.LazyLoad,
	{
		cacheTimeToLiveSeconds: 3 * 60, // => 3 minutes
		requestTimeoutMs: 2500,
		logger: configcat.createConsoleLogger(configcat.LogLevel.Error),
	},
);
const userId = getOrSetCookieId();

type GetFeatureFlagDone = {
	(flagValue: boolean): void;
};

// getFeatureFlag function retrieves the value of a feature flag from the ConfigCat API.

export const getFeatureFlag = (
	flagName: string,
	defaultValue: boolean,
	done: GetFeatureFlagDone,
): boolean => {
	configCatClient
		.getValueAsync(flagName, defaultValue, new configcat.User(userId))
		.then(done)
		.catch((error) => {
			console.error(error);
		});

	// return the default value until the feature flag value is fetched
	return defaultValue;
};

/* The getStartedExampleFlagStatusValue variable stores & exports the value of the home_example_launch_workspaces_card feature flag.
 * The getFeatureFlag() function retrieves the value of the specified feature flag.
 * The feature flag is set to false by default, but is overridden by the value of the feature flag stored in local storage.
 * The value of the feature flag is also set to the value of the exampleFlagValue variable.
 */

// See Example on https://github.com/gitpod-io/website/blob/3f0a826def808e8c3ad7214ef581d90d5ebf2b6f/src/lib/components/index/get-started/index.svelte#L6

/* export let getStartedExampleFlagStatusValue = getFeatureFlag(
  "home_example_launch_workspaces_card",
  false,
  async (value) => (getStartedExampleFlagStatusValue = value)
); */

// Hot patch method, Only applies when we need to use feature flag on typescript based text files (& not svelte components). e.g. https://github.com/gitpod-io/website/blob/156d072136e6c7f3929dd260e53ab34fbc6f3214/src/lib/contents/pricing.ts#L55
export const dedicatedPricingSalesCtaFeatureFlagStatus =
	await configCatClient.getValueAsync(
		'dedicatedPricingSalesCta',
		false,
		new configcat.User(userId),
	);
