FROM node:18.13.0-alpine

RUN apk add --no-cache git

RUN mkdir /grow
ENV FRONT_ROOT /grow
WORKDIR $FRONT_ROOT

COPY package.json yarn.lock $FRONT_ROOT/
RUN yarn install --production --frozen-lockfile --ignore-optional

COPY . $FRONT_ROOT

CMD [ "yarn", "start" ]