FROM ghcr.io/puppeteer/puppeteer:19.8.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Change ownership of the working directory
USER root
RUN chown -R pptruser:pptruser /usr/src/app
USER pptruser

COPY package*.json ./
RUN npm install
RUN npm ci
COPY ./src .
CMD [ "next", "start" ]