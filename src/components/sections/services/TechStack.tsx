import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const STACK = [
  { label: "Frontend", tools: ["Next.js", "React", "TypeScript", "HTML", "CSS", "JavaScript"] },
  { label: "Backend", tools: ["Node.js", "PHP", ".NET", "Java"] },
  { label: "Database", tools: ["MySQL", "PostgreSQL", "MongoDB"] },
  { label: "Cloud", tools: ["AWS", "Vercel", "DigitalOcean"] },
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Technology Stack" title="Tools we build with" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group) => (
            <div key={group.label} className="rounded-md border border-charcoal-200 bg-white p-7">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.tools.map((tool) => (
                  <li key={tool} className="text-sm text-charcoal-700">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
