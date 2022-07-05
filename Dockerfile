FROM node:14-alpine AS build
WORKDIR "/app"
RUN npm install
COPY . .
RUN npm run build

FROM build AS development
WORKDIR "/app"
CMD [ "sh", "-c", "npm run start"]

FROM build AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR "/app"
RUN npm prune --production
CMD [ "sh", "-c", "npm run start:prod"]
