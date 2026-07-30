import { Users, ClipboardCheck, ShieldCheck, Clock3, Wallet, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

const FEATURES = [
  { icon: Users, title: "Experienced Professionals", description: "A senior team with deep, cross-industry engineering expertise." },
  { icon: ClipboardCheck, title: "Dedicated Project Management", description: "A single point of contact keeping every milestone on track." },
  { icon: ShieldCheck, title: "Quality-Focused Development", description: "Rigorous code review and testing built into every sprint." },
  { icon: Clock3, title: "On-Time Delivery", description: "Realistic timelines, backed by a process that holds to them." },
  { icon: Wallet, title: "Cost-Effective Solutions", description: "Enterprise-grade output without enterprise-scale overhead." },
  { icon: Sparkles, title: "Latest Technologies", description: "Modern frameworks and infrastructure chosen for longevity." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-fog-100 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Why LIBIT"
              title="A decade of software delivery you can rely on"
              description="We combine engineering discipline with practical business thinking, so every project we ship holds up long after launch."
            />
            <div className="mt-8">
              <PrimaryButton href="/company">More About Us</PrimaryButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-md border border-charcoal-200 bg-white p-6 transition-colors duration-300 hover:border-brand/30"
                >
                  <Icon size={20} className="text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-semibold text-charcoal-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
