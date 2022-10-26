FROM node:18-alpine
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
COPY server/ /app
RUN yarn install --production
EXPOSE 80
CMD ["yarn", "start"]
