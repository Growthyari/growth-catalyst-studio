import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import { projects } from "@/data/work";
import founderImg from "@/assets/founder-akash.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthYari Studio — More clients. Less chasing." },
      {
        name: "description",
        content:
          "We build AI websites, voice agents, automations and BD systems for founder-led businesses in the UK, USA and Canada. Shipped in 72 hours.",
      },
      { property: "og:title", content: "GrowthYari Studio — More clients. Less chasing." },
      { property: "og:description", content: "AI websites, voice agents, automations and BD systems. Founder-led. Shipped in 72 hours." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "AI Websites", price: "From $1,499", copy: "A website that earns its keep. 5 pages. Mobile. SEO. Booking form. Live in 72 hours." },
  { n: "02", title: "AI Voice Agents", price: "From $749/month", copy: "Every call answered. Always. AI receptionist trained for your business. Books, qualifies, reports." },
  { n: "03", title: "AI Automation", price: "From $749/month", copy: "No lead falls through. Capture, qualify, and follow up automatically." },
  { n: "04", title: "BD Consultation", price: "From $1,499/month", copy: "A pipeline you can count on. Prospect lists, outreach sequences, weekly pipeline calls." },
];

const steps = [
  { n: "01", title: "Sharp 30-minute call", copy: "We pressure-test the problem and agree the outcome. No deck. No discovery rabbit hole." },
  { n: "02", title: "Scope and lock", copy: "A one-page brief. Fixed price. 72-hour clock starts." },
  { n: "03", title: "Build, in the open", copy: "Daily progress. You see the work as it ships, not after." },
  { n: "04", title: "Live, then iterate", copy: "We launch, measure, and tune. You keep the system. Forever." },
];

