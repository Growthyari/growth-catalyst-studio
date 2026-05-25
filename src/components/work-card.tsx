export interface WorkCardProps {
  image: string;
  name: string;
  category: string;
  location: string;
  summary: string;
  tag?: "Live" | "Sample build" | "Demo";
  url?: string;
}

export function WorkCard({ image, name, category, location, summary, tag, url }: WorkCardProps) {
  const external = Boolean(url);
  const tagGold = !tag || tag === "Sample build" || tag === "Demo";
  return (
    <a
      href={url ?? "/work"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block lift bg-white rounded-lg overflow-hidden border-l-4 border-transparent hover:border-l-[color:var(--gold)] transition-all"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
    >
      <div className="relative overflow-hidden bg-surface aspect-[4/3]">
        <img
          src={image}
          alt={`${name} — ${category}`}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {tag ? (
          <span className={`absolute left-4 top-4 label-mono rounded-full px-3 py-1 ${tag === "Live" ? "bg-[color:var(--primary)]/10 text-primary" : "bg-light-gold text-gold"}`}>
            {tag}
          </span>
        ) : null}
      </div>
      <div className="p-6 md:p-7 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-[28px] md:text-[32px] leading-[1.05]">{name}</h3>
          <p className="mt-3 text-[15px] text-foreground/70 measure-tight leading-relaxed">{summary}</p>
          <div className="mt-4 flex items-center gap-3 label-mono text-muted-foreground">
            <span>{category}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{location}</span>
          </div>
        </div>
        <span className="shrink-0 mt-2 text-sm text-foreground/70 group-hover:text-gold transition-colors">
          {external ? "Visit ↗" : "View →"}
        </span>
      </div>
    </a>
  );
}