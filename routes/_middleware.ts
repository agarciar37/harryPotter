import { MiddlewareHandlerContext } from "$fresh/server.ts";
import collection from "../db/DNI.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
    const url = new URL(req.url);

    if (url.pathname === "/" && req.method === "GET") {
        const dni = url.searchParams.get("dni");

        if (dni) {
            const exists = await collection.findOne({ DNI: dni });

            if (!exists) {
                await collection.insertOne({ DNI: dni });
            }

            const headers = new Headers();

            headers.append("Set-Cookie", `dni=${dni};path=/`);
            headers.append("location", "greet");

            return new Response(null, {
                status: 302,
                headers,
            });
        }
    }

    return await ctx.next();
}
