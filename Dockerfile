FROM node:18 as build-step

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g npm@9.6.3

COPY package.json /app

RUN npm install --force or --legacy-peer-deps

COPY . /app

RUN npm run build:ssr --prod

####

FROM nginx:1.23.4-alpine

COPY --from=build-step /app/dist/weTourism /usr/share/nginx/html
