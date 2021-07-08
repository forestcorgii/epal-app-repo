FROM node:14-alpine as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json packege-lock.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html