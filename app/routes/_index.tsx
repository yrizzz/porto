import Home from "../components/home/homeIndex"
import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to my portfolio website" },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Home />
    </main>
  );
}
