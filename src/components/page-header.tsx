import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cream/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-page relative text-cream animate-fade-up">
        {eyebrow && <span className="eyebrow text-accent">{eyebrow}</span>}
        <h1 className="mt-4 font-display font-bold text-5xl md:text-6xl leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-cream/85 text-lg leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
