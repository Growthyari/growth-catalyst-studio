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
    <footer className="text-night-foreground border-t border-[color:var(--gold)]" style={{ backgroundColor: "#111810" }}>
      <div className="container-editorial py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            <span className="font-display text-xl">GY Studio</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="md:text-right space-y-1">
            <a
              href="mailto:akash@growthyari.com"
              className="block text-sm text-gold hover:underline transition-colors"
            >
              akash@growthyari.com
            </a>
            <a
              href="https://www.linkedin.com/in/akash-growthyari/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gold/80 hover:text-gold transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © 2026 GrowthYari Studio · Delhi, India · Serving UK, USA and Canada
          </p>
          <p className="label-mono text-white/40">More clients. Less chasing.</p>
        </div>
      </div>
    </footer>
  );
}