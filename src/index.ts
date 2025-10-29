import openapi from "@elysiajs/openapi";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").use(openapi({
  documentation:{
    info: {
      title: "KasirApp API",
      version: "1.0.0"
    }
  }
})).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
