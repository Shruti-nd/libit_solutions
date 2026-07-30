import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio | LIBIT Solutions",
  description:
    "Explore LIBIT Solutions' work across business websites, education platforms, healthcare, custom software and more.",
};

const RESULTS = [
  { value: 400, suffix: "+", label: "Projects Delivered" },
  { value: 250, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Industries" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects That Deliver Real Business Value"
      />
      <PortfolioGrid />
      <Stats stats={RESULTS} />
      <CTA
        headline="Have A Project In Mind?"
        description="Tell us what you're building and we'll help you scope the right approach."
      />
    </>
  );
}
