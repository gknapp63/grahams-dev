import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Graham's Dev Site | Welcome" }];
}

export default function Home() {
  return <>Home Page</>;
}
