import { Link } from "@tanstack/react-router";

export interface WorkCardProps {
  image: string;
  name: string;
  category: string;
  location: string;
  summary: string;
  tag?: "Live" | "Sample build" | "Demo";
  href?: string;
}

export function WorkCard({ image, name, category, location, summary, tag = "Live", href = "/work" }: WorkCardProps) {
  return (
    <Link
      to={href}
      className="group block lift"
    >
      <div className="relative overflow-hidden rounded-sm bg-surface aspect-[4/3]">
        <img
          src={image}
          alt={`${name} — ${category}`}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 label-mono rounded-full bg-paper/95 px-3 py-1 text-foreground">
          {tag}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-[28px] leading-tight">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
        </div>
        <span className="shrink-0 mt-1 text-sm text-foreground/70 group-hover:text-primary transition-colors">
          View →
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3 label-mono text-muted-foreground">
        <span>{category}</span>
        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
        <span>{location}</span>
      </div>
    </Link>
  );
}