FROM node:12-alpine as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json packege-lock.json

RUN npm install

COPY . .

CMD ["npm","run","start"]

