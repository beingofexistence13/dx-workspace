---
author: jakobhero
date: Friday, 5 May 2023 11:00:00 UTC
excerpt: Combine the rich feature set of your IDE with the ease of access of dbt Cloud by running dbt core in Gitpod
tags: ['Data', 'Developer experience']
image: teaser.webp
teaserImage: teaser.webp
title: Enhance your Data Team's Productivity with dbt and Gitpod
---

<script>
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte"
</script>

dbt has made data transformation accessible to anyone with SQL knowledge. However, the most popular ways of running dbt in development have tradeoffs. dbt Cloud lacks extensibility, and dbt Core is complex to set up. Using dbt in Gitpod addresses these tradeoffs by providing powerful, on-demand cloud development environments that are easy to spin up, disposable, and extensible at will.

## Pains of existing dbt dev environments

The management of local development environments is a time consuming chore for software developers, [taking 5h on average per engineer per week](https://www.gitpod.io/customers). Data teams are not exempt from this, and analytics engineers with little experience working in a shell environment [feel this pain in particular](https://discourse.getdbt.com/t/setting-up-vscode-to-use-with-the-dbt-cli/3291/6). Ultimately, team leads end up untangling messy local environments and coaching up their engineers on shell skills instead of focussing on bigger picture tasks.

On the other hand, the standard approach of running dbt in the Cloud forces developers to use dbt’s Cloud IDE, limiting the possibilities for customization and access to functionality that users expect from full-featured IDEs such as VS Code.

## How Gitpod improves Developer Experience with dbt

Running dbt inside of Gitpod combines the rich feature set and extensibility of working with the IDE of choice with the ease of access of dbt’s Cloud IDE by standardizing the setup of the development environment for your team.

We are going to use the configuration of the [dbt + BigQuery demo project](https://github.com/gitpod-samples/template-dbt-bigquery) to illustrate how Gitpod works in practice. Try it out by following the instructions in the readme or use the [dbt + Snowflake demo project](https://github.com/gitpod-samples/template-dbt-snowflake) instead.

### Standardization of development environments with `.gitpod.yml`

The `.gitpod.yml` file in a repository defines the development environment at startup. With Gitpod, the development environment is defined once per project and then reused by each collaborator. Think of the `.gitpod.yml` as a machine readable version of your readme. It entails:

1. the installation of languages and dependencies
2. the configuration of the terminal(s) and opened ports
3. the installation of extensions in the IDE

The foundation for instances of development environments, what we refer to as workspaces, are Docker images. The default workspace image for Gitpod contains support for multiple languages such as Go, Java, Python, and JavaScript, but you can also use [slimmer images](https://hub.docker.com/u/gitpod/) or specify your own. This process can be straightforward even for Docker beginners, as the example `.gitpod.Dockerfile` from the demo project shows:

```dockerfile title=".gitpod.Dockerfile"
# Gitpod's latest Python image
FROM gitpod/workspace-python:latest

# Set the path of dbt's profiles file
ENV DBT_PROFILES_DIR=./profiles/

# Copy requirements file from host into Container
COPY requirements.txt /tmp

# Install the requirements
RUN cd /tmp && pip install -r requirements.txt
```

After using the standard Python image, setting up one environment variable, and installing the requirements (in this case just the `dbt-bigquery` package), dbt is now ready to be set up. Next, the `.gitpod.yml` contains commands that are executed after the Dockerfile has been processed. Each object in the tasks section creates a new terminal in the development environment. In our example, a terminal named `connect` executes three commands to complete and test the dbt configuration:

```yml title=".gitpod.yml"
image:
    file: .gitpod.Dockerfile

# Each task is a different terminal
tasks:
    - name: connect
      command: |
          echo $DBT_SERVICE_ACCOUNT > $GITPOD_REPO_ROOT/profiles/service_account.json
          dbt debug
          dbt deps
```

Following the reference to the custom Docker image, the Gitpod environment variable `DBT_SERVICE_ACCOUNT` is dumped inside a JSON file in the profiles directory, which is necessary to successfully connect to BigQuery. The most convenient way of making the service account accessible inside of the workspace is using Gitpod’s user-specific [environment variables](https://www.gitpod.io/docs/configure/projects/environment-variables#user-specific-environment-variables).

The `dbt debug` command tests the connection with the database. When executing this, dbt searches for the credentials to connect with the database in the `profiles.yml` file:

```yml title="profiles.yml"
default:
    target: dev
    outputs:
        dev:
            type: bigquery
            method: service-account
            project: "{{ env_var('DBT_PROJECT') }}"
            dataset: "{{ env_var('DBT_DEV_DATASET') }}"
            threads: 4
            keyfile: "{{ env_var('GITPOD_REPO_ROOT') }}/profiles/service_account.json"
            location: "{{ env_var('DBT_LOCATION') }}"
```

This file contains three more references to environment variables that have to be set by the user: `DBT_PROJECT`, `DBT_DEV_DATASET`, and `DBT_LOCATION`. This is the only step users of the repository have to do manually in order to launch a functional dbt dev environment once the configuration has been added to the repository.

After the connection has been tested successfully, the workspace is ready to be used.

### Bring your own IDE

Gitpod integrates with well-established IDEs in order to provide developers the full feature set they are used to. Teams running dbt on Gitpod can give their developers the freedom to choose from IDEs such as VS Code in the browser, VS Code Desktop, or PyCharm without compromising on the level of standardization as their state is not tied to their (local) IDE. For those developers who are attached to their own custom configurations, Gitpod also provides a solution by supporting [Dotfiles](https://www.gitpod.io/docs/configure/user-settings/dotfiles).

Complementary to this degree of freedom, teams can standardize the tools available to their developers by adding extensions to the section of the respective IDE inside the `.gitpod.yml`:

```yml title=".gitpod.yml"
# These installations are installed for each workspace running in VS Code
vscode:
    extensions:
        - ms-python.python
        - mechatroner.rainbow-csv
        - innoverio.vscode-dbt-power-user
        - ms-toolsai.jupyter
        - ms-toolsai.jupyter-keymap
        - ms-toolsai.jupyter-renderers
        - ms-toolsai.vscode-jupyter-cell-tags
        - ms-toolsai.vscode-jupyter-slideshow
        - samuelcolvin.jinjahtml
```

Out of the box, VS Code does not provide any extensions to work with dbt. Making the same extensions accessible to everyone in your team ensures that each team member can have easy access to dbt-specific functionality such as following the lineage of models, running tests, and querying the warehouse.

## The Best of both Worlds

The example in this article shows that a dbt project configured to run in Gitpod combines the strengths of both popular modes of running dbt.
By using Gitpod workspaces and a single dev environment configuration for the entire project, working dbt installations are rapidly launched anytime.
By surfacing the workspaces in VS Code and other full-feature IDEs, users have access to the same powerful code editors as if they were working locally.

The dev environment created by the demo project is a starting point, mostly replicating the functionality of the dbt Cloud IDE. You can fork the repository and extend the configuration by integrating your favorite tools from the dbt ecosystem. At Gitpod, we use [Lightdash](https://www.lightdash.com/) as BI tool for no-code analysis and include it into our main dbt project setup so that we can effortlessly jump from developing dbt models and metrics to testing them in a dev Lightdash project.

You can use Gitpod for free for up to 50 hours a month and onboard your team at no extra cost per user via our pay-as-you-go organizational pricing. Experience how easy it is to get started with dbt in Gitpod by going to one of the projects or following along the video walkthrough below. Feel free to reach out to [me](https://www.linkedin.com/in/jakob-herold/) to provide feedback or discuss how to use Gitpod in your data team.

<LinkButton href="https://github.com/gitpod-samples/template-dbt-bigquery" variant="primary" size="medium">dbt + BigQuery</LinkButton>
<LinkButton href="https://github.com/gitpod-samples/template-dbt-snowflake" variant="cta" size="medium">dbt + Snowflake</LinkButton>

## Video Demo

<div style="position: relative; padding-bottom: 64.63195691202873%; height: 0;"><iframe class="rounded-md" src="https://www.loom.com/embed/803d19417e5a48ac8617e7c9582acf42?hide_owner=true&hide_title=true&hideEmbedTopBar=true" title="Gitpod Demo: DBT in Gitpod" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
