FROM node:22.11.0-alpine3.19 as base

FROM base as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM base as production
WORKDIR /app
COPY --from=builder /app/builder ./build
CMD ["npm", "start"]