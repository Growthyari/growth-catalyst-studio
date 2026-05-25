import { type ReactNode } from "react";
import { useInView, useCountUp } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealStagger({
  children,
  className = "",
}: {
  children: ReactNode[];
  className?: string;
}) {
  const { ref, inView } = useInView();
  const items = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms,
                         transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInView();
  const count = useCountUp(target, inView);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
