import type { Route } from "./+types/home";
import { Index } from "../index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Podolli.AI - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Index />;
}
