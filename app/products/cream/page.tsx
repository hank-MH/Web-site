import { ProductHero } from "../_components/product-hero";
import { SectionHeader } from "../_components/section-header";
import { MetricCard } from "../_components/metric-card";
import { Disclaimer } from "../_components/disclaimer";
import { PharmacyBand } from "../_components/pharmacy-band";

export const metadata = {
  title: "Origin Rejuvenating Cream · REVIONrx",
  description:
    "Maximum PDRN+EGF concentration — the most complete daily care for surface and depth.",
};

const recommend = [
  "For loss of firmness and visible wrinkles",
  "For dry, dehydrated skin that needs lasting moisture",
  "For weakened barriers and easily irritated skin",
  "For reclaiming your skin's prime",
];

const supporting = [
  { name: "HPR (Active Retinal)", role: "Firmness & wrinkle care" },
  { name: "Tocopherol", role: "Antioxidant" },
  { name: "Allantoin", role: "Soothing" },
  { name: "Adenosine", role: "Anti-wrinkle" },
  { name: "Niacinamide", role: "Brightening" },
  { name: "Low-Molecular Collagen", role: "Firmness care" },
];

export default function CreamPage() {
  return (
    <>
      <ProductHero
        eyebrow="The signature"
        productName="REVIONrx PDRN EGF Origin Rejuvenating Cream"
        headline="Fill & Lock — the only routine you need."
        sub="EGF refills. PDRN seals. One complete solution — at maximum pharmacy-grade concentration."
        badges={["PDRN 1,200ppm", "EGF 5ppm", "Pharmacy-only"]}
      />

      {/* Question / answer */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              The question
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
              Dull skin, fading firmness. What&apos;s causing your skin to age
              so quickly?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Over time, collagen depletes — firmness disappears and wrinkles
              become visible.
            </p>
          </div>
          <div className="self-end rounded-2xl border border-line bg-[#f4f1ec] p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              The answer
            </p>
            <p className="mt-4 font-display text-5xl md:text-6xl">
              Skin density
            </p>
            <p className="mt-4 text-sm text-muted">
              *Skin density = internal density of the skin.
            </p>
          </div>
        </div>
      </section>

      {/* Why PDRN × EGF */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="EGF and PDRN"
            title="The only cream with both."
            intro="EGF and PDRN — the two most-used ingredients in repair creams, especially trusted in pharmacy formulas."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                FILL — direct action
              </p>
              <h3 className="mt-3 font-display text-3xl">EGF</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A protein that stimulates epidermal cell growth — direct action
                on epidermal cells.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-muted/80">
                5 ppm · high concentration
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                LOCK — indirect action
              </p>
              <h3 className="mt-3 font-display text-3xl">PDRN</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Indirect action on the deep dermis. Induces blood vessel
                formation; binds adenosine receptors to suppress inflammation.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-muted/80">
                1,200 ppm · 99% salmon-derived
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted">
            Both support skin self-renewal, but in different ways — EGF acts
            directly and fast on the surface, while PDRN works indirectly at
            the cellular level.
          </p>
        </div>
      </section>

      {/* Clinical proof */}
      <section className="border-b border-line bg-[#f4f1ec]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Clinically proven"
              title="Over 2× stronger than PDRN- or EGF-only creams."
              intro="Targeting surface and deep skin at once: barrier, soothing, density, hydration."
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Human study, OATC Skin Clinical Trial Center · Dec 15–16, 2025 ·
              22 women aged 20–65.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard value="×2" label="Stronger Skin Barrier" />
            <MetricCard value="×2" label="Skin-soothing effect" />
            <MetricCard value="×2" label="Improved Skin Density" />
            <MetricCard value="×2" label="Long-Lasting Hydration" />
          </div>
          <div className="mt-10 space-y-3">
            <Disclaimer>
              Human study on long-lasting hydration / soothing effect / barrier
              improvement (self-renewal). Test institution: OATC Skin Clinical
              Trial Center. Test period: Dec 15–16, 2025. Subjects: 22 women
              aged 20–65. Image: best-improvement case. Effective only within
              trial period. Conducted by board-certified dermatologists.
            </Disclaimer>
          </div>
        </div>
      </section>

      {/* Supporting cast */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="The supporting cast"
            title="Six derma actives backing the dual repair."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-line bg-white px-6 py-5"
              >
                <p className="font-medium">{s.name}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-muted">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader eyebrow="How to use" title="Daily refill-and-seal." />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
            After cleansing and applying serum, finish with REVIONrx cream to
            lock in lasting hydration. Best when used for at least 3–6 months.
          </p>
        </div>
      </section>

      {/* Recommended for */}
      <section className="border-b border-line bg-[#f4f1ec]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader eyebrow="Recommend" title="Recommended for" />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {recommend.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-sm"
              >
                <span aria-hidden className="mt-0.5 text-accent-deep">
                  ✓
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PharmacyBand />
    </>
  );
}
