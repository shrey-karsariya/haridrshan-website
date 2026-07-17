import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import logoCrest from "../assets/haridarshan_crest_transparent.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shree Haridarshan Vidya Sankul | Premium School in Rajkot" },
      {
        name: "description",
        content:
          "Since 2000, Shree Haridarshan Vidya Sankul in Rajkot nurtures young minds through academic excellence, Indian values, modern teaching and holistic development. Admissions open.",
      },
      { name: "author", content: "Shree Haridarshan Vidya Sankul" },
      { property: "og:site_name", content: "Shree Haridarshan Vidya Sankul" },
      {
        property: "og:title",
        content: "Shree Haridarshan Vidya Sankul | Premium School in Rajkot",
      },
      {
        property: "og:description",
        content:
          "Where Knowledge Meets Values. A trusted higher secondary school in Rajkot since 2000.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Noto+Sans+Gujarati:wght@500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: "Shree Haridarshan Vidya Sankul",
          alternateName: "શ્રી હરિદર્શન વિદ્યા સંકુલ",
          foundingDate: "2000",
          telephone: "+91-94278-82733",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mavdi Bypass Road, Madhav Park, Mavdi Village",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            postalCode: "360004",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    let activeObservers: IntersectionObserver[] = [];

    const handleScrollReveal = () => {
      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
      );

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        },
      );

      elements.forEach((el) => {
        // Only observe if it hasn't been animated yet
        if (!el.classList.contains("reveal-active")) {
          observer.observe(el);
        }
      });

      activeObservers.push(observer);
    };

    // Run initial reveal setup
    handleScrollReveal();

    // Re-run setup on DOM changes to catch client-side routing content insertions
    const domObserver = new MutationObserver(() => {
      handleScrollReveal();
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      activeObservers.forEach((obs) => obs.disconnect());
      domObserver.disconnect();
    };
  }, []);

  const [loading, setLoading] = useState(true);
  const [fadeExit, setFadeExit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeExit(true);
    }, 4200);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(popupTimer);
  }, [loading]);

  return (
    <QueryClientProvider client={queryClient}>
      {showPopup && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setShowPopup(false)}
          />

          {/* Popup Card */}
          <div className="relative bg-white text-foreground rounded-[2rem] max-w-md w-full p-8 border border-border shadow-[var(--shadow-elegant)] animate-fade-up z-10 flex flex-col items-center text-center">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Crest Logo */}
            <div className="h-16 w-16 bg-primary/5 rounded-2xl flex items-center justify-center p-3 border border-primary/10">
              <img src={logoCrest} alt="SHVS Crest" className="h-full w-full object-contain" />
            </div>

            {/* Title */}
            <h3 className="mt-5 font-display font-extrabold text-2xl text-primary leading-tight">
              Admissions Open 2026-27
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Secure your child's educational future today at Shree Haridarshan Vidya Sankul.
            </p>

            {/* Highlights */}
            <ul className="mt-5 w-full text-left space-y-2.5 bg-muted/40 p-4 rounded-2xl border border-border">
              {[
                { title: "Nursery to Grade 12", desc: "GSEB Eng & Guj Medium" },
                { title: "Practical Curriculum", desc: "Digital labs & projects" },
                { title: "Gated Safe Campus", desc: "100% CCTV & transport" },
              ].map((h, i) => (
                <li key={i} className="flex gap-2.5 text-xs">
                  <span className="text-primary font-bold font-sans">✓</span>
                  <div>
                    <span className="font-bold text-foreground">{h.title}</span>
                    <span className="text-muted-foreground font-semibold"> — {h.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-6 w-full flex flex-col gap-2">
              <Link
                to="/admissions"
                onClick={() => setShowPopup(false)}
                className="w-full inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/95 px-6 py-3 font-bold transition-all duration-300 shadow-[var(--shadow-soft)]"
              >
                Apply Online Now
              </Link>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full text-xs text-muted-foreground font-bold hover:text-foreground py-2 transition-colors duration-200"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div
          id="shvs-preloader"
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-foreground transition-all duration-700 ${
            fadeExit ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Logo Container with Glow & Float */}
          <div className="relative flex flex-col items-center">
            {/* Soft pulsing gold glow backdrop */}
            <div
              className="absolute -inset-6 rounded-full bg-accent/20 blur-2xl animate-pulse"
              style={{ animationDuration: "2.5s" }}
            />

            {/* Animating Logo */}
            <img
              src={logoCrest}
              alt="Shree Haridarshan Vidya Sankul Crest"
              className="h-28 w-28 object-contain relative z-10 animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          {/* Animated Brand Typography */}
          <div
            className="mt-8 text-center space-y-2 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <h1 className="font-display font-black text-xl tracking-widest text-primary">
              SHREE HARIDARSHAN
            </h1>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-semibold">
              Vidya Sankul · Rajkot
            </p>
          </div>

          {/* Minimalist Progress Line */}
          <div className="absolute bottom-16 w-48 h-0.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all ease-out"
              style={{
                width: fadeExit ? "100%" : "0%",
                transitionDuration: "4200ms",
              }}
            />
          </div>
        </div>
      )}

      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
