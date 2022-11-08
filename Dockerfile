FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app/client
COPY client .
RUN yarn install
RUN yarn build
WORKDIR /app/admin
COPY admin .
RUN yarn install
RUN yarn build
WORKDIR /app
COPY server .
RUN mv ./client/build/* ./public
RUN mkdir ./public/admin && mv ./admin/build/* ./public/admin
RUN rm -r ./client
RUN rm -r ./admin
RUN yarn install --production
EXPOSE 80
CMD ["yarn", "start:prod"]
