---
section: gitpod-dedicated/reference
title: Infrastructure cost - Gitpod Dedicated docs
---

# Networking and Data Flows in Gitpod Dedicated

> ℹ️ Gitpod Dedicated was designed with the goal of minimizing data inflows and relying mostly on data outflows to operate. This reduces the number of external access points, thus reducing the potential attack surface.

## Data flows

The following is a summary of the data flows that can be expected coming into and going out of a Gitpod Dedicated instance.

**Outgoing flows include:**

-   Making calls and sending heartbeats to the Substrate API (Gitpod Dedicated Control Plane) in order to send status updates and to check for available updates
-   Sending out observability data for support purposes

**Incoming flows include:**

-   Downloading images from ECR/Docker to update Gitpod

## Connectivity Requirements:

For Gitpod to function, the following services need to be reachable from the instance at a minimum:

> ℹ️ When using All Private networking mode (described below), the customer is responsible for ensuring connectivity to all of these.

-   **Login via SSO** (outbound connectivity only): This feature allows users to log into the instance when using SSO via OIDC (default). Only outbound connectivity is needed as the callback URL is resolved on the users machine rather than within the Gitpod Instance. If the provider for SSO is only available on the public internet, this means the instance requires an outward route to the internet.
-   **Git provider** (outbound connectivity always required, inbound connectivity for prebuilds): This feature enables users to see the contents of their Git repos and for enabling [prebuilds](https://www.gitpod.io/docs/configure/projects/prebuilds). For prebuilds, inbound connectivity is required as they use webhooks to be triggered. If the git provider is only available on the public internet (e.g. Gitlab.com), this means the instance requires an inbound and outbound connection to the public internet.
-   **Identity Provider (IDP) connectivity** (inbound and outbound connectivity): IDP connectivity (both inbound and outbound) is required to enable [OIDC from within workspaces](https://www.gitpod.io/docs/configure/workspaces/oidc). This allows workspaces to connect and authenticate with third party services such as AWS. If the IDP is only available on the public internet, this means the instance requires an inbound and outbound connection to the public internet.
-   **VS Code** (in the browser, outbound connectivity only)

    |                   Source                    |                                   Description                                    |                                                Domain                                                 |
    | :-----------------------------------------: | :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
    |            Extension management             |            For searching, installing and updating vscode extensions.             | https://open-vsx.org/ <br> https://open-vsx.gitpod.io/ <br> https://openvsxorg.blob.core.windows.net/ |
    | JSON Language Features (built-in extension) | For the JSON extension to properly work and provide IntelliSense and validation. |                                   https://www.schemastore.org/json/                                   |

-   **JetBrains** (outbound connectivity only)

    |             Source              |                               Description                                |                                                                           Domain                                                                           |
    | :-----------------------------: | :----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
    | Extension and client management | For access to the marketplace and downloading JetBrains clients/backends | https://download.jetbrains.com/ <br> https://download-cf.jetbrains.com/ <br> https://download-cdn.jetbrains.com/ <br> https://data.services.jetbrains.com/ |

### Networking Modes and Diagrams

Gitpod Dedicated can operate in four different networking modes depending on the customer’s choice. These differ in their connectivity on the ingress and egress side to the public internet. Please see the diagram below for an overview:

![Gitpod Dedicated Networking Modes](/images/docs/gitpod-dedicated/reference/networking-data-flows/Gitpod-Dedicated-Architecture.webp)

Benefits of each networking mode:

-   **All Private:** This mode gives the customer a maximum of control over network traffic, as all traffic except for what needs to reach the Gitpod Dedicated Control plane is routed through the customer’s network. As such, the customer can use their own firewall, perform deep packet inspection and more. However, the burden is on the customer to ensure that all the services required for Gitpod to function are reachable - for example, this may include public-only endpoints required to do SSO via OIDC (e.g. Azure AD auth endpoints). See Connectivity Requirements above.
    -   _Optionally_ public services can be exposed. Here, an API Gateway is added to expose endpoints for webhooks (required for prebuilds, e.g. Gitlab.com, to allow webhooks to be forwarded to internal Gitpod services) and IDP services (required to enable the use of public [OIDC IDPs within workspaces](https://www.gitpod.io/docs/configure/workspaces/oidc)) to the public internet. An allowlist can be used to restrict access. The added API gateway enables these features without:
        -   Exposing the entire instance to the public internet
        -   Extra effort to add public ingress within the customer’s network behind the transit gateway.
-   **Mixed with private ingress:** This mode also restricts public access of the instance. However, an Internet Gateway is added for egress traffic only. This allows the customer’s network to control ingress to the Gitpod instance without having to add an additional route to the internet. This enables use cases where outward facing internet connectivity is required (e.g. to reach a public SSO provider such as Azure AD). All ingress still happens via the customer’s network.
    -   _Optionally_ public services can be exposed. Here, an API Gateway is added to expose endpoints for webhooks (required for prebuilds, e.g. Gitlab.com, to allow webhooks to be forwarded to internal Gitpod services) and IDP services (required to enable the use of public [OIDC IDPs within workspaces](https://www.gitpod.io/docs/configure/workspaces/oidc)) to the public internet. An allowlist can be used to restrict access. The added API gateway enables these features without:
        -   Exposing the entire instance to the public internet
        -   Extra effort to add public ingress within the customer’s network behind the transit gateway.
-   **Mixed with Public Ingress:** This mode results in the instance being accessible to the public internet, allowing for developers anywhere to access the Gitpod installation (restrictions can be applied solely on IP ranges via an allow list). This still allows access to private resources that the Gitpod installation is allowed to connect to.
-   **All Public:** This mode results in all ingress and egress traffic being routed via the public internet. This is useful for situations where network access is not too much a concern or if the ease of setup is a priority (e.g. for a PoV). The Gitpod instance will be behind a static range of IP addresses representing the installation and their users workspace traffic, allowing for the Gitpod Instance to be allow listed in other services.

<!-- Add toggle using summary and details -->

<details>
    <summary class="text-body text-large"><b>All Private</b></summary>

<div class="ml-2 md:ml-4">

-   The instance is not accessible by the public internet, it is essentially “air gapped” unless the customer chooses to allow internet access from within their network.
-   Users access the instance via the Transit Gateway in the customer’s AWS account.
-   All traffic (ingress and egress) is routed through the Transit Gateway attachment, except for the traffic to the Gitpod Dedicated Control plane, which is routed via AWS PrivateLink. There is no _incoming_ connection into the Gitpod VPC except for the Transit Gateway attachment.
-   _Optionally_ public services can be exposed. Here, an API Gateway is added to expose endpoints for webhooks (required for prebuilds, e.g. Gitlab.com, to allow webhooks to be forwarded to internal Gitpod services) and IDP services (required to enable the use of public [OIDC IDPs within workspaces](https://www.gitpod.io/docs/configure/workspaces/oidc)) to the public internet. This ingress can be allow listed.

-   `Relay CIDR range` requirements: - The entire VPC used in the Gitpod installation ~~is~~ has a /10 CIDR block. This takes the form of `100.70.0.0/16` and does not need to be routable from the customer network. However, the relay CIDR may not be in this `100.70.0.0/16` range. - Gitpod only requires a `/25` CIDR block to be routable to or from the customer’s network. This is the relay CIDR in the diagram below. - For more information on CIDR range requirements, please see

![Gitpod Dedicated Networking Modes in All Private mode](/images/docs/gitpod-dedicated/reference/networking-data-flows/Gitpod-Dedicated-Architecture-all-private.webp)

For more information on CIDR range requirements, please see: [Pt. 4 in "All Private Networking Mode"](/docs/gitpod-dedicated/guides/getting-started#:~:text=All%20Private%20Networking%20Mode)

</div>

</details>
<details>
    <summary class="text-body text-large mt-4 md:mt-8"><b>Mixed with Private Ingress</b></summary>

<div class="ml-2 md:ml-4">

-   The instance is not available on the public internet. However, there is an ability to route to public endpoints on the egress path only.
-   Users access the instance via the Transit Gateway in the customer’s AWS account.
-   Egress traffic that is part of the customer defined CIDR (CIDR range of your network in [Getting Started](/docs/gitpod-dedicated/guides/getting-started)) is routed through the Transit Gateway attachment. Everything that is outside of the customer defined CIDR range is routed through Internet Gateway. The only exception to this is the traffic to the Gitpod Dedicated Control plane, which is routed via AWS PrivateLink. There is no incoming connection into the Gitpod VPC except for the Transit Gateway attachment.
-   _Optionally_ public services can be exposed. Here, an API Gateway is added to expose endpoints for webhooks (required for prebuilds, e.g. Gitlab.com, to allow webhooks to be forwarded to internal Gitpod services) and IDP services (required to enable the use of public OIDC IDPs within workspaces) to the public internet. This ingress can be allow listed.
-   `Relay CIDR range` requirements:
    -   The entire VPC used in the Gitpod installation is has a /10 CIDR block. This takes the form of `100.70.0.0/16` and does not need to be routable from the customer network. However, the relay CIDR may not be in this `100.70.0.0/16` range.
    -   Gitpod only requires a `/25` CIDR block to be routable to or from the customer’s network. This is the relay CIDR in the diagram below.
    -   For more information on CIDR range requirements, please see [Pt. 5 in "Mixed with Private Ingress Networking Mode"](/docs/gitpod-dedicated/guides/getting-started#:~:text=Mixed%20with%20Private%20Ingress%20Networking%20Mode).

![Gitpod Dedicated Networking Modes in Mixed with Public Ingress](/images/docs/gitpod-dedicated/reference/networking-data-flows/Gitpod-Dedicated-Architecture-mixed-with-pvt-ingress.webp)

</div>

</details>
<details>
    <summary class="text-body text-large mt-4 md:mt-8"><b>Mixed with Public Ingress</b></summary>

<div class="ml-2 md:ml-4">

-   Users access the instance via the public internet
-   Egress traffic that is part of the customer defined CIDR (`CIDR range of your network` in [Getting Started](/docs/gitpod-dedicated/guides/getting-started) ) is routed through the Transit Gateway attachment. Everything that is outside of the customer defined CIDR range is routed through Internet Gateway. The only exception to this is the traffic to the Gitpod Dedicated Control plane, which is routed via AWS PrivateLink. There is no _incoming_ connection into the Gitpod VPC except for the Transit Gateway attachment.
-   Ingress can be allow listed.
-   `Relay CIDR range` requirements:
    -   The entire VPC used in the Gitpod installation is has a /10 CIDR block. This takes the form of `100.70.0.0/16` and does not need to be routable from the customer network. However, the relay CIDR may not be in this `100.70.0.0/16` range.
    -   Gitpod only requires a `/25` CIDR block to be routable to or from the customer’s network. This is the relay CIDR in the diagram below.
    -   For more information on CIDR range requirements, please see [Pt. 4 in "Mixed with Public Ingress Networking Mode"](/docs/gitpod-dedicated/guides/getting-started#:~:text=Mixed%20with%20Public%20Ingress%20Networking%20Mode).

![Gitpod Dedicated Networking Modes in Mixed with Public Ingress](/images/docs/gitpod-dedicated/reference/networking-data-flows/Gitpod-Dedicated-Architecture-mixed-public-ingress.webp)

</div>

</details>

<details>
    <summary class="text-body text-large mt-4 md:mt-8"><b>All Public</b></summary>

<div class="ml-2 md:ml-4">

-   All ingress and egress traffic is routed via the public internet.
-   Ingress can be allow listed.

![Gitpod Dedicated Networking Modes in in All Public mode](/images/docs/gitpod-dedicated/reference/networking-data-flows/Gitpod-Dedicated-Architecture-all-public.webp)

</div>

</details>
