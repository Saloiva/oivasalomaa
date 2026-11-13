import { createFileRoute } from "@tanstack/react-router";
import { OrgLogo } from "@/components/portfolio/OrgLogo";
import { PageHeader } from "@/components/portfolio/SectionHeading";
import { experience, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/tyokokemus")({
  head: () => ({
    meta: [
      { title: "Työkokemus – Oiva Salomaa" },
      {
        name: "description",
        content: "Oiva Salomaan työkokemus: Casino Helsinki, Kuurojen Lehti, kuuloalan järjestöt, Sanoma Media Finland ja McDonald’s.",
      },
      { property: "og:title", content: "Työkokemus – Oiva Salomaa" },
      { property: "og:description", content: "Journalismia, myyntiä, asiakaspalvelua ja ohjaustyötä. Uusin ensin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(ui.portfolio)} title={t(ui.exp.title)} intro={t(ui.exp.intro)} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ol className="space-y-6">
          {experience.map((job) => (
            <li
              key={job.role.fi + job.org.fi}
              className="grid gap-6 rounded-md border border-border bg-card p-6 sm:p-8 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <div className="space-y-1">
                {job.periods.map((p) => (
                  <p key={p} className="eyebrow whitespace-nowrap text-highlight">
                    {p}
                  </p>
                ))}
                <p className="pt-2 text-sm text-muted-foreground">{t(job.meta)}</p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <OrgLogo src={job.logo} name={t(job.org)} />
                  <div className="min-w-0">
                    <h2 className="headline text-2xl leading-tight sm:text-3xl">{t(job.role)}</h2>
                    <p className="mt-1 text-lg text-muted-foreground">{t(job.org)}</p>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/85">{t(job.description)}</p>
                {job.sub && (
                  <div className="mt-6">
                    <p className="eyebrow mb-3 text-muted-foreground">{t(ui.exp.orgs)}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {job.sub.map((s) => (
                        <li key={s.org} className="flex items-center gap-3 rounded-md border border-border bg-background/40 p-3">
                          <OrgLogo src={s.logo} name={s.org} small />
                          <div className="min-w-0">
                            <p className="text-base leading-snug">{s.org}</p>
                            <p className="eyebrow mt-1 whitespace-nowrap text-muted-foreground">{s.period}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
