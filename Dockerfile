FROM node:18-alpine
WORKDIR /app/client
ENV NODE_ENV=production
COPY client .
RUN yarn install
RUN yarn build
WORKDIR /app
COPY server .
RUN cp -r ./client/build/* ./public
RUN rm -r ./client
RUN yarn install --production
EXPOSE 80
CMD ["yarn", "start:prod"]
