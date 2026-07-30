import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe, Code2, Smartphone, Megaphone, Search, Building2 } from "lucide-react";

const SPECIALTIES = [
  { icon: Globe, label: "Website Development" },
  { icon: Code2, label: "Software Development" },
  { icon: Smartphone, label: "Mobile Applications" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Search, label: "SEO Solutions" },
  { icon: Building2, label: "Enterprise Applications" },
];

export default function CompanyOverview() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="A Jaipur-based technology partner for growing businesses"
            />
            <p className="mt-6 text-base leading-relaxed text-charcoal-500">
              LIBIT is a Jaipur-based software and web development company
              delivering innovative digital solutions across multiple
              industries. Since 2014, we have worked alongside founders,
              marketing teams and enterprise IT departments to turn practical
              business problems into dependable software.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500">
              Our engineers and strategists work as an extension of your team,
              covering everything from a single landing page to a multi-module
              enterprise application, backed by the same standard of code
              quality and communication throughout.
            </p>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-charcoal-500">
              Our Specializations
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SPECIALTIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-charcoal-200 bg-white px-5 py-4"
                  >
                    <Icon size={18} className="shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm font-medium text-charcoal-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
