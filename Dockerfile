FROM hub.lumigame.com/base/playwright:v1.24.0-focal
ARG gameId

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN mkdir -p /app/tests/games/$gameId
COPY tests/games/$gameId-* /app/tests/games/$gameId
COPY playwright.config.ts .
COPY e2e.config.ts .
COPY package.json .
COPY .npmrc .

RUN test -n "$gameId" || (echo "gameId not set" && false)

RUN npm install \
 && npx playwright@1.42 install chromium