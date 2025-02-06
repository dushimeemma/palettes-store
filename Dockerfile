FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production=false

COPY . .

RUN yarn build

FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV production
ENV PORT=3000

COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production=true

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["yarn", "start"]
