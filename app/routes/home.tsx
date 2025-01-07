import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GerardABC" },
    { name: "description", content: "Portfolio" },
  ];
}

export default function Home() {
  return <Welcome />;
}
