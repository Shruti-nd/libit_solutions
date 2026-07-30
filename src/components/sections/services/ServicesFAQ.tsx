import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

const FAQS = [
  { question: "How long does a typical website project take?", answer: "A standard business website usually takes 3–5 weeks from kickoff to launch, depending on the number of pages and content readiness. Larger platforms and e-commerce builds typically run 6–10 weeks." },
  { question: "Do you work with startups or only established businesses?", answer: "Both. We work with early-stage startups needing an MVP as well as established enterprises needing to modernize existing systems, and scope engagements to match each budget and timeline." },
  { question: "What is included in your software development pricing?", answer: "Every quote covers discovery, design, development, QA and deployment. Ongoing maintenance and support are quoted separately based on the scope you need after launch." },
  { question: "Can you maintain and support an existing application?", answer: "Yes. We regularly take over maintenance for systems built by other teams, starting with a technical audit before agreeing on a support plan." },
  { question: "Do you build both Android and iOS apps?", answer: "Yes, we build native Android and iOS apps as well as cross-platform apps, and can advise on which approach suits your budget and target audience." },
  { question: "How do you handle project communication?", answer: "Each project is assigned a dedicated point of contact, with scheduled check-ins and a shared tracker so you always know current status and next steps." },
  { question: "Can you help with hosting and deployment?", answer: "Yes, we handle deployment to AWS, Vercel or DigitalOcean depending on your application's requirements, and can manage ongoing infrastructure if needed." },
  { question: "Do you offer industrial training programs?", answer: "Yes, we run structured training in web development, mobile development and software engineering, including guided project work for students and early-career developers." },
];

export default function ServicesFAQ() {
  return (
    <section className="bg-fog-100 py-24 md:py-28">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mt-12">
          <FAQAccordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
