import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/section";
import { projects, demos } from "@/data/work";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GrowthYari Studio" },
      { name: "description", content: "AI websites, AI voice agents, AI automation, and business development consultation. Founder-led. Shipped in 72 hours." },
      { property: "og:title", content: "Services — GrowthYari Studio" },
      { property: "og:description", content: "Four services. One outcome: growth." },
    ],
  }),
  component: ServicesPage,
});

const smile = projects[0];
const peak = projects[1];
const voice = demos[0];
const auto = demos[1];
const bd = demos[2];

const services = [
  {
    n: "01",
    title: "AI Websites",
    price: "From $1,499",
    intent: "A website that earns its keep. 5 pages. Mobile. SEO. Booking form. Live in 72 hours.",
    body: "We design and ship founder-grade websites with AI built in — booking, chat, qualification, content. Built properly. Live in 72 hours.",
    bullets: ["Conversion-first architecture", "AI booking + qualification", "Local + intent SEO", "CMS you can actually run"],
    proofs: [smile, peak],
  },
  {
    n: "02",
    title: "AI Voice Agents",
    price: "From $749/month",
    intent: "Every call answered. Always. AI receptionist trained for your business. Books, qualifies, reports.",
    body: "An AI receptionist that picks up in under two rings, qualifies the lead, books the calendar, and hands you a clean summary. Sounds like your team — on its best day.",
    bullets: ["Branded voice + scripts", "Live qualification", "Calendar + CRM booking", "SMS + email summaries"],
    proofs: [voice],
  },
  {
    n: "03",
    title: "AI Automation",
    price: "From $749/month",
    intent: "No lead falls through. Capture, qualify, and follow up automatically.",
    body: "Lead capture, scoring, routing and multi-touch follow-up — all working while you sleep. We build the system, plug it into your stack, and hand you the keys.",
    bullets: ["Form → CRM → routing", "AI qualification + scoring", "14-day adaptive follow-up", "Internal SOPs documented"],
    proofs: [auto],
  },
  {
    n: "04",
    title: "Business Development Consultation",
    price: "From $1,499/month",
    intent: "A pipeline you can count on. Prospect lists, outreach sequences, weekly pipeline calls.",
    body: "ICP definition, message testing, outbound infrastructure and a pipeline you can read on a Monday morning. Founder-to-founder. No retainers without traction.",
    bullets: ["ICP + message frameworks", "Outbound infrastructure", "Pipeline + reporting", "Reply-handling SOP"],
    proofs: [bd],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-16 border-b hairline">
        <div className="container-editorial">
          <SectionLabel index="GY/Services">What we build</SectionLabel>
          <h1 className="mt-10 text-6xl md:text-[8.5rem] leading-[0.95] max-w-[15ch]">
            Four services. One outcome: <span className="serif-italic text-primary">growth.</span>
          </h1>
          <p className="mt-10 measure text-lg text-foreground/75 leading-relaxed">
            Every service ships as a working system in your business — not a deck, not a deliverable, not a Notion doc.
          </p>
        </div>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.n}
          className={`${idx % 2 === 1 ? "bg-surface" : "bg-paper"} border-b hairline`}
        >
          <div className="container-editorial py-20 md:py-28">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <SectionLabel index={s.n}>Service</SectionLabel>
                <h2 className="mt-6 text-5xl md:text-7xl leading-[0.95]">{s.title}</h2>
                <p className="mt-4 label-mono text-primary">{s.price}</p>
                <p className="mt-6 text-xl text-foreground/80">{s.intent}</p>
              </div>
              <div className="md:col-span-7 md:pl-10 md:border-l hairline">
                <p className="text-lg text-foreground/85 max-w-xl">{s.body}</p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-foreground/85">
                      <span className="mt-2 inline-block h-1 w-3 bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* PROOF */}
                <div className="mt-12">
                  <p className="label-mono text-muted-foreground">Proof / Live examples</p>
                  <div className={`mt-4 grid gap-6 ${s.proofs.length > 1 ? "md:grid-cols-2" : ""}`}>
                    {s.proofs.map((p) => (
                      <div key={p.slug} className="rounded-sm overflow-hidden border hairline bg-paper">
                        <div className="aspect-[4/3] overflow-hidden bg-surface">
                          <img src={p.image} alt={p.name} loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-lg font-display">{p.name}</h4>
                            {p.tag ? <span className="label-mono text-muted-foreground">{p.tag}</span> : null}
                          </div>
                          <p className="mt-2 text-sm text-foreground/75">{p.summary}</p>
                          <p className="mt-3 label-mono text-muted-foreground">Outcome: {p.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Section dark>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <SectionLabel index="GY/CTA" dark>Next</SectionLabel>
            <h2 className="mt-6 text-5xl md:text-7xl">
              Tell us what's broken.<br />
              <span className="text-night-foreground/55">We'll tell you what's fixable in 72 hours.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-sm bg-paper px-7 py-4 text-foreground font-medium hover:bg-electric hover:text-night transition-colors"
            >
              Start a brief →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}