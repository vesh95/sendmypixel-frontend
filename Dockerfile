ARG API_HOST=https://api.example.co
ARG NODE_ENV=production


FROM node:23-alpine as builder

WORKDIR /opt/application

COPY . /opt/application

RUN npm install && npm build