import { Handlers, PageProps } from "$fresh/server.ts";
import CharactersContaniner from "../components/CharactersContainer.tsx";

type Character = {
  name: string;
  image: string;
  house: string;
  id: string;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookie = req.headers.get("cookie") || "";
    const dni = cookie
      .split(";")
      .find((c) => c.trim().startsWith("dni="))
      ?.split("=")[1];

    if (!dni) {
      const headers = new Headers();
      headers.set("Location", "/");
      return new Response(null, { status: 302, headers });
    }

    // Fetch personajes
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();

    const characters: Character[] = data.map((char: any, idx: number) => ({
      name: char.name,
      image: char.image || "https://via.placeholder.com/150",
      house: char.house || "Unknown",
      id: `${idx}`,
    }));

    return ctx.render({ characters, dni });
  },
};

export default function GreetPage(props: PageProps<{ characters: Character[]; dni: string }>) {
  return (
    <div class="p-4">
      <h1 class="text-2xl mb-4">Bienvenido, DNI: {props.data.dni}</h1>
      <form method="POST" action="/logout" class="mb-4">
        <button class="bg-red-500 text-white px-4 py-2 rounded" type="submit">Logout</button>
      </form>
      <CharactersContaniner characters={props.data.characters} />
    </div>
  );
}