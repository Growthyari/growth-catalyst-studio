import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/section";
import founder from "@/assets/founder-akash.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GrowthYari Studio" },
      { name: "description", content: "GrowthYari Studio is a founder-led AI growth agency based in Delhi, serving the UK, USA and Canada." },
      { property: "og:title", content: "About — GrowthYari Studio" },
      { property: "og:description", content: "We don't build websites. We build growth systems." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { n: "01", t: "Speed is a feature", b: "If it can ship in 72 hours, it ships in 72 hours. Slow is a tax on your growth, not a sign of quality." },
  { n: "02", t: "Founder-to-founder", b: "No account managers, no agency layers. Akash reads every brief and ships every build." },
  { n: "03", t: "Systems over decks", b: "We leave you with something live and running, not a strategy PDF you'll never open again." },
  { n: "04", t: "Honest proof", b: "We label sample builds as samples and demos as demos. No reframing of internal work as client wins." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-16 border-b hairline">
        <div className="container-editorial">
          <SectionLabel index="GY/About">The studio</SectionLabel>
          <h1 className="mt-8 text-6xl md:text-[9rem] leading-[0.9]">
            We don't build<br />
            websites.<br />
            <span className="italic text-primary">We build growth systems.</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="rounded-sm overflow-hidden bg-surface aspect-[4/5]">
              <img src={founder} alt="Akash Chaudhury, founder of GrowthYari Studio" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <p className="mt-4 label-mono text-muted-foreground">Akash Chaudhury · Founder · Delhi</p>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l hairline">
            <SectionLabel index="GY/01">Who we are</SectionLabel>
            <div className="mt-6 space-y-6 text-lg text-foreground/85 max-w-xl">
              <p>
                GrowthYari Studio is a founder-led AI growth agency based in Delhi, working with founder-led businesses across the UK, USA and Canada.
              </p>
              <p>
                We build the four things most growing businesses are missing: a website that converts, a voice agent that never sleeps, an automation layer that catches every lead, and a BD system that turns intent into pipeline.
              </p>
              <p>
                The studio is built around three things: speed, clarity, and outcomes. Everything else is noise.
              </p>
            </div>
            <a href="mailto:akash@growthyari.com" className="mt-10 inline-flex items-center gap-2 label-mono text-primary hover:underline">
              akash@growthyari.com →
            </a>
          </div>
        </div>
      </Section>

      <Section className="border-t hairline bg-surface">
        <SectionLabel index="GY/02">Operating principles</SectionLabel>
        <h2 className="mt-6 text-5xl md:text-7xl">How we work.</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-hairline border hairline rounded-sm overflow-hidden">
          {principles.map((p) => (
            <div key={p.n} className="bg-paper p-8 md:p-10">
              <span className="label-mono text-muted-foreground">{p.n}</span>
              <h3 className="mt-4 text-3xl">{p.t}</h3>
              <p className="mt-3 text-foreground/80">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t hairline">
        <SectionLabel index="GY/03">Traction</SectionLabel>
        <h2 className="mt-6 text-5xl md:text-7xl">
          What we've built so far.
        </h2>
        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-hairline border hairline rounded-sm overflow-hidden">
          {[
            { k: "3", v: "Website samples / live builds" },
            { k: "1", v: "Voice agent demo" },
            { k: "1", v: "Automation system sample" },
          ].map((s) => (
            <div key={s.v} className="bg-paper p-8 md:p-10">
              <p className="font-display text-6xl md:text-8xl">{s.k}</p>
              <p className="mt-4 label-mono text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/work" className="label-mono text-primary hover:underline">See the work →</Link>
        </div>
      </Section>

      <section className="bg-night text-night-foreground">
        <div className="container-editorial py-24 md:py-36 text-center">
          <h2 className="text-5xl md:text-8xl">
            One studio. One founder.<br />
            <span className="italic text-electric">Shipped properly.</span>
          </h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-paper px-7 py-4 text-foreground font-medium hover:bg-electric hover:text-night transition-colors">
            Talk to Akash →
          </Link>
        </div>
      </section>
    </>
  );
}