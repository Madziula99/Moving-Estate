FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY . /app
RUN yarn install:client
RUN yarn build:client
RUN yarn copy:built_client
RUN rm -r ./client
RUN yarn install:server:prod
EXPOSE 80
CMD ["yarn", "start:server:prod"]
