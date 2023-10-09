---
author: atduarte
date: Mon, 25 Apr 2023 6:00:00 UTC
excerpt: A guide to organizations, the recent changes and how they affect the user's experience.
image: teaser.jpg
teaserImage: teaser.jpg
title: A Guide to Gitpod's New Approach to Organizations
tags: ['Gitpod updates']
---

Gitpod has recently made changes to its approach to organizations, billing, and cost attribution. In this blog post, we will explain the new changes and clarify how they affect organizations, billing, and cost attribution.

## Introduction

Gitpod is always listening to its users' feedback to improve the platform. Based on this feedback, Gitpod has made changes to its approach to organizations, billing, and cost attribution. In this blog post, we will explain the new changes and clarify how they affect your experience.

## Organizations

Previously known as teams, Gitpod has renamed and reimagined them to make their purpose clearer. An organization (org) now equates to a company and serves as a "tenant." This means that resources, including workspaces, projects, settings, and Single Sign-On (SSO) users in the near future, are fully owned by the org and are bound to its lifecycle.

The workspace list will soon start showing only the workspaces that belong to the currently active organization. Orgs will be able to have SSO configured and manage/own their users. This new approach to organizations sets clear boundaries for resource usage, allowing users to group their resources effectively.

## Personal Accounts

Personal accounts have been deprecated and automatically turned into an organization with the same name. Billing is moved from the user settings and will be part of the org settings. New users are already observing this behavior. This change helps streamline the billing process and makes it easier to manage.

## Cost Attribution

Currently, cost attribution is complex, taking into account whether the organization has credits. If not, the Default Billing Account, which is hidden in the user settings, is used. However, in line with Gitpod's vision of self-containment for orgs, the cost of usage will soon be attributed to the org that owns that resource. If there are no credits available, no fallback is used. This change will make cost attribution clearer and easier to understand.

In line with this new approach, Gitpod has also made changes to the create workspace page. The ["Always Create with Options" changelog post](/changelog/new-workspace-creation-page) describes how Gitpod has changed the page to make it clearer in what org the workspace is starting.

## Timeline

Gitpod will roll out this change over the next few weeks and will inform users within the product when this happens. You don't need to do anything. If you have any questions or need assistance, please reach out to [Gitpod’s support team](/support).
