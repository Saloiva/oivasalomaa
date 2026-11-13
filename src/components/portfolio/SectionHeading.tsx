export function SectionHeading({ number, title, kicker }: { number?: string; title: string; kicker?: string }) {
  return (
    <div className="mb-10 border-t border-border pt-4">
      <div className="flex items-baseline justify-between gap-4">
        {number && <span className="eyebrow text-highlight">{number}</span>}
        {kicker && <span className="eyebrow hidden text-muted-foreground sm:inline">{kicker}</span>}
      </div>
      <h2 className="headline mt-3 text-4xl sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

/** Large title block at the top of each tab. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="glow border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 md:pb-16 md:pt-20">
        <p className="eyebrow text-highlight animate-rise">{eyebrow}</p>
        <h1 className="headline mt-4 text-[clamp(3rem,8vw,6.5rem)] animate-rise [animation-delay:80ms]">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms]">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
