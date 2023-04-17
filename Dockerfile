FROM node:18.13.0-alpine
# FROM node:16.13.0-alpine

RUN apk add --no-cache \
    git \
    g++ \
    make \
    python3

ENV PUPPETEER_SKIP_DOWNLOAD=true

RUN mkdir /grow
ENV FRONT_ROOT /grow
WORKDIR $FRONT_ROOT

COPY package.json $FRONT_ROOT/package.json
COPY node_modules $FRONT_ROOT/node_modules
COPY yarn.lock $FRONT_ROOT/yarn.lock

RUN npm install -g n && yarn install --timeout=60000000
RUN npm install -g create-react-app

ADD . $FRONT_ROOT