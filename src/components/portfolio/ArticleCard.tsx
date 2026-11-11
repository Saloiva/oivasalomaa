import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Article } from "@/content/portfolio";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full w-full cursor-pointer flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <div className="relative overflow-hidden border-2 border-foreground bg-card clip-shadow transition-transform duration-300 group-hover:-translate-y-1">
            <img
              src={article.image}
              alt={article.imageAlt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${featured ? "aspect-[4/3]" : "aspect-[16/11]"}`}
            />
            {article.column && (
              <span className="eyebrow absolute left-3 top-3 bg-highlight px-2 py-1 text-highlight-foreground">
                {article.column}
              </span>
            )}
          </div>
          <div className="mt-5 flex items-center gap-3 eyebrow text-muted-foreground">
            <span>{article.publication}</span>
            <span aria-hidden>·</span>
            <span>{article.pages}</span>
          </div>
          <h3 className={`headline mt-2 ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>
            <span className="box-decoration-clone bg-no-repeat transition-[background-size] duration-500 marker [background-size:0%_100%] group-hover:[background-size:100%_100%]">
              {article.title}
            </span>
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">{article.lead}</p>
          <span className="eyebrow mt-4 inline-flex items-center gap-1 text-foreground">
            {article.body ? "Lue koko juttu" : "Avaa lehtiaukeama"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-none border-2 border-foreground bg-background p-0 sm:rounded-none">
        <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
          <div className="border-b-2 border-foreground bg-muted md:border-b-0 md:border-r-2">
            <a href={article.image} target="_blank" rel="noreferrer" title="Avaa kuva isona">
              <img src={article.image} alt={article.imageAlt} className="h-full w-full object-contain" />
            </a>
          </div>
          <div className="p-6 sm:p-10">
            <DialogHeader className="text-left">
              <span className="eyebrow text-muted-foreground">
                {article.publication}
                {article.column ? ` · ${article.column}` : ""} · {article.pages}
              </span>
              <DialogTitle className="headline pt-2 text-4xl sm:text-5xl">{article.title}</DialogTitle>
              <DialogDescription className="eyebrow pt-2 text-foreground">{article.credits}</DialogDescription>
            </DialogHeader>
            <p className="mt-6 text-xl font-medium leading-relaxed">{article.lead}</p>
            {article.body ? (
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/90">
                {article.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "dropcap" : undefined}>
                    {p}
                  </p>
                ))}
                <p aria-hidden className="text-right">■</p>
              </div>
            ) : (
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Koko juttu on luettavissa lehtiaukeamalta. Avaa kuva isommaksi napsauttamalla sitä.
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
