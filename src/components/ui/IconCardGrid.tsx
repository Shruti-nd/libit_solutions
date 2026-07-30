import { LucideIcon } from "lucide-react";

export type IconCardItem = {
  icon: LucideIcon;
  title: string;
  description?: string;
};

export default function IconCardGrid({
  items,
  columns = 3,
  tone = "light",
}: {
  items: IconCardItem[];
  columns?: 2 | 3;
  tone?: "light" | "dark";
}) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  const card =
    tone === "dark"
      ? "border-charcoal-800 bg-charcoal-900 hover:border-brand-bright/40"
      : "border-charcoal-200 bg-white hover:border-brand/30 hover:shadow-card-hover";
  const titleColor = tone === "dark" ? "text-white" : "text-charcoal-950";
  const descColor = tone === "dark" ? "text-charcoal-300" : "text-charcoal-500";

  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`rounded-md border p-7 transition-all duration-300 hover:-translate-y-1 ${card}`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded bg-brand/10 text-brand">
              <Icon size={20} aria-hidden="true" />
            </div>
            <h3 className={`mt-5 font-display text-base font-semibold ${titleColor}`}>
              {item.title}
            </h3>
            {item.description && (
              <p className={`mt-2 text-sm leading-relaxed ${descColor}`}>{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
