import goedmo from "@/assets/work-goedmo.jpg";
import voice from "@/assets/voice-agent-demo.jpg";
import auto from "@/assets/automation-flow.jpg";
import bd from "@/assets/bd-pipeline.jpg";

const smile = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80";
const peak = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";
const carry = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80";
const abuja = "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80";

export const projects = [
  {
    slug: "smile-district",
    name: "Smile District Dental",
    image: smile,
    category: "AI Website",
    industry: "Dental clinic",
    location: "Austin, TX · USA",
    summary: "A clean, conversion-first dental site with online booking and AI follow-up.",
    tag: undefined,
    url: "https://smile-district-care.lovable.app",
    challenge:
      "An outdated clinic site that buried booking three clicks deep and lost a third of mobile visitors before the first scroll.",
    built:
      "Editorial-style website rebuilt in 72 hours with an AI scheduling assistant, treatment pages mapped to local search intent, and an automated reminder flow that nudges no-shows back into the calendar.",
    timeline: "72 hours",
    outcome:
      "Sample build demonstrating booking-led architecture, content built for local SEO, and a measurable lift in qualified booking forms.",
  },
  {
    slug: "peak-home",
    name: "Peak Home Services",
    image: peak,
    category: "AI Website + Voice",
    industry: "Home services",
    location: "Manchester · UK",
    summary: "A trades-friendly website with 24/7 voice agent answering missed calls.",
    tag: undefined,
    url: "https://peakhomeservices.lovable.app",
    challenge:
      "A four-truck plumbing & HVAC operator missing 40% of after-hours calls. Every missed call was a booked job going to a competitor.",
    built:
      "Service-led site with location-based landing pages, an AI voice receptionist that answers in under two rings, qualifies the job, and books straight into the calendar.",
    timeline: "72 hours",
    outcome:
      "Sample build showing how a small operator can run like a national brand — every call captured, qualified, and booked without growing the back office.",
  },
  {
    slug: "carrymore",
    name: "Carrymore Cranes",
    image: carry,
    category: "Industrial Website",
    industry: "Heavy industrial",
    location: "Pan-India",
    summary: "A serious, spec-led site for a heavy lift operator chasing enterprise RFPs.",
    tag: undefined,
    url: "https://carrymore-cranes.lovable.app",
    challenge:
      "Procurement teams couldn't find load charts, fleet specs, or insured-lift documentation. Quote requests came in vague and unqualified.",
    built:
      "A dense, spec-first website with downloadable fleet sheets, an RFP intake that pre-qualifies the lift, and an internal automation that routes leads to the right project manager within minutes.",
    timeline: "72 hours",
    outcome:
      "Sample build engineered for B2B credibility — heavyweight typography, real specs, and an inbox of qualified, pre-scoped projects.",
  },
  {
    slug: "abuja-city-walk",
    name: "Abuja City Walk",
    image: abuja,
    category: "Lifestyle Website",
    industry: "Retail / lifestyle destination",
    location: "Abuja, Nigeria",
    summary: "An editorial site for a flagship retail and lifestyle district.",
    tag: "Live" as const,
    url: "https://abujacitywalk.com",
    challenge:
      "A destination brand with no central digital identity — visitors, retailers, and event partners all landed in different places.",
    built:
      "An editorial, image-led website unifying the brand: tenants, events, visitor info and partnerships, with a content system the in-house team can run.",
    timeline: "Shipped",
    outcome:
      "Live site presenting the destination at the level of its physical experience — confident, calm, and credible.",
  },
  {
    slug: "goedmo",
    name: "Goedmo",
    image: goedmo,
    category: "Brand Website",
    industry: "Digital services",
    location: "Live",
    summary: "A confident, dark-mode brand site for a modern digital services studio.",
    tag: "Live" as const,
    url: "https://goedmo.com",
    challenge:
      "A capable team without a website that matched the work — losing inbound to competitors that simply looked sharper.",
    built:
      "A dark, editorial brand site with clear service architecture, case-study scaffolding and a CTA path engineered for qualified inbound.",
    timeline: "Shipped",
    outcome:
      "Live brand site that finally matches the quality of the team behind it.",
  },
] as const;

export const demos = [
  {
    slug: "voice-agent",
    name: "Voice Agent Demo",
    image: voice,
    category: "AI Voice",
    industry: "Receptionist / lead qualification",
    location: "Internal demo",
    summary: "A live AI receptionist that answers, qualifies and books in under 90 seconds.",
    tag: "Demo" as const,
    challenge:
      "Show how a founder-led service business can stop losing calls without hiring a receptionist.",
    built:
      "Always-on voice agent with branded greeting, scripted qualification, calendar booking, and a clean handover summary by SMS and email.",
    timeline: "Live demo",
    outcome:
      "Internal proof of concept used on sales calls to show, not tell — prospects hear it answer in real time.",
  },
  {
    slug: "automation-flow",
    name: "Automation Workflow Sample",
    image: auto,
    category: "AI Automation",
    industry: "Lead capture → follow-up",
    location: "Internal demo",
    summary: "Lead capture, qualification scoring and 14-day follow-up — fully automated.",
    tag: "Sample build" as const,
    challenge:
      "Show what a founder's pipeline looks like when nothing falls through the cracks.",
    built:
      "Form → CRM → AI qualification → routed to founder or junior → multi-touch follow-up sequence that adapts to replies.",
    timeline: "Sample build",
    outcome:
      "Sample system used in BD engagements as a starting blueprint for client builds.",
  },
  {
    slug: "bd-system",
    name: "BD System Sample",
    image: bd,
    category: "Business Development",
    industry: "Outreach + pipeline",
    location: "Internal demo",
    summary: "ICP definition, outbound system and a pipeline board that actually moves.",
    tag: "Sample build" as const,
    challenge:
      "Most founders run outbound on instinct. Show what a real system looks like.",
    built:
      "ICP framework, message tested across three angles, sending infrastructure, reply-handling SOP, and a kanban pipeline with clear stage exits.",
    timeline: "Sample build",
    outcome:
      "Used as the BD consulting reference — clients leave with a working system, not a deck.",
  },
] as const;

export type Project = (typeof projects)[number] | (typeof demos)[number];