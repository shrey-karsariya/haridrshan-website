import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import aboutRealistic from "@/assets/about_students_realistic.png";
import heroCampus from "@/assets/hero-campus.jpg";
import mdHardik from "@/assets/md-hardik sir.png";
import principalNilesh from "@/assets/principle-nilesh sir.png";
import principalChetna from "@/assets/principle-chetna medam.png";
import {
  CheckCircle2,
  Award,
  Heart,
  Sparkles,
  BookOpen,
  Compass,
  Shield,
  Lightbulb,
  Trophy,
  Library,
  GraduationCap,
  Users,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Shree Haridarshan Vidya Sankul (Est. 2000)" },
      {
        name: "description",
        content:
          "Since 2000, Shree Haridarshan Vidya Sankul in Mavdi, Rajkot has been delivering affordable, quality education from Nursery to 12th Arts & Commerce based on NEP 2020 values.",
      },
      { property: "og:title", content: "About Shree Haridarshan Vidya Sankul" },
      {
        property: "og:description",
        content: "25+ years of nurturing knowledge, culture, sports coaching, 6000+ books library, and holistic growth in Rajkot.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Legacy & Philosophy"
        title="25+ Years of Nurturing Knowledge and Culture."
        subtitle="Since 2000, providing high-quality education at affordable fees in Mavdi, Rajkot — where the sunrise of knowledge meets the shade of values."
        bgImage={heroCampus}
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-2 items-center">
          <ScrollReveal variant="slide-left">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-3xl -z-10 translate-x-2 translate-y-2" />
              <img
                src={aboutRealistic}
                alt="Students learning at Shree Haridarshan Vidya Sankul"
                loading="lazy"
                width={1280}
                height={1280}
                className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/5] object-cover w-full border border-border"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={150}>
            <div className="space-y-6">
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" /> Our Heritage
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground leading-tight">
                Where every child is seen, heard, and shaped.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Established in the year 2000, Shree Haridarshan Vidya Sankul (SHVS) has been a
                cornerstone of value-led education and academic success in Mavdi, Rajkot. Operating
                at <strong>very affordable/reasonable fees</strong>, our institution believes that true
                education nurtures the whole child — mind, body, and character.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of well-qualified, subject-expert, and highly experienced teachers dedicate
                special personal attention and extra time to weaker students, conducting regular
                subject-wise <strong>Unit Tests & Mega Tests</strong>. With a <strong>6000+ books library</strong>,
                media room, computer lab, and National-Level sports coaching, we ensure students excel
                academically and personally.
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Established in Year 2000",
                  "STD: KG to 12th (Arts & Commerce)",
                  "Shree Juniors (Playgroup to Sr. KG)",
                  "Gyan Sadhana Wing (Est. 1995)",
                  "Highly Affordable Fee Structure",
                  "Unit & Mega Test Evaluation",
                  "6000+ Books Reference Library",
                  "National-Level Sports Coaches",
                ].map((t, idx) => (
                  <ScrollReveal key={t} variant="fade-up" staggerIndex={idx} staggerStep={60}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{t}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership & NEP Philosophy */}
      <section className="section-pad bg-cream-deep/40 border-y border-border">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Visionary Leadership & NEP Vision{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                Unfolding the potential within every student.
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                Guided by experienced educational leaders, Shree Haridarshan Vidya Sankul provides
                strong administrative direction, continuous academic evaluation, and moral mentorship.
              </p>
            </div>
          </ScrollReveal>

          {/* Managing Director Message Card */}
          <ScrollReveal variant="zoom-in" delay={100}>
            <div className="bg-card rounded-3xl border-2 border-primary/20 p-7 sm:p-9 md:p-10 shadow-[var(--shadow-elegant)] relative overflow-hidden mb-12 group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                {/* Left Side: Photo Frame */}
                <div className="lg:col-span-5 text-center lg:text-left">
                  <div className="relative inline-block group">
                    <div className="w-56 h-68 sm:w-64 sm:h-76 md:w-72 md:h-84 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl mx-auto bg-primary/5">
                      <img
                        src={mdHardik}
                        alt="Hardik Sir - Managing Director"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-cream text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md border border-white/20 whitespace-nowrap">
                      Managing Director
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-foreground mt-5">
                    HARDIK SIR
                  </h3>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-primary mt-1">
                    Hardik Ajudiya · Educational Visionary
                  </div>
                </div>

                {/* Right Side: Full Details */}
                <div className="lg:col-span-7 space-y-4">
                  <blockquote className="font-display font-bold text-xl md:text-2xl text-primary leading-snug italic border-l-4 border-accent pl-4">
                    "We Will Create A Conclusive Environment For Students To Excel In Innovative Ideas And Education"
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Education is creating conditions where every petal of a child's existence blooms
                    and unfolds. At Shree Haridarshan Vidya Sankul, children receive education tailored
                    to their age and inner capacity, nurturing culture and shaping life values along
                    with textbook knowledge.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Aligned with the New Education Policy (NEP 2020), children are taught without stress
                    or heavy burden using modern technology in an easily understandable manner, preparing
                    them to fulfill their dreams and contribute to making India a global leader (<em>Vishwa Guru</em>).
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Our commitment remains steadfast: delivering world-class educational infrastructure, 
                    dedicated unit & mega test evaluation systems, 6000+ reference library resources, 
                    and expert sports coaching—all maintained at a <strong>very reasonable fee structure</strong> so that quality education is accessible to all families in Rajkot.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Principals Grid - Expanded Details */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* NILESH SIR */}
            <ScrollReveal variant="slide-left" delay={200}>
              <div className="bg-card rounded-3xl p-7 sm:p-8 border-2 border-border shadow-[var(--shadow-soft)] hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full group">
                {/* Top Photo Frame */}
                <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden bg-primary/5 border-2 border-primary/30 shadow-lg mb-6 shrink-0 group-hover:border-primary/50 transition-colors">
                  <img
                    src={principalNilesh}
                    alt="Nilesh Sir - Principal"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-cream text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md border border-white/20 whitespace-nowrap">
                    Principal
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="space-y-3 flex-1 flex flex-col items-center w-full">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-extrabold uppercase tracking-wider">
                    <GraduationCap className="h-3.5 w-3.5" /> Administration & GSEB Board
                  </span>
                  <h4 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">NILESH SIR</h4>
                  <div className="text-xs font-extrabold text-primary uppercase tracking-widest">
                    Principal · Administration & Board Exams Head
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Nilesh Sir brings extensive administrative expertise and academic discipline to Shree Haridarshan Vidya Sankul. He oversees standard GSEB board preparations, secondary curriculum execution, and structured evaluation.
                  </p>

                  <div className="pt-3 w-full space-y-2.5 text-xs sm:text-sm text-foreground/90 font-medium text-left bg-background/60 p-4 sm:p-5 rounded-2xl border border-border/60 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <Target className="h-4 w-4 text-primary shrink-0" />
                      <span>Directs regular subject-wise Unit Tests & Mega Tests</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span>Special personal mentoring & guidance for exam confidence</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Trophy className="h-4 w-4 text-primary shrink-0" />
                      <span>Supervises National-Level sports participant academic balance</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CHETNA MEDAM */}
            <ScrollReveal variant="slide-right" delay={300}>
              <div className="bg-card rounded-3xl p-7 sm:p-8 border-2 border-border shadow-[var(--shadow-soft)] hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full group">
                {/* Top Photo Frame */}
                <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden bg-primary/5 border-2 border-primary/30 shadow-lg mb-6 shrink-0 group-hover:border-primary/50 transition-colors">
                  <img
                    src={principalChetna}
                    alt="Chetna Medam - Principal"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-cream text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md border border-white/20 whitespace-nowrap">
                    Principal
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="space-y-3 flex-1 flex flex-col items-center w-full">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-extrabold uppercase tracking-wider">
                    <Heart className="h-3.5 w-3.5" /> Academic Head & Foundational Wing
                  </span>
                  <h4 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">CHETNA MEDAM</h4>
                  <div className="text-xs font-extrabold text-primary uppercase tracking-widest">
                    Principal · Academic Head & Values Integration
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Chetna Medam spearheads our academic pedagogy and early childhood values. She ensures that every child receives nurturing support, conceptual clarity, and character education from their earliest steps.
                  </p>

                  <div className="pt-3 w-full space-y-2.5 text-xs sm:text-sm text-foreground/90 font-medium text-left bg-background/60 p-4 sm:p-5 rounded-2xl border border-border/60 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-primary shrink-0" />
                      <span>Integrates Sanskar, discipline & culture into daily learning</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="h-4 w-4 text-primary shrink-0" />
                      <span>Individual teacher supervision & weak student remedial attention</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Compass className="h-4 w-4 text-primary shrink-0" />
                      <span>Fosters stress-free NEP activity-based learning environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-pad">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Core Pillars{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                What guides our educational actions.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These values represent the foundation of our curriculum, shaping how we mentor every young mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Compass,
                title: "Sanskar (Values)",
                desc: "Deep moral foundations, respect for elders, and empathy for all living beings.",
              },
              {
                icon: BookOpen,
                title: "Shikshan (Education)",
                desc: "Conceptual depth, unit test mastery, practical science, and NEP 2020 technology learning.",
              },
              {
                icon: Shield,
                title: "Anushashan (Discipline)",
                desc: "Punctuality, neat uniforms, mental order, and building positive habits daily.",
              },
              {
                icon: Heart,
                title: "Seva (Service)",
                desc: "Helping the community, environment hygiene, civic responsibility, and kindness.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} variant="fade-up" staggerIndex={idx} staggerStep={100}>
                <div className="card-lift bg-card rounded-2xl p-7 border border-border shadow-[var(--shadow-soft)] hover:border-primary/25 text-center h-full">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center text-primary mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-foreground">{title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Wings */}
      <section className="section-pad bg-cream-deep/40 border-t border-border">
        <div className="container-page">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Educational Wings{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                Three decades of educational dedication.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal variant="fade-up" staggerIndex={0}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center h-full">
                <div className="text-sm font-extrabold text-accent uppercase">Established 1995</div>
                <h3 className="font-display font-extrabold text-2xl text-foreground mt-2">
                  Gyan Sadhana Vidhyadham
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Foundational educational wing serving excellence for over 30 years in Rajkot.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" staggerIndex={1}>
              <div className="bg-card rounded-2xl p-8 border-2 border-primary/40 shadow-md text-center h-full">
                <div className="text-sm font-extrabold text-primary uppercase">Established 2000</div>
                <h3 className="font-display font-extrabold text-2xl text-foreground mt-2">
                  Shree Haridarshan Vidya Sankul
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Primary, Secondary & Higher Secondary (STD: KG to 12th Arts & Commerce).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" staggerIndex={2}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center h-full">
                <div className="text-sm font-extrabold text-accent uppercase">Early Childhood Wing</div>
                <h3 className="font-display font-extrabold text-2xl text-foreground mt-2">
                  SHREE JUNIORS
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Play Group | Nursery | Jr. KG | Sr. KG (Fun, Learn & Grow Together).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
