
# Start with the Gitpod image
FROM gitpod/workspace-full:latest AS gitpod

# Switch to the gitpod user
USER gitpod

# Install Node.js via nvm (Node Version Manager)
# Fixed typo: changed "18" to "14" in the nvm install command, as version 14 is the latest LTS release.
RUN bash -c ". .nvm/nvm.sh \
    && nvm install 18 \
    && nvm use 18 \
    && nvm alias default 18"

# Fixed typo: changed "~/.bashrc.d" to "~/.bashrc" in the path of the nvm use command.
RUN echo "nvm use default &>/dev/null" >> ~/.bashrc

# WORKDIR /workspace/appflow
# docker build -t beingofexistence/docker-first-image . && docker run -p 3000:3000 beingofexistence/docker-first-image

# Install dependencies
# RUN sudo apt-get update \
#     && sudo apt-get install -y --no-install-recommends \
#         xvfb x11vnc fluxbox dbus-x11 x11-utils x11-xserver-utils xdg-utils \
#         fbautostart xterm eterm gnome-terminal gnome-keyring seahorse nautilus \
#         libx11-dev libxkbfile-dev libsecret-1-dev libnotify4 libn3ss libxss1 \
#         libasound2 libmgb1 xfonts-basefonts x-terminus fonts-noto fonts-wqy-microhei \
#         fonts-droid-fallback vim-tiny nano libgconf2-dev libgtk-3-dev twm \
#     && sudo apt-get clean && sudo rm -rf /var/cache/apt/* && sudo rm -rf /var/lib/apt/lists/* && sudo rm -rf /tmp/*
RUN sudo apt-get update \
    && sudo apt-get install -y --no-install-recommends \
        xvfb x11vnc fluxbox dbus-x11 x11-utils x11-xserver-utils xdg-utils \
        fbautostart xterm eterm gnome-terminal gnome-keyring seahorse nautilus \
        libx11-dev libxkbfile-dev libsecret-1-dev libnotify4 libnss3 libxss1 \
        libasound2 libgbm1 xfonts-base xfonts-terminus fonts-noto fonts-wqy-microhei \
        fonts-droid-fallback vim-tiny nano libgconf2-dev libgtk-3-dev twm \
    && sudo apt-get clean && sudo rm -rf /var/cache/apt/* && sudo rm -rf /var/lib/apt/lists/* && sudo rm -rf /tmp/*

COPY package*.json ./

# Copy all other project files
COPY . .

# RUN yarn run installation && yarn run-app
USER root
RUN chown -R root ~/.config && chown -R root ~/.cache

# Fixed typo: changed "yarn run installation" "y toarn install" to use the correct command.
RUN yarn
RUN yarn server:init

# Expose port 3000 for the application
EXPOSE 5000

# Define the command to run your application
CMD [ "yarn", "run", "app" ]
