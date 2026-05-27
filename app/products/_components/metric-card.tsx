type Props = {
  value: string;
  label: string;
  sub?: string;
};

export function MetricCard({ value, label, sub }: Props) {
  return (
    <div className="rounded-2xl border border-line bg-white p-7">
      <p className="font-display text-5xl text-accent-deep">{value}</p>
      <p className="mt-4 text-sm font-medium">{label}</p>
      {sub && <p className="mt-1.5 text-xs text-muted">{sub}</p>}
    </div>
  );
}
