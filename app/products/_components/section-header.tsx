type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, intro, align = "left" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
      )}
    </div>
  );
}
