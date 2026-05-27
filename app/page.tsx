import Link from "next/link";

const products = [
  {
    slug: "mask",
    eyebrow: "Origin Rejuvenating Mask",
    title: "Stronger barrier, in 10 minutes",
    blurb:
      "A high-essence sheet mask with PDRN × EGF to refill and seal. Use 1–7× weekly based on skin needs.",
    href: "/products/mask",
  },
  {
    slug: "cream",
    eyebrow: "Origin Rejuvenating Cream",
    title: "The most complete daily repair",
    blurb:
      "Maximum PDRN+EGF concentration repairs surface and depth — the most complete daily care.",
    href: "/products/cream",
  },
  {
    slug: "sunscreen",
    eyebrow: "Moisture Sun Cream",
    title: "UV protection that also repairs",
    blurb:
      "From UV defense to post-UV repair in one — the most complete daily sun care.",
    href: "/products/sunscreen",
  },
];

const metrics = [
  { label: "Stronger Skin Barrier", value: "×2" },
  { label: "Skin-soothing effect", value: "×2" },
  { label: "Improved Skin Density", value: "×2" },
  { label: "Long-Lasting Hydration", value: "×2" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(139,111,71,0.08),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
            REVIVE — pharmacy-grade derma care
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Reclaim
            <br />
            your skin&apos;s prime.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            REVIONrx pairs PDRN and EGF at pharmacy-grade strength.
            <span className="block font-medium text-foreground">
              EGF refills. PDRN seals. One complete solution.
            </span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/products/cream"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Explore the Rejuvenating Cream
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#science"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              See the science
            </Link>
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Why PDRN × EGF together
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Refill. Seal. Repeat the prime.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              EGF acts directly to refill renewal at the surface. PDRN works
              indirectly in the deep dermis to seal in repair and lock
              structural recovery. Used together, they target both layers of
              the skin in a single routine.
            </p>
          </div>
          <div className="grid gap-5 self-center sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                FILL
              </p>
              <h3 className="mt-3 font-display text-2xl">EGF refills</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Epidermis-level renewal — boosts elasticity and repairs damaged
                surface skin.
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-widest text-muted/80">
                5 ppm · 99% bioactivity
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                LOCK
              </p>
              <h3 className="mt-3 font-display text-2xl">PDRN seals</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Deep-dermis support — locks moisture and structural recovery.
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-widest text-muted/80">
                1,200 ppm · 99% salmon-derived
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical */}
      <section id="clinical" className="border-b border-line bg-[#f4f1ec]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                Clinically proven
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                Over 2× stronger than high-potency PDRN-only or EGF-only creams.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Human study, OATC Skin Clinical Trial Center · Dec 15–16, 2025 ·
              22 women aged 20–65. Conducted by board-certified dermatologists.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <p className="font-display text-5xl text-accent-deep">
                  {m.value}
                </p>
                <p className="mt-4 text-sm font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                The lineup
              </p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl">
                Mask. Cream. Sun.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted md:block">
              Three formulas. One protocol. Pharmacy-grade PDRN × EGF, end to
              end.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-[0_2px_30px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#efe9df] to-[#dccfb8]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                  {p.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                  Discover
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Routine */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
            The routine
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl md:text-5xl">
            Three steps for full refill-and-seal care.
          </h2>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                name: "Mask, 10–20 min",
                copy: "After cleansing, use the REVIONrx mask for 10–20 minutes.",
              },
              {
                step: "02",
                name: "Cream, to finish",
                copy: "Layer with REVIONrx cream to seal in the routine.",
              },
              {
                step: "03",
                name: "Sun, before you go",
                copy: "Apply REVIONrx sunscreen before heading out to protect against UV.",
              },
            ].map((s) => (
              <li key={s.step} className="border-t border-foreground/15 pt-6">
                <p className="font-display text-3xl text-accent-deep">
                  {s.step}
                </p>
                <h3 className="mt-3 text-lg font-medium">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pharmacy disclaimer band */}
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
    </>
  );
}
