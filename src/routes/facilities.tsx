import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import facilitiesHeaderBg from "@/assets/facilities_header_bg.png";
import {
  Bus,
  Building2,
  Cctv,
  Cpu,
  FlaskConical,
  Landmark,
  Library,
  Palette,
  Trophy,
  Users,
  Check,
  Tv,
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Academic", "Co-curricular", "Campus Life"] as const;

const items = [
  {
    icon: Library,
    title: "6000+ Books Library",
    desc: "A rich reference hall housing over 6000+ books, subject textbooks, storybooks, journals, and quiet study tables.",
    category: "Academic",
  },
  {
    icon: Cpu,
    title: "Computer Laboratory",
    desc: "High-speed computer terminals with coding workbenches, educational software, and digital learning tools.",
    category: "Academic",
  },
  {
    icon: Tv,
    title: "Media Room & Smart Tech",
    desc: "Dedicated media room for audio-visual presentations, educational documentaries, and interactive NEP seminars.",
    category: "Academic",
  },
  {
    icon: FlaskConical,
    title: "Practical Science Labs",
    desc: "Dedicated Physics, Chemistry, and Biology workbenches with safety apparatus for hands-on board experiments.",
    category: "Academic",
  },
  {
    icon: Trophy,
    title: "National Sports Arena",
    desc: "Systematic sports training nets and coaching under qualified National-Level Coaches, with Gold Medal achievements.",
    category: "Co-curricular",
  },
  {
    icon: Bus,
    title: "Safe School Transport",
    desc: "Clean, verified school bus routes spanning across key wards and Mavdi bypass regions in Rajkot.",
    category: "Campus Life",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    desc: "Spacious, well-ventilated, and hygienic learning spaces equipped with digital projectors and simple language tech tools.",
    category: "Campus Life",
  },
  {
    icon: Palette,
    title: "Art & Cultural Stage",
    desc: "Dedicated spaces for drawing, annual function rehearsals, music performance, and festival celebrations.",
    category: "Co-curricular",
  },
  {
    icon: Cctv,
    title: "100% CCTV Surveillance",
    desc: "Gated entry, security guards, and high-definition CCTV camera monitoring across all corridors and playgrounds.",
    category: "Campus Life",
  },
  {
    icon: Landmark,
    title: "Shree Juniors Play Park",
    desc: "Soft-turfed outdoor play zone with age-appropriate slides and activity play structures for pre-primary toddlers.",
    category: "Campus Life",
  },
  {
    icon: Users,
    title: "Experienced Subject Experts",
    desc: "Qualified teachers who devote personal attention and extra time for weak students through Unit & Mega Tests.",
    category: "Academic",
  },
];

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content: "6000+ books library, media room, computer lab, science labs, national sports coaching, CCTV security, and transport in Rajkot.",
      },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>("All");

  const filteredItems = items.filter((item) => activeCat === "All" || item.category === activeCat);

  return (
    <>
      <PageHeader
        eyebrow="Campus Infrastructure"
        title="Infrastructure designed for modern, holistic growth."
        subtitle="6000+ books library, media room, national sports coaching nets, digital computer lab, and round-the-clock CCTV safety."
        bgImage={facilitiesHeaderBg}
      />

      <section className="section-pad">
        <div className="container-page">
          {/* Category Filter Tabs */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCat === c
                      ? "bg-primary text-cream shadow-[var(--shadow-glow)]"
                      : "bg-cream-deep text-foreground hover:bg-border"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid of Facilities */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(({ icon: Icon, title, desc, category }, idx) => (
              <ScrollReveal key={title} variant="fade-up" staggerIndex={idx} staggerStep={80}>
                <div className="card-lift bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-soft)] hover:border-primary/20 flex flex-col justify-between group relative overflow-hidden h-full">
                  <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase bg-secondary text-primary px-2 py-0.5 rounded tracking-wide">
                    {category}
                  </span>
                  <div>
                    <div
                      className="h-12 w-12 rounded-2xl grid place-items-center text-primary-foreground mb-6 transition-transform duration-300 group-hover:scale-105"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Icon className="h-6 w-6 text-cream" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-xs text-primary font-bold">
                    <Check className="h-4 w-4" /> Ready for Students
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
