FROM node:latest as build
WORKDIR /reactapp

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build
FROM nginx:latest
COPY ngnix.conf /etc/nginx/nginx.conf
COPY --from=build /reactapp/build /usr/share/nginx/html