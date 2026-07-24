import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import galleryHeaderBg from "@/assets/gallery_header_bg.png";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import lifeScience from "@/assets/life-science.png";
import lifeDance from "@/assets/life-dance.png";
import lifeSports from "@/assets/life-sports.png";
import lifeArt from "@/assets/life-art.png";
import lifeYoga from "@/assets/life-yoga.png";
import facilityLibrary from "@/assets/facility-library.jpg";
import facilityComputer from "@/assets/facility-computer.jpg";
import facilityScience from "@/assets/facility_science_lab.png";
import facilityBus from "@/assets/facility_bus.png";
import aboutStudents from "@/assets/about-students.jpg";
import aboutRealistic from "@/assets/about_students_realistic.png";
import heroCampus from "@/assets/hero-campus.jpg";
import secondaryLabNew from "@/assets/secondary_section_lab.png";
import higherSecondaryClassroomNew from "@/assets/higher_secondary_classroom.png";
import hscResult from "@/assets/hsc result.png";
import sscResult from "@/assets/ssc result.png";

const categories = ["All", "Board Results", "Campus", "Facilities", "Sports", "Activities & Events", "Field Visits"] as const;

const tiles = [
  { src: hscResult, label: "GSEB HSC 12th Board Result Merit List", category: "Board Results", guj: "એચ.એસ.સી. ૧૨મું બોર્ડ પરિણામ" },
  { src: sscResult, label: "GSEB SSC 10th Board Result Toppers", category: "Board Results", guj: "એસ.એસ.સી. ૧૦મું બોર્ડ પરિણામ" },
  { src: heroCampus, label: "Main School Campus Hub", category: "Campus", guj: "હરિદર્શન વિદ્યા સંકુલ" },
  { src: secondaryLabNew, label: "Secondary Wing Science Experiments & Lab", category: "Facilities", guj: "માધ્યમિક સાયન્સ લેબ (Grades 6-10)" },
  { src: higherSecondaryClassroomNew, label: "Higher Secondary Arts & Commerce Lecture Hall", category: "Campus", guj: "ઉચ્ચતર માધ્યમિક ક્લાસરૂમ (Grades 11-12)" },
  { src: lifeDance, label: "Annual Cultural Function Dance", category: "Activities & Events", guj: "વાર્ષિક ઉત્સવ" },
  { src: lifeSports, label: "Annual Sports Day & Athletic Matches", category: "Sports", guj: "સ્પોર્ટ્સ ડે" },
  { src: facilityScience, label: "Modern Practical Science Laboratory", category: "Facilities", guj: "સાયન્સ લેબોરેટરી" },
  { src: lifeScience, label: "Experiential Science Fair & Projects", category: "Activities & Events", guj: "સાયન્સ પ્રોજેક્ટ" },
  { src: lifeYoga, label: "Khel Mahakumbh Yogasana Excellence", category: "Sports", guj: "ખેલ મહાકુંભમાં શ્રેષ્ઠ પ્રદર્શન" },
  { src: lifeArt, label: "No Bag Day Creative Craft & Arts", category: "Activities & Events", guj: "નો બેગ ડે" },
  { src: facilityLibrary, label: "6000+ Books Reference Library", category: "Facilities", guj: "લાઇબ્રેરી" },
  { src: facilityComputer, label: "Digital Learning & IT Computer Room", category: "Facilities", guj: "કોમ્પ્યુટર લેબ" },
  { src: facilityBus, label: "Safe Transport School Bus Fleet", category: "Facilities", guj: "સ્કૂલ બસ સુવિધા" },
  { src: aboutRealistic, label: "Smart Classroom Digital Lectures", category: "Campus", guj: "સ્માર્ટ ડિજિટલ ક્લાસરૂમ" },
  { src: lifeScience, label: "Science Museum Visit & Exploration", category: "Field Visits", guj: "સાયન્સ મ્યુઝિયમ વિઝિટ" },
  { src: aboutStudents, label: "Bank Visit & Financial Literacy Tour", category: "Field Visits", guj: "બેંક વિઝિટ" },
  { src: heroCampus, label: "Factory & Industrial Exposure Visit", category: "Field Visits", guj: "ફેક્ટરી વિઝિટ" },
  { src: lifeArt, label: "Farm & Agricultural Nature Visit", category: "Field Visits", guj: "ફાર્મ વિઝિટ" },
  { src: lifeYoga, label: "Nursery & Botanical Nature Tour", category: "Field Visits", guj: "નર્સરી વિઝિટ" },
  { src: lifeDance, label: "Festival Celebrations & Cultural Unity", category: "Activities & Events", guj: "તહેવારોની ઉજવણી" },
  { src: aboutStudents, label: "Bal Maheman Student Hospitality Scheme", category: "Activities & Events", guj: "બાલ મહેમાન યોજના" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Photo gallery of campus life, field visits, sports day, science fair, bank visits, factory trips, and cultural events.",
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
        eyebrow="Campus Life & Experiential Activities"
        title="Moments from our vibrant campus & field trips."
        subtitle="Snapshots of classroom learning, bank visits, science museum tours, sports day, No Bag Day, and annual cultural celebrations."
        bgImage={galleryHeaderBg}
      />

      <section className="section-pad">
        <div className="container-page">
          {/* Category Filter Tabs */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCat(cat);
                    setLightboxIdx(null);
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
          </ScrollReveal>

          {/* Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTiles.map((t, idx) => (
              <ScrollReveal key={idx} variant="fade-up" staggerIndex={idx} staggerStep={70}>
                <button
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
                    <div className="font-display font-extrabold text-lg mt-1">{t.label}</div>
                    <div className="font-gujarati text-xs text-accent/90">{t.guj}</div>
                  </div>
                </button>
              </ScrollReveal>
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
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredTiles[lightboxIdx].src}
              alt={filteredTiles[lightboxIdx].label}
              className="max-w-full max-h-[75vh] object-contain rounded-3xl border border-cream/10 shadow-[var(--shadow-elegant)] bg-ink"
            />
            <div className="mt-4 bg-ink/80 backdrop-blur-md px-6 py-3 rounded-2xl text-cream text-sm font-bold border border-cream/10 text-center shadow-lg">
              {filteredTiles[lightboxIdx].label} ({filteredTiles[lightboxIdx].guj}) ·{" "}
              <span className="text-accent">{filteredTiles[lightboxIdx].category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
