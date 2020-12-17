FROM node:12.16.1-alpine AS builder
# FROM arm64v8/node:12.16.1-alpine AS builder
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
#   apk update && \
#   apk add g++ gcc libgcc libstdc++ linux-headers make python python3
# RUN set NODE_OPTIONS=--max-old-space-size=40960
WORKDIR /builder
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

RUN yarn install
ENTRYPOINT ["yarn","dev"]
#RUN yarn run build

# FROM nginx:1.11.6-alpine
# COPY --from=builder /builder/dist /usr/share/nginx/html
# COPY --from=builder /builder/nginx/default.conf /etc/nginx/conf.d/default.conf
