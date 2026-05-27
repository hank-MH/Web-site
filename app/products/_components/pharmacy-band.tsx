import Link from "next/link";

export function PharmacyBand() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <p className="font-display text-2xl">
          Available only through authorized pharmacy partners.
        </p>
        <Link
          href="/#partners"
          className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors hover:bg-background/10"
        >
          Find a pharmacy
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
