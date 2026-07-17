import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content:
          "How Shree Haridarshan Vidya Sankul handles information submitted through this website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="section-pad">
        <article className="container-page max-w-3xl space-y-5">
          <p className="text-muted-foreground">
            This page describes how information submitted through the school's website is handled.
          </p>
          <h3 className="font-display text-2xl font-bold">Information We Collect</h3>
          <p className="text-muted-foreground">
            When you submit an inquiry we collect the name, phone, email, class and message you
            provide. We use this only to respond to your inquiry.
          </p>
          <h3 className="font-display text-2xl font-bold">How We Use It</h3>
          <p className="text-muted-foreground">
            Details are used to contact you regarding admissions or the specific query raised. We do
            not sell your information.
          </p>
          <h3 className="font-display text-2xl font-bold">Contact</h3>
          <p className="text-muted-foreground">
            For any privacy question, please call +91 94278 82733.
          </p>
        </article>
      </section>
    </>
  ),
});
