import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/SectionHeading";
import { education, interests, languages, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/koulutus")({
  head: () => ({
    meta: [
      { title: "Koulutus ja kielitaito – Oiva Salomaa" },
      {
        name: "description",
        content: "Oiva Salomaan koulutus (medianomi AMK, Haaga-Helia), kielitaito ja kiinnostuksen kohteet.",
      },
      { property: "og:title", content: "Koulutus ja kielitaito – Oiva Salomaa" },
      { property: "og:description", content: "Koulutus, kielitaito ja kiinnostuksen kohteet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Education,
});

function Education() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(ui.portfolio)} title={t(ui.edu.title)} intro={t(ui.edu.intro)} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="eyebrow mb-2 border-b border-border pb-3 text-muted-foreground">{t(ui.edu.education)}</h2>
          <ol>
            {education.map((e) => (
              <li key={e.degree.fi} className="grid gap-2 border-b border-border py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="eyebrow whitespace-nowrap pt-1 text-highlight">{e.period}</p>
                <div>
                  <p className="headline text-2xl leading-tight sm:text-3xl">{t(e.degree)}</p>
                  <p className="mt-1 text-lg text-muted-foreground">{t(e.school)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="eyebrow mb-2 border-b border-border pb-3 text-muted-foreground">{t(ui.edu.languages)}</h2>
            <ul>
              {languages.map((l) => (
                <li key={l.name.fi} className="flex items-baseline justify-between gap-4 border-b border-border py-4">
                  <span className="text-xl">{t(l.name)}</span>
                  <span className="eyebrow text-muted-foreground">{t(l.level)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4 border-b border-border pb-3 text-muted-foreground">{t(ui.edu.interests)}</h2>
            <ul className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <li key={i.fi} className="rounded-full border border-border px-4 py-2 text-base">
                  {t(i)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
