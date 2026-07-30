import { Feather, GraduationCap, TrendingUp, PartyPopper, Trophy, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCardGrid from "@/components/ui/IconCardGrid";

const BENEFITS = [
  { icon: Feather, title: "Flexible Environment", description: "Work arrangements that adapt to how your role actually operates." },
  { icon: GraduationCap, title: "Learning Support", description: "Access to courses and resources to keep your skills current." },
  { icon: TrendingUp, title: "Career Growth", description: "Regular reviews with a clear view of what advancement looks like." },
  { icon: PartyPopper, title: "Team Activities", description: "Regular team events that keep the culture connected, not siloed." },
  { icon: Trophy, title: "Performance Rewards", description: "Recognition and rewards tied directly to measurable contribution." },
  { icon: Wrench, title: "Modern Tools", description: "The hardware and software you need, without long procurement delays." },
];

export default function Benefits() {
  return (
    <section className="bg-fog-100 py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Employee Benefits" title="What you get as part of the team" align="center" tone="dark" />
        <div className="mt-14">
          <IconCardGrid items={BENEFITS} tone="dark" />
        </div>
      </Container>
    </section>
  );
}
