FROM denoland/deno:latest

WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

RUN deno cache ./main.ts

CMD ["deno", "task", "start"]