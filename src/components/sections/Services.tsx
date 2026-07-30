import { Code2, TrendingUp, Smartphone, LayoutGrid, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Complete website design and development solutions tailored to business requirements.",
    href: "/services#web-development",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Improve visibility, rankings and online growth through strategic SEO practices.",
    href: "/services#seo",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Custom Android and iOS applications designed for performance and scalability.",
    href: "/services#mobile",
  },
  {
    icon: LayoutGrid,
    title: "Application Development",
    description:
      "Enterprise and custom software solutions built for operational efficiency.",
    href: "/services#app-development",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around your business"
            description="From first line of code to full-scale enterprise systems, we cover every layer of your digital footprint."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                className="group relative flex flex-col rounded-md border border-charcoal-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-charcoal-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
