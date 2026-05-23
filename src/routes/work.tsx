import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/section";
import { projects, demos } from "@/data/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — GrowthYari Studio" },
      { name: "description", content: "Shipped. Live. Working. Case studies for AI websites, voice agents, automation and BD systems." },
      { property: "og:title", content: "Work — GrowthYari Studio" },
      { property: "og:description", content: "Shipped. Live. Working." },
    ],
  }),
  component: WorkPage,
});

const all = [...projects, ...demos];

function WorkPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-20 border-b hairline">
        <div className="container-editorial">
          <SectionLabel index="GY/Work">Case studies</SectionLabel>
          <h1 className="mt-8 text-6xl md:text-[10rem] leading-[0.9]">
            Shipped.<br />
            Live.<br />
            <span className="italic text-primary">Working.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-foreground/80">
            Three website builds, two systems, one voice agent. Real proof — labelled honestly as live work, sample builds, or internal demos.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 label-mono">
            {[
              { k: "Sample build", v: projects.length },
              { k: "Demo", v: demos.filter((d) => d.tag === "Demo").length },
              { k: "Sample system", v: demos.filter((d) => d.tag === "Sample build").length },
            ].map((c) => (
              <span key={c.k} className="rounded-full border hairline px-4 py-2 text-foreground/80">
                {c.k} · {c.v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {all.map((p, i) => (
        <article
          key={p.slug}
          className={`${i % 2 === 1 ? "bg-surface" : "bg-paper"} border-b hairline`}
        >
          <div className="container-editorial py-20 md:py-28">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7 order-2 md:order-1">
                <SectionLabel index={`0${i + 1}`}>{p.tag}</SectionLabel>
                <h2 className="mt-6 text-5xl md:text-7xl leading-[0.95]">{p.name}</h2>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 label-mono text-muted-foreground">
                  <span>{p.industry}</span>
                  <span>·</span>
                  <span>{p.location}</span>
                  <span>·</span>
                  <span>Timeline: {p.timeline}</span>
                </div>

                <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
                  <div>
                    <p className="label-mono text-muted-foreground">The challenge</p>
                    <p className="mt-2 text-foreground/85">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="label-mono text-muted-foreground">What we built</p>
                    <p className="mt-2 text-foreground/85">{p.built}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="label-mono text-muted-foreground">Outcome</p>
                    <p className="mt-2 text-lg text-foreground">{p.outcome}</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm text-background hover:bg-primary transition-colors">
                    Build something like this →
                  </Link>
                  <span className="label-mono inline-flex items-center px-4 py-3 text-muted-foreground border hairline rounded-sm">
                    {p.tag === "Demo" ? "Live demo available on call" : "Sample / portfolio build"}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 order-1 md:order-2">
                <div className="rounded-sm overflow-hidden border hairline bg-paper">
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    <img src={p.image} alt={p.name} loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5 flex items-center justify-between border-t hairline">
                    <span className="label-mono text-muted-foreground">{p.category}</span>
                    <span className="label-mono text-primary">{p.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel index="GY/Next" dark><span className="md:mx-auto">Your project</span></SectionLabel>
          <h2 className="mt-8 text-5xl md:text-7xl">
            New proof every month.<br />
            <span className="italic text-electric">Yours could be next.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-paper px-7 py-4 text-foreground font-medium hover:bg-electric hover:text-night transition-colors"
          >
            Start a brief →
          </Link>
        </div>
      </Section>
    </>
  );
}