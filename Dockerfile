FROM node:14 as builder

WORKDIR /build

ADD package.json yarn.lock /build/
RUN yarn 

ADD . /build
RUN yarn generate


FROM nginx:1.21
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /build/dist /usr/share/nginx/html