import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/portfolio/SectionHeading";
import { profile, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/yhteystiedot")({
  head: () => ({
    meta: [
      { title: "Yhteystiedot – Oiva Salomaa" },
      { name: "description", content: "Ota yhteyttä Oiva Salomaaseen sähköpostilla, LinkedInissä tai Instagramissa." },
      { property: "og:title", content: "Yhteystiedot – Oiva Salomaa" },
      { property: "og:description", content: "Yhteistyö, juttuidea tai avoin tehtävä? Ota yhteyttä." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const items = [
    { icon: Mail, label: t(ui.contact.email), value: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.handle, href: profile.linkedin.url, external: true },
    { icon: Instagram, label: "Instagram", value: profile.instagram.handle, href: profile.instagram.url, external: true },
  ];
  return (
    <>
      <PageHeader eyebrow={t(ui.nav.contact)} title={t(ui.contact.title)} intro={t(ui.contact.intro)} />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 sm:px-8">
        {items.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group rounded-md border border-border bg-card p-6 transition-colors hover:border-highlight sm:p-8"
          >
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <Icon className="h-4 w-4" /> {label}
            </p>
            <p className="mt-4 flex items-center gap-2 text-2xl transition-colors group-hover:text-highlight lg:text-3xl">
              <span className="min-w-0 [overflow-wrap:anywhere]">{value}</span> <ArrowUpRight className="h-5 w-5 shrink-0" />
            </p>
          </a>
        ))}
        <div className="rounded-md border border-border bg-card p-6 sm:p-8">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" /> {t(ui.contact.location)}
          </p>
          <p className="mt-4 text-2xl lg:text-3xl">{t(profile.location)}</p>
        </div>
      </section>
    </>
  );
}
