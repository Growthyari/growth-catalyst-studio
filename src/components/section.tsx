import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-night text-night-foreground" : ""} ${className}`}
    >
      <div className="container-editorial py-20 md:py-32">{children}</div>
    </section>
  );
}

export function SectionLabel({
  index,
  children,
  dark = false,
}: {
  index?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 label-mono ${dark ? "text-night-foreground/60" : "text-muted-foreground"}`}>
      {index && <span>{index}</span>}
      <span className={`inline-block h-px w-8 ${dark ? "bg-white/30" : "bg-foreground/30"}`} />
      <span>{children}</span>
    </div>
  );
}