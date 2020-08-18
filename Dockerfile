FROM node:13.12.0-alpine

RUN mkdir /grow
ENV FRONT_ROOT /grow
WORKDIR $FRONT_ROOT

COPY ./package.json $FRONT_ROOT/package.json
COPY ./node_modules $FRONT_ROOT/node_modules
# COPY ./package-lock.json $FRONT_ROOT/package-lock.json
COPY ./yarn.lock $FRONT_ROOT/yarn.lock

RUN npm install -g n && yarn install
RUN npm install -g create-react-app
RUN npm install --silent
RUN npm install --save firebase react-router react-router-dom styled-components axios dotenv

ADD . $FRONT_ROOT
