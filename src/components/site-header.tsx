import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, Sparkles } from "lucide-react";
import logo from "@/assets/haridarshan_crest_transparent.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[var(--shadow-elegant)]"
          : "bg-transparent"
      }`}
    >
      {/* Announcement Ribbon */}
      <div
        className={`bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs overflow-hidden transition-all duration-500 border-b border-accent/20 ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="container-page flex items-center justify-between h-9">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="bg-accent text-accent-foreground text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase">
              Admissions Open
            </span>
            <span className="font-semibold text-cream/90 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-accent animate-pulse" /> STD: Playgroup to 12th
              (Arts & Commerce) for 2026-27
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-cream/80 font-medium">
            <span>📞 +91 94278 82733</span>
            <span>📍 Mavdi Bypass, Rajkot</span>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between h-20">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="Shree Haridarshan Vidya Sankul crest"
            width={48}
            height={48}
            className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="hidden sm:block leading-tight">
            <div
              className={`font-display font-bold text-base transition-colors duration-300 ${scrolled ? "text-foreground" : "text-cream"}`}
            >
              Shree Haridarshan
            </div>
            <div
              className={`text-[11px] tracking-[0.24em] uppercase transition-colors duration-300 ${scrolled ? "text-primary" : "text-accent"}`}
            >
              Vidya Sankul · Est. 2000
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  scrolled
                    ? active
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-foreground/5"
                    : active
                      ? "text-accent bg-white/10"
                      : "text-cream hover:text-accent hover:bg-white/5"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-1 rounded-full bg-current" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919427882733"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[var(--shadow-soft)] ${
              scrolled
                ? "bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
                : "bg-accent text-foreground hover:bg-white hover:text-primary hover:-translate-y-0.5"
            }`}
          >
            <Phone className="h-4 w-4" /> +91 94278 82733
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-border text-foreground hover:bg-foreground/5"
                : "border-cream/40 text-cream hover:bg-white/10"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-page py-4 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-base font-medium text-foreground border-b border-border last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919427882733" className="mt-4 btn-hero justify-center">
              <Phone className="h-4 w-4" /> Call the School
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
