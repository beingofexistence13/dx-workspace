---
author: csweichel, securitymirco, nancy-chauhan
date: Tuesday, 21 Jun 2022 11:00:00 UTC
excerpt: Gitpod takes a central position in the software development lifecycle. As such, the security of our product is paramount; not only at runtime, but also as we build and deliver Gitpod.
image: teaser.png
teaserImage: teaser.png
tags: ['Gitpod updates']
title: Securing Gitpod's Software Supply Chain with SLSA
---

Gitpod takes a central position in the software development lifecycle. As such, the security of our product is paramount; not only at runtime, but also as we build and deliver Gitpod. Next to a host of other initiatives (e.g. becoming SOC 2 compliant), we aim to secure our own software supply chain. Today, we are proud to announce that we’ve taken a first step in that direction: Gitpod is now [SLSA Level 1](https://slsa.dev/spec/v0.1/levels) compliant. 🎉

SLSA is an end-to-end framework for ensuring the integrity of software artifacts throughout the software supply chain. It aims for the software to be shipped securely from source to production, and is inspired by Google's internal "[Binary Authorization for Borg](https://cloud.google.com/security/binary-authorization-for-borg)". But what is a software supply chain anyways?

## What is a Software Supply Chain?

In manufacturing, many different components make up an assembly, and many assemblies make up a finished product. Think of a car that consists of multiple parts such as doors, wheels and seats built from raw materials like steel, plastics, aluminium and rubber. Many of these parts and raw materials come from different vendors and suppliers, forming the supply chain.

Software engineering is similar. While developing an application, we rely on open source code and external services. We build, test and deploy applications using CI/CD pipelines which have far reaching access to development and production systems. Deep dependency trees without controls (think [log4shell](https://www.ncsc.gov.uk/information/log4j-vulnerability-what-everyone-needs-to-know)), insecure CI/CD pipelines and developer’s laptops make for attractive attack vectors. Such attacks have been carried out successfully, with [SolarWinds](https://www.cisecurity.org/solarwinds) and [Kaseya](https://helpdesk.kaseya.com/hc/en-gb/articles/4403584098961-Incident-Overview-Technical-Details) it's not only the Fortune 500 who are at risk, but their suppliers, too. No one wants to become a vehicle for malicious actors and irrevocably destroy the trust that cost so much to build. We must not underestimate the importance of Software Supply Chain Security.

Containers, heavily caching build systems, ever deeper dependency trees (I’m looking at you, Javascript), require us to up the ante towards supply chain security. Containers famously don’t offer a security boundary, and this year has seen ample proof of that. Hence, even a minor dependency can put a large part of the infrastructure at risk, without operators even being aware. The [log4shell](https://www.ncsc.gov.uk/information/log4j-vulnerability-what-everyone-needs-to-know) fallout partially was so bad because it took a long time to even find out who was affected.

As the threat landscape evolves, organizations are looking into mitigation strategies that verify the integrity and security of software artifacts and build systems.

## Building a More Resilient Ecosystem for Supply Chain Security

Many developers and communities are taking initiatives to help mitigate risk and prevent software supply chain attacks ✨

The Go team, mainly coming from Google, are acutely aware of supply chain issues, and provide a variety of built-in [supply chain attack mitigations](https://go.dev/blog/supply-chain).
A significant aspect of preventing software supply chain risks is to keep dependency trees as small as possible. "A little bit of copying is better than a little dependency". Go contains various functionalities out-of-the-box by copying relevant dependencies code, enabling Go modules with zero dependencies. Our Go code relies on 44% fewer dependencies compared to our TypeScript codebase - at about the same amount of code.

Go offers other features which improve our confidence in the integrity of those components:

-   Go locks builds by pinning specific versions specified inside the `go.mod` file. Malicious updates introduced as a new version won't affect `go build` automatically
-   Even if malicious updates get introduced in the same version as a re-upload, this wouldn't automatically affect Go builds containing hashes of all dependencies that contribute to a build specified in the `go.sum` file. An incomplete or incorrect file will cause an error - version content will always remain the same
-   Go modules are directly consumed through the version control system without an additional package repository that could get compromised.

If you want to read more about how Go mitigates supply chain attacks, you can read it [here](https://go.dev/blog/supply-chain).

Beyond individual languages, there are broader efforts underway in the cloud-native community. The [sigstore project](https://www.sigstore.dev/) is building a comprehensive tool chain to sign and verify software artifacts. [Cosign](https://github.com/sigstore/cosign) can sign and verify containers from an OCI registry. [Fulcio](https://github.com/sigstore/fulcio) nicely solves the hard key-management problems by issuing short-lived keys tied to an [OpenID connect token](https://openid.net/connect/). In combination with [Rekor](https://github.com/sigstore/rekor), all these operations are logged in a tamper proof transparency log for auditability.

Recently, with the release of [Version 1.24 "Stargazer"](https://kubernetes.io/blog/2022/05/03/kubernetes-1-24-release-announcement/), Kubernetes adapted [Sigstore](https://blog.sigstore.dev/kubernetes-signals-massive-adoption-of-sigstore-for-protecting-open-source-ecosystem-73a6757da73) to generate signed provenance enabling the community to verify signatures of software artifacts and review how they have been built.

## SLSA is hot 🔥

Supply chain Levels for [Software Artifacts, SLSA](https://slsa.dev/) in short, is a security framework which introduces common terminology, standards and process controls to improve supply chain security. SLSA consists of four different levels of assurance that provide a predefined roadmap to artifact security and allow linear progression between levels. Following this multi-level approach, it’s particularly easy to get started with. Also, SLSA brings value even if the transitive dependencies of a project have not yet adopted it. This combination predestines SLSA for a lang-and-expand motion in modern software ecologies.

SLSA level 1 focuses on providing transparency and documentation of the build process. The key concept here is [provenance](https://en.wikipedia.org/wiki/Provenance), i.e. a record of prior ownership and involvement. Starting with this level, build systems are required to keep a record of their involvement, which sources went into the build process, and which process was used. All this data is recorded using [in-toto attestations](https://github.com/in-toto/attestation) and published alongside the actual build artifacts.

Having this provenance offers a number of benefits. For one, it provides traceability for artifacts deployed in production, which greatly helps when debugging issues. It prevents the simplest of supply chain attacks (think cache poisoning) if the provenance requires different permissions to upload. Delivery pipelines can assert qualities about the artifacts they’re about to deploy, e.g. that the code was built from a clean working copy, hence the entire state is recorded in a version control system.

To read more about the remaining three levels, head over to the [SLSA page](https://slsa.dev/spec/v0.1/levels).

## Making Gitpod SLSA level 1 compliant

![Generating Provenance](/images/blog/securing-the-software-supply-chain-at-gitpod-with-slsa/illustration.png)

We use a heavily caching build system called [Leeway](https://github.com/gitpod-io/leeway). Leeway recently gained [support for producing SLSA/in-toto provenance](https://github.com/gitpod-io/leeway/pull/75) during its build, and maintains that provenance as part of its cache. A package build produces an [attestation bundle](https://github.com/in-toto/attestation/blob/main/spec/bundle.md), which contains a number of SLSA attestations (records) that were created during the build; one per package.

For example, building one of Gitpod’s component yields entries for each of its dependencies within our source tree:

```bash
gitpod /workspace/gitpod (main) $ leeway build --save out.tar.gz components/ws-manager:app
☁️  checking remote cache for past build artifacts
📦  cached  components/common-go:lib               (version 29fc1af63929607ec2f48e5e34095d4f236fcad7)
📦  cached  components/content-service-api/go:lib  (version c349f5dbbaf9f911c3097b38cb715ba10af7c8f4)
📦  cached  components/content-service:lib         (version ec596e8eed59d221f14c1170fddfd21c558c7efb)
📦  cached  components/image-builder-api/go:lib    (version 45286faf29d40a249430d35d6b04119b48a88570)
📦  cached  components/ws-daemon-api/go:lib        (version 2a8a3fb20bb4149baae445f33cc38e0d01d05ff5)
📦  cached  components/ws-manager-api/go:lib       (version 37ca7e9e7117e744722413934ff24684619db42c)
🔧  build   components/registry-facade-api/go:lib  (version ddddf609debf50fc38c2a107deffb83b15749ae9)
🔧  build   components/ws-manager:app              (version 91a5fae2f2b869ecbd7f278a17122f283ff9fc83)
build succeded
💾  saving build result to out.tar.gz

gitpod /workspace/gitpod (main) $ tar Oxf out.tar.gz ./provenance-bundle.jsonl
{"payloadType":"application/vnd.in-toto+json","payload":"ewogICJfdHlwZSI6ICJodHRwczovL2luLXRvdG8uaW8vU3RhdGVtZW50L3YwLjEiLAogICJwcmVkaWNhdGVUeXBlIjogImh0dHBzOi8vc2xzYS5kZXYvcHJvdmVuYW5jZS92MC4xIiwKICAic3ViamVjdCI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiL190ZXN0cy91dGlsLnRlc3QiLAogICAgICAiZGlnZXN0IjogewogICAgICAgICJzaGEyNTYiOiAiZjU0ZmFjY2VlMTJhZDMzMmMwNWRiMDdjZmYzYjRkNTFjZmVmZTEwOTJlYTVlYTdlYmU3MTAxMzYzZjFiZDRlYiIKICAgICAgfQogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAiL190ZXN0cy9jZ3JvdXBzLnRlc3QiLAogICAgICAiZGlnZXN0IjogewogICAgICAgICJzaGEyNTYiOiAiODAzNDg5NWI5NWNjM2M2M2NjZjAwNjc3MWYwZGRhYjg4OTc3M2JjNzExMGMxYTQyN2VmZTg0OGZhOGIwYjM4ZCIKICAgICAgfQogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAiL190ZXN0cy9uYW1lZ2VuLnRlc3QiLAogICAgICAiZGlnZXN0IjogewogICAgICAgICJzaGEyNTYiOiAiN2I0Yzc3MjgxZmYyZjk2ZjkxZTk5YjAxZWZhY2JmMjZlMzJjMjMyMWJhZGUwN2FmMmI1MTg5OGM4MTVmMTVmMiIKICAgICAgfQogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAiL190ZXN0cy9iYXNlc2VydmVyLnRlc3QiLAogICAgICAiZGlnZXN0IjogewogICAgICAgICJzaGEyNTYiOiAiZjhmOWU1MTNjMjMzMDk3YWQ1OGM4ZDFmYzYwODczMjg4NGMyNjExNWQ1MGM2YTUyMTE1N2MwOTFmNTBjN2VmMiIKICAgICAgfQogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAiL190ZXN0cy9sb2cudGVzdCIsCiAgICAgICJkaWdlc3QiOiB7CiAgICAgICAgInNoYTI1NiI6ICIyZTY5MmFiZDViYTEwOTFlYWMyZmMwNzY3M2JjM2E5N2I0OTBkYjA5NGMzYjYwYzNiMWE4OTZkNmM3NWFmOTRhIgogICAgICB9CiAgICB9LAogICAgewogICAgICAibmFtZSI6ICIvX3Rlc3RzL2dycGMudGVzdCIsCiAgICAgICJkaWdlc3QiOiB7CiAgICAgICAgInNoYTI1NiI6ICJiZDYxYjM3ZmI1YmFmMmI5N2E5MDQ2M2U3NmI5ODc4NmQ1ZTgwYWY4ZjdkNTU2ZDhjMGMwZmRjMDNkNmJkZjc2IgogICAgICB9CiAgICB9CiAgXSwKICAicHJlZGljYXRlIjogewogICAgImJ1aWxkZXIiOiB7CiAgICAgICJpZCI6ICJnaXRodWIuY29tL2dpdHBvZC1pby9sZWV3YXk6MC4yLjE3LTNlYmZiMmFAc2hhMjU2OmI5NjI5ZTJkMDQzMmFkZWExYmU3ZGRkYjM2MDNlMzZkOWY2OWIwOWQ4OTg1ZjcyNTI1N2FkYWFkZTUxZDRhNDAiCiAgICB9LAogICAgInJlY2lwZSI6IHsKICAgICAgInR5cGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2dpdHBvZC1pby9sZWV3YXkvYnVpbGRAZ286MiIsCiAgICAgICJkZWZpbmVkSW5NYXRlcmlhbCI6IDAsCiAgICAgICJlbnRyeVBvaW50IjogImNvbXBvbmVudHMvY29tbW9uLWdvOmxpYiIsCiAgICAgICJhcmd1bWVudHMiOiBbCiAgICAgICAgImxlZXdheSIsCiAgICAgICAgImJ1aWxkIiwKICAgICAgICAiLS1zYXZlIiwKICAgICAgICAib3V0LnRhci5neiIsCiAgICAgICAgImNvbXBvbmVudHMvd3MtbWFuYWdlcjphcHAiCiAgICAgIF0sCiAgICAgICJlbnZpcm9ubWVudCI6IHsKICAgICAgICAibWFuaWZlc3QiOiB7CiAgICAgICAgICAiYXJjaCI6ICJhbWQ2NCIsCiAgICAgICAgICAiZ28iOiAiZ28gdmVyc2lvbiBnbzEuMTguMyBsaW51eC9hbWQ2NCIsCiAgICAgICAgICAibm9kZSI6ICJ2MTYuMTUuMCIsCiAgICAgICAgICAib3MiOiAibGludXgiLAogICAgICAgICAgInlhcm4iOiAiMS4yMi4xOSIKICAgICAgICB9CiAgICAgIH0KICAgIH0sCiAgICAibWV0YWRhdGEiOiB7CiAgICAgICJidWlsZFN0YXJ0ZWRPbiI6ICIyMDIyLTA2LTEwVDEzOjIzOjI4LjE4MDk5NTI1WiIsCiAgICAgICJidWlsZEZpbmlzaGVkT24iOiAiMjAyMi0wNi0xMFQxMzoyMzozNy43MzMyOTA4MTNaIiwKICAgICAgImNvbXBsZXRlbmVzcyI6IHsKICAgICAgICAiYXJndW1lbnRzIjogdHJ1ZSwKICAgICAgICAiZW52aXJvbm1lbnQiOiBmYWxzZSwKICAgICAgICAibWF0ZXJpYWxzIjogdHJ1ZQogICAgICB9LAogICAgICAicmVwcm9kdWNpYmxlIjogZmFsc2UKICAgIH0sCiAgICAibWF0ZXJpYWxzIjogWwogICAgICB7CiAgICAgICAgInVyaSI6ICJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dpdHBvZC1pby9naXRwb2QuZ2l0IiwKICAgICAgICAiZGlnZXN0IjogewogICAgICAgICAgInNoYTI1NiI6ICI1MTc2YTkwOGQ3YTdlYWVjZjQwMjAwNTIwZWFlNmYxYTZlMTk5ZTM1IgogICAgICAgIH0KICAgICAgfQogICAgXQogIH0KfQ==","signatures":null}
{"payloadType":"application/vnd.in-toto+json","payload":"ewogICJfdHlwZSI6ICJodHRwczovL2luLXRvdG8uaW8vU3RhdGVtZW50L3YwLjEiLAogICJwcmVkaWNhdGVUeXBlIjogImh0dHBzOi8vc2xzYS5kZXYvcHJvdmVuYW5jZS92MC4xIiwKICAic3ViamVjdCI6IFtdLAogICJwcmVkaWNhdGUiOiB7CiAgICAiYnVpbGRlciI6IHsKICAgICAgImlkIjogImdpdGh1Yi5jb20vZ2l0cG9kLWlvL2xlZXdheTowLjIuMTctM2ViZmIyYUBzaGEyNTY6Yjk2MjllMmQwNDMyYWRlYTFiZTdkZGRiMzYwM2UzNmQ5ZjY5YjA5ZDg5ODVmNzI1MjU3YWRhYWRlNTFkNGE0MCIKICAgIH0sCiAgICAicmVjaXBlIjogewogICAgICAidHlwZSI6ICJodHRwczovL2dpdGh1Yi5jb20vZ2l0cG9kLWlvL2xlZXdheS9idWlsZEBnbzoyIiwKICAgICAgImRlZmluZWRJbk1hdGVyaWFsIjogMCwKICAgICAgImVudHJ5UG9pbnQiOiAiY29tcG9uZW50cy9jb250ZW50LXNlcnZpY2UtYXBpL2dvOmxpYiIsCiAgICAgICJhcmd1bWVudHMiOiBbCiAgICAgICAgImxlZXdheSIsCiAgICAgICAgImJ1aWxkIiwKICAgICAgICAiLS1zYXZlIiwKICAgICAgICAib3V0LnRhci5neiIsCiAgICAgICAgImNvbXBvbmVudHMvd3MtbWFuYWdlcjphcHAiCiAgICAgIF0sCiAgICAgICJlbnZpcm9ubWVudCI6IHsKICAgICAgICAibWFuaWZlc3QiOiB7CiAgICAgICAgICAiYXJjaCI6ICJhbWQ2NCIsCiAgICAgICAgICAiZ28iOiAiZ28gdmVyc2lvbiBnbzEuMTguMyBsaW51eC9hbWQ2NCIsCiAgICAgICAgICAibm9kZSI6ICJ2MTYuMTUuMCIsCiAgICAgICAgICAib3MiOiAibGludXgiLAogICAgICAgICAgInlhcm4iOiAiMS4yMi4xOSIKICAgICAgICB9CiAgICAgIH0KICAgIH0sCiAgICAibWV0YWRhdGEiOiB7CiAgICAgICJidWlsZFN0YXJ0ZWRPbiI6ICIyMDIyLTA2LTEwVDEzOjIzOjQwLjI0NzAwMTk5MloiLAogICAgICAiYnVpbGRGaW5pc2hlZE9uIjogIjIwMjItMDYtMTBUMTM6MjM6NDIuOTU0MTA4MTM1WiIsCiAgICAgICJjb21wbGV0ZW5lc3MiOiB7CiAgICAgICAgImFyZ3VtZW50cyI6IHRydWUsCiAgICAgICAgImVudmlyb25tZW50IjogZmFsc2UsCiAgICAgICAgIm1hdGVyaWFscyI6IHRydWUKICAgICAgfSwKICAgICAgInJlcHJvZHVjaWJsZSI6IGZhbHNlCiAgICB9LAogICAgIm1hdGVyaWFscyI6IFsKICAgICAgewogICAgICAgICJ1cmkiOiAiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9naXRwb2QtaW8vZ2l0cG9kLmdpdCIsCiAgICAgICAgImRpZ2VzdCI6IHsKICAgICAgICAgICJzaGEyNTYiOiAiNTE3NmE5MDhkN2E3ZWFlY2Y0MDIwMDUyMGVhZTZmMWE2ZTE5OWUzNSIKICAgICAgICB9CiAgICAgIH0KICAgIF0KICB9Cn0=","signatures":null}
...
```

Notice that the built package carries a `provenance-bundle.jsonl` file. This newline delimited JSON file contains attestations for all dependencies built using leeway. Let’s look at one of those base64 monsters in more detail.

```bash
gitpod /workspace/gitpod (main) $ tar Oxf out.tar.gz ./provenance-bundle.jsonl | jq -r .payload | base64 -d | jq
{
  "_type": "https://in-toto.io/Statement/v0.1",
  "predicateType": "https://slsa.dev/provenance/v0.1",
  "subject": [
    {
      "name": "/_tests/util.test",
      "digest": {
        "sha256": "f54faccee12ad332c05db07cff3b4d51cfefe1092ea5ea7ebe7101363f1bd4eb"
      }
    },
    {
      "name": "/_tests/cgroups.test",
      "digest": {
        "sha256": "8034895b95cc3c63ccf006771f0ddab889773bc7110c1a427efe848fa8b0b38d"
      }
    },
    {
      "name": "/_tests/namegen.test",
      "digest": {
        "sha256": "7b4c77281ff2f96f91e99b01efacbf26e32c2321bade07af2b51898c815f15f2"
      }
    },
    {
      "name": "/_tests/baseserver.test",
      "digest": {
        "sha256": "f8f9e513c233097ad58c8d1fc608732884c26115d50c6a521157c091f50c7ef2"
      }
    },
    {
      "name": "/_tests/log.test",
      "digest": {
        "sha256": "2e692abd5ba1091eac2fc07673bc3a97b490db094c3b60c3b1a896d6c75af94a"
      }
    },
    {
      "name": "/_tests/grpc.test",
      "digest": {
        "sha256": "bd61b37fb5baf2b97a90463e76b98786d5e80af8f7d556d8c0c0fdc03d6bdf76"
      }
    }
  ],
  "predicate": {
    "builder": {
      "id": "github.com/gitpod-io/leeway:0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40"
    },
    "recipe": {
      "type": "https://github.com/gitpod-io/leeway/build@go:2",
      "definedInMaterial": 0,
      "entryPoint": "components/common-go:lib",
      "arguments": [
        "leeway",
        "build",
        "--save",
        "out.tar.gz",
        "components/ws-manager:app"
      ],
      "environment": {
        "manifest": {
          "arch": "amd64",
          "go": "go version go1.18.3 linux/amd64",
          "node": "v16.15.0",
          "os": "linux",
          "yarn": "1.22.19"
        }
      }
    },
    "metadata": {
      "buildStartedOn": "2022-06-10T13:23:28.18099525Z",
      "buildFinishedOn": "2022-06-10T13:23:37.733290813Z",
      "completeness": {
        "arguments": true,
        "environment": false,
        "materials": true
      },
      "reproducible": false
    },
    "materials": [
      {
        "uri": "git+https://github.com/gitpod-io/gitpod.git",
        "digest": {
          "sha256": "5176a908d7a7eaecf40200520eae6f1a6e199e35"
        }
      }
    ]
  }
}
```

SLSA attestations have a subject (the build output) and a predicate (the process which produced this output). Each file produced by the build is recorded including its SHA hash.
The predicate contains information about the builder; in leeway’s case that’s the version number and a hash of the leeway binary itself (the version number is easily tampered with). We record the command line that was used to invoke the build, as well as some environmental data.
Lastly, the materials section describes the inputs to the build. In this example, the build ran from a clean working copy, hence leeway adds a reference to this well-defined state. If the working copy was dirty, leeway would list all sources and their hashes instead.

## Consuming the provenance

We publish the provenance bundle as part of the [versions and installer images](https://werft.gitpod-dev.com/job/gitpod-build-main.3532). Those files can be extracted using the [oci-tool](https://github.com/csweichel/oci-tool), or using a container runtime. See below for a demo of this process:

<p align="center">
    <iframe title="loom video" width="640" height="360" src="https://www.loom.com/embed/49cc504d3ffb436f8680ab0030eb8896" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

In addition to just printing it and looking at the provenance data manually, you can use leeway to make assertions against this data. For example:

```js
gitpod /workspace/gitpod (main) $ oci-tool fetch file eu.gcr.io/gitpod-core-dev/build/installer:release-2022.05.0.5 app/provenance-bundle.jsonl
downloading sha256:0eae1244a408e28c6d4b8f99765a924a9039c0dd59ca2026bcf2fb292859856e  100% |████████████████████████████████████████████████████████████████████████████| (17/17 MB, 36.936 MB/s)
downloading sha256:39a08d88448d7592d4dc4fac5b6dba8977d7110c9baf2428fb30534c14c8f170  100% |████████████████████████████████████████████████████████████████████████████| (18/18 MB, 40.292 MB/s)

gitpod /workspace/gitpod (main) $ leeway provenance assert file://provenance-bundle.jsonl --git-only  && echo Built from a clean working copy
Built from a clean working copy

gitpod /workspace/gitpod (main) $ leeway provenance assert file://provenance-bundle.jsonl --built-with-leeway  && echo Built exclusively using leeway
Built exclusively using leeway

gitpod /workspace/gitpod (main) $ leeway provenance assert file://provenance-bundle.jsonl --built-with-leeway-version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40  && echo Built using the latest version
Built using the latest version

gitpod /workspace/gitpod (main) $ leeway provenance assert file://provenance-bundle.jsonl --built-with-leeway-version not-an-actual-version
ERRO[0000] install/installer:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components:all-docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] dev/version-manifest:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] test:docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] test:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ide-proxy:docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-proxy:docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-proxy:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-manager:docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-manager:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-manager-bridge:docker failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9f69b09d8985f725257adaade51d4a40
ERRO[0000] components/ws-manager-bridge:app failed built-with-leeway-version: was built using leeway version 0.2.17-3ebfb2a@sha256:b9629e2d0432adea1be7dddb3603e36d9
```

## What are we going to do next ⏭️

While SLSA Level 1 is an important first step. It helps security teams gain confidence in the integrity of our product, and increases trust in what we deliver. We also know that it will be difficult for security teams to review the provenance of every software, including its dependencies that are getting consumed to make risk-based decisions.

We have set our sights on Level 2, with Leeway being able to provide signed provenance already. At the same time, we need to invest into our CI/CD infrastructure to reduce the likelihood of the provenance signing keys being exfiltrated. Fulcrio and Rekor will come in handy here. Once that’s sorted, expect signed containers (including provenance) coming out of our build pipeline.
