import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="label-mono text-muted-foreground">404 — Off the map</p>
        <h1 className="mt-4 text-6xl text-foreground">Not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-foreground/20 bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GrowthYari Studio — AI Websites, Voice Agents & BD Systems | UK · USA" },
      { name: "description", content: "AI websites built in 72 hours, voice agents that answer every call, and BD systems that fill your pipeline. GrowthYari Studio — serving UK, USA and Canada. From $1499." },
      { name: "keywords", content: "AI website builder UK, voice agent for small business, AI receptionist dental, HVAC website, business development consultant UK" },
      { name: "author", content: "GrowthYari Studio" },
      { property: "og:title", content: "GrowthYari Studio — AI Websites, Voice Agents & BD Systems | UK · USA" },
      { property: "og:description", content: "AI websites built in 72 hours, voice agents that answer every call, and BD systems that fill your pipeline. Serving UK, USA and Canada. From $1499." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "GrowthYari Studio — AI Websites, Voice Agents & BD Systems | UK · USA" },
      { name: "twitter:description", content: "AI websites built in 72 hours, voice agents that answer every call, and BD systems that fill your pipeline. Serving UK, USA and Canada. From $1499." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b586961-f635-475e-8455-455974fa8bde/id-preview-66e0cc77--e58c7803-5bdb-4fd1-b812-bad87bcc591d.lovable.app-1779566977097.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b586961-f635-475e-8455-455974fa8bde/id-preview-66e0cc77--e58c7803-5bdb-4fd1-b812-bad87bcc591d.lovable.app-1779566977097.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell>
        <Outlet />
      </SiteShell>
    </QueryClientProvider>
  );
}

import { SiteShell } from "@/components/site-shell";
