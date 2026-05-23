import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="container-editorial py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-electric" />
            <span className="font-display text-xl">GY Studio</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-night-foreground/70 hover:text-night-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="md:text-right">
            <a
              href="mailto:akash@growthyari.com"
              className="text-sm text-night-foreground/90 hover:text-electric transition-colors"
            >
              akash@growthyari.com
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs text-night-foreground/50">
            © 2026 GrowthYari Studio · Delhi, India · Serving UK, USA and Canada
          </p>
          <p className="label-mono text-night-foreground/40">More clients. Less chasing.</p>
        </div>
      </div>
    </footer>
  );
}