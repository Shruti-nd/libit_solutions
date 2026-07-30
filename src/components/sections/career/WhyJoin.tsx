import { TrendingUp, Cpu, BookOpen, Users2, Puzzle, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCardGrid from "@/components/ui/IconCardGrid";

const REASONS = [
  { icon: TrendingUp, title: "Growth Opportunities", description: "Clear paths from individual contributor to technical leadership." },
  { icon: Cpu, title: "Modern Technologies", description: "Work with current frameworks and cloud infrastructure, not legacy stacks." },
  { icon: BookOpen, title: "Learning Culture", description: "Time and support set aside for picking up new skills on the job." },
  { icon: Users2, title: "Collaborative Team", description: "Small, senior teams where your input shapes real decisions." },
  { icon: Puzzle, title: "Challenging Projects", description: "Work spans startups to enterprise systems, never just maintenance." },
  { icon: Award, title: "Career Advancement", description: "Performance is reviewed regularly, with growth tied directly to it." },
];

export default function WhyJoin() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Why Join LIBIT" title="Build your career with us" align="center" />
        <div className="mt-14">
          <IconCardGrid items={REASONS} />
        </div>
      </Container>
    </section>
  );
}
