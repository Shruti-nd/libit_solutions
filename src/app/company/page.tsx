import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CompanyOverview from "@/components/sections/company/CompanyOverview";
import MissionVision from "@/components/sections/company/MissionVision";
import Timeline from "@/components/sections/company/Timeline";
import CoreValues from "@/components/sections/company/CoreValues";
import TrustStats from "@/components/sections/company/TrustStats";
import Leadership from "@/components/sections/company/Leadership";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Company | LIBIT Solutions",
  description:
    "LIBIT Solutions is a Jaipur-based software and web development company delivering digital solutions across industries since 2014.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Building Digital Excellence Since 2014"
        description="For more than a decade, LIBIT Solutions has been helping businesses transform ideas into scalable digital products and technology-driven growth."
      />
      <CompanyOverview />
      <MissionVision />
      <Timeline />
      <CoreValues />
      <TrustStats />
      <Leadership />
      <CTA
        headline="Let's Build Your Next Digital Success Story"
        description="Tell us about your project and we'll get back to you within one business day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
