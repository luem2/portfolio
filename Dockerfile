FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml /usr/src/app/

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "preview", "--host"]