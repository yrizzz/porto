import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import { HeroUIProvider } from "@heroui/react";
import { Analytics } from "@vercel/analytics/remix";
import { useAnimation, useInView } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useRef } from "react";
import Footer from './components/layout/footer/footerIndex';
import Header from './components/layout/header/headerIndex';
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Scheherazade+New:wght@400;500;600;700&display=swap",
  },
];

export default function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeroUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Header />
            <div className="container mx-auto px-4">
              <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
            <Scripts />
          </NextThemesProvider>
        </HeroUIProvider >
        <Analytics />
      </body>
    </html>
  );
}
