export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-charcoal-950";
  const descColor = tone === "dark" ? "text-charcoal-300" : "text-charcoal-500";
  const eyebrowColor = tone === "dark" ? "text-brand-bright" : "text-brand";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>
          <span className={`inline-block h-px w-6 ${tone === "dark" ? "bg-brand-bright" : "bg-brand"}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold leading-tight tracking-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
