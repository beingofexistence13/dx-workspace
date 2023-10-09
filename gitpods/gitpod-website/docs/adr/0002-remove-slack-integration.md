# 2. remove slack integration

Date: 2022-09-08

## Status

2022-09-08 accepted

## Context

> [Internal Discussion](https://gitpod.slack.com/archives/C01KGM9ETU6/p1662639377730739)

Shutting down the Slack Integration in favor of a zap caused the feedback form to return `404` responses (as the webhook didn't exist anymore).

## Decision

Remove the Slack Integration from the Feedback Endpoint

## Consequences

-   We can get rid of the dependency `@slack/webhook`
-   The Feedback gets sent to Slack as a zap, that gets triggered by the Google Spreadsheet
