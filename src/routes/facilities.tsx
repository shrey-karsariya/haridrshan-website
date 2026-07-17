import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
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
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Academic", "Co-curricular", "Campus Life"] as const;

const items = [
  {
    icon: Library,
    title: "Library",
    desc: "A quiet, well-stocked hall with 5000+ reference textbooks, storybooks, journals, and silent reading tables.",
    category: "Academic",
  },
  {
    icon: Cpu,
    title: "Computer Lab",
    desc: "Modern desktop terminals with high speed internet, coding platforms, and digital logic workbenches.",
    category: "Academic",
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    desc: "Dedicated Physics, Chemistry, and Biology labs with proper safety apparatus and practical experimental materials.",
    category: "Academic",
  },
  {
    icon: Trophy,
    title: "Sports Net Drill",
    desc: "Structured coaching in cricket net practice, volleyball, kabaddi, and indoor games like table tennis and chess.",
    category: "Co-curricular",
  },
  {
    icon: Bus,
    title: "Transportation",
    desc: "Safe, clean school bus routes spanning across key wards and bypass regions in Rajkot, driven by certified staff.",
    category: "Campus Life",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    desc: "Spacious, well-ventilated, and hygienic learning spaces equipped with digital projectors and audio setups.",
    category: "Campus Life",
  },
  {
    icon: Palette,
    title: "Art & Music Studio",
    desc: "Dedicated spaces for drawing, clay sculpting, classical vocal classes, modern instruments, and folk dance rehearsals.",
    category: "Co-curricular",
  },
  {
    icon: Cctv,
    title: "24/7 CCTV Security",
    desc: "Gated entry, security guards, and high-definition camera monitoring across hallways and playgrounds for safety.",
    category: "Campus Life",
  },
  {
    icon: Landmark,
    title: "Nursery Play Area",
    desc: "Soft-turfed outdoor playground with slide setups and structures, exclusively for pre-primary tiny tots.",
    category: "Campus Life",
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    desc: "Certified teachers who participate in regular pedagogy training and focus on values as much as board results.",
    category: "Academic",
  },
];

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content: "Library, science lab, computer lab, sports, transport, CCTV security and more.",
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
        eyebrow="Campus Tour"
        title="A campus designed for holistic growth."
        subtitle="Modern infrastructure that supports academics, fine arts, team sports, and safety protocols in equal measure."
      />

      <section className="section-pad">
        <div className="container-page">
          {/* Category Filter Tabs */}
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

          {/* Grid of Facilities */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(({ icon: Icon, title, desc, category }) => (
              <div
                key={title}
                className="card-lift bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-soft)] hover:border-primary/20 flex flex-col justify-between group relative overflow-hidden"
              >
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
