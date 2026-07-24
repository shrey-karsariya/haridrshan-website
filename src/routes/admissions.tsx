import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import admissionsHeaderBg from "@/assets/admissions_header_bg.png";
import { useState } from "react";
import { ArrowRight, HelpCircle, ChevronDown, Check } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Inquiry Submission",
    desc: "Fill out our online inquiry form or call +91 94278 82733 to share grade preferences.",
  },
  {
    n: "02",
    title: "Campus Interaction",
    desc: "Visit our campus in Mavdi Bypass, Rajkot, tour the science/IT labs, and meet educators.",
  },
  {
    n: "03",
    title: "Registration Desk",
    desc: "Acquire the admissions application form and submit details for registration.",
  },
  {
    n: "04",
    title: "Document Review",
    desc: "Submit child's birth certificate, original school leaving certificate (if transfer), and marks card.",
  },
  {
    n: "05",
    title: "Final Enrollment",
    desc: "Complete basic admission formalities, pay the term fees, and obtain uniforms & books.",
  },
];

const faqs = [
  {
    q: "What is the minimum age for Nursery admission?",
    a: "For the academic session 2026-27, the child must complete 3 years of age by June 1st, 2026.",
  },
  {
    q: "What documents are required during admission?",
    a: "You need to submit: 1. Birth certificate photocopy. 2. Original School Leaving Certificate (SLC) from the previous school (not needed for Nursery/LKG). 3. Previous grade marks card. 4. Four passport size photographs of the child.",
  },
  {
    q: "Is school transport available for secondary grades?",
    a: "Yes, safe school bus routes are available across most major sectors and bypass loops in Rajkot. All buses have trained helpers.",
  },
  {
    q: "Which syllabus board is followed?",
    a: "We follow the Gujarat Secondary and Higher Secondary Education Board (GSEB) curriculum in English and Gujarati mediums, focused on conceptual mastery.",
  },
  {
    q: "What streams are offered in Higher Secondary?",
    a: "We offer Science stream (Group A for Mathematics, Group B for Biology) and Commerce stream (Accounts, Economics, Business Administration).",
  },
];

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Admissions Open — a simple 5-step process to join Shree Haridarshan Vidya Sankul, Rajkot.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions Open 2026-27"
        title="A simple, transparent admissions process."
        subtitle="We guide you step-by-step to welcome your child into our academic family with minimal hassle."
        bgImage={admissionsHeaderBg}
      />

      <section className="section-pad">
        <div className="container-page space-y-24">
          {/* Eligibility Calculator */}
          <ScrollReveal variant="fade-up">
            <div>
              <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
                <span className="eyebrow justify-center">
                  <span className="h-px w-8 bg-primary" /> Grade Check{" "}
                  <span className="h-px w-8 bg-primary" />
                </span>
                <h2 className="font-display text-4xl font-extrabold text-foreground">
                  Calculate Child's Grade Eligibility
                </h2>
              </div>
              <EligibilityCalculator />
            </div>
          </ScrollReveal>

          {/* Stepper Steps */}
          <div>
            <ScrollReveal variant="fade-up">
              <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                <span className="eyebrow justify-center">
                  <span className="h-px w-8 bg-primary" /> Steps to Apply{" "}
                  <span className="h-px w-8 bg-primary" />
                </span>
                <h2 className="font-display text-4xl font-extrabold text-foreground">
                  Five simple milestones to enroll.
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative border-l-2 border-accent/40 max-w-3xl mx-auto pl-8 space-y-12">
              {steps.map((s, idx) => (
                <ScrollReveal key={idx} variant="fade-up" staggerIndex={idx} staggerStep={100}>
                  <div className="relative group">
                    {/* Dot */}
                    <span className="absolute -left-12 top-1.5 h-8 w-8 rounded-full bg-primary border-4 border-background flex items-center justify-center font-display font-extrabold text-cream text-xs shadow-[var(--shadow-soft)]">
                      {s.n}
                    </span>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-soft)] group-hover:border-primary/20 transition-all duration-300">
                      <h3 className="font-display font-extrabold text-lg text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          <ScrollReveal variant="zoom-in">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <span className="eyebrow justify-center">
                  <span className="h-px w-8 bg-primary" /> FAQ Section{" "}
                  <span className="h-px w-8 bg-primary" />
                </span>
                <h2 className="font-display text-4xl font-extrabold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>

              <FaqAccordion />
            </div>
          </ScrollReveal>

          {/* CTA Link */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <Link to="/contact" className="btn-hero group">
                Start Admissions Inquiry{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function EligibilityCalculator() {
  const [birthYear, setBirthYear] = useState<number>(2020);

  const getEligibleGrade = (year: number) => {
    const age = 2026 - year;
    if (age < 3) return "Too young for Nursery (Minimum age 3)";
    if (age === 3) return "Nursery / Playgroup";
    if (age === 4) return "Junior KG (Jr. KG)";
    if (age === 5) return "Senior KG (Sr. KG)";
    if (age === 6) return "Grade 1 (Primary)";
    if (age === 7) return "Grade 2 (Primary)";
    if (age === 8) return "Grade 3 (Primary)";
    if (age === 9) return "Grade 4 (Primary)";
    if (age === 10) return "Grade 5 (Primary)";
    if (age === 11) return "Grade 6 (Secondary)";
    if (age === 12) return "Grade 7 (Secondary)";
    if (age === 13) return "Grade 8 (Secondary)";
    if (age === 14) return "Grade 9 (Secondary)";
    if (age === 15) return "Grade 10 (SSC Board)";
    if (age === 16) return "Grade 11 (Arts & Commerce)";
    if (age === 17) return "Grade 12 (HSC Board)";
    return "Eligible for Higher Education Counseling";
  };

  return (
    <div className="bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-soft)] max-w-xl mx-auto text-center space-y-6">
      <label htmlFor="birthYearSelect" className="block text-sm font-bold text-foreground">
        Select Child's Birth Year:
      </label>
      <select
        id="birthYearSelect"
        value={birthYear}
        onChange={(e) => setBirthYear(Number(e.target.value))}
        className="w-full max-w-xs px-4 py-3 rounded-xl border border-border bg-background text-foreground font-bold focus:outline-none focus:ring-2 focus:ring-primary text-center"
      >
        {Array.from({ length: 18 }, (_, i) => 2024 - i).map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <div className="p-6 rounded-2xl bg-cream-deep/60 border border-border">
        <div className="text-xs uppercase font-extrabold text-accent tracking-wider">
          Recommended Grade for 2026-27:
        </div>
        <div className="text-2xl font-display font-extrabold text-primary mt-1">
          {getEligibleGrade(birthYear)}
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className="bg-card rounded-2xl border border-border overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full p-6 text-left font-display font-extrabold text-foreground flex items-center justify-between gap-4 focus:outline-none"
            >
              <span>{f.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
