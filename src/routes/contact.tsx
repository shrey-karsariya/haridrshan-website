import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import contactHeaderBg from "@/assets/contact_header_bg.png";
import { Clock, Mail, MapPin, Phone, HelpCircle, Instagram, Facebook, Globe } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  grade: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Visit Shree Haridarshan Vidya Sankul on 80 Ft Mavdi Bypass Road, Near Bapasitaram Chowk, Mavdi, Rajkot. Call +91 94278 82733 or email haridarshanschool@gmail.com.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
      />
    </div>
  );
}

function ContactPage() {
  const [status, setStatus] = useState<null | "ok" | string>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setStatus("ok");
    form.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Visit our campus in Mavdi, Rajkot."
        subtitle="We welcome parents to visit our 6000+ books library, computer lab, meet Managing Director Hardik Sir & Principals, and discuss admissions."
        bgImage={contactHeaderBg}
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-5 items-start">
          {/* Details Block */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: MapPin,
                title: "Campus Location",
                body: "80 Ft Mavdi Bypass Road, Near Bapasitaram Chowk, Mavdi, Rajkot, Gujarat",
              },
              { icon: Phone, title: "Phone / Helpline", body: "+91 94278 82733", href: "tel:+919427882733" },
              { icon: Mail, title: "Email Address", body: "haridarshanschool@gmail.com", href: "mailto:haridarshanschool@gmail.com" },
              { icon: Clock, title: "School Desk Hours", body: "Mon – Sat · 8:00 AM – 4:00 PM" },
            ].map(({ icon: Icon, title, body, href }, idx) => (
              <ScrollReveal key={title} variant="fade-up" staggerIndex={idx} staggerStep={80}>
                <div className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] hover:border-primary/15 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-base text-foreground">
                      {title}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground text-sm font-semibold hover:text-primary transition-colors block mt-1"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="text-muted-foreground text-sm font-semibold mt-1">{body}</div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Social & Google Badge */}
            <ScrollReveal variant="fade-up" delay={350}>
              <div className="bg-card p-5 rounded-3xl border border-border space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">Connect With Us</div>
                <div className="text-sm font-semibold text-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" /> Google: <span className="text-muted-foreground">Shree Haridarshan Vidya Sankul</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-primary" /> Instagram: <span className="text-muted-foreground">@shreeharidarshanschool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Facebook className="h-4 w-4 text-primary" /> Facebook: <span className="text-muted-foreground">Shree Haridarshan School</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Frame */}
            <ScrollReveal variant="zoom-in" delay={450}>
              <div className="rounded-3xl overflow-hidden border border-border h-64 shadow-[var(--shadow-soft)] relative group">
                <iframe
                  title="Shree Haridarshan Vidya Sankul on Google Maps"
                  src="https://www.google.com/maps?q=Shree+Haridarshan+Vidya+Sankul+Mavdi+Bypass+Road+Rajkot&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <ScrollReveal variant="slide-right" delay={150}>
              <form
                onSubmit={onSubmit}
                className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] space-y-6"
              >
                <div>
                  <h2 className="font-display text-3xl font-extrabold text-foreground">
                    Admission & General Inquiry Form
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill in your details below and our school admissions office will contact you promptly.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Parent / Guardian Name"
                    name="name"
                    required
                    placeholder="Enter parent's full name"
                  />
                  <Field
                    label="Contact Phone Number"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="haridarshanschool@gmail.com"
                  />
                  <Field
                    label="Target Grade / Standard"
                    name="grade"
                    placeholder="e.g. Playgroup, Grade 5, 11th Commerce"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Ask about affordable fee structure, unit test system, sports coaching, or school bus routes..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-hero w-full sm:w-auto shadow-[var(--shadow-glow)] hover:shadow-none transition-all duration-300"
                >
                  Submit Inquiry
                </button>

                {status === "ok" && (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-foreground font-bold text-sm text-center animate-fade-up">
                    Thank you! Our admission representative will reach out shortly.
                  </div>
                )}
                {status && status !== "ok" && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive-foreground font-bold text-sm text-center animate-fade-up">
                    {status}
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
