---
title: Organizational Policy For Workspace Sharing 🔒
excerpt: Organization owners can choose to restrict workspace sharing for workspaces started within their Organization.
date: 2023-03-28
image: organizational-policy-workspace-sharing.jpg
ogImage: organizational-policy-workspace-sharing.jpg
alt: Setting for enabling or disabling workspace sharing for an Organization.
customSlug: organizational-policy-workspace-sharing
---

To give you more control over who has access to your development environments with Gitpod, Organization Owners can now [restrict workspace sharing](/docs/configure/orgs/policies#workspace-sharing) for workspaces created within their Organization using an [Organizational Policy](/docs/configure/orgs/policies). Disabling workspace sharing prevents any user running a workspace in that organization from sharing their workspace with others.

To disable workspace sharing in your organization, go to [settings](https://gitpod.io/settings).

For more information see:

-   [Organizational Policies](/docs/configure/orgs/policies)
-   [Workspace Sharing Policy](/docs/configure/orgs/policies#workspace-sharing)
-   [Workspace Collaboration](/docs/configure/workspaces/collaboration)

## FAQs

**What happens to previously shared workspaces?**

Workspaces can stop sharing at any time, regardless of policy set. Access for workspaces shared before the policy is set will remain until workspace sharing is stopped for that specific workspace.

**Does this always prevent the repository from being shared in a workspace?**

Restricting workspace sharing only applies to workspaces that belong to the Organization that has the policy applied. Workspaces created in other organizations inherit policies related to that Organization.
