/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { Team } from "@gitpod/gitpod-protocol";
import { BillingMode } from "@gitpod/gitpod-protocol/lib/billing-mode";
import { useMemo } from "react";
import { Redirect } from "react-router";
import Header from "../components/Header";
import { SpinnerLoader } from "../components/Loader";
import { PageWithSubMenu } from "../components/PageWithSubMenu";
import { useOrgBillingMode } from "../data/billing-mode/org-billing-mode-query";
import { useCurrentOrg } from "../data/organizations/orgs-query";
import { useFeatureFlag } from "../data/featureflag-query";

export interface OrgSettingsPageProps {
    children: React.ReactNode;
}

export function OrgSettingsPage({ children }: OrgSettingsPageProps) {
    const org = useCurrentOrg();
    const orgBillingMode = useOrgBillingMode();
    const oidcServiceEnabled = useFeatureFlag("oidcServiceEnabled");
    const orgGitAuthProviders = useFeatureFlag("orgGitAuthProviders");

    const menu = useMemo(
        () =>
            getTeamSettingsMenu({
                team: org.data,
                billingMode: orgBillingMode.data,
                ssoEnabled: oidcServiceEnabled,
                orgGitAuthProviders,
                isOwner: org.data?.isOwner,
            }),
        [org.data, orgBillingMode.data, oidcServiceEnabled, orgGitAuthProviders],
    );

    const title = "Organization Settings";
    const subtitle = "Manage your organization's settings.";

    // Render as much of the page as we can in a loading state to avoid content shift
    if (org.isLoading || orgBillingMode.isLoading) {
        return (
            <div className="w-full">
                <Header title={title} subtitle={subtitle} />
                <div className="w-full">
                    <SpinnerLoader />
                </div>
            </div>
        );
    }

    // TODO: redirect when current page is not included in menu
    const onlyForOwner = false;

    // After we've loaded, ensure user is an owner, if not, redirect
    if (onlyForOwner && !org.data?.isOwner) {
        return <Redirect to={"/"} />;
    }

    return (
        <PageWithSubMenu subMenu={menu} title={title} subtitle={subtitle}>
            {children}
        </PageWithSubMenu>
    );
}

function getTeamSettingsMenu(params: {
    team?: Team;
    billingMode?: BillingMode;
    ssoEnabled?: boolean;
    orgGitAuthProviders: boolean;
    isOwner?: boolean;
}) {
    const { billingMode, ssoEnabled, orgGitAuthProviders, isOwner } = params;
    const result = [
        {
            title: "General",
            link: [`/settings`],
        },
    ];
    if (isOwner && ssoEnabled) {
        result.push({
            title: "SSO",
            link: [`/sso`],
        });
    }
    if (isOwner && orgGitAuthProviders) {
        result.push({
            title: "Git Providers",
            link: [`/settings/git`],
        });
    }
    if (isOwner && billingMode?.mode !== "none") {
        // The Billing page handles billing mode itself, so: always show it!
        result.push({
            title: "Billing",
            link: ["/billing"],
        });
    }
    return result;
}
