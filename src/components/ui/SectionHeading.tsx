type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`reveal-up max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <span
        className={`eyebrow inline-flex items-center gap-2 ${
          light ? "text-sage" : "text-copper"
        }`}
      >
        <span className={`h-px w-6 ${light ? "bg-sage" : "bg-copper"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-sage" : "text-ink/70"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
