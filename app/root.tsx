import type { MetaFunction, LoaderFunction, LinksFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import stylesheet from "~/tailwind.css?url";

export const meta: MetaFunction = () => ([
  { charset: "utf-8" },
  { title: "New Remix App" },
]);

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);
