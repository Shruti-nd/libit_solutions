import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Briefcase } from "lucide-react";

const POSITIONS = [
  {
    title: "Web Development Engineer",
    experience: "1–3 Years",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Android Developer",
    experience: "2–4 Years",
    skills: ["Kotlin", "Java", "Android SDK"],
  },
  {
    title: "Software Engineer",
    experience: "2–5 Years",
    skills: ["Java", ".NET", "Database Knowledge"],
  },
  {
    title: "iOS Engineer",
    experience: "1–3 Years",
    skills: ["Swift", "iOS Development"],
  },
  {
    title: "Digital Marketing Executive",
    experience: "1–3 Years",
    skills: ["SEO", "Social Media", "Advertising"],
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-[#FDF1F1] py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Open Positions"
          title="Current opportunities at LIBIT"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {POSITIONS.map((job) => (
            <div
              key={job.title}
              className="flex flex-col justify-between gap-5 rounded-md border border-charcoal-200 bg-white p-7 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal-950">
                  {job.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal-500">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} aria-hidden="true" /> {job.experience}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" /> Jaipur, Rajasthan
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-charcoal-200 px-2.5 py-1 text-[11px] font-medium text-charcoal-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
