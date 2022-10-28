FROM node:18-alpine
WORKDIR /app
COPY server/ /app
COPY client/build/ /app/static
ENV NODE_ENV=production
RUN yarn install --production
EXPOSE 80
CMD ["yarn", "start:prod"]
