import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
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
      />

      <section className="section-pad">
        <div className="container-page space-y-24">
          {/* Eligibility Calculator */}
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

          {/* Stepper Steps */}
          <div>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-primary" /> Steps to Apply{" "}
                <span className="h-px w-8 bg-primary" />
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground">
                Five simple milestones to enroll.
              </h2>
            </div>

            <div className="relative border-l-2 border-accent/40 max-w-3xl mx-auto pl-8 space-y-12">
              {steps.map((s, idx) => (
                <div key={idx} className="relative group">
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
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
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

          {/* CTA Link */}
          <div className="text-center">
            <Link to="/contact" className="btn-hero group">
              Start Admissions Inquiry{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function EligibilityCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [eligible, setEligible] = useState(false);

  const calculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const targetDate = new Date("2026-06-01"); // June 1st of the academic year

    let age = targetDate.getFullYear() - birth.getFullYear();
    const monthDiff = targetDate.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() < birth.getDate())) {
      age--;
    }

    let eligibleGrade = "";
    let isOk = false;

    if (age < 3) {
      eligibleGrade = "Too young for Nursery. (Minimum age is 3 years by June 1st, 2026).";
    } else if (age === 3) {
      eligibleGrade = "Nursery (Playgroup)";
      isOk = true;
    } else if (age === 4) {
      eligibleGrade = "LKG (Junior KG)";
      isOk = true;
    } else if (age === 5) {
      eligibleGrade = "UKG (Senior KG)";
      isOk = true;
    } else if (age === 6) {
      eligibleGrade = "Grade I (Primary)";
      isOk = true;
    } else if (age === 7) {
      eligibleGrade = "Grade II";
      isOk = true;
    } else if (age === 8) {
      eligibleGrade = "Grade III";
      isOk = true;
    } else if (age === 9) {
      eligibleGrade = "Grade IV";
      isOk = true;
    } else if (age === 10) {
      eligibleGrade = "Grade V";
      isOk = true;
    } else if (age === 11) {
      eligibleGrade = "Grade VI (Secondary)";
      isOk = true;
    } else if (age === 12) {
      eligibleGrade = "Grade VII";
      isOk = true;
    } else if (age === 13) {
      eligibleGrade = "Grade VIII";
      isOk = true;
    } else if (age === 14) {
      eligibleGrade = "Grade IX";
      isOk = true;
    } else if (age === 15) {
      eligibleGrade = "Grade X";
      isOk = true;
    } else if (age === 16) {
      eligibleGrade = "Grade XI (Higher Secondary - Science/Commerce)";
      isOk = true;
    } else if (age === 17) {
      eligibleGrade = "Grade XII (Science/Commerce)";
      isOk = true;
    } else {
      eligibleGrade = "High School Graduate (Age 18+). Please contact school admin.";
      isOk = false;
    }

    setEligible(isOk);
    if (isOk) {
      setResult(`Your child is eligible for: ${eligibleGrade}`);
    } else {
      setResult(eligibleGrade);
    }
  };

  return (
    <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-[var(--shadow-soft)] max-w-xl mx-auto hover:border-primary/10 transition-colors">
      <p className="text-xs text-muted-foreground text-center mb-6">
        Enter your child's date of birth to check eligible grade for the 2026-27 academic term.
      </p>
      <form onSubmit={calculateEligibility} className="space-y-4">
        <div>
          <label className="text-xs font-extrabold uppercase tracking-wider text-foreground block mb-2">
            Child's Birth Date
          </label>
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button type="submit" className="btn-hero w-full justify-center">
          Calculate Eligibility
        </button>
      </form>
      {result && (
        <div
          className={`mt-6 p-4 rounded-xl text-center text-sm font-bold border animate-fade-up ${
            eligible
              ? "bg-primary/10 border-primary/20 text-foreground"
              : "bg-destructive/10 border-destructive/20 text-destructive-foreground"
          }`}
        >
          {eligible && <Check className="h-4 w-4 inline mr-2 text-primary" />}
          {result}
        </div>
      )}
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)]">
      {faqs.map((f, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="group">
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between p-6 text-left font-display font-extrabold text-foreground transition hover:bg-cream-deep/20"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-accent shrink-0" />
                {f.q}
              </span>
              <ChevronDown
                className={`ml-4 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[300px] border-t border-border" : "max-h-0"
              }`}
            >
              <p className="p-6 text-sm text-muted-foreground leading-relaxed bg-cream-deep/10">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
