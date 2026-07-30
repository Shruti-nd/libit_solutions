import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We align on goals, scope and success metrics before anything is built.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Architecture, timelines and resourcing are locked in ahead of development.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Interfaces are designed around real user flows, not just visual polish.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Sprints ship working software with regular check-ins along the way.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "QA, performance and security checks run before anything reaches users.",
  },
  {
    number: "06",
    title: "Deployment",
    description: "We handle release, monitoring and the handover to your team.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#FDF1F1] py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for predictable delivery"
          align="center"
        />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </Container>
    </section>
  );
}
