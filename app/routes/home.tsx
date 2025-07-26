import type { Route } from "./+types/home";
import { Index } from "../index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Podolli.AI - Home" },
    { name: "description", content: "Where your ideas become podcasts." },
    { name: "keywords", content: "podcasts, AI, technology, innovation" },
    { name: "author", content: "Podolli.AI Team" },
    // { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];
}

export default function Home() {
  return <Index />;
}
