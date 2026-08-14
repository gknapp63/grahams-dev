import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Graham's Dev Site | Welcome" },
    { name: "description", content: "Welcome to my custom developer site" },
  ];
}

export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Welcome to My App</h2>
    </section>
  );
}
