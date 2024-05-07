FROM ghcr.io/puppeteer/puppeteer:22.8.0

FROM node:18.17.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY prisma ./prisma/

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

RUN ls -la /usr/bin/google-chrome-stable

CMD [ "npx", "next", "start" ]