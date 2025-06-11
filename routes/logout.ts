import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(_req) {
    const headers = new Headers();
    headers.set("Set-Cookie", "dni=; Path=/; Max-Age=0");
    headers.set("Location", "/");
    return new Response(null, { status: 302, headers });
  },
};
