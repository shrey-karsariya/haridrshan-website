import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import academicsHeaderBg from "@/assets/academics_header_bg.png";
import {
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  Download,
  Laptop,
  GraduationCap,
  Sparkles,
  FileCheck,
  HeartHandshake,
} from "lucide-react";

const stages = [
  {
    title: "Shree Juniors (Pre-Primary)",
    grade: "Playgroup, Nursery, Jr. KG, Sr. KG",
    desc: "A warm, play-based start focusing on early sensory development, basic language phonics, and motor skills through music, arts, and interactive toys.",
    subjects: ["English Phonics", "Mathematics Intro", "Cognitive Play", "Fine Arts & Rhymes"],
  },
  {
    title: "Primary Section",
    grade: "Grades I – V",
    desc: "Builds a strong foundation in reading, writing, mathematical thinking, and general sciences with special focus on weaker students and affordable fees.",
    subjects: [
      "Mathematics",
      "General Science",
      "English & Gujarati",
      "Social Studies",
      "Computers",
    ],
  },
  {
    title: "Secondary Section",
    grade: "Grades VI – X",
    desc: "Concept depth mastery in mathematics, social sciences, and natural sciences with regular subject-wise Unit Tests and Mega Tests.",
    subjects: [
      "Science & Tech",
      "Mathematics",
      "Social Sciences",
      "English / Gujarati / Hindi",
      "IT Basics",
    ],
  },
  {
    title: "Higher Secondary Section",
    grade: "Grades XI – XII (Arts & Commerce)",
    desc: "Specialized Arts & Commerce streams tailored for higher education, professional readiness, and competitive exam entrance.",
    subjects: [
      "Commerce (Accounts, Economics, Business Administration)",
      "Arts (Humanities, Social Sciences, Languages)",
      "Board Exam Mock Sheets & Seminars",
    ],
  },
];

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | Shree Haridarshan Vidya Sankul (Est. 2000)" },
      {
        name: "description",
        content:
          "Structured academic path from Nursery to 12th Arts & Commerce with Unit Tests, Mega Tests, personalized coaching for weak students, and affordable fees.",
      },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Curriculum"
        title="Structured learning from Nursery to 12th Grade."
        subtitle="Affordable fees, subject experts, personalized coaching for weak students, subject-wise Unit & Mega tests, and NEP 2020 values."
        bgImage={academicsHeaderBg}
      />

      {/* Evaluation & Mentoring Framework Banner */}
      <section className="py-12 bg-cream-deep/50 border-b border-border">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileCheck,
                title: "Unit Tests & Mega Tests",
                desc: "Continuous monitoring through subject-wise unit assessments and comprehensive mega tests.",
              },
              {
                icon: HeartHandshake,
                title: "Support for Weak Students",
                desc: "Subject-expert teachers devote extra personal time to give individualized study guidance.",
              },
              {
                icon: Sparkles,
                title: "Reasonable Fee Structure",
                desc: "Continuously serving in the education sector since 2000 at highly affordable fees.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} variant="fade-up" staggerIndex={idx} staggerStep={100}>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 h-full">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-foreground">{title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stages overview */}
      <section className="section-pad">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Academic Offerings{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                Four comprehensive stages of learning.
              </h2>
              <p className="text-muted-foreground">
                Tailored teaching methodologies from Playgroup to Higher Secondary Arts & Commerce.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {stages.map((s, i) => (
              <ScrollReveal key={s.title} variant="fade-up" staggerIndex={i} staggerStep={120}>
                <div className="card-lift bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-soft)] hover:border-primary/25 relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center font-display font-extrabold text-3xl text-primary/10 pl-6 pb-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-4">
                    <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {s.grade}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-xs font-extrabold text-foreground uppercase tracking-widest mb-3">
                      Key Study Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="text-xs font-bold text-muted-foreground bg-cream-deep/50 border border-border px-3 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* School Routine / Schedule */}
      <section className="section-pad bg-cream-deep/40 border-y border-border">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Daily Schedule{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                Balanced daily routine.
              </h2>
              <p className="text-muted-foreground">
                A structured schedule designed to balance academic lectures with sports coaching and assemblies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="zoom-in">
            <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-[var(--shadow-soft)] overflow-hidden divide-y divide-border">
              {[
                {
                  time: "07:55 AM",
                  activity: "Morning Prayer & Values Assembly",
                  details:
                    "Moral talk, national anthem, values thoughts, and principal's morning address.",
                },
                {
                  time: "08:15 AM - 10:15 AM",
                  activity: "Academic Session I (Core Subjects)",
                  details:
                    "Focus on core subjects in smart classrooms with technology-assisted simple language.",
                },
                {
                  time: "10:15 AM - 10:35 AM",
                  activity: "Nutrition & Recess Break",
                  details:
                    "Hygienic snacks break with encouraging social interaction.",
                },
                {
                  time: "10:35 AM - 01:10 PM",
                  activity: "Academic Session II & Unit Test Sessions",
                  details:
                    "Syllabus lectures, computer lab work, and subject-wise unit test assessments.",
                },
                {
                  time: "01:10 PM - 01:45 PM",
                  activity: "Sports Coaching & Co-curricular Clubs",
                  details: "Training by National-Level Coaches, library reading, or arts activities.",
                },
                {
                  time: "01:45 PM",
                  activity: "Dispersal & Transport Departure",
                  details: "Orderly dispersal into CCTV-monitored bus transport.",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="p-6 grid gap-4 sm:grid-cols-12 items-center hover:bg-cream-deep/20 transition-colors"
                >
                  <div className="sm:col-span-3 flex items-center gap-2 text-primary font-bold text-sm">
                    <Clock className="h-4 w-4 shrink-0 text-accent" />
                    <span>{r.time}</span>
                  </div>
                  <div className="sm:col-span-4 font-display font-extrabold text-foreground text-base">
                    {r.activity}
                  </div>
                  <div className="sm:col-span-5 text-sm text-muted-foreground">{r.details}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Apply Callout */}
      <section className="section-pad">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-[2rem] p-10 md:p-14 text-cream shadow-[var(--shadow-elegant)] relative overflow-hidden max-w-4xl mx-auto">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cream/10 blur-2xl"
              />
              <div className="relative grid gap-8 md:grid-cols-12 items-center">
                <div className="md:col-span-8 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-widest text-accent">
                    Admission Guidance
                  </span>
                  <h3 className="font-display font-extrabold text-3xl">
                    Enquire for 2026-27 Admissions
                  </h3>
                  <p className="text-cream/80 text-sm leading-relaxed max-w-xl">
                    Learn more about our affordable fee structure, subject choice in 11th-12th Arts & Commerce, and Shree Juniors playgroup admissions.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-start md:justify-end">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground hover:bg-white hover:text-primary px-6 py-4 font-extrabold transition-all duration-300 shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" /> Apply Online Now
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
