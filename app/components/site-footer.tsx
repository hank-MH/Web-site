import Link from "next/link";

const groups = [
  {
    heading: "Shop",
    items: [
      { label: "Origin Rejuvenating Mask", href: "/products/mask" },
      { label: "Origin Rejuvenating Cream", href: "/products/cream" },
      { label: "Moisture Sun Cream", href: "/products/sunscreen" },
    ],
  },
  {
    heading: "Science",
    items: [
      { label: "PDRN × EGF synergy", href: "/#science" },
      { label: "Clinical evidence", href: "/#clinical" },
      { label: "Ingredients", href: "/#ingredients" },
    ],
  },
  {
    heading: "Brand",
    items: [
      { label: "About REVIONrx", href: "/#about" },
      { label: "Pharmacy partners", href: "/#partners" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line bg-[#f4f1ec]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl tracking-tight">REVION</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
                rx
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Pharmacy-grade PDRN × EGF skincare. Available only through
              authorized pharmacy partners.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                {g.heading}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} REVIONrx by Baropharm. All rights reserved.</p>
          <p>Pharmacy-exclusive distribution. Trial results reflect best-case improvement within test period.</p>
        </div>
      </div>
    </footer>
  );
}
