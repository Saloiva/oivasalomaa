export function OrgLogo({ src, name, small = false }: { src: string; name: string; small?: boolean }) {
  return (
    <div
      className={`${small ? "h-10 w-10" : "h-14 w-14"} shrink-0 overflow-hidden rounded-md border border-border bg-card`}
    >
      <img src={src} alt={`${name} – logo`} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}
