import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { profile, ui, type Lang } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

const tabs = [
  { to: "/", label: ui.nav.home },
  { to: "/julkaisut", label: ui.nav.publications },
  { to: "/tyokokemus", label: ui.nav.experience },
  { to: "/koulutus", label: ui.nav.education },
  { to: "/yhteystiedot", label: ui.nav.contact },
] as const;

export function SiteHeader() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="headline text-2xl tracking-tight">
          Oiva Salomaa<span className="text-highlight">.</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {tabs.map((tab) => (
            <TabLink key={tab.to} to={tab.to} label={t(tab.label)} />
          ))}
        </nav>
        <LangToggle />
      </div>
      <nav className="-mb-px flex gap-1 overflow-x-auto px-3 pb-2 md:hidden" aria-label="Main">
        {tabs.map((tab) => (
          <TabLink key={tab.to} to={tab.to} label={t(tab.label)} />
        ))}
      </nav>
    </header>
  );
}

function TabLink({ to, label }: { to: (typeof tabs)[number]["to"]; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      className="eyebrow whitespace-nowrap rounded-full px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
      activeProps={{ className: "bg-secondary !text-highlight" }}
    >
      {label}
    </Link>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["fi", "en"];
  return (
    <div className="flex shrink-0 rounded-full border border-border p-0.5" role="group" aria-label="Kieli / Language">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`eyebrow rounded-full px-3 py-1.5 transition-colors ${
            lang === o ? "bg-highlight text-highlight-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="headline text-2xl">
            Oiva Salomaa<span className="text-highlight">.</span>
          </p>
          <p className="eyebrow mt-2 text-muted-foreground">
            {t(profile.title)} · {t(profile.location)}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 eyebrow">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-highlight">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a href={profile.linkedin.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-highlight">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={profile.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-highlight">
            <Instagram className="h-4 w-4" /> {profile.instagram.handle}
          </a>
        </div>
      </div>
      <p className="eyebrow mx-auto max-w-6xl px-5 pb-8 text-muted-foreground sm:px-8">© 2026 Oiva Salomaa</p>
    </footer>
  );
}
