import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Clock, Mail, MapPin, Phone, HelpCircle } from "lucide-react";
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
      { title: "Contact | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "Visit or contact Shree Haridarshan Vidya Sankul, Mavdi Bypass Road, Rajkot. Call +91 94278 82733.",
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
        title="Come visit us in Mavdi, Rajkot."
        subtitle="We would love to meet you, walk you through our science/computer labs, and answer every question you have."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-5 items-start">
          {/* Details Block */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: MapPin,
                title: "Address",
                body: "Mavdi Bypass Road, Madhav Park, Mavdi Village, Rajkot, Gujarat 360004",
              },
              { icon: Phone, title: "Phone", body: "+91 94278 82733", href: "tel:+919427882733" },
              { icon: Mail, title: "Email Address", body: "info@haridarshanschool.com" },
              { icon: Clock, title: "Office Hours", body: "Mon – Sat · 8:00 AM – 4:00 PM" },
            ].map(({ icon: Icon, title, body, href }) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] hover:border-primary/15 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all duration-300"
              >
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
            ))}

            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-border h-72 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 relative group">
              <iframe
                title="School location on Google Maps"
                src="https://www.google.com/maps?q=Shree+Haridarshan+School+Mavdi+Bypass+Road+Rajkot&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>

          {/* Inquiry Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] space-y-6"
          >
            <div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">
                Admission & General Inquiry
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Submit this form and our admissions desk will contact you within one working day.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="name"
                required
                placeholder="Enter parent's full name"
              />
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                required
                placeholder="Enter mobile number"
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              <Field
                label="Target Grade / Standard"
                name="grade"
                placeholder="e.g. Grade III or XI Science"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                Detailed Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Ask about syllabus, transport routes, or fees structure..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="btn-hero w-full sm:w-auto shadow-[var(--shadow-glow)] hover:shadow-none transition-all duration-300"
            >
              Submit Form Details
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
        </div>
      </section>
    </>
  );
}
