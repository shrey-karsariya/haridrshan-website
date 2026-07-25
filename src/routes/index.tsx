import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Building2,
  Cctv,
  Cpu,
  FlaskConical,
  Landmark,
  Library,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Palette,
  HeartHandshake,
  GraduationCap,
  Star,
  Quote,
  ChevronRight,
  CheckCircle2,
  Award,
  Compass,
  Heart,
  Dumbbell,
  Stethoscope,
  Briefcase,
  Globe,
  Lightbulb,
  Building,
  UserCheck,
  School,
  Sparkle,
  X,
  Maximize2,
} from "lucide-react";
import aboutRealistic from "@/assets/about_students_realistic.png";
import lifeScience from "@/assets/life-science.png";
import lifeDance from "@/assets/life-dance.png";
import lifeSports from "@/assets/life-sports.png";
import lifeArt from "@/assets/life-art.png";
import lifeYoga from "@/assets/life-yoga.png";
import libraryImg from "@/assets/facility-library.jpg";
import computerLabImg from "@/assets/facility-computer.jpg";
import scienceLabImg from "@/assets/facility_science_lab.png";
import busImg from "@/assets/facility_bus.png";
import mdHardik from "@/assets/md-hardik sir.png";
import principalNilesh from "@/assets/principle-nilesh sir.png";
import principalChetna from "@/assets/principle-chetna medam.png";
import secondaryLabNew from "@/assets/secondary_section_lab.png";
import higherSecondaryClassroomNew from "@/assets/higher_secondary_classroom.png";
import hscResult from "@/assets/hsc result.png";
import sscResult from "@/assets/ssc result.png";
import { ScrollReveal } from "@/components/scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Haridarshan Vidya Sankul | Top School in Rajkot (Est. 2000)" },
      {
        name: "description",
        content:
          "Where Knowledge Dawns, Accompanied by Values & Culture. Quality education from Nursery to 12th (Arts & Commerce) in Mavdi, Rajkot since 2000 at reasonable fees.",
      },
      {
        property: "og:title",
        content: "Shree Haridarshan Vidya Sankul — Where Knowledge Dawns with Values",
      },
      {
        property: "og:description",
        content:
          "25+ Years of excellence in Rajkot. 6000+ Books Library, National Sports Coaching, Computer Labs & NEP 2020 Values.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic: smooth start and gentle slowdown at end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * end);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function IndexPage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <LeadershipSection />
      <WhyChooseUs />
      <ExperientialActivitiesSection />
      <AcademicsPreview />
      <FacilitiesPreview />
      <ResultsMarqueeSection />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-ink">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/School_drone_shot_cinematic_move._202607040242.MOV" type="video/mp4" />
        <source src="/School_drone_shot_cinematic_move._202607040242.MOV" type="video/quicktime" />
      </video>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(47, 46, 52, 0.95) 0%, rgba(47, 46, 52, 0.78) 50%, rgba(193, 44, 50, 0.55) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0.5px,_transparent_0.5px)] [background-size:24px_24px] opacity-10 z-10" />

      <div className="container-page relative z-20 flex flex-col items-center justify-center text-center space-y-8 text-cream">
        <ScrollReveal variant="fade-down" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" /> Est. 2000 · Rajkot
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur-md">
              KG to 12th (Arts & Commerce)
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.1] text-cream tracking-tight max-w-4xl">
            Where{" "}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Knowledge Dawns
            </span>
            ,<br />
            Accompanied by{" "}
            <span className="relative inline-block text-accent">
              Values & Culture
              <span className="absolute bottom-1.5 left-0 w-full h-2 bg-primary/40 -z-10 rounded-full" />
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <p className="text-base md:text-lg text-cream/90 max-w-2xl leading-relaxed font-medium">
            <span className="block font-gujarati text-accent text-lg mb-1 font-semibold">
              "જ્યાં છે જ્ઞાનનો સૂર્યોદય, સાથે સંસ્કારની છાયા."
            </span>
            Quality education & holistic values at affordable fees.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="zoom-in" delay={400}>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/admissions"
              className="btn-hero group px-6 py-3 text-sm md:text-base shadow-[var(--shadow-gold)] hover:shadow-none hover:translate-y-0"
            >
              Admissions 2026-27{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/30 text-cream font-bold hover:bg-white hover:text-ink hover:border-white transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
            >
              Visit Campus
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const stats = [
  { label: "Since 2000", value: 25, suffix: "+", sub: "Years of Trust & Excellence" },
  { label: "Library Resources", value: 6000, suffix: "+", sub: "Books & Media Room" },
  { label: "Sports Medals", value: 100, suffix: "+", sub: "National & State Medals" },
  { label: "Safe Infrastructure", value: 100, suffix: "%", sub: "CCTV Monitored Campus" },
];

function StatsStrip() {
  return (
    <section id="stats" className="relative -mt-10 z-10">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden bg-card shadow-[var(--shadow-elegant)] border border-border divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((s, i) => (
            <ScrollReveal key={i} variant="fade-up" staggerIndex={i} staggerStep={120}>
              <div className="p-6 md:p-8 text-center bg-card h-full">
                <div className="text-3xl md:text-5xl font-display font-black text-primary leading-none">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-bold text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutImages = [lifeScience, lifeYoga, lifeDance];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-pad">
      <div className="container-page grid gap-14 lg:grid-cols-2 items-center">
        {/* Text Block - First on Mobile, Second on Desktop */}
        <ScrollReveal variant="slide-right" delay={150} className="order-1 lg:order-2">
          <div className="space-y-6">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Established in 2000 · Affordable Quality Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Nurturing academic intelligence with lifelong character values.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since the year 2000, Shree Haridarshan Vidya Sankul has been serving continuously in the
              field of education at <strong>very affordable/reasonable fees</strong>. Our team of
              well-qualified, subject-expert, and highly experienced teachers dedicate personal time to
              weaker students, providing customized study along with regular subject-wise Unit Tests
              and Mega Tests.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Equipped with a vast <strong>6000+ books library</strong>, modern media room, high-speed
              computer lab, and science workbenches, we create an encouraging environment for the
              holistic development of every child.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-cream transition-all duration-300 shadow-sm"
              >
                Learn More About Our Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Photo Slider Block - Second on Mobile, First on Desktop */}
        <ScrollReveal variant="slide-left" className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl bg-accent/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 h-52 w-52 rounded-full bg-primary/15 -z-10" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border bg-ink">
              {aboutImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Shree Haridarshan School Campus highlight ${idx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImageIdx === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-ink/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImageIdx === idx ? "w-6 bg-accent" : "w-2 bg-cream/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-8 left-4 right-4 md:left-auto md:right-8 md:w-80 bg-card rounded-2xl p-5 shadow-[var(--shadow-soft)] border-2 border-accent z-20">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-foreground text-sm">
                    STD: KG to 12th (Arts & Commerce)
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    + Shree Juniors Play Group to Sr. KG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="section-pad bg-cream-deep/50 border-y border-border">
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Visionary Leadership{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Guided by experience, dedicated to every student.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              "Education is creating conditions where every petal of a child's existence blooms and unfolds."
            </p>
          </div>
        </ScrollReveal>

        {/* Managing Director Main Feature Card */}
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
                  <Lightbulb className="h-4 w-4 text-accent" /> New Education Policy (NEP 2020) Vision
                </div>

                <blockquote className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug italic text-primary border-l-4 border-accent pl-4">
                  "We Will Create A Conclusive Environment For Students To Excel In Innovative Ideas And Education"
                </blockquote>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  At Shree Haridarshan Vidya Sankul, education is imparted alongside nurturing culture
                  and shaping life values. Children receive age-appropriate education focused on their
                  inner capacity rather than mere bookish memorization.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  In accordance with the New Education Policy (NEP), children are taught without stress
                  or heavy burden using modern technology in an easily understandable manner. We foster
                  an environment that empowers students to become experts in diverse fields, fulfill
                  their dreams, and contribute toward making India a global leader (<em>Vishwa Guru</em>).
                </p>

                <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-semibold text-foreground">
                  <span className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-lg border border-border">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Stress-Free Tech Learning
                  </span>
                  <span className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-lg border border-border">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Unit & Mega Test Tracking
                  </span>
                  <span className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-lg border border-border">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Global Leadership Ethos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Principals Grid */}
        <div className="grid gap-8 md:grid-cols-2">
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
                  Principal · GSEB Board & Administration Head
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Nilesh Sir brings extensive administrative expertise and academic discipline to Shree Haridarshan Vidya Sankul. He oversees GSEB secondary board preparations, unit test evaluation, administrative rigor, and student academic performance.
                </p>

                <div className="pt-3 w-full space-y-2.5 text-xs sm:text-sm text-foreground/90 font-medium text-left bg-background/60 p-4 sm:p-5 rounded-2xl border border-border/60 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Directs regular subject-wise Unit Tests & Mega Tests</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-primary shrink-0" />
                    <span>Special personal mentoring & guidance for exam confidence</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="h-4 w-4 text-primary shrink-0" />
                    <span>Supervises GSEB board preparations & academic discipline</span>
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
  );
}

function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);

  const items = [
    {
      icon: BookOpen,
      title: "Affordable & Value-Centric Education",
      desc: "Continuous service since 2000 at very reasonable fees, combining GSEB board standards with NEP 2020 values and stress-free modern teaching.",
      metric: "Reasonable Fees",
    },
    {
      icon: ShieldCheck,
      title: "Personalized Support & Unit Tests",
      desc: "Subject experts dedicate special time to weaker students. Regular subject-wise Unit Tests and Mega Tests ensure conceptual perfection.",
      metric: "Mega Test System",
    },
    {
      icon: Trophy,
      title: "National-Level Sports Coaching",
      desc: "Specialized sports coaching by National Level Coaches. Our students have won Gold Medals up to National Level & Khel Mahakumbh events.",
      metric: "National Gold Medallists",
    },
    {
      icon: Cpu,
      title: "6000+ Library Books & Tech Labs",
      desc: "Comprehensive learning environment with a library of 6000+ books, dedicated media room, high-speed computer lab, and practical science workbenches.",
      metric: "6000+ Books",
    },
  ];

  return (
    <section className="section-pad relative">
      <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
        <ScrollReveal variant="slide-left" className="lg:col-span-5">
          <div className="space-y-6">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Why Families Choose SHVS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Uncompromising quality for your child's future.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide a safe, value-centric educational ecosystem in Mavdi, Rajkot, helping every
              child achieve conceptual depth, physical fitness, and moral strength.
            </p>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-7 space-y-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = activeIdx === idx;
            return (
              <ScrollReveal key={idx} variant="fade-up" staggerIndex={idx} staggerStep={100}>
                <div
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "bg-card border-primary/20 shadow-[var(--shadow-soft)] p-6"
                      : "bg-card/50 border-border hover:bg-card hover:border-primary/10 p-5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isOpen ? "bg-primary text-cream" : "bg-primary/5 text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3
                        className={`font-display font-extrabold text-base md:text-lg transition-colors duration-300 ${
                          isOpen ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-bold uppercase px-2.5 py-1 rounded transition-colors duration-300 ${
                        isOpen ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperientialActivitiesSection() {
  const activities = [
    { title: "Annual Function & Stage Drama", guj: "વાર્ષિક ઉત્સવ", desc: "Stage drama, dance & talent spotlight", image: lifeDance },
    { title: "Science Projects & Models", guj: "સાયન્સ પ્રોજેક્ટ", desc: "Working models & experiential research", image: lifeScience },
    { title: "Annual Sports Day & Coaching", guj: "સ્પોર્ટ્સ ડે", desc: "Athletic track, field events & awards", image: lifeSports },
    { title: "Festival & Cultural Events", guj: "તહેવારોની ઉજવણી", desc: "Cultural unity & traditional festivities", image: lifeArt },
    { title: "Yoga & Physical Health", guj: "યોગ અને શારીરિક સ્વાસ્થ્ય", desc: "Mindfulness & daily physical fitness", image: lifeYoga },
    { title: "Computer Lab & Digital Skills", guj: "કોમ્પ્યુટર લેબ શિક્ષણ", desc: "Digital skills & interactive IT learning", image: computerLabImg },
    { title: "6000+ Books Library & Reading", guj: "લાઇબ્રેરી અને વાંચન ખંડ", desc: "Vast reference library for deep research", image: libraryImg },
    { title: "Science Museum & Lab Visits", guj: "સાયન્સ મ્યુઝિયમ વિઝિટ", desc: "Interactive scientific excursions", image: scienceLabImg },
  ];

  return (
    <section className="section-pad bg-cream-deep/50 border-y border-border">
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Experiential Learning & Activities{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Learning beyond the boundaries of textbooks.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our school organizes a wide spectrum of field visits, cultural programs, and hands-on activities to nurture talent in every child.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((act, i) => (
            <ScrollReveal key={i} variant="fade-up" staggerIndex={i} staggerStep={90}>
              <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-muted">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-ink/75 backdrop-blur-md text-accent text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                    Activity {i + 1}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                      {act.title}
                    </h3>
                    <div className="font-gujarati text-xs text-primary font-semibold mt-0.5">
                      {act.guj}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademicsPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const stages = [
    {
      title: "Pre-Primary (Shree Juniors)",
      grade: "Playgroup, Nursery, Jr. KG, Sr. KG",
      focus: "Play-based & Sensory learning",
      desc: "Shree Juniors sparks early curiosity in a joyful environment using interactive toys, phonics, and motor-skills activities.",
      bullets: [
        "Phonics & linguistic basics",
        "Sensory plays & physical coordination",
        "Introduction to shapes & numbers",
        "Joyful stress-free environment",
      ],
      image: lifeArt,
    },
    {
      title: "Primary Section",
      grade: "Grades I – V",
      focus: "Foundational literacy & arithmetic",
      desc: "Primary grades focus on concrete literacy, arithmetic, logical reasoning, and early science concepts through interactive lessons.",
      bullets: [
        "Experiential learning methods",
        "Personalized attention for weak students",
        "Computer lab orientation",
        "Basic science models & art activities",
      ],
      image: lifeScience,
    },
    {
      title: "Secondary Section",
      grade: "Grades VI – X",
      focus: "Concept depth & unit testing",
      desc: "Secondary curriculum focuses on subject concept mastery, regular Unit Tests and Mega Tests, and building board exam confidence.",
      bullets: [
        "Subject-wise Unit & Mega Tests",
        "Syllabus oriented practical training",
        "Leadership debates & sports coaching",
        "Competitive exam preparation",
      ],
      image: secondaryLabNew,
    },
    {
      title: "Higher Secondary Section",
      grade: "Grades XI – XII (Arts & Commerce)",
      focus: "Arts & Commerce career streams",
      desc: "Specialized streams for higher studies, offering deep subject mastery, entrance exam guidance, and career seminars.",
      bullets: [
        "Commerce Stream (Accounts, Economics, BA)",
        "Arts Stream (Humanities & Social Sciences)",
        "Weekly evaluation & mock tests",
        "Career counselling & industry exposure",
      ],
      image: higherSecondaryClassroomNew,
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" /> Academic Programs
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                An academic journey from Playgroup to 12th Grade.
              </h2>
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-glow group"
            >
              Full Syllabus Details{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="zoom-in" delay={150}>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 bg-card/60 p-2 rounded-2xl border border-border max-w-full">
              {stages.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 lg:flex-none text-left px-5 py-4 rounded-xl font-display font-extrabold text-sm transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                    activeTab === idx
                      ? "bg-primary text-cream shadow-[var(--shadow-glow)]"
                      : "text-foreground hover:bg-background/80 hover:text-primary"
                  }`}
                >
                  <div className="text-[10px] uppercase opacity-75 mb-0.5 tracking-wider">
                    {s.grade}
                  </div>
                  <div>{s.title}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-card rounded-3xl border border-border p-6 md:p-10 shadow-[var(--shadow-soft)] grid gap-8 md:grid-cols-2 items-center relative overflow-hidden">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-accent uppercase tracking-widest bg-accent/10 px-2.5 py-1 rounded">
                  Focus: {stages[activeTab].focus}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-foreground">
                  {stages[activeTab].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stages[activeTab].desc}
                </p>
                <ul className="space-y-2 pt-2">
                  {stages[activeTab].bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-foreground font-semibold text-xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-64 md:h-full rounded-2xl overflow-hidden relative border border-border shadow-[var(--shadow-soft)]">
                <img
                  src={stages[activeTab].image}
                  alt={stages[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream font-bold text-sm bg-ink/30 backdrop-blur-sm p-2 rounded">
                  {stages[activeTab].title} Classroom Focus
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FacilitiesPreview() {
  const facilityCards = [
    {
      image: libraryImg,
      title: "6000+ Books Library",
      desc: "A rich reference hall housing over 6000+ books, subject textbooks, storybooks, and study journals.",
    },
    {
      image: computerLabImg,
      title: "Computer Laboratory & Media Room",
      desc: "Modern computer workbenches and a dedicated media room for digital learning and research.",
    },
    {
      image: scienceLabImg,
      title: "Practical Science Labs",
      desc: "Equipped workbenches for experimental learning in Physics, Chemistry, and Biology.",
    },
    {
      image: lifeSports,
      title: "National Level Sports Arena",
      desc: "Systematic sports training nets and coaching under qualified National Level Coaches.",
    },
    {
      image: busImg,
      title: "Safe School Transportation",
      desc: "Secure bus routes covering major residential areas in Rajkot, driven by verified drivers.",
    },
    {
      image: aboutRealistic,
      title: "CCTV Monitored Campus",
      desc: "100% CCTV security surveillance across classrooms, corridors, and entrance gates.",
    },
  ];

  return (
    <section className="section-pad bg-cream-deep/50 border-y border-border">
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Campus Infrastructure{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Built for modern, holistic development.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tour our campus equipped with a 6000+ books library, media room, sports arenas, and digital labs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilityCards.map(({ image, title, desc }, idx) => (
            <ScrollReveal key={title} variant="fade-up" staggerIndex={idx} staggerStep={100}>
              <div className="card-lift bg-card rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:border-primary/10 flex flex-col group h-full">
                <div className="h-48 overflow-hidden relative border-b border-border">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-12 flex justify-center">
            <Link to="/facilities" className="btn-hero group">
              Explore All Facilities{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ResultsMarqueeSection() {
  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string } | null>(null);

  const marqueeCards = [
    { title: "HSC 12th Board Result (Arts & Commerce)", sub: "12th Board Outstanding Merit Toppers", badge: "HSC 12th Board", image: hscResult },
    { title: "SSC 10th Board Result", sub: "10th Secondary Board High Percentile Scorers", badge: "SSC 10th Board", image: sscResult },
    { title: "National Level Sports Champions", sub: "Gold Medallists & Khel Mahakumbh Victories", badge: "Sports Champions", image: lifeYoga },
    { title: "Experiential Science Fair & Projects", sub: "Innovation & State Level Award Winners", badge: "Science & Innovation", image: lifeScience },
  ];

  return (
    <section className="section-pad bg-background border-t border-border overflow-hidden">
      <ScrollReveal variant="fade-up">
        <div className="container-page mb-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> School Results & Achievements Showcase{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Our Proud Board Results & Toppers
            </h2>
            <div className="font-gujarati text-primary font-bold text-lg md:text-xl">
              "અમોને ગૌરવ છે અમારા વિદ્યાર્થીઓની શ્રેષ્ઠ સફળતાનું"
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Auto-Scrolling Marquee Row */}
      <div className="relative w-full overflow-hidden py-6 bg-cream-deep/30 border-y border-border">
        <div className="flex w-max animate-marquee gap-6">
          {[...marqueeCards, ...marqueeCards, ...marqueeCards].map((res, i) => (
            <div
              key={i}
              onClick={() => setActiveModalImg({ src: res.image, title: res.title })}
              className="w-80 md:w-96 shrink-0 bg-card rounded-2xl p-4 border border-border shadow-[var(--shadow-soft)] hover:border-primary transition-all flex flex-col justify-between relative group cursor-pointer"
            >
              <div className="h-56 rounded-xl overflow-hidden bg-ink relative border border-border">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-full object-contain bg-ink group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-0.5 rounded">
                  {res.badge}
                </span>
                <h3 className="font-display font-extrabold text-sm text-foreground mt-1.5 group-hover:text-primary transition-colors">
                  {res.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModalImg !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md animate-fade-in p-4"
          onClick={() => setActiveModalImg(null)}
        >
          <button
            onClick={() => setActiveModalImg(null)}
            className="absolute top-6 right-6 text-cream hover:text-accent p-2 rounded-full border border-cream/20 hover:bg-cream/10 z-10 transition-colors"
            aria-label="Close image view"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeModalImg.src}
              alt={activeModalImg.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-cream/20 shadow-2xl bg-ink"
            />
            <div className="mt-4 bg-ink/90 backdrop-blur-md px-6 py-3 rounded-2xl text-cream text-sm md:text-base font-bold border border-cream/15 text-center shadow-lg">
              {activeModalImg.title}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

const testimonials = [
  {
    name: "Rakesh & Nisha Patel",
    student: "Parent of Aarav (Grade V)",
    quote:
      "We are extremely pleased with the school's strict discipline combined with loving, friendly teachers. The subject-wise unit test system helped Aarav improve significantly.",
  },
  {
    name: "Mehul Trivedi",
    student: "Parent of Anaya (Grade II)",
    quote:
      "The curriculum's mixture of science concepts with cultural values is outstanding. The 6000+ library books and sports coaching give complete development.",
  },
  {
    name: "Kirti Shah",
    student: "Parent of Dhruv (Grade IX)",
    quote:
      "Affordable fees, excellent computer workbenches, and teachers who give individual time to weaker students. Dhruv has shown amazing progress in his unit tests.",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-cream-deep/50 border-y border-border">
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-primary" /> Testimonials{" "}
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Loved by parents. Trusted by families.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Read what local families in Rajkot say about their experiences at Shree Haridarshan.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Grid View */}
        <div className="mt-14 hidden md:grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.name} variant="fade-up" staggerIndex={idx} staggerStep={120}>
              <figure className="card-lift bg-card rounded-3xl p-8 border border-border relative hover:border-primary/10 shadow-[var(--shadow-soft)] flex flex-col justify-between h-full">
                <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6" />
                <div>
                  <div className="flex text-accent gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-sm text-foreground/80 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-extrabold text-xs border border-primary/20">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-extrabold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground font-semibold">{t.student}</div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Horizontal Auto-scrolling Slider */}
        <div className="mt-10 md:hidden relative w-full overflow-hidden py-2">
          <div className="flex w-max animate-testimonial-marquee gap-5">
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <figure
                key={idx}
                className="w-80 shrink-0 bg-card rounded-3xl p-6 border border-border relative shadow-[var(--shadow-soft)] flex flex-col justify-between"
              >
                <Quote className="h-8 w-8 text-primary/10 absolute top-5 right-5" />
                <div>
                  <div className="flex text-accent gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xs text-foreground/80 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-extrabold text-xs border border-primary/20">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-extrabold text-foreground text-xs">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground font-semibold">{t.student}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes testimonialMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-testimonial-marquee {
            animation: testimonialMarquee 22s linear infinite;
          }
          .animate-testimonial-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Working Google Review CTA Card */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-[var(--shadow-soft)] max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-border grid place-items-center shrink-0">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-accent font-extrabold text-sm justify-center sm:justify-start">
                  <span>4.9 / 5.0 Rating</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-normal">(Google Verified Reviews)</span>
                </div>
                <div className="font-display font-extrabold text-foreground text-base mt-0.5">
                  See Real Parent Reviews & Ratings on Google
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shree+Haridarshan+Vidya+Sankul+Mavdi+Bypass+Road+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-cream font-extrabold text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:-translate-y-0.5 shrink-0"
            >
              <span>View Google Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AdmissionsCTA() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <ScrollReveal variant="zoom-in">
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-8 md:px-16 py-12 md:py-16 text-cream shadow-[var(--shadow-elegant)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cream/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse"
            />
            <div className="relative max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-widest text-accent">
                Enroll for 2026-27 (Nursery to 12th Arts & Commerce)
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight text-cream">
                Give your child a school that feels like a second home.
              </h2>
              <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
                Visit our campus on Mavdi Bypass Road, Rajkot. Tour our 6000+ library books, meet our Managing Director Hardik Sir & Principals, and explore our classrooms.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 pt-2">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground hover:bg-white hover:text-primary px-8 py-4 font-bold transition-all duration-300 shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
                >
                  Apply Online Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-cream/35 text-cream font-bold hover:bg-cream hover:text-primary hover:border-cream transition-all duration-300 hover:-translate-y-0.5"
                >
                  Schedule Campus Visit
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
