import type { MetaFunction } from "@remix-run/node";
import Home from "../components/home/homeIndex"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Home />
    </main>
  );
}
