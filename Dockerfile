FROM node:18-alpine
WORKDIR /app
COPY server/ /app
ENV NODE_ENV=production
RUN yarn install --production
EXPOSE 80
CMD ["yarn", "start:prod"]
