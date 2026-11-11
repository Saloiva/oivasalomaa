import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import portrait from "@/assets/oiva_salomaa_portrait.jpg.asset.json";
import { ArticleCard } from "@/components/portfolio/ArticleCard";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import {
  about,
  articles,
  careerGoal,
  education,
  experience,
  interests,
  keyFacts,
  languages,
  otherWork,
  profile,
} from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oiva Salomaa – Osaamisportfolio" },
      {
        name: "description",
        content:
          "Oiva Salomaa, journalismin opiskelija Haaga-Heliassa. Julkaistut jutut, työkokemus, koulutus ja kielitaito.",
      },
      { property: "og:title", content: "Oiva Salomaa – Osaamisportfolio" },
      {
        property: "og:description",
        content: "Journalismin opiskelija ja tuleva viestijä. Julkaisut, työkokemus ja yhteystiedot.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#minusta", label: "Minusta" },
  { href: "#julkaisut", label: "Julkaisut" },
  { href: "#tyokokemus", label: "Työkokemus" },
  { href: "#koulutus", label: "Koulutus" },
  { href: "#yhteystiedot", label: "Yhteys" },
];

function Index() {
  const featuredArticles = articles.slice(0, 2);
  const rest = articles.slice(2);

  return (
    <div className="min-h-screen">
      {/* Masthead */}
      <header className="border-b border-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <span className="eyebrow">Osaamisportfolio</span>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="eyebrow hover:underline underline-offset-4">
                {n.label}
              </a>
            ))}
          </nav>
          <span className="eyebrow text-muted-foreground">Helsinki · 2026</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 md:pt-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow mb-6 inline-block bg-highlight px-2 py-1 text-highlight-foreground">
              {profile.title}
            </p>
            <h1 className="headline text-[clamp(4.5rem,13vw,11rem)]">
              Oiva
              <br />
              Salomaa
            </h1>
            <p className="mt-8 max-w-xl text-2xl leading-snug md:text-3xl">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 eyebrow">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a href={profile.phoneHref} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
              <a href={profile.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                <Instagram className="h-4 w-4" /> {profile.instagram.handle}
              </a>
              <a href={profile.linkedin.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
            </div>
          </div>
          <figure className="animate-rise [animation-delay:150ms]">
            <div className="border-2 border-foreground clip-shadow">
              <img src={portrait.url} alt="Oiva Salomaa" className="aspect-[4/5] w-full object-cover object-[50%_70%]" />
            </div>
            <figcaption className="eyebrow mt-3 text-muted-foreground">Kuva: Oiva Salomaa</figcaption>
          </figure>
        </div>

        {/* Key facts strip */}
        <dl className="mt-16 grid grid-cols-2 border-y border-foreground md:grid-cols-4">
          {keyFacts.map(([k, v], i) => (
            <div key={v} className={`px-4 py-6 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-foreground`}>
              <dt className="headline text-5xl">{k}</dt>
              <dd className="mt-2 text-base text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section id="minusta" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-8">
        <SectionHeading number="01" title="Minusta" kicker="Osaamisportfolio" />
        <div className="gap-10 text-lg leading-relaxed md:columns-2 lg:text-xl">
          {about.map((p, i) => (
            <p key={i} className={`mb-5 break-inside-avoid-column ${i === 0 ? "dropcap" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="julkaisut" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-8">
        <SectionHeading number="02" title="Julkaisut" kicker="Kuurojen Lehti · 360journalismia" />
        <div className="grid gap-12 lg:grid-cols-2">
          {featuredArticles.map((a) => (
            <ArticleCard key={a.slug} article={a} featured />
          ))}
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="eyebrow mb-2 border-b border-foreground pb-3">360journalismia · artikkelit ja videot</h3>
          <ul>
            {otherWork.map((w) => (
              <li key={w.url} className="border-b border-border">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-3 py-7 md:grid-cols-[11rem_1fr_auto] md:gap-8"
                >
                  <div className="space-y-2">
                    <p className="eyebrow whitespace-nowrap">{w.date}</p>
                    <span className="eyebrow inline-block bg-foreground px-2 py-1 text-background">{w.kind}</span>
                  </div>
                  <div>
                    <h4 className="headline text-2xl leading-tight md:text-3xl">
                      <span className="box-decoration-clone bg-no-repeat transition-[background-size] duration-500 marker [background-size:0%_100%] group-hover:[background-size:100%_100%]">
                        {w.title}
                      </span>
                    </h4>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">{w.description}</p>
                    <p className="eyebrow mt-3 text-muted-foreground">{w.credits}</p>
                  </div>
                  <span className="eyebrow inline-flex items-center gap-1 self-start whitespace-nowrap md:pt-1">
                    {w.linkLabel}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section id="tyokokemus" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-8">
        <SectionHeading number="03" title="Työkokemus" kicker="Uusin ensin" />
        <ol>
          {experience.map((job) => (
            <li
              key={job.role + job.org}
              className="grid gap-4 border-b border-border py-8 first:pt-0 md:grid-cols-[11rem_1fr_1fr] md:gap-8"
            >
              <div>
                <p className="eyebrow whitespace-nowrap">{job.period}</p>
                {job.meta && <p className="mt-1 text-sm text-muted-foreground">{job.meta}</p>}
              </div>
              <div className="flex items-start gap-4">
                {job.logo && <OrgLogo src={job.logo} name={job.org} />}
                <div>
                  <h3 className="headline text-3xl leading-tight">{job.role}</h3>
                  <p className="mt-1 text-lg">{job.org}</p>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/80">{job.description}</p>
                {job.sub && (
                  <ul className="mt-4 space-y-3">
                    {job.sub.map((s) => (
                      <li key={s.org} className="flex items-center gap-3 border-l-4 border-highlight pl-3">
                        {(s.logo || s.monogram) && <OrgLogo src={s.logo} monogram={s.monogram} name={s.org} small />}
                        <div className="min-w-0">
                          <p className="text-base leading-snug">{s.org}</p>
                          <p className="eyebrow mt-0.5 whitespace-nowrap text-muted-foreground">{s.period}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education, languages, interests */}
      <section id="koulutus" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-8">
        <SectionHeading number="04" title="Koulutus & kielet" />
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow mb-4 border-b border-foreground pb-3">Koulutus</h3>
            <ul className="space-y-6">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="eyebrow text-muted-foreground">{e.period}</p>
                  <p className="headline mt-1 text-2xl leading-tight">{e.degree}</p>
                  <p className="text-lg">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 border-b border-foreground pb-3">Kielitaito</h3>
            <ul>
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border py-3">
                  <span className="text-xl">{l.name}</span>
                  <span className="eyebrow text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 border-b border-foreground pb-3">Kiinnostuksen kohteet</h3>
            <ul className="flex flex-wrap gap-2">
              {interests.map((t) => (
                <li key={t} className="border border-foreground px-3 py-1.5 text-base">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{careerGoal}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="yhteystiedot" className="scroll-mt-6 bg-highlight text-highlight-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">05 · Yhteystiedot</p>
          <h2 className="headline mt-4 text-5xl sm:text-7xl md:text-8xl">Otetaan yhteyttä.</h2>
          <div className="mt-12 grid gap-8 border-t-2 border-highlight-foreground pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <a href={`mailto:${profile.email}`} className="group">
              <p className="eyebrow">Sähköposti</p>
              <p className="mt-2 inline-flex items-center gap-2 text-2xl group-hover:underline underline-offset-4">
                {profile.email} <ArrowUpRight className="h-5 w-5" />
              </p>
            </a>
            <a href={profile.phoneHref} className="group">
              <p className="eyebrow">Puhelin</p>
              <p className="mt-2 text-2xl group-hover:underline underline-offset-4">{profile.phone}</p>
            </a>
            <a href={profile.instagram.url} target="_blank" rel="noreferrer" className="group">
              <p className="eyebrow">Instagram</p>
              <p className="mt-2 inline-flex items-center gap-2 text-2xl group-hover:underline underline-offset-4">
                {profile.instagram.handle} <ArrowUpRight className="h-5 w-5" />
              </p>
            </a>
            <a href={profile.linkedin.url} target="_blank" rel="noreferrer" className="group">
              <p className="eyebrow">LinkedIn</p>
              <p className="mt-2 inline-flex items-center gap-2 text-2xl group-hover:underline underline-offset-4">
                {profile.linkedin.handle} <ArrowUpRight className="h-5 w-5" />
              </p>
            </a>
            <div>
              <p className="eyebrow">Sijainti</p>
              <p className="mt-2 text-2xl">{profile.location}</p>
            </div>
          </div>
          <p className="eyebrow mt-16">© 2026 Oiva Salomaa</p>
        </div>
      </footer>
    </div>
  );
}

function OrgLogo({
  src,
  monogram,
  name,
  small = false,
}: {
  src?: string | undefined;
  monogram?: string | undefined;
  name: string;
  small?: boolean;
}) {
  const size = small ? "h-10 w-16" : "h-14 w-14";
  return (
    <div className={`${size} shrink-0 overflow-hidden border-2 border-foreground bg-card`}>
      {src ? (
        <img src={src} alt={`${name} – logo`} loading="lazy" className="h-full w-full object-contain" />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-mono text-[0.6rem] font-semibold tracking-wider">
          {monogram}
        </span>
      )}
    </div>
  );
}
