import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { subscribeUrl, ui, type Article } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const { t, lang } = useLang();
  const title = lang === "en" ? article.titleEn : article.title;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full w-full cursor-pointer flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <div className="relative overflow-hidden rounded-md border border-border bg-card soft-shadow">
            <img
              src={article.image}
              alt={article.imageAlt}
              loading="lazy"
              className={`fade-bottom w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] ${featured ? "aspect-[4/3]" : "aspect-[16/11]"}`}
            />
            {article.column && (
              <span className="eyebrow absolute left-3 top-3 rounded-sm bg-highlight px-2 py-1 text-highlight-foreground">
                {article.column}
              </span>
            )}
          </div>
          <div className="mt-5 flex items-center gap-3 eyebrow text-muted-foreground">
            <span>
              {article.publication} {article.issue}
            </span>
            <span aria-hidden>·</span>
            <span>{article.pages}</span>
          </div>
          <h3 className={`headline mt-2 transition-colors group-hover:text-highlight ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>
            {title}
          </h3>
          {lang === "en" && (
            <p className="eyebrow mt-2 text-muted-foreground">
              {t(ui.pub.original)}: {article.title}
            </p>
          )}
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">{t(article.lead)}</p>
          <span className="eyebrow mt-4 inline-flex items-center gap-1 text-highlight">
            {t(ui.pub.read)}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-md border border-border bg-background p-0">
        <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
          <div className="self-stretch border-b border-border bg-muted md:border-b-0 md:border-r">
            {/* Preview only: the top of the page, faded out */}
            <div className="max-h-[60vh] overflow-hidden md:sticky md:top-0">
              <img src={article.image} alt={article.imageAlt} className="fade-bottom w-full object-cover object-top" />
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <DialogHeader className="text-left">
              <span className="eyebrow text-muted-foreground">
                {article.publication} {article.issue}
                {article.column ? ` · ${article.column}` : ""} · {article.pages}
              </span>
              <DialogTitle className="headline pt-2 text-4xl sm:text-5xl">{title}</DialogTitle>
              <DialogDescription className="eyebrow pt-2 text-foreground">{t(article.credits)}</DialogDescription>
            </DialogHeader>
            <p className="mt-6 text-xl leading-relaxed">{t(article.lead)}</p>
            {article.excerpt && (
              <div className="mt-6">
                <p className="eyebrow mb-3 text-muted-foreground">{t(ui.pub.excerptNote)}</p>
                <div className="fade-bottom space-y-4 text-lg leading-relaxed text-foreground/90">
                  {article.excerpt.map((p, i) => (
                    <p key={i} className={i === 0 ? "dropcap" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-base text-muted-foreground">
                {t(ui.pub.fullInMagazine)} {article.issue}.
              </p>
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-3 inline-flex items-center gap-1 text-highlight hover:underline underline-offset-4"
              >
                {t(ui.pub.subscribe)} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
