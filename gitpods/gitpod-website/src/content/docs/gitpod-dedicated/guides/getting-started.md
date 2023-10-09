---
section: guides
title: Getting Started with Gitpod Dedicated - Gitpod Dedicated docs
---

# Getting Started with Gitpod Dedicated

> ℹ️ You will need to have familiarity with AWS, specifically CloudFormation, in order to execute this guide. Please read through the entire guide or review it with your Gitpod engineer to ensure you understand all the requirements and steps.

Gitpod Dedicated is currently available in the following AWS regions:

-   `us-east-1`
-   `us-east-2`
-   `us-west-1`
-   `us-west-2`
-   `ap-northeast-1`
-   `ap-southeast-2`
-   `eu-west-1`
-   `eu-west-2`
-   `eu-west-3`
-   `eu-central-1`
-   `sa-east-1 `

## 0. Prerequisites

Here's a list of what you'll need to get started with Gitpod Dedicated:

-   **An empty AWS account.** There should be no other resources, EC2 instances, containers, functions or applications running in the account. If your company requires security policies or roles to be present in new accounts please review them with a Gitpod Engineer to ensure there are no items that will block Gitpod Dedicated from running.
-   **Private network address ranges.** Provide a list of network CIDR ranges to your Gitpod engineer to ensure that traffic is routed correctly to internal resources. This list should include the network address space for any internal or on-premise networks that developers will need to access from their Gitpod workspaces.
-   **List of resources developers require to build and test.** This should include any external databases, APIs, PaaS endpoints, cloud resources and anything else that your developers need to build and test their code. Review this list with your Gitpod engineer to ensure the right architecture is set up for your installation. Gitpod Dedicated has four supported modes - public, private, mixed public, and mixed private. We will help you choose the right mode for your environment.
-   **The ability to run an AWS Cloudformation template.** The Gitpod Dedicated installer is provided as a set of Cloudformation templates. These should be run by a user with Administrator level access to the AWS account. We do not support running the Cloudformation template through terraform. You may run the Cloudformation templates either in the AWS Console (recommended) or via the AWS CLI (expert).
-   **Optional - AWS Transit Gateway.** For private, mixed private, and mixed public installations you will create a transit gateway attachment that allows workspaces to connect to private resources on your network. Work with your Gitpod engineer to get this set up correctly.

## 1. Set up an AWS Account for Gitpod Dedicated

> ⚠️ Gitpod Dedicated requires its own independent AWS account. It is not intended to run alongside other components in a shared or existing AWS account.

Create a new AWS account following the steps in [the AWS documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html). Start by navigating to the AWS console and creating the account as a subaccount in your AWS organization.

Ensure that the account meets the following quota requirements in the region where Gitpod Dedicated will be installed. AWS quota increases may take up to a day to be approved, so make sure you do this step first.

Visit the correct quota increase page for your region. For example this link goes to us-west-2. Replace the region with your own, search for each Service type below, and request an increase to the new value. _On most new AWS accounts you will only need to increase the Elastic IPs and Lambda executions._

https://us-west-2.console.aws.amazon.com/servicequotas/home/services

|                  Service                  |                               Name                               | Value |                                                                                                                                                                                                                                                        Reasoning                                                                                                                                                                                                                                                         |
| :---------------------------------------: | :--------------------------------------------------------------: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Amazon Elastic Compute Cloud (Amazon EC2) |                       EC2-VPC Elastic IPs                        |  20   | Gitpod requires 3 IP addresses for each load balancer (Gitpod has 2 load balancers, one for meta and one for the workspace cluster). Additionally, 3 IPs are needed for each NAT gateway (Gitpod has 3 VPCs, so 3x). Therefore, at a minimum, 15 IPs are needed. The additional 5 act as a buffer in case a new load balancer needs to be provisioned and runs in parallel to the old one, ensuring a smooth transition. For more information, please see [Architecture](/docs/gitpod-dedicated/reference/architecture). |
| Amazon Elastic Compute Cloud (Amazon EC2) | Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) Instances |  256  |                                                                                                                                    This value depends on the number of concurrent developers using the instance. 256 the minimum recommended setting and is suitable for proof-of-value trials. Consult with your engineer on an appropriate setting for your expected usage levels.                                                                                                                                     |
|                AWS Lambda                 |                      Concurrent Executions                       | 1024  |                                                                                                                                                            To ensure Gitpod can install and operate properly, the default concurrent execution quota should be increased to 1024. Increasing the quota to 1024 guarantees that Gitpod will function properly.                                                                                                                                                            |
| Amazon Virtual Private Cloud (Amazon VPC) |                         VPCs per Region                          |   4   |                                                                                                                                               Gitpod Dedicated requires four VPCs. One is the default VPC that comes pre-installed in new accounts. The Gitpod Dedicated platform runs in a second VPC. The other two VPCs are reserved for upcoming feature enhancements.                                                                                                                                               |

