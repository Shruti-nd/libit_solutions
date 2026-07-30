import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyJoin from "@/components/sections/career/WhyJoin";
import OpenPositions from "@/components/sections/career/OpenPositions";
import HiringProcess from "@/components/sections/career/HiringProcess";
import Benefits from "@/components/sections/career/Benefits";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Careers | LIBIT Solutions",
  description:
    "Join LIBIT Solutions in Jaipur. Explore open roles in web, mobile, software engineering and digital marketing.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Future With LIBIT"
        description="Work with passionate professionals and cutting-edge technologies while creating impactful digital solutions."
      />
      <WhyJoin />
      <OpenPositions />
      <HiringProcess />
      <Benefits />
      <CTA
        headline="Submit Your Resume"
        description="Don't see the right role listed? Send your resume and we'll reach out when a fit opens up."
        primaryLabel="Apply Now"
        primaryHref="/contact"
        secondaryLabel="View Open Roles"
        secondaryHref="#open-positions"
      />
    </>
  );
}
