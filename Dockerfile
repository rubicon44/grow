# FROM node:18.13.0

# RUN apt-get update && apt-get install -y chromium

# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

FROM node:18.13.0-alpine

RUN apk update && apk add --no-cache git chromium

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser

RUN mkdir /grow
ENV FRONT_ROOT /grow
WORKDIR $FRONT_ROOT

COPY package.json yarn.lock $FRONT_ROOT/
RUN yarn install --frozen-lockfile --ignore-optional

COPY . $FRONT_ROOT

CMD [ "yarn", "start" ]