When your request has been approved verify that you have at least 20 Elastic IPs and 1024 concurrent Lambdas enabled. The screenshots below show how these limits look after they've been raised.

<details>
  <summary>Click to view screenshot: Elastic IPs</summary>
  <div style="display: flex; justify-content: center;">
  <img src="/images/docs/gitpod-dedicated/guides/getting-started/20230823_124325_elastic_ips.png" alt="IAM Permissions" style="width: 80%;">
</div>
</details>

<details>
  <summary>Click to view screenshot: Lambdas</summary>
  <div style="display: flex; justify-content: center;">
  <img src="/images/docs/gitpod-dedicated/guides/getting-started/20230823_124350_lambdas.png" alt="IAM Permissions" style="width: 80%;">
</div>
</details>

<br>

Ensure that you allow for cross-account and cross-region communication with `eu-central-1`. For example, this could be restricted by [SCPs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) such as a [Region deny SCP](https://docs.aws.amazon.com/controltower/latest/userguide/region-deny.html). To roll out updates to the application, an AWS Lambda function pulls several configurations from a known S3 bucket owned by Gitpod. This bucket is hosted in the Gitpod Dedicated control plane located in the `eu-central-1` region.

## 2. Execute two CloudFormation templates

> ℹ️ Notify your Gitpod account manager if you want an overview of what is installed and configured by the Cloudformation templates. You may share these templates with your security and network teams if approval is required. Please see [AWS IAM permission requirements](/docs/gitpod-dedicated/reference/AWS-IAM-permission-requirements) for information on the permissions needed.

Follow the process below to acquire and install your Cloudformation templates:

### 2.1 Provide information

Your Gitpod account manager will ask for information needed to generate the CloudFormation templates used to install Gitpod. The information required depends on the choice of networking mode. To help choose the right networking mode, please see [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for general guidance and requirements on which services Gitpod needs to be able to route to.

Please provide the information required by the chosen networking mode:

<details class="ml-4">
<summary class="text-body text-p-medium mt-micro">All Private Networking Mode</summary>

<!--***********************************************-->
<!--Requirements for private mode-->
<!--***********************************************-->

1. `Subdomain` of your Gitpod installation. The full domain will be `<subdomain>.gitpod.cloud` unless a custom domain is used (see below).

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
    <summary class="text-body text-p-medium mt-micro">📝 Note on compliance and privacy:</summary>
    Depending on your compliance and regulatory requirements, you may want to avoid including your company name in the URL. Although efforts are taken to minimize any exposure, avoiding using the company name can further increase confidentiality and reduce exposure risk.
  </details>
</div>

2. `AWS account ID` of the empty account you created in the previous section.
3. `AWS region` where Gitpod will be installed. See [above](/docs/gitpod-dedicated/guides/getting-started#:~:text=Currently%2C%20Gitpod%20Dedicated%20is%20only%20available%20in%20the%20following%20AWS%20regions%3A) for available regions.
4. `Relay CIDR range`: The small part of the Gitpod Dedicated VPC that needs to be routable from your network. This is called the **relay subnet** and it attaches to your Transit Gateway (see below). See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more details and a networking diagram.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
  <summary class="text-body text-p-medium mt-micro">📝 Please consider the following points when choosing this range:</summary>
  <ul>
    <li>The only restriction in place is that the `Relay CIDR range` must be `/25` and not in the range `100.70.0.0/10` (the parent range used by Gitpod).</li>
    <li>The `Relay CIDR range` <strong>must not overlap with any of your internal services that Gitpod needs to communicate with.</strong> For example, your source code repository, SSO provider, or package repositories.</li>
    <li>The `Relay CIDR range` must be routable from your source code repository (SCM) server for <a href="/docs/configure/projects/prebuilds">Prebuilds</a> to work. Prebuilds are powered by webhooks, so Gitpod must be able to get notifications of changes to your code repos to trigger prebuilds.</li>
  </ul>
</details>
</div>

5. `CIDR range of your network` or the IP address space used by your company network that you want workspaces to be able to route to. At the very least, provide the relevant ranges that you want Gitpod to be able to interact with. This helps Gitpod ensure there are no possible IP conflicts with CIDR ranges used internally in the Gitpod instance (100.70.0.0/16, part of CGNAT range). Note that this internal Gitpod range does not need to be routable from your network.

6. `transitGatewayID` of your Transit Gateway. Network traffic to your internal resources will be routed through a new transit gateway attachment. Gitpod Dedicated control plane traffic does not route through the transit gateway, it is reserved for your internal traffic. See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more information.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
<details class="ml-8">
<summary class="text-body text-p-medium">📝 Note on auto propagation:</summary>

<div class="ml-4">
When using auto-propagation by default, delete the propagation from your Transit Gateway Routetable associated with the Gitpod Transit Gateway Attachment and replace it with a static route pointing the Relay CIDR range (/25) to the Gitpod Transit Gateway Attachment ID. This ensures only the required relay range is shared on your Transit Gateway network and no other routes are accidentally broadcasted.
</div>

</details>
</div>

<!--***********************************************-->
<!--End of Private Requirements block-->
<!--***********************************************-->

</details>

<details class="ml-4">
<summary class="text-body text-p-medium mt-micro">Mixed with Private Ingress Networking Mode</summary>

<!--***********************************************-->
<!--Requirements for mixed private mode-->
<!--***********************************************-->

1. `Subdomain` of your Gitpod installation. The full domain will be `<subdomain>.gitpod.cloud` unless a custom domain is used (see below).

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
    <summary class="text-body text-p-medium mt-micro">📝 Note on compliance and privacy:</summary>
    Depending on your compliance and regulatory requirements, you may want to avoid including your company name in the URL. Although efforts are taken to minimize any exposure, avoiding using the company name can further increase confidentiality and reduce exposure risk.
  </details>
</div>

2. `AWS account ID` of the empty account you created in the previous section.
3. `AWS region` where Gitpod will be installed. See [above](/docs/gitpod-dedicated/guides/getting-started#:~:text=Currently%2C%20Gitpod%20Dedicated%20is%20only%20available%20in%20the%20following%20AWS%20regions%3A) for available regions.
4. `Relay CIDR range`: The small part of the Gitpod Dedicated VPC that needs to be routable from your network. This is called the **relay subnet** and it attaches to your Transit Gateway (see below). See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more details and a networking diagram.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
  <summary class="text-body text-p-medium mt-micro">📝 Please consider the following points when choosing this range:</summary>
  <ul>
    <li>The only restriction in place is that the `Relay CIDR range` must be `/25` and not in the range `100.70.0.0/10` (the parent range used by Gitpod).</li>
    <li>The `Relay CIDR range` <strong>must not overlap with any of your internal services that Gitpod needs to communicate with.</strong> For example, your source code repository, SSO provider, or package repositories.</li>
    <li>The `Relay CIDR range` must be routable from your source code repository (SCM) server for <a href="/docs/configure/projects/prebuilds">Prebuilds</a> to work. Prebuilds are powered by webhooks, so Gitpod must be able to get notifications of changes to your code repos to trigger prebuilds.</li>
  </ul>
</details>
</div>

5. `CIDR range of your network` or the IP address space used by your company network that you want workspaces to be able to route to. At the very least, provide the relevant ranges that you want Gitpod to be able to interact with. This helps Gitpod ensure there are no possible IP conflicts with CIDR ranges used internally in the Gitpod instance (100.70.0.0/16, part of CGNAT range). Note that this internal Gitpod range does not need to be routable from your network.

6. `transitGatewayID` of your Transit Gateway. Network traffic to your internal resources will be routed through a new transit gateway attachment. Gitpod Dedicated control plane traffic does not route through the transit gateway, it is reserved for your internal traffic. See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more information.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
<details class="ml-8">
<summary class="text-body text-p-medium">📝 Note on auto propagation:</summary>

<div class="ml-4">
When using auto-propagation by default, delete the propagation from your Transit Gateway Routetable associated with the Gitpod Transit Gateway Attachment and replace it with a static route pointing the Relay CIDR range (/25) to the Gitpod Transit Gateway Attachment ID. This ensures only the required relay range is shared on your Transit Gateway network and no other routes are accidentally broadcast.
</div>

</details>
</div>

7. `Expose public services?` : This optional feature may be enabled to expose webhooks and Identity Provider (IDP) services on public endpoints. The added API gateway does not expose your entire instance to the public Internet. This can be helpful for connecting to OIDC providers such as Okta, Azure AD. This option also makes it easy for developers to connect to your instance without having to route through a VPN or transit gateway.

<!--***********************************************-->
<!--End of mixed private requirements-->
<!--***********************************************-->

</details>

<details class="ml-4">
<summary class="text-body text-p-medium mt-micro">Mixed with Public Ingress Networking Mode</summary>

<!--***********************************************-->
<!--Requirements for mixed public mode-->
<!--***********************************************-->

1. `Subdomain` of your Gitpod installation. The full domain will be `<subdomain>.gitpod.cloud` unless a custom domain is used (see below).

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
    <summary class="text-body text-p-medium mt-micro">📝 Note on compliance and privacy:</summary>
    Depending on your compliance and regulatory requirements, you may want to avoid including your company name in the URL. Although efforts are taken to minimize any exposure, avoiding using the company name can further increase confidentiality and reduce exposure risk.
  </details>
</div>

2. `AWS account ID` of the empty account you created in the previous section.
3. `AWS region` where Gitpod will be installed. See [above](/docs/gitpod-dedicated/guides/getting-started#:~:text=Currently%2C%20Gitpod%20Dedicated%20is%20only%20available%20in%20the%20following%20AWS%20regions%3A) for available regions.
4. `Relay CIDR range`: The small part of the Gitpod Dedicated VPC that needs to be routable from your network. This is called the **relay subnet** and it attaches to your Transit Gateway (see below). See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more details and a networking diagram.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
  <summary class="text-body text-p-medium mt-micro">📝 Please consider the following points when choosing this range:</summary>
  <ul>
    <li>The only restriction in place is that the `Relay CIDR range` must be `/25` and not in the range `100.70.0.0/10` (the parent range used by Gitpod).</li>
    <li>The `Relay CIDR range` <strong>must not overlap with any of your internal services that Gitpod needs to communicate with.</strong> For example, your source code repository, SSO provider, or package repositories.</li>
    <li>The `Relay CIDR range` must be routable from your source code repository (SCM) server for <a href="/docs/configure/projects/prebuilds">Prebuilds</a> to work. Prebuilds are powered by webhooks, so Gitpod must be able to get notifications of changes to your code repos to trigger prebuilds.</li>
  </ul>
</details>
</div>

5. `CIDR range of your network` or the IP address space used by your company network that you want workspaces to be able to route to. At the very least, provide the relevant ranges that you want Gitpod to be able to interact with. This helps Gitpod ensure there are no possible IP conflicts with CIDR ranges used internally in the Gitpod instance (100.70.0.0/16, part of CGNAT range). Note that this internal Gitpod range does not need to be routable from your network.

6. `transitGatewayID` of your Transit Gateway. Network traffic to your internal resources will be routed through a new transit gateway attachment. Gitpod Dedicated control plane traffic does not route through the transit gateway, it is reserved for your internal traffic. See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more information.

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
<details class="ml-8">
<summary class="text-body text-p-medium">📝 Note on auto propagation:</summary>

<div class="ml-4">
When using auto-propagation by default, delete the propagation from your Transit Gateway Routetable associated with the Gitpod Transit Gateway Attachment and replace it with a static route pointing the Relay CIDR range (/25) to the Gitpod Transit Gateway Attachment ID. This ensures only the required relay range is shared on your Transit Gateway network and no other routes are accidentally broadcast.
</div>

</details>
</div>

6. `Expose public services?` : This optional feature may be enabled to expose webhooks and Identity Provider (IDP) services on public endpoints. The added API gateway does not expose your entire instance to the public Internet. This can be helpful for connecting to OIDC providers such as Okta, Azure AD. This option also makes it easy for developers to connect to your instance without having to route through a VPN or transit gateway.

<!--***********************************************-->
<!--End of mixed public requirements-->
<!--***********************************************-->

</details>

<details class="ml-4">
<summary class="text-body text-p-medium my-micro">All Public Networking Mode</summary>

<!--***********************************************-->
<!--Requirements for allPublic mode-->
<!--***********************************************-->

1. `Subdomain` of your Gitpod installation. The full domain will be `<subdomain>.gitpod.cloud` unless a custom domain is used (see below).

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
    <summary class="text-body text-p-medium mt-micro">📝 Note on compliance and privacy:</summary>
    Depending on your compliance and regulatory requirements, you may want to avoid including your company name in the URL. Although efforts are taken to minimize any exposure, avoiding using the company name can further increase confidentiality and reduce exposure risk.
  </details>
</div>

2. `AWS account ID` of the empty account you created in the previous section.
3. `AWS region` where Gitpod will be installed. See [above](/docs/gitpod-dedicated/guides/getting-started#:~:text=Currently%2C%20Gitpod%20Dedicated%20is%20only%20available%20in%20the%20following%20AWS%20regions%3A) for available regions.

<!--***********************************************-->
<!--End of Requirements block-->
<!--***********************************************-->

</details>

**Special Situations**

The information required further depends on whether the choice of using an allowlist and custom domain:

<details class="ml-4">

<summary class="text-body text-p-medium mt-micro">When using an Allowlist</summary>

The allowlist will apply to all inbound traffic to the Gitpod Dedicated Instance. In addition to the above, the following information is required:

-   `allowlist` of IPs or CIDR ranges that should be allowed to access the instance. Any CIDRs provided in the `CIDR range of your network` above are always allowed. Example:

    ```
    allowListIPs:
        - 32.45.67.4/32
        - 32.45.67.18/32
    ```

</details>

<details class="ml-4">

<summary class="text-body text-p-medium mt-micro">When using a Custom Domain</summary>

Please see [Using Custom Domains](/docs/gitpod-dedicated/guides/using-custom-domains) for more information about using a custom domains. In addition to the above, the following information is required:

-   `domainName` that is to be used
-   `ARN of the certificate` to be used

</details>

<details class="ml-4">

<summary class="text-body text-p-medium my-micro">When using certificates signed by a custom or private Certificate Authority</summary>

Please see [Using a Custom or Private CA](/docs/gitpod-dedicated/guides/using-custom-or-private-ca) for more information about using custom domains. In addition to the above, the following information is required:

-   `ARN of the Custom CA certificate` that is stored in secrets manager

</details>

### 2.2 Receive your Cloudformation Templates

You will need to execute two CloudFormation templates to install the infrastructure and subsequently Gitpod Dedicated:

1. `gitpod-role` Template: This template creates a new IAM role with specific policies attached. These policies grant the minimum permissions necessary to install and run Gitpod Dedicated in your account.

2. `gitpod-instance` Template: This template installs the infrastructure for Gitpod Dedicated. The role created by the `gitpod-role` template is used to execute this second template.

Both of these templates will be provided by your Gitpod Account Manager via direct links to the CloudFormation creation wizard. If you whish to see the templates as files for review before execution, please contact your Gitpod Account Manager.

### 2.3 Execute CloudFormation templates

> ⚠️ Do not modify the CloudFormation templates outside of adding AWS resource tags. Doing so will likely result in a failed installation.

<div class="ml-6">

1. First, execute the `gitpod-role` template by navigating to the link shared by your Gitpod Account Manager. During the "configure stack options" step, ensure you select the "roll back all the stack resources" option under "Stack failure options". This will ensure that all resources created by the template are deleted if the template fails to execute.

<div style="display: flex; justify-content: center;">
  <img src="/images/docs/gitpod-dedicated/guides/getting-started/stackoptions.webp" alt="Stack Options" style="width: 80%;">
</div>

2. Then, execute `gitpod-instance` template also by navigating to the link shared by your Gitpod Account Manager in the same AWS account. This will create the infrastructure that Gitpod Dedicated requires.

> ⚠️ During the “configure stack options” step, select the role created by the first CloudFormation template (`GitpodSetupAndInitialEKSUserAdmin`) as the role used for permissions. Depending on timing, you may need to manually select the role using its ARN. Again, select the “roll back all the stack resources” option.

<div style="display: flex; justify-content: center;">
  <img src="/images/docs/gitpod-dedicated/guides/getting-started/iam-perms-configs.webp" alt="IAM Permissions" style="width: 80%;">
</div>

<br>

<div style="margin: 0 40px; border: 1px solid #FFAB00; border-radius: 8px; padding: 10px; margin-bottom: 15px;">
  <details class="ml-8">
<summary class="mt-micro text-important text-p-medium">⚠️ Important Message for Transit Gateway Users:</summary>

<div class="ml-4">

1. Before executing the CloudFormation template, you need to ensure the Transit Gateway that the Gitpod instance attaches to is able to accept attachment requests. For this, the Transit Gateway needs to be shared using AWS Resource Access Manager (RAM) to allow for other AWS accounts in your Organization to send attachment requests for approval. More info on Transit Gateway attachments can be found in the [AWS documentation](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html).
2. During the execution of the CloudFormation template, a Transit Gateway attachment to the Transit Gateway defined above is initiated. If you do not have resource sharing policies for this or auto accept turned on, you will have to manually accept this attachment request.
3. The flow to manually approve the attachment request is as follows: Navigate to the AWS account the Transit Gateway attachment is in and navigate to the Transit Gateway Attachments page. Within 5 minutes of starting the CloudFormation execution, you should see a pending attachment in which you have limited time to approve else stack creation fails. Find out more in the [AWS documentation](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html).

</div>

</details>
</div>

3. If you run into errors during the Cloudformation deployment you should remove all existing resources before trying again. There are a few resources that need to be cleaned up manually before you attempt another installation. See [Deleting your Gitpod installation](/docs/gitpod-dedicated/guides/deleting-your-gitpod-installation) for details.

4. Instance will install Gitpod: After the infrastructure has been created, the instance will register itself with the Gitpod Dedicated Control plane. It will then ask for the newest version of Gitpod, and install it onto the created infrastructure.

</div>

Please see [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates) for more background information around how deployment subsequent operations of Gitpod Dedicated function.

## 3. Set Up Gitpod

Gitpod is now ready to be setup. Your Gitpod account manager will provide the URL to access it. This URL will contain a one time admin password. This is used to authenticate when no Single Sign-On (SSO) has been set up yet.

You are three steps away from launching your first Gitpod workspace:

<details class="ml-2">

<summary class="text-body text-medium mt-micro font-bold">Name your organization</summary>

<div class="ml-2 mt-micro">

We suggest your company name, but you know best. Don’t worry you can always change this later. For example, if the name of your company was “Amazing Co.”

![Name your organization](/images/docs/gitpod-dedicated/guides/getting-started/sso-name-org.webp)

It will appear in Gitpod like this:

![Preview in Gitpod Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso-gitpod-org-name.webp)

</div>

</details>
<br>
<details class="ml-2">

<summary class="text-body text-medium mt-micro font-bold">Configure Single Sign-On</summary>

<div class="ml-2 mt-micro">

Gitpod Dedicated requires OpenID Connect (OIDC) for authentication, for example with Identity Providers (IdP) such as Google, Okta, Azure AD and AWS Cognito.

**General instructions**

-   You will need to create a configuration with your Identity Provider and provide the “redirect URI” you can copy from this screen.
-   Once you’ve created your Identity Provider configuration, you should copy and paste the Issuer URL, Client ID and Client Secret values on this screen.
-   Clicking “Verify SSO Configuration” will ensure that validity of the values by authenticating your account. If successful, your user will be created and configured with the “owner” role. Subsequent users that log in will be granted the default “member” role.

    ![Configure Single Sign-on](/images/docs/gitpod-dedicated/guides/getting-started/configure-sso-gitpod.webp)

**Identity Provider specific instructions**

<details>

<summary class="text-body font-semibold text-p-medium">Okta</summary>

<div class="ml-6 mt-macro">

As _prerequisites_, you will need the following:

-   Access to your Okta instance
-   Permission to create an [app integration](https://help.okta.com/oie/en-us/Content/Topics/Apps/apps-overview-get-started.htm)

_Creating a Gitpod SSO Integration_

1. On the Okta Admin dashboard, navigate to Applications
2. Select `Create App Integration`

    ![Applications - Okta Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/okta/okta-dashboard.webp)

3. Select the following options and click `Next`

    - Sign-in method: `OIDC - Open ID Connect`
    - Application type: `Web Application`

    ![Create App Integration - Okta Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/okta/create-app-integration.webp)

4. Specify General Settings

    - App integration name: `Gitpod` (or choose your own name)
    - Sign-in redirect URIs: _copy this value from your Gitpod setup screen_ (see [details](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need) above under "General instructions")
    - Sign-out redirect URIs: `none`
    - Trusted Origins: `none`
    - Assignments: _choose option appropriate to your organization_

    ![Specify Okta settings - Okta Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/okta/specify-general-settings.webp)

5. Obtain Client ID & Client Secret

    - Copy the `Client ID` and use it as input in Gitpod setup (see [details](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need) above under "General instructions")
    - Copy `Client Secret` and use it as input in Gitpod setup (see [details](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need) above under "General instructions")
    - Set the `Issuer` to your Okta instance, eg: `https://amazingco.okta.com/`

    ![Configure Client Secrets - Okta Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/okta/client-configs-okta.webp)

6. Continue with Gitpod SSO Configuration verification: [Clicking “Verify SSO Configuration”](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need)

</div>

</details>

<details class="mt-macro">

<summary class="text-body font-semibold text-p-medium">Google</summary>

<div class="ml-6 mt-macro">

_As prerequisites_ you will need the following:

-   Access to setup a new [API Credentials](https://console.cloud.google.com/apis/credentials) in your GCP Account

_Creating a Gitpod SSO Integration_

1. Navigate to your Google Cloud Console, API Credentials
2. Select Create Credentials, and choose OAuth client ID

    ![Create credentials - Google Cloud Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/google/create-credentials.webp)

3. Configure your OAuth Client ID, by specifying the Authorized Redirect URIs: [Once you’ve created your Identity Provider configuration, you should copy...](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need)
4. Obtain the Client ID & Client Secret and input these into your Gitpod Setup page

    ![OAuth Client Created - Google Cloud Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/google/OAuth-client-created.webp)

5. Set Provider's Issuer URL to `https://accounts.google.com`
6. Proceed to verify the integration on the Gitpod setup page: [Clicking “Verify SSO Configuration”](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need)

</div>

</details>

<details class="mt-macro">

<summary class="text-body font-semibold text-p-medium">Azure AD</summary>

<div class="ml-6 mt-macro">

_As_ _prerequisites_ you will need the following:

-   Access to Azure Directory, to Register an Application

_Creating a Gitpod SSO Integration_

1. Navigate to your Azure portal > App Registrations
2. Select New Registration

    ![New registration - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/new-registration.webp)

3. Name your application - e.g. Gitpod
4. Select supported account types depending on your organizational needs. Most likely you want _Accounts in this organizational directory only_
5. Copy the redirect URL from the Gitpod SSO setup page and set it as the Redirect URI, selecting Web as the application type

    ![Register Application - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/register-application.webp)

6. From the App Registration Overview, you should obtain the Application (client) ID and copy it into your Gitpod SSO setup page
7. Create a client secret - navigate to Certificates & Secrets, click New client secret

    ![Create client secret - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/client-secrets.webp)

8. Name the secret, and set expiry according to your needs.

    > 📌 Once the client secret expires, you (nor anyone else in your organization) will be able to log in to Gitpod. You will need to update the SSO configuration (secret) to continue using SSO.

9. Obtain the _Secret Value_ and copy into into the Gitpod SSO Client Secret input field
10. Grant the application access to OpenId `email` , `openid`and `profile` information

    - Navigate to API Permissions
    - Select Microsoft Graph
    - Enable `OpenId.email`, `OpenId.openid` and `Openid.profile`
      ![Request API Permissions - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/request-api-permissions.webp)
    - Once saved, your configured permissions should look as follows:
      ![Configure API Permissions - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/configured-permissions.webp)

11. Obtain the Provider URL

    - Navigate to your App Registration > Overview
    - Click endpoints
      ![Endpoints - Azure AD Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/sso/azure/endpoints.webp)
    - Find the entry for `OpenID Connect metadata document`
    - Use the URL before the `.well-known/openid-configuration` segment,
        - For example: `https://login.microsoftonline.com/512571ea-9fc5-494e-a300-625b33c8efa6/v2.0/`

12. Proceed to Verify the SSO configuration on the Github SSO setup page: : [Clicking “Verify SSO Configuration”](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need)

</div>

</details>

<details class="mt-macro">

<summary class="text-body font-semibold text-p-medium">AWS Cognito</summary>

<div class="ml-6 mt-macro">

> ℹ️ Choose this option if you already use AWS Cognito. AWS Cognito is also a good option in a testing or Proof of Value (PoV) scenario where you don't have an IDP you can easily integrate with. In this scenario, most settings should be left at their defaults.

_Follow the [Cognito User Pool setup process](https://eu-central-1.console.aws.amazon.com/cognito/v2/home), then copy the necessary values into the Gitpod SSO Configuration UI_

1. Navigate to the Cognito page in the AWS console. Select create user pool:
   ![Congiton User Pool Process](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-one.png)
2. Configure sign-in experience:
   ![Congito Sing In Requirements](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-signin.png)

-   Select `Cognito user pool` as provider type
-   Select email as the Cognito user pool signin option

3. Configure Security requirements:
   ![Congito Security Requirements](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-security-requirements.png)
    - For development purposes, consider modifying the MFA enforcment policy to not require MFA. For all production use cases, configure the MFA and user account recovery sections according to organizational guidelines
4. Configure sign-up experience:
   ![Congito Security Requirements](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-signup-experience.png)
    - Disable Self Registration if you want to limit access. For example, if your instance is accessible on the public internet, you may not want anyone to be able to self-register.
        > ⚠️ In the `Required Attributes` section, ensure that name is selected:
        > ![Required Attribute Name](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-name-required.png)
5. Configure Message Delivery:
   ![Configure message delivery](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-message-delivery.png)
    - For dev Setups, use Cognito as the email provider; for production setups, use company SES setup
6. Integrate your app:
   ![Integrate your app](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-integrate-app.png)
    - Follow company best practice for most settings
    - Ensure to select `Generate a client secret` in the Client secret section:
      ![Required client secret](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-app-client-secret.png)
    - Define the call back url as provided by the Gitpod Dedicated instance in the Configure single sign-on setup page (see [above](#3-set-up-gitpod)):
      ![Required callback url](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-callback-url.png)
    - As the identity provider, select `Cognito` (under Advanced app client settings)
    - OAuth 2.0 grant types, select `Auth Code Grant`
    - Under OpenID Connect Scopes, select `OpenID`, `Email`, `Profile`:
      ![Required callback url](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-app-scopes.png)
7. Now create the cognito user pool. The review page should look similar to this:
   <video controls playsinline autoplay loop muted class="shadow-low w-full rounded-xl max-w-3xl mt-x-small" alt="Cognito review page example" src="/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-review-screen.webm" type="video/webm"></video>
8. Start pasting the necessary values into the Gitpod SSO setup page. Navigate to:

```text
https://cognito-idp.<insert_region>.amazonaws.com/<insert_user_pool_id>/.well-known/openid-configuration
```

This will return a web page with raw json data:
![Issuer URL](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-well-known-issuer.png)

-   Copy the `issuer URL` highlighted above into the respective field on the Gitpod SSO setup page

9. Navigate to the Cognito console, and find the User pool created above. Navigate to the App client meta data as below:
   ![App Client Data](/images/docs/gitpod-dedicated/guides/getting-started/sso/cognito/cognito-app-client.png)

-   Copy the `Client ID` from the Cognito app client page into the respective field on the Gitpod SSO setup page
-   Copy the `Client Secret` into the respective field on the Gitpod SSO setup page

10. Proceed to Verify the SSO configuration on the Github SSO setup page [by clicking “Verify SSO Configuration”](/docs/gitpod-dedicated/guides/getting-started#:~:text=or%20Azure%20AD.-,General%20instructions,-You%20will%20need)

</div>

</details>

</div>

</details>
<br>
<details class="ml-2">

<summary class="text-body text-medium mt-micro font-bold">Add an SCM integration for GitHub, GitLab or Bitbucket</summary>

<div class="ml-2 mt-micro">

Integrate it with your SCM as per the steps shown in the UI or below. You can now create your first workspace and start using Gitpod! For more information on how to use Gitpod, please see the [Getting Started guide of Gitpod](/docs/introduction/getting-started).

-   Look at [these steps](/docs/configure/authentication/gitlab#registering-a-self-hosted-gitlab-installation) for information on how to integrate [`GitLab.com`](https://gitlab.com/) with your Gitpod instance. You will need to enter `gitlab.com` as the `Provider Host Name` in the New Git Integration Modal if you want to use gitlab.com, contrary to what is described.
-   Look at these [these steps](/docs/configure/authentication/github-enterprise) for information on how to integrate [`GitHub.com`](http://github.com/) with your Gitpod instance. You will need to enter `github.com` as the `Provider Host Name` in the New Git Integration Modal if you want to use github.com, contrary to what is described.
-   Look at [these steps](/docs/configure/authentication/bitbucket-server) for information on how to integrate [`Bitbucket Server`](https://www.atlassian.com/de/software/bitbucket/enterprise) with your Gitpod instance. Select `Bitbucket Server` as the `Provider Type` in the New Git Integration Modal. For bitbucket.org this requires configuring an “OAuth consumer” on a “workspace”. This is slightly different from the documented Bitbucket Server integration. See [gitpod PR #9894](https://github.com/gitpod-io/gitpod/pull/9894#pullrequestreview-969013833) for an example.

![Git Integrations Preview in Gitpod Dashboard](/images/docs/gitpod-dedicated/guides/getting-started/git-integration.webp)

> ℹ️ The first workspace start(s) will take longer than usual, sometimes exceeding 10 minutes depending on the workspace image used. This is because an image first needs to be built, a node needs to be spun up, and that image then downloaded to the node. However, subsequent workspace starts will be significantly faster.

</div>

</details>

## 4. Frequently Asked Questions

<details class="ml-8">
<summary class="text-body text-p-medium">Click to view FAQ</summary>

**Q.** Can we install our own custom resources inside the same AWS account where Gitpod Dedicated is installed?
**A.** No. Gitpod Dedicated is installed in a dedicated AWS account. This is to ensure that Gitpod Dedicated can be installed without any conflicts with existing resources in your AWS account. If you have special requirements for the account please speak with your Gitpod account manager.

**Q.** If we use the allPublic networking mode do we still need to provide a `CIDR range of our network`?  
**A.** No. The `CIDR range of our network` is only required when using the mixed or private networking modes.

**Q.** If the Gitpod internal range of `100.70.0.0/16` does not need to be routable from my network, why do we need to specify the `CIDR range of our network`?  
**A.** User workspaces traffic must cross this range when reaching the rest of your network. If there are common internal services and systems that developers may need to access that overlap with this range, the experience may be inconsistent and difficult to troubleshoot. To avoid this, Gitpod can adapt the internally used CIDR range for workspaces to the customer’s CIDR range.

**Q.** What if the `100.70.0.0/16` range overlaps with my network?  
**A.** Please contact your Gitpod account manager for assistance. There is some flexibility to the CIDR range used internally by Gitpod.

**Q.** Why two templates?  
**A.** The `gitpod-role` CloudFormation template is used to create a role with the minimum permissions required to install and update Gitpod Dedicated. This role and its policies are used to install the second Cloudformation template.

**Q.** Can the stack created by `gitpod-role` be deleted after executing the `<company>-gitpod-template.json`?
**A.** No, the stack created by `gitpod-role` should be maintained. The role created is also used when updates are provided to the `<company>-gitpod-template.json` template. For more details on infrastructure updates, please see [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates).

**Q.** What happens if my Cloudformation stack fails to install?  
**A.** If the stack fails to install, you should delete the stack and try again. There are a few resources that need to be cleaned up manually before you attempt another installation. See [Deleting your Gitpod installation](/docs/gitpod-dedicated/guides/deleting-your-gitpod-installation) for details.

**Q.** What if we want to use a custom domain name?  
**A.** Please see [Using Custom Domains](/docs/gitpod-dedicated/guides/using-custom-domains) for more information about using a custom domain.

**Q.** Can we grant public access to webhooks and IDP services without exposing the entire Gitpod application to the Internet?  
**A.** Yes. Gitpod Dedicated can be configured to expose webhooks and IDP services on public endpoints. This can be helpful for connecting to OIDC providers such as Okta, Azure AD. This option also makes it easy for developers to connect to your instance without having to route through a VPN or transit gateway. See [Networking and Data flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more information.

</details>
