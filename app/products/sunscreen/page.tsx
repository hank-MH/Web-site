import { ProductHero } from "../_components/product-hero";
import { SectionHeader } from "../_components/section-header";
import { MetricCard } from "../_components/metric-card";
import { Disclaimer } from "../_components/disclaimer";
import { PharmacyBand } from "../_components/pharmacy-band";

export const metadata = {
  title: "Origin Rejuvenating Moisture Sun Cream · REVIONrx",
  description:
    "From UV defense to post-UV repair — pharmacy-grade sun care formulated with PDRN + EGF.",
};

const recommend = [
  "For daily UV protection without dryness",
  "For sensitive skin that reacts to most sunscreens",
  "For pairing sun care with repair, not just shielding",
  "For all-day reapplication needs",
];

export default function SunscreenPage() {
  return (
    <>
      <ProductHero
        eyebrow="Sun + repair"
        productName="REVIONrx PDRN EGF Origin Rejuvenating Moisture Sun Cream"
        headline="Shield. Then repair."
        sub="From UV 1) protection to 2) repair in one — the most complete sun care, formulated with pharmacy-grade PDRN + EGF."
        badges={["SPF / PA per pack", "Hydrating texture", "Daily reapply"]}
      />

      {/* Why this sunscreen */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Why this sunscreen"
            title="Formulated with a pharmacy-derived PDRN + EGF complex — more hydrated with every use."
            intro="Most sunscreens only shield. REVIONrx pairs UV defense with skin repair so daily protection becomes daily care."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                Surface — EGF
              </p>
              <h3 className="mt-3 font-display text-3xl">Refill the surface</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Refills epidermal renewal under daily UV exposure.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                Depth — PDRN
              </p>
              <h3 className="mt-3 font-display text-3xl">Seal the deep</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Seals structural recovery deep in the dermis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical */}
      <section className="border-b border-line bg-[#f4f1ec]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Clinically proven"
            title="PDRN + EGF synergy — visible skin change, beyond UV protection."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard value="24h" label="Long-lasting wear" />
            <MetricCard value="×2" label="Skin barrier improvement" />
            <MetricCard value="22" label="Women aged 20–65" />
            <MetricCard value="OATC" label="Clinical trial center" />
          </div>
          <div className="mt-10">
            <Disclaimer>
              Human study on hydration / barrier improvement. Test institution:
              OATC Skin Clinical Trial Center. Test period: Dec 15–16, 2025.
              Subjects: 22 women aged 20–65. Image: best-improvement case.
              Effective only within trial period. Conducted by board-certified
              dermatologists.
            </Disclaimer>
          </div>
        </div>
      </section>

      {/* Lineup How to Use */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="PDRN × EGF lineup — how to use"
            title="Three formulas. One protocol."
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            <li className="border-t border-foreground/15 pt-6">
              <p className="font-display text-3xl text-accent-deep">01</p>
              <h3 className="mt-3 text-lg font-medium">Mask</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After cleansing, use the REVIONrx mask for 10–20 minutes.
              </p>
            </li>
            <li className="border-t border-foreground/15 pt-6">
              <p className="font-display text-3xl text-accent-deep">02</p>
              <h3 className="mt-3 text-lg font-medium">Cream</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Layer with REVIONrx cream to finish.
              </p>
            </li>
            <li className="border-t border-foreground/15 pt-6">
              <p className="font-display text-3xl text-accent-deep">03</p>
              <h3 className="mt-3 text-lg font-medium">Sunscreen</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Apply REVIONrx sunscreen before heading out to protect against
                UV.
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
