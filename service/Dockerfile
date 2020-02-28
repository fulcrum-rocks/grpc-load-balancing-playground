FROM node:lts-alpine as builder
RUN mkdir /root/app
WORKDIR /root/app
COPY . ./
RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:lts-alpine
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=builder --chown=node:node /root/app/node_modules ./node_modules/
COPY --from=builder --chown=node:node /root/app/dist ./dist/
COPY --from=builder --chown=node:node /root/app/proto ./proto/
COPY --from=builder --chown=node:node /root/app/package.json ./
ENV PORT=9090
CMD npm run start:prod