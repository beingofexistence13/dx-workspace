# 1. migrate-to-sveltekit-endpoints

Date: 2022-07-14

## Status

2022-07-14 accepted

## Context

Netlify had multiple outages in the past, which resulted in defacto downtime for our website, and caused non-working contact-forms.

Because of that we want to get rid of most of the platform specific implementations

## Decision

A step to achieve this goal is, to migrate the currently used Netlify-Functions to native Sveltekit-Endpoints

## Consequences

1. When migrating we can obviously get rid of the Netlify specific things
1. We can debug the Endpoints properly in our dev environment, because we don't rely on Netlify
1. we can't migrate our entire functions to endpoints, because (currently) the latest version of the `Netlify-Adapter` can't be used, due to a very old sveltekit version => Once we upgrade our dependencies we can get rid of all Netlify-functions.
