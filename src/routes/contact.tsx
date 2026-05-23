import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section, SectionLabel } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GrowthYari Studio" },
      { name: "description", content: "Book a 30-minute call with Akash. First call is free. No pitch. Just strategy." },
      { property: "og:title", content: "Contact — GrowthYari Studio" },
      { property: "og:description", content: "First call is free. No pitch. Just strategy." },
    ],
  }),
  component: ContactPage,
});

const interests = [
  "New website",
  "Voice agent",
  "AI automation",
  "Business development consultation",
  "Not sure yet",
] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New brief — ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:akash@growthyari.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-36 md:pt-48 pb-12 border-b hairline">
        <div className="container-editorial">
          <SectionLabel index="GY/Contact">Start a brief</SectionLabel>
          <h1 className="mt-8 text-6xl md:text-[9rem] leading-[0.9]">
            First call<br />
            is <span className="italic text-primary">free.</span>
          </h1>
          <p className="mt-10 max-w-xl text-xl text-foreground/80">
            No pitch. Just strategy. If we're a fit, we start the 72-hour clock.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left: details + ask box */}
          <div className="md:col-span-5 space-y-12">
            <div>
              <SectionLabel index="01">Direct</SectionLabel>
              <a
                href="mailto:akash@growthyari.com"
                className="mt-4 block text-3xl md:text-4xl font-display hover:text-primary transition-colors break-all"
              >
                akash@growthyari.com
              </a>
              <a
                href="https://www.linkedin.com/in/akash-growthyari/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-lg text-primary hover:underline"
              >
                LinkedIn ↗
              </a>
              <p className="mt-4 text-muted-foreground">
                Akash Chaudhury · Founder<br />
                Delhi, India · Serving UK, USA & Canada
              </p>
            </div>

            <div className="rounded-sm border hairline p-8 bg-surface">
              <p className="label-mono text-muted-foreground">What you can ask us about</p>
              <ul className="mt-5 space-y-3 text-foreground/85">
                {[
                  "Website rebuilds in 72 hours",
                  "Missed calls and voice agents",
                  "Lead capture automations",
                  "Outreach and BD systems",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1 w-3 bg-primary shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7 md:pl-10 md:border-l hairline">
            <SectionLabel index="02">Book a call</SectionLabel>
            {submitted ? (
              <div className="mt-8 rounded-sm border hairline bg-surface p-10 text-center">
                <p className="font-display text-3xl">Thanks. Your email client should be open.</p>
                <p className="mt-3 text-muted-foreground">
                  If not, write to <a className="text-primary underline" href="mailto:akash@growthyari.com">akash@growthyari.com</a> directly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Your name" name="name" required placeholder="Akash" />
                  <Field label="Company" name="company" placeholder="GrowthYari" />
                </div>
                <Field label="Email" name="email" type="email" required placeholder="you@company.com" />

                <div>
                  <label className="label-mono text-muted-foreground" htmlFor="interest">Service interest</label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Select one</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-mono text-muted-foreground" htmlFor="message">What's the situation?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="A few lines on what's broken and what you'd like to ship."
                    className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                  <p className="label-mono text-muted-foreground">
                    Usually back within 24 hours · Mon–Fri
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-sm bg-foreground px-7 py-4 text-background font-medium hover:bg-primary transition-colors"
                  >
                    Send brief →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-mono text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}