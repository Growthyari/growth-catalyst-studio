import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Section, SectionLabel } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GrowthYari Studio" },
      { name: "description", content: "Book a free 30-minute call with Akash. Cover UK and US hours. We reply within 4 hours." },
      { property: "og:title", content: "Contact — GrowthYari Studio" },
      { property: "og:description", content: "Book a free 30-minute call. UK and US hours. Reply within 4 hours." },
    ],
  }),
  component: ContactPage,
});

const FORMSPREE_URL = "https://formspree.io/f/mzdwvjvv";
const CALENDLY_URL = "https://calendly.com/growthyari/intro-call";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Email akash@growthyari.com directly.");
    } finally {
      setSubmitting(false);
    }
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

      {/* CALENDLY */}
      <Section>
        <div className="max-w-3xl">
          <SectionLabel index="01">Calendar</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-6xl leading-[1]">
            Book a free <span className="serif-italic text-primary">30-min call</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-xl">
            Pick a slot that works for you. We cover UK and US hours.
          </p>
        </div>
        <div
          className="calendly-inline-widget mt-10 rounded-sm border hairline overflow-hidden bg-paper"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "720px" }}
        />
        <p className="mt-8 text-foreground/75">
          Prefer to message instead? Fill in the form below and we'll arrange a time that suits you.
        </p>
      </Section>

      {/* CONTACT DETAILS + FORM */}
      <Section className="border-t hairline">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-12">
            <div>
              <SectionLabel index="02">Direct</SectionLabel>
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
              <a
                href="https://wa.me/919205122965"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-lg text-primary hover:underline"
              >
                WhatsApp ↗
              </a>
              <p className="mt-6 text-muted-foreground">
                Akash Chaudhury · Founder<br />
                Delhi, India · Serving UK, USA & Canada<br />
                Replies within 4 hours.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10 md:border-l hairline">
            <SectionLabel index="03">Send a message</SectionLabel>
            {submitted ? (
              <div className="mt-8 rounded-sm border hairline bg-surface p-10">
                <h3 className="font-display text-4xl">Message received.</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Akash reads every enquiry personally. You'll hear back within 4 hours — usually much sooner. Check your inbox including spam.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <Field label="Full name" name="name" required placeholder="Akash Chaudhury" />
                <Field label="Email address" name="email" type="email" required placeholder="you@company.com" />
                <Field label="Company name or website" name="company" placeholder="growthyari.com" />

                <Select
                  label="What do you need most right now?"
                  name="need"
                  required
                  options={[
                    "A new website",
                    "AI voice agent for missed calls",
                    "More leads and outreach help",
                    "All of the above",
                    "Not sure yet — need advice.",
                  ]}
                />

                <Select
                  label="Budget range"
                  name="budget"
                  options={[
                    "Under $1000",
                    "$1000 – $2,000",
                    "$2000 – $3,000",
                    "$3,000+",
                  ]}
                />

                <Select
                  label="How did you find GrowthYari Studio?"
                  name="source"
                  options={[
                    "LinkedIn",
                    "Google search",
                    "Referral from someone",
                    "Cold email or DM",
                    "Other",
                  ]}
                />

                <div>
                  <label className="label-mono text-muted-foreground" htmlFor="message">
                    Tell us about your business and main challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    placeholder="What's the biggest thing holding your growth back right now? The more detail the better — we read every message."
                    className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                {error ? <p className="text-sm text-destructive">{error}</p> : null}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                  <p className="label-mono text-muted-foreground">
                    Reply within 4 hours · UK & US hours
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 rounded-sm bg-foreground px-7 py-4 text-background font-medium hover:bg-primary transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send my message →"}
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
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label-mono text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

function Select({
  label, name, required, options,
}: { label: string; name: string; required?: boolean; options: readonly string[] }) {
  return (
    <div>
      <label className="label-mono text-muted-foreground" htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full bg-transparent border-0 border-b hairline pb-3 pt-2 text-lg focus:outline-none focus:border-foreground transition-colors"
      >
        <option value="" disabled>Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}