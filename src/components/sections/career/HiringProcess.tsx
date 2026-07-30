import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";

const STEPS = [
  { number: "01", title: "Application", description: "Submit your resume and portfolio through our contact form." },
  { number: "02", title: "Screening", description: "Our team reviews your background against the role's requirements." },
  { number: "03", title: "Technical Interview", description: "A conversation focused on your practical, hands-on experience." },
  { number: "04", title: "HR Discussion", description: "We talk through role expectations, compensation and fit." },
  { number: "05", title: "Offer", description: "A formal offer is extended once both sides are aligned." },
];

export default function HiringProcess() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Hiring Process" title="What to expect when you apply" align="center" />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </Container>
    </section>
  );
}
