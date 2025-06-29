import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Coolify Elysia from port 3000").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
