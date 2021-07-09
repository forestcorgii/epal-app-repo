FROM node:12-alpine as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json packege-lock.json

RUN npm install

COPY . .
# FROM build as dev
# CMD ["npm","run","dev"]

# FROM build as prod
RUN npm run build

# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html

CMD ["npm","run","start"]