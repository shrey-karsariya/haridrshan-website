import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  bgImage,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-ink text-cream">
      {/* Background Image Layer */}
      {bgImage ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-90"
            style={{ animationDuration: "10s" }}
          />
          {/* Multi-stage Glassmorphic Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(20, 20, 26, 0.88) 0%, rgba(35, 34, 42, 0.82) 40%, rgba(193, 44, 50, 0.72) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ink/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0.5px,_transparent_0.5px)] [background-size:28px_28px] opacity-15 z-10" />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{ background: "var(--gradient-primary)" }}
        />
      )}

      {/* Decorative Glowing Orbs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl z-10 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl z-10 pointer-events-none"
      />

      {/* Content Container */}
      <div className="container-page relative z-20 text-cream">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold uppercase tracking-wider text-accent backdrop-blur-md mb-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            {eyebrow}
          </span>
        )}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-cream tracking-tight max-w-4xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-cream/90 text-base md:text-lg leading-relaxed font-medium drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
