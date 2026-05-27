import { ProductHero } from "../_components/product-hero";
import { SectionHeader } from "../_components/section-header";
import { MetricCard } from "../_components/metric-card";
import { Disclaimer } from "../_components/disclaimer";
import { PharmacyBand } from "../_components/pharmacy-band";

export const metadata = {
  title: "Origin Rejuvenating Mask · REVIONrx",
  description:
    "PDRN × EGF sheet mask — refill and seal, with visible repair in 10 minutes.",
};

const problems = [
  "Why does my skin get dry again right after I cleanse?",
  "Essence just sits on top.",
  "Feels hydrated only while I apply it, then tightens.",
  "Flares up at the slightest trigger.",
];

const recommend = [
  "For loss of firmness and visible wrinkles",
  "For those seeking a high-nutrition mask",
  "For skin that needs barrier care",
  "For reclaiming your skin's prime",
  "For redness-prone, easily irritated skin",
  "For when single-ingredient PDRN or EGF wasn't enough",
];

const cycle = [
  { care: "Soothing care", freq: "1–2× per week" },
  { care: "Barrier care", freq: "3–5× per week" },
  { care: "Deep skin care", freq: "6–7× per week" },
];

export default function MaskPage() {
  return (
    <>
      <ProductHero
        eyebrow="Section 01 · Sheet mask"
        productName="REVIONrx PDRN EGF Origin Rejuvenating Mask"
        headline="Reclaim your skin's prime."
        sub="A high-essence sheet mask with pharmacy-grade PDRN × EGF — refill and seal for visible repair in just 10 minutes."
        badges={["Dual-function", "Brightening & Anti-Wrinkle", "Skin-Tested"]}
      />

      {/* Problem */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="The problem"
            title="Replenish from the source — the double repair solution."
          />
          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {problems.map((p) => (
              <li
                key={p}
                className="rounded-2xl border border-line bg-white px-6 py-5 text-base text-foreground/80"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clinical */}
      <section className="border-b border-line bg-[#f4f1ec]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Clinically proven"
            title="Visible repair in just 10 minutes."
            intro="Heat-stressed skin, visibly calmed in just one use. Skin barrier improvement and inner elasticity after a single session."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard value="10 min" label="Time to visible repair" />
            <MetricCard value="1 use" label="Smoother skin texture" />
            <MetricCard value="22" label="Women aged 20–65" />
            <MetricCard value="OATC" label="Clinical trial center" />
          </div>
          <div className="mt-10">
            <Disclaimer>
              Human study on skin barrier improvement (self-renewal) for skin
              damaged by physical stimuli. Test institution: OATC Skin Clinical
              Trial Center. Test period: Dec 15–16, 2025. Subjects: 22 women
              aged 20–65. Image: best-improvement case. Effective only within
              trial period. Conducted by board-certified dermatologists.
            </Disclaimer>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Core synergy"
            title="EGF refills. PDRN seals."
            intro="Two pharmacy-grade actives, working at different depths — together they target both surface and dermis in a single sheet."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                FILL
              </p>
              <h3 className="mt-3 font-display text-3xl">EGF refills</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Boosts elasticity and repairs damaged surface skin. Acts
                directly on epidermal cell renewal.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-muted/80">
                5 ppm · 99% bioactivity
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                LOCK
              </p>
              <h3 className="mt-3 font-display text-3xl">PDRN seals</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Locks in moisture and structural recovery. Works in the deep
                dermis through indirect action.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-muted/80">
                1,200 ppm · 99% salmon-derived
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mask cycle */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="TIP — mask routine guide"
            title="How often to use it."
            intro="From soothing care to deep skin care — adjust your cadence to your skin's needs."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {cycle.map((c) => (
              <div
                key={c.care}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                  {c.care}
                </p>
                <p className="mt-4 font-display text-3xl">{c.freq}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="How to use"
            title="Two steps. Ten minutes."
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            <li className="border-t border-foreground/15 pt-6">
              <p className="font-display text-3xl text-accent-deep">01</p>
              <h3 className="mt-3 text-lg font-medium">Apply</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After cleansing, remove the mask from the pouch and fit the
                sheet to your face.
              </p>
            </li>
            <li className="border-t border-foreground/15 pt-6">
              <p className="font-display text-3xl text-accent-deep">02</p>
              <h3 className="mt-3 text-lg font-medium">Absorb</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After 10–20 minutes, remove the sheet and gently pat the
                remaining essence into your skin until absorbed.
              </p>
            </li>
          </ol>
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
