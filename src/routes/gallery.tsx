import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import a from "@/assets/life-science.jpg";
import b from "@/assets/life-dance.jpg";
import c from "@/assets/life-sports.jpg";
import d from "@/assets/life-art.jpg";
import e from "@/assets/life-yoga.jpg";
import f from "@/assets/facility-library.jpg";
import g from "@/assets/facility-computer.jpg";
import h from "@/assets/about-students.jpg";
import i from "@/assets/hero-campus.jpg";

const categories = ["All", "Campus", "Events", "Sports", "Activities"] as const;

const tiles = [
  { src: i, label: "Main School Campus Hub", category: "Campus" },
  { src: b, label: "Annual Cultural Function Dance", category: "Events" },
  { src: c, label: "Primary Inter-School Cricket Net Practice", category: "Sports" },
  { src: h, label: "Modern Smart Classrooms Lecture", category: "Campus" },
  { src: a, label: "Experiential Science Fair Project", category: "Activities" },
  { src: e, label: "Weekly Morning Yoga & Prayer Assembly", category: "Activities" },
  { src: d, label: "Art Studio Craft & Drawing Class", category: "Activities" },
  { src: f, label: "Reference Library Study Hall", category: "Campus" },
  { src: g, label: "Digital Learning & IT Computer Room", category: "Campus" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Moments from campus life — classrooms, sports, culture, science and celebrations.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredTiles = tiles.filter((tile) => activeCat === "All" || tile.category === activeCat);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filteredTiles.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filteredTiles.length) % filteredTiles.length);
  };

  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="Moments from our vibrant campus."
        subtitle="A snapshot glance into everyday study periods, annual sports matches, cultural activities, and student achievements."
      />

      <section className="section-pad animate-fade-up">
        <div className="container-page">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCat(cat);
                  setLightboxIdx(null); // Reset lightbox on filter change
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCat === cat
                    ? "bg-primary text-cream shadow-[var(--shadow-glow)]"
                    : "bg-cream-deep text-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTiles.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIdx(idx)}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] border border-border shadow-[var(--shadow-soft)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-left w-full"
              >
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 right-5 text-cream translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold bg-accent/20 px-2 py-0.5 rounded">
                    {t.category}
                  </span>
                  <div className="font-display font-extrabold text-lg mt-2">{t.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 text-cream hover:text-accent p-2 rounded-full border border-cream/20 hover:bg-cream/10 z-10 transition-colors"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-cream hover:text-accent p-3 rounded-full border border-cream/20 hover:bg-cream/10 z-10 transition-all duration-300 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-cream hover:text-accent p-3 rounded-full border border-cream/20 hover:bg-cream/10 z-10 transition-all duration-300 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main Image View */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
          >
            <img
              src={filteredTiles[lightboxIdx].src}
              alt={filteredTiles[lightboxIdx].label}
              className="max-w-full max-h-[75vh] object-contain rounded-3xl border border-cream/10 shadow-[var(--shadow-elegant)] bg-ink"
            />
            <div className="mt-4 bg-ink/80 backdrop-blur-md px-6 py-3 rounded-2xl text-cream text-sm font-bold border border-cream/10 text-center shadow-lg">
              {filteredTiles[lightboxIdx].label} ·{" "}
              <span className="text-accent">{filteredTiles[lightboxIdx].category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
