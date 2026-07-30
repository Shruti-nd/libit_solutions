import { Globe, Code2, Smartphone, Search, Megaphone, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

const SERVICES = [
  { icon: Globe, label: "Website Development" },
  { icon: Code2, label: "Software Development" },
  { icon: Smartphone, label: "Mobile App Development" },
  { icon: Search, label: "SEO Services" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: GraduationCap, label: "Industrial Training" },
];

export default function ContactMain() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-16">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-charcoal-500">
            What are you looking for?
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.label}
                  className="flex flex-col items-center gap-2.5 rounded-md border border-charcoal-200 bg-white px-3 py-6 text-center transition-colors hover:border-brand/30"
                >
                  <Icon size={20} className="text-brand" aria-hidden="true" />
                  <span className="text-xs font-medium text-charcoal-700">{service.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
