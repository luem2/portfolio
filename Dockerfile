FROM node:lts

RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm build

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD node ./dist/server/entry.mjs