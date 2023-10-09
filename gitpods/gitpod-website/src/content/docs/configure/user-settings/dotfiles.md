---
section: user-settings
title: Dotfiles
description: Learn how to configure Gitpod to use your own dotfiles for all your workspaces and how to write a custom installation script according to your personal preferences.
---

# Dotfiles

Dotfiles are a way to customize your developer environment according to your personal needs.

To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in [your user preferences](https://gitpod.io/preferences).

`youtube: 00dif9QWXNU`

## Custom installation script

Gitpod will recognize and run one of the following install scripts from your dotfiles repository.

-   install.sh
-   install
-   bootstrap.sh
-   bootstrap
-   script/bootstrap
-   setup.sh
-   setup
-   script/setup

Note: Your installation script will be terminated if it exceeds 120 seconds.

Make sure to make your installation script executable with `chmod 755 <install-script-name>.sh` before committing and pushing to your dotfiles repository.

If there is no install script, your dotfiles will be symlinked into `/home/gitpod`.

## Example

> You can refer this [demo-dotfiles template](https://github.com/gitpod-io/demo-dotfiles) to bring your dotfiles to Gitpod.

The example below has just one dotfile called `.bash_aliases`. If this file is present in a workspace home directory, it will be found by the '.bashrc' startup script in the Gitpod default image, so no additional install script is required.

**.bash_aliases**

```sh
echo Hello Gitpod
echo Here is my .bash_aliases dotfile

alias gitsha='git rev-parse HEAD'
```

### Troubleshooting

The dotfiles repository installation logs are saved to `/home/gitpod/.dotfiles.log` and can be viewed via

```bash
cat /home/gitpod/.dotfiles.log
```

## FAQs

### How to debug or test dotfiles changes inside an existing workspace without creating a new one each time?

If you want to quickly test out dotfiles inside an existing workspace created from your `dotfiles` repository, you can run the below command snippet in your terminal as a workaround:

```bash
gitpod_evars="${!GITPOD_*}" gp_evars="${!GP_*}"; for k in ${gitpod_evars:-} ${gp_evars:-}; do dargs+=(-e "${k}"); done; docker run "${dargs[@]}" --net=host --rm -v $PWD:/home/gitpod/.dotfiles -v /workspace:/workspace -v /ide:/ide -v /usr/bin/gp:/usr/bin/gp:ro -v /.supervisor:/.supervisor -v /var/run/docker.sock:/var/run/docker.sock --privileged -it gitpod/workspace-full bash -c 'trap "echo -e \"=== Run \033[1;32mexit\033[0m command to leave debug workspace\"; exec bash -li" EXIT ERR; echo "PROMPT_COMMAND=\"echo -n \\\"[debug-workspace] \\\"; \$PROMPT_COMMAND\"" >> $HOME/.bashrc; eval "$(gp env -e)"; dot_path="${HOME}/.dotfiles"; for s in install setup bootstrap; do if p="${dot_path}/${s}" && test -x "${p}" || p="${p}.sh" && test -x "${p}"; then set +m; "$p"; set -m; exit; fi; done; while read -r file; do rf_path="${file#"${dot_path}"/}"; target_file="${HOME}/${rf_path}"; target_dir="${target_file%/*}"; if test ! -d "$target_dir"; then mkdir -p "$target_dir"; fi; ln -sf "$file" "$target_file"; done < <(find "${dot_path}" -type f);'
```

This will simulate a fake minimal workspace inside your existing Gitpod workspace using `docker`, where your dotfiles will be installed so you can easily test.

For convenience, you can create a file called `debug.sh` in your dotfiles repository and paste the snippet there. You could then run `bash debug.sh` to use it.

### How to install symlinks from dotfiles when using a [custom installation script](#custom-installation-script)?

When you commit a custom script such as `install.sh` in your dotfiles repository, Gitpod will no longer auto symlink your dotfiles under `$HOME` for you. It is by design so that you can have full control of how your dotfiles gets installed. An example of setting up a symlinking step is described below:

-   Create a directory called `home_files` inside your dotfiles repository. You can place your .dotfiles in the `home_files` directory, that means you could put files like `.zshrc`, `.tmux.conf`, `.config/nvim/` and etc. in there.
-   In your [custom installation script](#custom-installation-script) (e.g. `install.sh`), use/append the below snippet:

```bash
current_dir="$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)"
dotfiles_source="${current_dir}/home_files"

while read -r file; do

    relative_file_path="${file#"${dotfiles_source}"/}"
    target_file="${HOME}/${relative_file_path}"
    target_dir="${target_file%/*}"

    if test ! -d "${target_dir}"; then
        mkdir -p "${target_dir}"
    fi

    printf 'Installing dotfiles symlink %s\n' "${target_file}"
    ln -sf "${file}" "${target_file}"

done < <(find "${dotfiles_source}" -type f)
```

### [It it possible to cache the dotfiles installation?](https://discord.com/channels/816244985187008514/1072003259075657849)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

If your dotfiles installation relies on some heavy dependencies, that can take some time to install by nature.

So, everytime you start a workspace, you may have to wait for the dotfiles installation to complete before you can enter the workspace.

For some cases, you can start the commands in background from your `install.sh`, by adding `& disown` at the end of a command:

```bash
sudo apt install qemu-user-static & disown
```

This is a good workaround, so your workspace can start early and the long-running commands from your dotfiles installation script can happen in parallel.

But it may not work if you are installing a SHELL (e.g. `zsh`) or a dependency of something else that has to start before your dotfiles can get installed.

See [#7592](https://github.com/gitpod-io/gitpod/issues/7592) for more info, please upvote and share your feedback on this issue.
