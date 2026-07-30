import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import DevelopmentProcess from "@/components/sections/services/DevelopmentProcess";
import TechStack from "@/components/sections/services/TechStack";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | LIBIT Solutions",
  description:
    "End-to-end technology services from LIBIT Solutions: web, software, mobile, SEO, digital marketing and industrial training.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Services Designed For Business Growth"
        description="End-to-end digital solutions tailored to startups, SMEs and enterprise organizations."
      />
      <ServicesGrid />
      <DevelopmentProcess />
      <TechStack />
      <ServicesFAQ />
      <CTA
        headline="Start Your Project Today"
        description="Share your requirements and our team will put together a proposal within one business day."
      />
    </>
  );
}
