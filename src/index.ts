import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Coolify Elysia").listen(9000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
