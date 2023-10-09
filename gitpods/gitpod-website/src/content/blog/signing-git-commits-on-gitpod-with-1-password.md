---
author: burningion, nancy-chauhan
date: Tue, 21 Feb 2023 11:00:00
excerpt: See how 1Password can be used to sign your commits on Gitpod with SSH keys and biometric confirmation
image: teaser.webp
tags: ['Engineering']
teaserImage: teaser.webp
title: Signing Commits on Gitpod with 1Password
---

By default, git makes no attempt to verify or validate the identity of the person making commits. On a fresh installation, git will prompt for an email address and name, but no attempt is made to verify the person making commits actually owns the email address.

Given this lack of verification, if an attacker compromises access to a source code repository, they can impersonate the person normally creating commits, potentially compromising the downstream binaries.

## Signing Commits to Help Secure the Software Supply Chain

One way to prevent this sort of an attack is via tools like [Sigstore](https://docs.sigstore.dev/), [in-toto](https://in-toto.io/), and [TUF](https://theupdateframework.io/). Each of these frameworks validates the supply chain integrity leading up to the building of a binary artifact, and, in the case of TUF, the secure distribution of binaries.

A key component of these tools is ensuring developers cryptographically sign their commits.

To do git commit signing, developers generate and use a cryptographic key pair to add a digital signature to each commit which verifies their identity. Once set up properly, both GitHub and GitLab add a “verified” badge to each commit which has been signed.

In this blog post, we’ll explore how you can sign your commits while developing on Gitpod Workspaces using 1Password and SSH key signing.

## 1Password’s SSH Agent and SSH Key Management

[1Password](https://www.1password.com) now allows you to set up and manage [SSH keys](https://developer.1password.com/docs/ssh/) from within the desktop application. This is useful, as you can be prompted every time an attempt is made to use an SSH key, and authorization can be granted from within the application with biometric confirmation.

As described in the illustration below, 1Password can handle all SSH authentication between Gitpod Workspaces and Gitpod supported [desktop IDEs/editors](https://www.gitpod.io/docs/references/ides-and-editors).

It accomplishes this via SSH agent forwarding, which lets you authenticate remote SSH requests using local SSH credentials. In practice this means you can run any SSH command in your remote Gitpod workspace, _without_ the SSH private key ever leaving the local 1Password process.

We can also use these local SSH keys to sign Git commits, as GitHub supports SSH key signing for commits. We can then get the verified badge next to our username, and add a layer of proof showing the code came from us.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/architecture.webp" alt="Architecture of commit signing with SSH keys"  />
</figure>

## Signing commits in Gitpod with 1Password

Again, for now SSH agent forwarding with 1Password only works on desktop applications. This means you won’t be able to do git signatures in the browser edition of VS Code, and **must use a Gitpod compatible desktop IDE for code signing.**

So first, ensure you’re running a desktop IDE for your workspace. With that, we can then set up 1Password to manage our SSH keys:

Install [1Password](https://1password.com/downloads) on your machine, and enable the SSH Agent found under Settings -> Developer -> SSH Agent

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/1password-ssh-agent.webp" alt="SSH Agent Configuration in 1Password"  />
</figure>

Make the following changes in your local `~/.ssh/config` to add a 1Password agent socket and SSH agent forwarding for Gitpod workspaces. (If the file doesn't exist, create it.)

```
Host *
  IdentityAgent "~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock"

Host *.gitpod.io
  ForwardAgent yes
```

These changes make sure of two things:

-   SSH authentication is being handled by 1Password's Agent

-   Agent forwarding is enabled for \*.gitpod.io which means all Gitpod workspaces have access to the SSH auth socket. (If you’re using an instance of Gitpod dedicated, set it to a wildcard of your internally hosted domain.)

Next, we'll need to generate an SSH Key. You can do this right within the [Gitpod SSH keys](https://gitpod.io/keys) page if you have the 1Password extension installed:

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/fill-ssh-key.webp" alt="1Password Autocompleting SSH Key"  />
</figure>

If you'd like to use an existing SSH key, you can also import that into 1Password. It's best if it's passphrase protected. The command to add a passphrase to an existing key is:

```
$ ssh-keygen -p -f ~/.ssh/id_rsa
```

With this, you can then load your SSH key into 1Password, and save the passphrase you created. Going forward, 1Password will enter your passphrase for you automatically.

From there, add your SSH public key to Gitpod to the [Gitpod SSH keys](https://gitpod.io/keys). With 1Password 8 and its browser extension (currently supports Chrome, Safari, Brave and more), again, you will get the option to insert the SSH key into the browser. (This should be your public key!) This will allow us to access our Gitpod Workspace via SSH.

Next, add your public SSH key to Gitpod as a [user environment variable](https://gitpod.io/user/variables). We'll use this environment variable to tell git which key to use for signing. In this case, I’ve named my environment variable `SSH_SIGNING_KEY`, and I’ve set it as a global variable with a `*/*` scope. (I want every repository I use on Gitpod to use it for signing if possible.)

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/signing-key.webp" alt="Public SSH Key set as Environment variable in Gitpod"  />
</figure>

Add your [SSH public key to Github](https://github.com/settings/ssh/new) as _both_ a signing key and an authentication key. The signing key will be used to confirm your identity in git, and the authentication key will be used to authenticate your code pushes with the Github server. (Yes, two different things. You may need to do the authentication key first for the signing key option to show up.)

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/add-ssh-keys-github.webp" alt="SSH Keys to Authenticate and Sign on Github"  />
</figure>

Note: To verify if your SSH credentials work properly, you can try authenticating with Github over SSH on your local machine. On a fresh local terminal, type:

`ssh -T git@github.com`

This should first prompt you for biometric confirmation with 1Password, and then return a message saying you have successfully authenticated with Github with your username.

## Signing your first commit in Gitpod

Open a project in a Gitpod workspace, and ensure it's open in VS Code Desktop.

When you open a workspace in VS Code Desktop, an SSH connection between VS Code desktop and Gitpod workspace should be established by the 1Password SSH Agent. If everything has been set correctly you should get a biometric prompt to login by touch key when opening the workspace. The 1Password application provides SSH credentials and handles the SSH flow.

Next, we need to open a new shell by clicking the `+` sign in VS Code, and type the commands to enable git commit signing:

```bash
$ git config --global gpg.format ssh
$ git config --global user.signingkey "$SSH_SIGNING_KEY"
```

This tells git to use SSH as a sigining format, and injects our environment variable as the public key to sign with.

We can now test a commit by using the following command after changing a file:

```bash
$	git commit -S -am “Testing our signed commits”
```

If we look at Github for our commit, we should now see a verified badge next to the commit:

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/verified-commit.webp" alt="Verified commit on Github"  />
</figure>

To enable git commit signing every time we open our repository, must set our git preferences in `.gitpod.yml` as a task, and again, ensure have set an environment variable for our `SSH_SIGNING_KEY` in our [environment variables](https://gitpod.io/variables):

```yml
tasks:
  - name: Local terminal
	init: git config --global gpg.format ssh && git config --global user.signingkey "$SSH_SIGNING_KEY" && git config commit.gpgsign true --global
	command: bash
```

We should now have biometric prompts from 1Password for signing our git commits, and have helped to secure our source code.

But what if we want all of our repositories to have commit signing enabled by default in Gitpod?

## Automatic Commit Signing in Every Repository with Dotfiles

For that, Gitpod has [Dotfiles](https://www.gitpod.io/docs/configure/user-settings/dotfiles#dotfileshttps://www.gitpod.io/docs/configure/user-settings/dotfiles#dotfiles), which allow us to run a bit of bash on each of the Gitpod workspaces we spin up. In my case, I created a git repository named `gitpod-dotfiles`, and linked it to my user settings:

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/signing-git-commits-on-gitpod-with-1-password/dotfiles.webp" alt="Kirk's Dotfiles"  />
</figure>

In my Dotfile repository, I’ve created a file with the name `install.sh` (and run `chmod +x install.sh` afterwards), and have pasted in the same commands we used in the above task:

```bash
git config --global gpg.format ssh && git config --global user.signingkey "$SSH_SIGNING_KEY" && git config commit.gpgsign true --global
```

If you like, you can [fork my dotfiles](https://github.com/burningion/gitpod-dotfiles), or create your own, and set them in your account preferences to have git commit signing everywhere when using a Desktop IDE and Gitpod.

## References

-   Community office hours with 1Password:

`youtube: u2aCOtMqtc4`

-   SSH & Git - Get Started https://developer.1password.com/docs/ssh/get-started
-   1Password Developer Documentation https://developer.1password.com/

If you have any questions about setting this up, drop by [Gitpod’s community Discord server](https://www.gitpod.io/chat) or [1Password’s Developer Slack Community](https://join.slack.com/t/1password-devs/shared_invite/zt-1halo11ps-6o9pEv96xZ3LtX_VE0fJQA). We would love to hear your feedback in the Community.
