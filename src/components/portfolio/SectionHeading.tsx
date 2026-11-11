export function SectionHeading({ number, title, kicker }: { number: string; title: string; kicker?: string }) {
  return (
    <div className="mb-10 border-t-4 border-foreground pt-4">
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-muted-foreground">{number}</span>
        {kicker && <span className="eyebrow text-muted-foreground hidden sm:inline">{kicker}</span>}
      </div>
      <h2 className="headline mt-3 text-5xl sm:text-6xl md:text-7xl">{title}</h2>
    </div>
  );
}
