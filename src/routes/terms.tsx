import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Shree Haridarshan Vidya Sankul" },
      {
        name: "description",
        content: "Terms governing your use of the Shree Haridarshan Vidya Sankul website.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-pad">
        <article className="container-page max-w-3xl space-y-5">
          <p className="text-muted-foreground">
            By using this website you agree to use the information and inquiry channels here for
            lawful, personal purposes only. All content, images and marks are the property of Shree
            Haridarshan Vidya Sankul unless otherwise noted.
          </p>
          <p className="text-muted-foreground">
            Details published on this site are for general information. For binding admission, fee
            and academic information please contact the school office directly.
          </p>
        </article>
      </section>
    </>
  ),
});
