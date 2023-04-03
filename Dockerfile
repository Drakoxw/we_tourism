FROM node:18 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install -g npm@9.6.3

RUN npm install

COPY . /app

RUN npmrun build --

####

FROM nginx:1.23.4-alpine

COPY --from=build-step /app/dist/weTourism /usr/share/nginx/html
