type Props = {
  eyebrow: string;
  productName: string;
  headline: string;
  sub: string;
  badges?: string[];
};

export function ProductHero({ eyebrow, productName, headline, sub, badges }: Props) {
  return (
    <section className="border-b border-line bg-[radial-gradient(ellipse_at_top_left,_rgba(139,111,71,0.08),_transparent_60%)]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:gap-20 md:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            {headline}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
            {productName}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {sub}
          </p>
          {badges && badges.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-foreground/15 px-3.5 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="relative aspect-[3/4] self-center rounded-2xl bg-gradient-to-br from-[#efe9df] to-[#dccfb8]" />
      </div>
    </section>
  );
}
