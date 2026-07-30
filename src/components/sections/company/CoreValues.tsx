import { Lightbulb, ShieldCheck, HeartHandshake, Gem, Eye as EyeIcon, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCardGrid from "@/components/ui/IconCardGrid";

const VALUES = [
  { icon: Lightbulb, title: "Innovation", description: "We look for better ways to solve problems, not just familiar ones." },
  { icon: ShieldCheck, title: "Integrity", description: "We do what we say, and we're upfront when something needs to change." },
  { icon: HeartHandshake, title: "Client Success", description: "Your outcomes are the measure of our work, not just delivery dates." },
  { icon: Gem, title: "Quality", description: "Every release goes through review, testing and a real quality bar." },
  { icon: EyeIcon, title: "Transparency", description: "Clear timelines, clear costs and honest project updates throughout." },
  { icon: GraduationCap, title: "Continuous Learning", description: "Our team invests in new tools and practices as the industry moves." },
];

export default function CoreValues() {
  return (
    <section className="bg-fog-100 py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Core Values" title="What guides our work" align="center" />
        <div className="mt-14">
          <IconCardGrid items={VALUES} />
        </div>
      </Container>
    </section>
  );
}
