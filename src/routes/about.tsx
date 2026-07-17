import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import aboutRealistic from "@/assets/about_students_realistic.png";
import { CheckCircle2, Award, Heart, Sparkles, BookOpen, Compass, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Since 2000, Shree Haridarshan Vidya Sankul in Rajkot has been nurturing academic excellence, discipline and Indian values.",
      },
      { property: "og:title", content: "About Shree Haridarshan Vidya Sankul" },
      {
        property: "og:description",
        content: "Two decades of quality education, values and holistic growth in Rajkot.",
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
        eyebrow="Our Legacy"
        title="Two decades of nurturing knowledge and values."
        subtitle="Since 2000, we have been shaping confident, disciplined and compassionate young learners in the heart of Rajkot."
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-2 items-center">
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
          <div className="space-y-6">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Our Story
            </span>
            <h2 className="font-display text-4xl font-extrabold text-foreground leading-tight">
              Where every child is seen, heard, and shaped.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Established in the year 2000, Shree Haridarshan Vidya Sankul has been a cornerstone of
              character development and academic achievement in Mavdi, Rajkot. We believe that true
              learning goes beyond academic syllabus boundaries, extending to moral empathy,
              sportsmanship, and mental mindfulness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our school provides a modern campus environment equipped with high-speed digital labs,
              bright ventilated classrooms, and dedicated sports nets. We partner with parents to
              ensure each child receives customized mentoring.
            </p>
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Established in Year 2000",
                "Nursery to Grade XII (HSC)",
                "Science & Commerce Streams",
                "Affiliated with Gujarat Board",
                "Values-Led Assemblies",
                "Secure, CCTV Monitored Hub",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-pad bg-cream-deep/40 border-y border-border">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Core Values{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              What guides our educational actions.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These values represent the foundation of our curriculum, shaping how we mentor every
              young mind.
            </p>
          </div>

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
                desc: "Critical reasoning, conceptual depth, practical laboratory work, and logical coding.",
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
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-lift bg-card rounded-2xl p-7 border border-border shadow-[var(--shadow-soft)] hover:border-primary/25 text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-foreground">{title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Our Journey{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              Milestones that define our history.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A look at how we grew from a small campus to a leading education hub in Rajkot.
            </p>
          </div>

          <div className="relative border-l border-accent max-w-3xl mx-auto pl-8 space-y-12">
            {[
              {
                year: "2000",
                title: "The Foundation Stone",
                desc: "Shree Haridarshan School opens its doors in Mavdi, Rajkot, with a small batch of students and primary grades.",
              },
              {
                year: "2008",
                title: "Secondary Expansion",
                desc: "Successfully added Board-level Secondary grades (VI-X) with high-tech science lab facilities.",
              },
              {
                year: "2015",
                title: "Higher Secondary Launch",
                desc: "Introduced Grade XI-XII Higher Secondary streams, offering Science and Commerce batches with dedicated preparation.",
              },
              {
                year: "2020",
                title: "Smart Digital Overhaul",
                desc: "Upgraded all classrooms to smart display models and introduced coding labs, expanding co-curricular programs to 20+ clubs.",
              },
              {
                year: "2026",
                title: "25+ Years Celebration",
                desc: "Celebrating 25+ years of trust, academic excellence, and shaping over 10,000 successful alumni across Gujarat.",
              },
            ].map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <span className="absolute -left-12 top-1.5 h-7 w-7 rounded-full bg-accent border-4 border-background flex items-center justify-center shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-3 w-3 text-foreground" />
                </span>
                <div className="space-y-2">
                  <span className="inline-block text-sm font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                    {m.year}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="section-pad bg-cream-deep/30 border-t border-border">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div
            className="rounded-3xl p-10 md:p-14 text-cream shadow-[var(--shadow-elegant)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <span className="eyebrow text-accent">Our Vision</span>
            <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight">
              Future-ready students, rooted in values.
            </h3>
            <p className="mt-5 text-cream/85 leading-relaxed">
              To create knowledgeable, disciplined, compassionate and confident students who
              contribute positively to society, balancing global scientific challenges with deep
              respect for values.
            </p>
          </div>
          <div className="rounded-3xl p-10 md:p-14 bg-card border border-border shadow-[var(--shadow-soft)]">
            <span className="eyebrow">Our Mission</span>
            <h3 className="mt-4 font-display text-3xl font-extrabold text-foreground leading-tight">
              How we shape every learner.
            </h3>
            <ul className="mt-6 space-y-3.5 text-foreground font-semibold text-sm">
              {[
                "Deliver quality concepts-led lessons daily",
                "Expose students to digital computers & coding labs",
                "Build strong moral code and empathy assemblies",
                "Expose pupils to physical drills & sports coaching",
                "Prepare students for Gujarat Board and competitive entrance success",
              ].map((m) => (
                <li key={m} className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
