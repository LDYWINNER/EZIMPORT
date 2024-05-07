FROM ghcr.io/puppeteer/puppeteer:22.8.0

FROM node:18.17.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Change ownership of the working directory
# USER root

COPY package*.json ./
# RUN npm install
RUN npm ci
COPY ./src .
CMD [ "npx", "next", "start" ]