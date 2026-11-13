import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Newspaper } from "lucide-react";
import { ArticleCard } from "@/components/portfolio/ArticleCard";
import { PageHeader, SectionHeading } from "@/components/portfolio/SectionHeading";
import { articles, otherWork, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/julkaisut")({
  head: () => ({
    meta: [
      { title: "Julkaisut – Oiva Salomaa" },
      {
        name: "description",
        content: "Oiva Salomaan henkilöjutut ja kolumnit Kuurojen Lehdessä sekä artikkelit ja videot 360journalismia-mediassa.",
      },
      { property: "og:title", content: "Julkaisut – Oiva Salomaa" },
      {
        property: "og:description",
        content: "Henkilöjuttuja, kolumneja, artikkeleita ja videojuttuja. Uusin ensin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Publications,
});

function Publications() {
  const { t } = useLang();
  const [first, second, ...rest] = articles;
  return (
    <>
      <PageHeader eyebrow={t(ui.portfolio)} title={t(ui.pub.title)} intro={t(ui.pub.intro)} />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading number="01" title={t(ui.pub.magazine)} kicker="4/2025 – 3/2026" />
        <p className="-mt-4 mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t(ui.pub.magazineNote)}</p>
        <div className="grid gap-12 lg:grid-cols-2">
          {[first, second].map((a) => a && <ArticleCard key={a.slug} article={a} featured />)}
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <SectionHeading number="02" title="360journalismia" kicker={t(ui.pub.other)} />
        <ul className="divide-y divide-border border-y border-border">
          {otherWork.map((w) => (
            <li key={w.url}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 md:grid-cols-[10rem_1fr_auto] md:gap-8"
              >
                <div className="space-y-2">
                  <p className="eyebrow whitespace-nowrap text-muted-foreground">{w.date}</p>
                  <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
                    {w.platform === "instagram" ? <Instagram className="h-3 w-3" /> : <Newspaper className="h-3 w-3" />}
                    {t(w.kind)}
                  </span>
                </div>
                <div>
                  <h3 className="headline text-2xl leading-tight transition-colors group-hover:text-highlight md:text-3xl">
                    {w.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">{t(w.description)}</p>
                  <p className="eyebrow mt-3 text-muted-foreground">{t(w.credits)}</p>
                </div>
                <span className="eyebrow inline-flex items-center gap-1 self-start whitespace-nowrap text-highlight md:pt-1">
                  {t(w.platform === "instagram" ? ui.pub.openIg : ui.pub.openWeb)}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
