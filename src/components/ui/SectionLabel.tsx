type SectionLabelProps = {
  text: string;
};

export default function SectionLabel({text}: SectionLabelProps) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
      // {text}
    </p>
  );
}
