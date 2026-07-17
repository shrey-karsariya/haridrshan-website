import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import {
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  Download,
  Laptop,
  GraduationCap,
} from "lucide-react";

const stages = [
  {
    title: "Pre-Primary",
    grade: "Nursery – Sr. KG",
    desc: "A warm, play-based start focusing on early sensory development, basic language phonics, and socialization through music, arts, and games.",
    subjects: ["English Phonics", "Mathematics Intro", "Cognitive Play", "Fine Arts & Rhymes"],
  },
  {
    title: "Primary",
    grade: "Grades I – V",
    desc: "Builds a strong foundation in reading, writing, mathematical thinking, and general sciences, combined with basic computer awareness.",
    subjects: [
      "Mathematics",
      "General Science",
      "English & Gujarati",
      "Social Studies",
      "Computers",
    ],
  },
  {
    title: "Secondary",
    grade: "Grades VI – X",
    desc: "Rigorous concept mastery in mathematics, social studies, and natural sciences, preparing students for board examination structures.",
    subjects: [
      "Science & Tech",
      "Mathematics",
      "Social Sciences",
      "English / Gujarati / Hindi",
      "IT Basics",
    ],
  },
  {
    title: "Higher Secondary",
    grade: "Grades XI – XII",
    desc: "Specialized Science and Commerce streams tailored for college entrance examinations and professional career readiness.",
    subjects: [
      "Science (Physics, Chem, Math/Bio)",
      "Commerce (Accounts, Economics, BA)",
      "English & Gujarati Board Prep",
    ],
  },
];

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "From Pre-Primary to Higher Secondary — a structured, values-led academic journey in Rajkot.",
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
        eyebrow="Academic Program"
        title="A learning journey from first steps to graduation."
        subtitle="Experienced educators, practical lab models, regular evaluations, and smart classes combined under a values-led pedagogy."
      />

      {/* Stages overview */}
      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Curricular Stages{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              Four major milestones of growth.
            </h2>
            <p className="text-muted-foreground">
              We custom-tailor teaching methodologies for each age bracket, from play activities to
              high-board preparation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {stages.map((s, i) => (
              <div
                key={s.title}
                className="card-lift bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-soft)] hover:border-primary/25 relative overflow-hidden flex flex-col justify-between"
              >
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
                    Key Study Areas:
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
            ))}
          </div>
        </div>
      </section>

      {/* School Routine / Schedule */}
      <section className="section-pad bg-cream-deep/40 border-y border-border">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Daily Schedule{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              A typical school day routine.
            </h2>
            <p className="text-muted-foreground">
              A structured schedule designed to balance academic lectures with physical sports and
              assemblies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-[var(--shadow-soft)] overflow-hidden divide-y divide-border">
            {[
              {
                time: "07:55 AM",
                activity: "Morning Prayer & Assembly",
                details:
                  "Moral talk, national anthem, values thoughts, and principal's news ticker.",
              },
              {
                time: "08:15 AM - 10:15 AM",
                activity: "Academic Session I (3 Periods)",
                details:
                  "Focus on primary core subjects (Math, Science, English) in smart classrooms.",
              },
              {
                time: "10:15 AM - 10:35 AM",
                activity: "Recess / Nutrition Break",
                details:
                  "Hygienic snacks break. Students are encouraged to share lunch to learn empathy.",
              },
              {
                time: "10:35 AM - 01:10 PM",
                activity: "Academic Session II (4 Periods)",
                details:
                  "Syllabus lectures, computer laboratory experiments, and languages practice.",
              },
              {
                time: "01:10 PM - 01:45 PM",
                activity: "Co-curricular / Sports Net Drill",
                details: "Art sketching, library sessions, robotics work, or physical coaching.",
              },
              {
                time: "01:45 PM",
                activity: "National Anthem & Dispersal",
                details: "Safe loading of students into designated transport buses.",
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
        </div>
      </section>

      {/* Download Syllabus Callout */}
      <section className="section-pad">
        <div className="container-page">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-[2rem] p-10 md:p-14 text-cream shadow-[var(--shadow-elegant)] relative overflow-hidden max-w-4xl mx-auto">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cream/10 blur-2xl"
            />
            <div className="relative grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-widest text-accent">
                  Resource Library
                </span>
                <h3 className="font-display font-extrabold text-3xl">
                  Want details of our curriculum?
                </h3>
                <p className="text-cream/80 text-sm leading-relaxed max-w-xl">
                  Download our prospectus and stream syllabus sheets to learn more about subjects,
                  evaluation guidelines, exam schedules, and rules.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground hover:bg-white hover:text-primary px-6 py-4 font-extrabold transition-all duration-300 shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download Prospectus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
