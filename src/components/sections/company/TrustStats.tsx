import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const TRUST_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "400+", label: "Websites Delivered" },
  { value: "250+", label: "Happy Clients" },
];

const TRUST_POINTS = [
  "Dedicated Project Management",
  "Skilled Technical Team",
  "Long-Term Support",
];

export default function TrustStats() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why Businesses Trust LIBIT"
              title="Consistency, over more than a decade"
            />
            <ul className="mt-8 space-y-4">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-bright" aria-hidden="true" />
                  <span className="text-sm font-medium text-charcoal-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-charcoal-200 bg-white p-6 text-center"
              >
                <span className="font-display text-3xl font-semibold text-brand md:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-2 text-xs font-medium text-charcoal-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
