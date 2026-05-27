import Link from "next/link";

const nav = [
  { label: "Mask", href: "/products/mask" },
  { label: "Cream", href: "/products/cream" },
  { label: "Sunscreen", href: "/products/sunscreen" },
  { label: "Science", href: "/#science" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl tracking-tight">REVION</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
            rx
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/products/cream"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider text-background transition-opacity hover:opacity-90"
        >
          Shop now
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