const testimonials = [
  {
    quote:
      "Akash rebuilt our site, plugged in a voice agent, and we stopped losing after-hours calls inside a week.",
    name: "Operations director",
    role: "HVAC company · Manchester, UK",
  },
  {
    quote:
      "We finally have a pipeline I can look at on a Monday morning and know exactly what to do.",
    name: "Founder",
    role: "B2B services · London, UK",
  },
  {
    quote:
      "Shipped in three days, looks like it took three months. The booking flow speaks for itself.",
    name: "Practice owner",
    role: "Dental clinic · South West, UK",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="container-editorial">
          <div className="fade-up">
            <SectionLabel index="GY/01">Studio · Delhi → UK · USA · Canada</SectionLabel>
          </div>
          <h1 className="mt-10 max-w-[18ch] text-[12vw] sm:text-7xl md:text-[7.5rem] lg:text-[9rem] leading-[0.92] fade-up fade-up-delay-1">
            More clients.
            <br />
            <span className="text-muted-foreground">Less </span>
            <span className="serif-italic text-primary">chasing.</span>
          </h1>
          <div className="mt-14 grid gap-10 md:grid-cols-12 fade-up fade-up-delay-2">
            <p className="md:col-span-7 text-lg md:text-xl text-foreground/75 measure leading-[1.55]">
              Your competitors are getting the customers you should be getting — because they have a website that works and yours doesn't.
              <br /><br />
              We fix that in 72 hours.
              <br />
              Serving UK, USA and Canada.
            </p>
            <div className="md:col-span-5 md:justify-self-end flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-6 rounded-sm bg-foreground px-6 py-4 text-base font-medium text-background hover:bg-primary transition-colors"
              >
                Book a 30-min call
                <span>→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-between gap-6 rounded-sm border hairline px-6 py-4 text-base font-medium hover:border-foreground transition-colors"
              >
                See the work
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* trust row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border hairline rounded-sm overflow-hidden fade-up fade-up-delay-3">
            {[
              { k: "72hr", v: "Website delivery" },
              { k: "6", v: "Live client sites" },
              { k: "UK · US · CA", v: "Markets we serve" },
              { k: "Live", v: "Systems and demos" },
            ].map((t) => (
              <div key={t.v} className="bg-paper p-6 md:p-8">
                <p className="font-display text-3xl md:text-[2.5rem] leading-none">{t.k}</p>
                <p className="mt-3 label-mono text-muted-foreground">{t.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* marquee */}
      <div className="border-y hairline bg-paper py-5 overflow-hidden">
        <div className="flex gap-12 marquee-track whitespace-nowrap label-mono text-foreground/70">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "AI Websites",
              "·",
              "AI Voice Agents",
              "·",
              "AI Automation",
              "·",
              "Business Development",
              "·",
              "Shipped in 72 hours",
              "·",
              "Founder-led",
              "·",
              "UK · USA · Canada",
              "·",
            ].map((t, j) => (
              <span key={`${i}-${j}`}>{t}</span>
            )),
          )}
        </div>
      </div>

      {/* SELECTED WORK */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel index="GY/02">Selected work</SectionLabel>
            <h2 className="mt-6 text-5xl md:text-[5.5rem] leading-[0.95] max-w-[14ch]">
              Real builds.
              <br />
              <span className="serif-italic text-muted-foreground">Live systems.</span>
            </h2>
          </div>
          <Link to="/work" className="label-mono text-foreground/80 hover:text-primary transition-colors">
            All work →
          </Link>
        </div>
        <div className="mt-16 grid gap-14 md:gap-16 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <WorkCard
              key={p.slug}
              image={p.image}
              name={p.name}
              category={p.category}
              location={p.location}
              summary={p.summary}
              tag={p.tag}
              url={(p as { url?: string }).url}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/work" className="inline-flex items-center gap-2 label-mono text-primary hover:underline">
            See all 5 builds →
          </Link>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section className="border-t hairline">
        <SectionLabel index="GY/03">What we build</SectionLabel>
        <div className="mt-10 grid md:grid-cols-12 gap-12 items-end">
          <h2 className="md:col-span-7 text-5xl md:text-[5.5rem] leading-[0.95]">
            Four services.<br />
            One outcome: <span className="serif-italic text-primary">growth.</span>
          </h2>
          <div className="md:col-span-5 measure text-lg text-foreground/75 leading-relaxed">
            Each service is a working system. Not a deliverable. Not a deck. Something live, in your business, doing the job.
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-hairline border hairline rounded-sm overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group bg-paper p-8 md:p-12 hover:bg-surface transition-colors flex flex-col gap-4"
            >
              <span className="label-mono text-muted-foreground">{s.n}</span>
              <h3 className="text-[28px] md:text-[34px] leading-tight">{s.title}</h3>
              <p className="label-mono text-primary">{s.price}</p>
              <p className="text-foreground/70 leading-relaxed">{s.copy}</p>
              <span className="mt-auto label-mono text-foreground/70 group-hover:text-primary transition-colors">Read more →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section dark>
        <SectionLabel index="GY/04" dark>How it works</SectionLabel>
        <h2 className="mt-6 text-5xl md:text-[5.5rem] leading-[0.95] max-w-[18ch]">
          From first call to live system.<br />
          <span className="serif-italic text-night-foreground/60">In days, not quarters.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-night p-8 md:p-10 flex flex-col gap-4">
              <span className="label-mono text-electric">{s.n}</span>
              <h3 className="text-2xl md:text-[26px] leading-tight">{s.title}</h3>
              <p className="text-night-foreground/70 text-sm leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionLabel index="GY/05">Founder notes</SectionLabel>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure key={i} className="border-t hairline pt-8">
              <blockquote className="serif-italic text-[26px] md:text-[28px] leading-[1.2] text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 label-mono text-muted-foreground">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FOUNDER STRIP */}
      <Section className="border-t hairline">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="rounded-sm overflow-hidden bg-surface aspect-[4/5] max-w-sm">
              <img
                src={founderImg}
                alt="Akash Chaudhury, founder of GrowthYari Studio"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <SectionLabel index="GY/06">Founder-led</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-[3.75rem] leading-[1.02] max-w-[18ch]">
              You'll work with Akash. <span className="serif-italic text-muted-foreground">Not an account manager.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 measure leading-relaxed">
              Every brief is read by the founder. Every build is shipped by the founder. That's the entire promise — and it's the reason things actually ship in 72 hours.
            </p>
            <p className="mt-6 text-lg text-foreground/75 measure leading-relaxed">
              Based in Delhi. Working UK and US hours. Always reachable on WhatsApp and email — replied to within 4 hours.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 label-mono text-primary hover:underline"
            >
              About the studio →
            </Link>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section className="border-t hairline">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel index="GY/07">Pricing</SectionLabel>
          <h2 className="mt-6 text-5xl md:text-[5.5rem] leading-[0.95]">
            What this <span className="serif-italic text-primary">costs.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Fixed prices. No surprises. You know everything before we start.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Website",
              price: "$1,499",
              label: "one-time",
              meta: "Delivered in 72 hours",
              features: [
                "5 fully designed pages",
                "Mobile responsive",
                "SEO foundations",
                "Booking or enquiry form",
                "Deployed on your domain",
              ],
              cta: "Get my site built →",
              highlight: false,
            },
            {
              title: "AI Voice Agent",
              price: "$749",
              priceSuffix: " one-time",
              monthly: "+ $499/month",
              label: "setup + monthly",
              meta: "Most teams go live in a week",
              features: [
                "Custom-trained AI agent",
                "Dedicated phone number",
                "24/7 active — never misses a call",
                "Monthly transcripts and reports",
                "Ongoing optimisation",
              ],
              cta: "Build my voice agent →",
              highlight: true,
            },
            {
              title: "BD Consulting",
              price: "$499",
              priceSuffix: "/month",
              label: "monthly rolling",
              meta: "Cancel anytime",
              features: [
                "ICP definition and prospect lists",
                "LinkedIn and email outreach sequences",
                "Weekly 30-min pipeline review call",
                "Live tracking dashboard",
                "Cancel anytime",
              ],
              cta: "Start growing →",
              highlight: false,
            },
          ].map((c) => (
            <div
              key={c.title}
              className={`relative rounded-sm border hairline p-8 md:p-10 flex flex-col ${
                c.highlight ? "bg-night text-night-foreground border-night" : "bg-paper"
              }`}
            >
              {c.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 label-mono bg-electric text-night px-3 py-1 rounded-full">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-3xl md:text-4xl">{c.title}</h3>
              <p className={`mt-2 label-mono ${c.highlight ? "text-night-foreground/60" : "text-muted-foreground"}`}>
                {c.label}
              </p>
              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-5xl md:text-6xl">{c.price}</span>
                {c.priceSuffix ? <span className="text-lg opacity-70">{c.priceSuffix}</span> : null}
              </div>
              {c.monthly ? (
                <p className={`mt-2 ${c.highlight ? "text-night-foreground/80" : "text-foreground/80"}`}>
                  {c.monthly}
                </p>
              ) : null}
              <p className={`mt-4 text-sm ${c.highlight ? "text-night-foreground/60" : "text-muted-foreground"}`}>
                {c.meta}
              </p>
              <ul className="mt-8 space-y-3 flex-1">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-2 inline-block h-1 w-3 shrink-0 ${c.highlight ? "bg-electric" : "bg-primary"}`} />
                    <span className={c.highlight ? "text-night-foreground/90" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-sm px-6 py-4 font-medium transition-colors ${
                  c.highlight
                    ? "bg-electric text-night hover:bg-paper"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                {c.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          All prices in GBP. USD equivalent available on request. 50% deposit to start. 50% on delivery. Monthly services cancel anytime.
        </p>
      </Section>

      {/* CLOSING CTA */}
      <section className="bg-night text-night-foreground">
        <div className="container-editorial py-24 md:py-36 text-center">
          <SectionLabel index="GY/08" dark><span className="md:mx-auto">Ready when you are</span></SectionLabel>
          <h2 className="mt-10 text-6xl md:text-[8rem] leading-[0.95]">
            Let's ship<br />
            <span className="serif-italic text-electric">something real.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-night-foreground/70 leading-relaxed">
            Free 30-minute call. You describe the problem. We tell you exactly what we'd build and what it costs. No pitch. No obligation. If we're a fit, the 72-hour clock starts that same day.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-paper px-8 py-4 text-foreground font-medium hover:bg-electric hover:text-night transition-colors"
          >
            Book a call
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
