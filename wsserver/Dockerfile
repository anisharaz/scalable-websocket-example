FROM node:20.11.1-alpine3.19 AS base

FROM base AS build
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build


FROM base AS release
WORKDIR /app
COPY --from=build /app/dist .
COPY --from=build /app/package.json .
RUN npm i --omit=dev
CMD ["node", "index.js"]
