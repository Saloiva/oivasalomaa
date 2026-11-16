import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { about, direction, portrait, profile, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oiva Salomaa – Toimittaja ja viestijä" },
      {
        name: "description",
        content:
          "Oiva Salomaa, journalismin opiskelija ja freelance-toimittaja Helsingistä. Tavoitteena on toimittajan työ valtakunnallisessa mediassa tai yritysviestinnässä.",
      },
      { property: "og:title", content: "Oiva Salomaa – Toimittaja ja viestijä" },
      {
        property: "og:description",
        content: "Journalismin opiskelija ja freelance-toimittaja Helsingistä. Julkaisut, työkokemus ja yhteystiedot.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const explore = [
  { to: "/julkaisut", title: ui.nav.publications, text: ui.pub.intro },
  { to: "/tyokokemus", title: ui.nav.experience, text: ui.exp.intro },
  { to: "/koulutus", title: ui.nav.education, text: ui.edu.intro },
] as const;

function Home() {
  const { t } = useLang();
  return (
    <>
      <section className="glow">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.3fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow text-highlight">{t(profile.title)}</p>
            <h1 className="headline mt-5 text-[clamp(4rem,11vw,9rem)]">
              Oiva
              <br />
              Salomaa
            </h1>
            <p className="mt-8 max-w-xl text-2xl leading-snug text-foreground/90">{t(profile.tagline)}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/julkaisut"
                className="eyebrow inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-3 text-highlight-foreground transition-opacity hover:opacity-90"
              >
                {t(ui.seeWork)} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/yhteystiedot"
                className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 transition-colors hover:border-highlight hover:text-highlight"
              >
                {t(ui.getInTouch)}
              </Link>
            </div>
          </div>
          <figure className="animate-rise [animation-delay:150ms]">
            <div className="overflow-hidden rounded-md border border-border soft-shadow">
              <img src={portrait} alt="Oiva Salomaa" className="aspect-[4/5] w-full object-cover" />
            </div>
          </figure>
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading number="01" title={t(ui.aboutTitle)} />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed lg:text-xl">
            {about.map((p, i) => (
              <p key={i} className={i === 0 ? "dropcap" : undefined}>
                {t(p)}
              </p>
            ))}
          </div>
          <div>
            <h3 className="eyebrow mb-4 text-muted-foreground">{t(ui.directionTitle)}</h3>
            <ul className="space-y-4">
              {direction.map((d) => (
                <li key={d.title.fi} className="rounded-md border border-border bg-card p-5">
                  <p className="headline text-2xl">{t(d.title)}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{t(d.text)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading number="02" title={t(ui.explore)} />
        <div className="grid gap-4 md:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group flex flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-highlight"
            >
              <span className="headline text-3xl">{t(e.title)}</span>
              <span className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{t(e.text)}</span>
              <ArrowUpRight className="mt-6 h-5 w-5 text-highlight transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
