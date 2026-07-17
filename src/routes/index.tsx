import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
} from "lucide-react";
import heroVideo from "@/assets/School_drone_shot_cinematic_move._202607040242.mp4";
import aboutRealistic from "@/assets/about_students_realistic.png";
import lifeScience from "@/assets/life-science.jpg";
import lifeDance from "@/assets/life-dance.jpg";
import lifeSports from "@/assets/life-sports.jpg";
import lifeArt from "@/assets/life-art.jpg";
import lifeYoga from "@/assets/life-yoga.jpg";
import libraryImg from "@/assets/facility-library.jpg";
import computerLabImg from "@/assets/facility-computer.jpg";
import scienceLabImg from "@/assets/facility_science_lab.png";
import busImg from "@/assets/facility_bus.png";
import principalImg from "@/assets/principal.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Haridarshan Vidya Sankul | Premium School in Rajkot" },
      {
        name: "description",
        content:
          "Where Knowledge Meets Values. Since 2000, a trusted higher secondary school in Rajkot combining academics, values and holistic development.",
      },
      {
        property: "og:title",
        content: "Shree Haridarshan Vidya Sankul — Where Knowledge Meets Values",
      },
      {
        property: "og:description",
        content: "Premium higher secondary school in Rajkot nurturing young minds since 2000.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [startAnimate, setStartAnimate] = useState(false);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    let isIntersected = false;
    let timer: any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          isIntersected = true;
          checkScrollAndTrigger();
        }
      },
      {
        threshold: 0.1,
      },
    );

    const checkScrollAndTrigger = () => {
      const preloader = document.getElementById("shvs-preloader");
      if (preloader) {
        timer = setTimeout(checkScrollAndTrigger, 100);
        return;
      }

      // Start animate if element is intersecting AND scroll offset has moved slightly
      // OR if they reload while already scrolled down past the top fold
      if (isIntersected && (window.scrollY > 30 || window.scrollY === 0 ? false : true)) {
        setStartAnimate(true);
        window.removeEventListener("scroll", handleScroll);
        observer.unobserve(ref);
      }
    };

    const handleScroll = () => {
      checkScrollAndTrigger();
    };

    observer.observe(ref);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    checkScrollAndTrigger();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [ref]);

  useEffect(() => {
    if (!startAnimate) return;

    let isCancelled = false;
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMilliseconds = duration;
    const stepTime = Math.max(Math.floor(totalMilliseconds / endValue), 15);

    const interval = setInterval(() => {
      if (isCancelled) {
        clearInterval(interval);
        return;
      }
      start += Math.ceil(endValue / (totalMilliseconds / stepTime));
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [startAnimate, end, duration]);

  return (
    <span ref={setRef}>
      {count}
      {suffix}
    </span>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <StatsStrip />
      <About />
      <WhyChooseUs />
      <PrincipalMessage />
      <VisionMission />
      <AcademicsPreview />
      <FacilitiesPreview />
      <LifeAtSchool />
      <Testimonials />
      <AdmissionsCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-ink">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/School_drone_shot_cinematic_move._202607040242.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(47, 46, 52, 0.95) 0%, rgba(47, 46, 52, 0.75) 50%, rgba(193, 44, 50, 0.45) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0.5px,_transparent_0.5px)] [background-size:24px_24px] opacity-10 z-10" />

      <div className="container-page relative z-20 flex flex-col items-center justify-center text-center space-y-8 text-cream">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md animate-fade-up">
          <Sparkles className="h-4 w-4 text-accent animate-pulse" /> Est. 2000 · Mavdi, Rajkot
        </span>
        <h1
          className="font-display font-extrabold text-4xl md:text-7xl leading-[1.05] text-cream tracking-tight max-w-4xl animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Where{" "}
          <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
            Knowledge
          </span>
          <br />
          Meets{" "}
          <span className="relative inline-block text-accent">
            Values
            <span className="absolute bottom-2 left-0 w-full h-2.5 bg-primary/30 -z-10 rounded-full" />
          </span>
        </h1>
        <p
          className="text-base md:text-xl text-cream/80 max-w-2xl leading-relaxed animate-fade-up font-medium"
          style={{ animationDelay: "200ms" }}
        >
          Shree Haridarshan Vidya Sankul combines academic excellence, moral discipline, and modern
          facilities to nurture the leaders of tomorrow. Discover a school that feels like a second
          home.
        </p>
        <div
          className="flex flex-wrap justify-center gap-5 pt-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            to="/admissions"
            className="btn-hero group px-7 py-3.5 text-sm md:text-base shadow-[var(--shadow-gold)] hover:shadow-none hover:translate-y-0"
          >
            Admissions Open 2026-27{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-white/30 text-cream font-bold hover:bg-white hover:text-ink hover:border-white transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
          >
            Schedule Campus Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "Since 2000", value: 25, suffix: "+", sub: "Years of Trust" },
  { label: "Expert Educators", value: 85, suffix: "+", sub: "Qualified Faculty" },
  { label: "Safe Infrastructure", value: 100, suffix: "%", sub: "CCTV Monitored" },
  { label: "Holistic Programs", value: 22, suffix: "+", sub: "Co-curricular Clubs" },
];

function StatsStrip() {
  return (
    <section
      id="stats"
      className="relative -mt-10 z-10 animate-fade-up"
      style={{ animationDelay: "400ms" }}
    >
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden bg-card shadow-[var(--shadow-elegant)] border border-border divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((s, i) => (
            <div key={i} className="p-6 md:p-8 text-center bg-card">
              <div className="text-3xl md:text-5xl font-display font-black text-primary leading-none">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const aboutImages = [aboutRealistic, libraryImg, lifeScience];
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
        <div className="relative scroll-reveal-left">
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

          <div className="absolute -bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-72 bg-card rounded-2xl p-5 shadow-[var(--shadow-soft)] border-2 border-accent z-20">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-foreground text-sm">
                  Nursery to XII
                </div>
                <div className="text-xs text-muted-foreground">Comprehensive academic path</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 scroll-reveal-right">
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" /> About Our School
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Rooted in values.
            <br /> Built for the future.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, Shree Haridarshan Vidya Sankul has stood as a hallmark of
            value-centric education in Mavdi, Rajkot. We believe that true learning occurs when
            academic intelligence is paired with moral depth. Our classrooms are designed to be
            dynamic hubs of enquiry where student curiosity is fueled rather than contained.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our balanced GSEB curriculum focuses heavily on conceptual mastery across mathematics,
            sciences, and humanities, while keeping students connected to core values (Sanskar,
            Anushashan, and Seva). Through active sports training, computer coding, and public
            speaking clubs, we ensure that our students develop key 21st-century skills to lead with
            confidence and empathy.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {[
              "Values & Ethos Centered",
              "Smart Digital Classrooms",
              "Individual Student Mentoring",
              "Comprehensive Sports Coaching",
              "Fully Equipped Labs & Library",
              "Safe Transport & CCTV monitored",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 bg-cream-deep/40 border border-border p-3 rounded-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{t}</span>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link
              to="/about"
              className="btn-hero bg-none border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-cream shadow-none"
            >
              Explore Our History <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
      title: "Academic Excellence & Mentoring",
      desc: "Rigorous GSEB board-aligned curriculum paired with structured examination sheets, personal doubt-solving classes, and dedicated mentoring for competitive entrance preparation.",
      metric: "Top Rajkot Merits",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Campus Safety & Transportation",
      desc: "Full gated entry with verified security guards, 100% campus CCTV coverage, and secure yellow school buses covering all major residential corridors in Rajkot.",
      metric: "CCTV Monitored",
    },
    {
      icon: Cpu,
      title: "Smart Infrastructure & Practical Labs",
      desc: "High-speed computer laboratories, separate experimental workbenches for physics and chemistry, and smart classrooms fitted with visual projectors.",
      metric: "Digital Integration",
    },
    {
      icon: HeartHandshake,
      title: "Traditional Ethos & Moral Values",
      desc: "We focus on Sanskar (ethics), Anushashan (discipline), and Seva (service) to ensure that academic progress is built on strong cultural foundations and respect for elders.",
      metric: "Sanskar & Ethos",
    },
  ];

  return (
    <section className="section-pad bg-cream-deep/40 border-y border-border">
      <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-5 space-y-6 scroll-reveal-left">
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Why Parents Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Uncompromising standards of education.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide a safe, value-centric educational ecosystem in Mavdi, Rajkot, helping every
            child achieve conceptual depth and moral strength.
          </p>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-7 space-y-3 scroll-reveal-right">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = activeIdx === idx;
            return (
              <div
                key={idx}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PrincipalMessage() {
  return (
    <section className="section-pad bg-card border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 relative group scroll-reveal-left">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-3xl -z-10 translate-x-1.5 translate-y-1.5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
          <img
            src={principalImg}
            alt="Principal Dr. Rajesh Patel"
            className="rounded-3xl shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/5] border border-border"
            width={600}
            height={750}
          />
          <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur border border-border p-4 rounded-2xl shadow-[var(--shadow-soft)]">
            <div className="font-display font-extrabold text-foreground text-base">
              Dr. Rajesh Patel
            </div>
            <div className="text-xs text-primary font-bold tracking-wider uppercase mt-0.5">
              Principal, SHVS (Since 2008)
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6 scroll-reveal-right">
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Principal's Welcome Message
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Nurturing values, inspiring excellence.
          </h2>
          <div className="relative pt-4">
            <Quote className="h-16 w-16 text-primary/10 absolute -top-4 -left-6 rotate-180" />
            <blockquote className="relative text-lg text-foreground italic leading-relaxed pl-6">
              "At Shree Haridarshan Vidya Sankul, we believe that education is not merely the
              acquisition of degree certificates, but the development of a resilient character and
              deep moral values. Our mission is to prepare students who are academically stellar,
              socially conscious, and prepared to lead with empathy."
            </blockquote>
          </div>
          <p className="text-muted-foreground leading-relaxed pl-6">
            For over two decades, our school has partnered with parents to provide a secure and
            stimulating setting. We combine practical laboratory experiments, computer coding
            challenges, physical sports, and value education assemblies to ensure that every student
            discovers their latent talent and achieves academic excellence.
          </p>
          <div className="pl-6 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-accent" />
            <div className="font-display font-bold text-foreground text-sm">
              Join our legacy of value-led education.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page grid gap-8 lg:grid-cols-2">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-cream shadow-[var(--shadow-elegant)] scroll-reveal-left"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cream/10 blur-2xl animate-pulse"
          />
          <span className="eyebrow text-accent">Our Vision</span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl font-extrabold leading-tight">
            Future-ready leaders, rooted in values.
          </h3>
          <p className="mt-5 text-cream/85 text-lg leading-relaxed">
            To cultivate a community of students who are academically competent, morally upright,
            and ready to face global challenges while staying connected to cultural values.
          </p>
        </div>
        <div className="rounded-3xl p-10 md:p-14 bg-card border border-border shadow-[var(--shadow-soft)] relative scroll-reveal-right">
          <div
            aria-hidden
            className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/5 blur-2xl"
          />
          <span className="eyebrow">Our Mission</span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            How we shape every student.
          </h3>
          <ul className="mt-6 space-y-3.5">
            {[
              "Deliver holistic academic experiences that build real-world concepts",
              "Maintain a strict discipline framework layered with kindness",
              "Expose students to digital tools, robotics, and computational logic early",
              "Encourage artistic creativity and physical development via sports academies",
              "Instill traditional respect, moral empathy, and civic responsibility",
            ].map((m, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AcademicsPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const stages = [
    {
      title: "Pre-Primary",
      grade: "Nursery – Sr. KG",
      focus: "Play-based & Sensory learning",
      desc: "Our pre-primary section sparks early curiosity in a joyful environment using interactive toys, musical poems, and motor-skills activities.",
      bullets: [
        "Phonics & linguistic basics",
        "Sensory plays & physical coordination",
        "Introduction to shapes & numbers",
        "Nurturing early curiosity",
      ],
      image: lifeArt,
    },
    {
      title: "Primary",
      grade: "Grades I – V",
      focus: "Foundational literacy & arithmetic",
      desc: "Primary grades focus on building concrete literacy, numeracy, logical reasoning, and early science concepts through interactive lessons.",
      bullets: [
        "Experiential learning methods",
        "Language fluency & reading hours",
        "Computer lab orientation",
        "Basic science models & arts",
      ],
      image: lifeScience,
    },
    {
      title: "Secondary",
      grade: "Grades VI – X",
      focus: "Concept depth & board preparedness",
      desc: "Secondary curriculum focuses on mastering subject concepts, analytical problem solving, and building discipline to prepare for board exams.",
      bullets: [
        "Advanced science laboratory training",
        "Syllabus oriented tutorials",
        "Leadership debates & speeches",
        "Competitive exams coaching",
      ],
      image: lifeSports,
    },
    {
      title: "Higher Secondary",
      grade: "Grades XI – XII",
      focus: "Science & Commerce career paths",
      desc: "Focused streams designed for higher studies, offering deep specialization, weekly assessments, and entrance exam guidance.",
      bullets: [
        "Science stream (Physics, Chem, Bio/Math)",
        "Commerce stream (Accounts, Economics, BA)",
        "Modern laboratory sessions",
        "Career counselling seminars",
      ],
      image: libraryImg,
    },
  ];

  return (
    <section className="section-pad bg-cream-deep/60">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 scroll-reveal">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Academic Programs
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              An educational path from nursery to graduation.
            </h2>
          </div>
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-glow group"
          >
            Syllabus Details{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch scroll-reveal-scale">
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
      </div>
    </section>
  );
}

function FacilitiesPreview() {
  const facilityCards = [
    {
      image: libraryImg,
      title: "Modern Library",
      desc: "A quiet, well-stocked reading hall with 5000+ reference textbooks, storybooks, and journals.",
    },
    {
      image: computerLabImg,
      title: "Computer Laboratory",
      desc: "Equipped with high-speed internet, coding workbenches, and modern LCD screens.",
    },
    {
      image: scienceLabImg,
      title: "Practical Science Labs",
      desc: "Dedicated workbenches for Chemistry, Physics, and Biology board-level practical experiments.",
    },
    {
      image: lifeSports,
      title: "Sports Fields & Arena",
      desc: "Nets for cricket practice, volleyball courts, and indoor rooms for Chess and Table Tennis.",
    },
    {
      image: busImg,
      title: "Safe Transportation",
      desc: "Secure bus routes covering major residential sectors in Rajkot, driven by verified staff.",
    },
    {
      image: aboutRealistic,
      title: "Smart Classrooms",
      desc: "Hygienic, bright classrooms fitted with smart digital projectors for interactive studies.",
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 scroll-reveal">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary" /> School Facilities{" "}
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Infrastructure built for modern, safe learning.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tour our custom facilities equipped with real physical models, digital screens, and
            safety locks.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilityCards.map(({ image, title, desc }, idx) => (
            <div
              key={title}
              className="card-lift bg-card rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:border-primary/10 flex flex-col group scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
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
          ))}
        </div>

        <div className="mt-12 flex justify-center scroll-reveal">
          <Link to="/facilities" className="btn-hero group">
            Explore All Facilities{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LifeAtSchool() {
  const tiles = [
    {
      src: lifeScience,
      label: "Science Exhibition",
      cls: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    },
    { src: lifeDance, label: "Cultural Festivals" },
    { src: lifeSports, label: "Athletic Matches" },
    { src: lifeArt, label: "Fine Arts & Drawing" },
    { src: lifeYoga, label: "Yoga & Meditation" },
    { src: libraryImg, label: "Silent Study Hour" },
  ];
  return (
    <section className="section-pad bg-ink text-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-page relative z-10">
        <div className="max-w-2xl space-y-4 scroll-reveal">
          <span className="eyebrow text-accent">Student Life at SHVS</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            Every day is an opportunity to discover new talents.
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed">
            Beyond regular textbooks, our students participate in coding competitions, yoga, science
            quizzes, inter-school sports leagues, and music festivals.
          </p>
        </div>

        {/* Fixed grid layout: 3 columns, perfectly filled 3x3 grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 auto-rows-[220px] scroll-reveal-scale">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl border border-cream/10 ${t.cls ?? ""}`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 transition-all duration-300 rounded-2xl m-2" />
              <div className="absolute bottom-5 left-5 right-5 text-cream transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[10px] uppercase tracking-widest text-accent font-bold">
                  Life at School
                </div>
                <div className="font-display font-extrabold text-xl mt-0.5">{t.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Rakesh & Nisha Patel",
    student: "Parent of Aarav (Grade V)",
    quote:
      "We are extremely pleased with the school's strict discipline combined with loving, friendly teachers. Aarav has grown in values, vocabulary, and physical agility.",
  },
  {
    name: "Mehul Trivedi",
    student: "Parent of Anaya (Grade II)",
    quote:
      "The curriculum's mixture of science concepts with cultural values is outstanding. The school bus service is punctual and monitored by lady assistants.",
  },
  {
    name: "Kirti Shah",
    student: "Parent of Dhruv (Grade IX)",
    quote:
      "A spacious campus, excellent computer workbenches, and teachers who give individual guidance. Dhruv has shown amazing growth in his secondary results.",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center space-y-4 scroll-reveal">
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
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className="card-lift bg-card rounded-3xl p-8 border border-border relative hover:border-primary/10 shadow-[var(--shadow-soft)] flex flex-col justify-between scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionsCTA() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-8 md:px-16 py-12 md:py-16 text-cream shadow-[var(--shadow-elegant)] scroll-reveal-scale"
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
              Enroll for 2026-27
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight text-cream">
              Give your child a school that feels like a second home.
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
              Visit our campus in Mavdi, Rajkot. Tour our labs, speak with our principal, and see
              classrooms in action.
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
      </div>
    </section>
  );
}
