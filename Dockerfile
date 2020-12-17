FROM node:12.16.1-alpine AS builder
WORKDIR /builder
COPY package.json .
COPY yarn.lock 

# 以下ENV需要修改
ENV SENDER_MAIL 123@qq.com
ENV NICKNAME  jim suen
ENV ACCEPT_MAIL 123@outlook.com
ENV PASS_KEY xxxxx

RUN yarn
COPY . .

RUN yarn install
ENTRYPOINT ["yarn","dev"]
