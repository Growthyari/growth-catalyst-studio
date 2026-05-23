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
  { n: "01", title: "AI Websites", copy: "Editorial sites built to convert. Shipped in 72 hours." },
  { n: "02", title: "AI Voice Agents", copy: "Answer every call in under two rings. 24/7. On brand." },
  { n: "03", title: "AI Automation", copy: "Lead capture, qualification, follow-up — nothing falls through." },
  { n: "04", title: "BD Consultation", copy: "ICP, outreach and pipeline systems that actually move." },
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
    name: "Operations lead",
    role: "Home services, Toronto",
  },
  {
    quote:
      "We finally have a pipeline I can look at on a Monday morning and know exactly what to do.",
    name: "Founder",
    role: "B2B services, London",
  },
  {
    quote:
      "Shipped in three days, looks like it took three months. The booking flow speaks for itself.",
    name: "Clinic owner",
    role: "Dental, UK",
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
              We build AI websites, voice agents, automations and business development systems for founder-led businesses in the UK, USA and Canada — shipped fast, built properly, and designed to convert.
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
              { k: "1", v: "Founder-led execution" },
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
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 label-mono text-primary hover:underline"
            >
              About the studio →
            </Link>
          </div>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="bg-night text-night-foreground">
        <div className="container-editorial py-24 md:py-36 text-center">
          <SectionLabel index="GY/07" dark><span className="md:mx-auto">Ready when you are</span></SectionLabel>
          <h2 className="mt-10 text-6xl md:text-[8rem] leading-[0.95]">
            Let's ship<br />
            <span className="serif-italic text-electric">something real.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-night-foreground/70 leading-relaxed">
            First call is free. No pitch. Just strategy. If we're a fit, we start the 72-hour clock.
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
