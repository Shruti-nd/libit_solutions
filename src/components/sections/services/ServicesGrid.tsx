import { Globe, Code2, Smartphone, Search, Megaphone, GraduationCap, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    items: ["Corporate Websites", "Business Websites", "E-commerce Stores", "CMS Solutions", "Landing Pages"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    items: ["ERP Systems", "CRM Solutions", "Business Automation", "Internal Management Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    items: ["Android Apps", "iOS Apps", "Cross Platform Apps", "API Integration"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    items: ["Technical SEO", "On-Page SEO", "Local SEO", "Keyword Research"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    items: ["Social Media Marketing", "Google Ads", "Meta Ads", "Content Marketing"],
  },
  {
    icon: GraduationCap,
    title: "Industrial Training",
    items: ["Web Development", "Mobile Development", "Software Engineering", "Project Guidance"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-28" id="web-development">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Full-stack technology services"
          description="Every engagement is scoped around your goals, whether that's a single build or an ongoing technology partnership."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                id={service.title === "Mobile App Development" ? "mobile" : service.title === "Custom Software Development" ? "app-development" : service.title === "SEO Optimization" ? "seo" : undefined}
                className="rounded-md border border-charcoal-200 bg-white p-7 transition-all duration-300 hover:border-brand/30 hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-950">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-charcoal-600">
                      <Check size={14} className="shrink-0 text-brand-bright" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
