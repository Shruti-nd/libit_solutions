import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const MILESTONES = [
  { year: "2014", title: "Company Founded" },
  { year: "2016", title: "Expanded Web Development Services" },
  { year: "2018", title: "Mobile Application Division Launched" },
  { year: "2020", title: "Digital Marketing & SEO Services Added" },
  { year: "2022", title: "400+ Websites Delivered" },
  { year: "2024", title: "Serving Multiple Industries Across India" },
];

export default function Timeline() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Our Journey" title="A decade of consistent growth" align="center" />

        <div className="relative mt-16">
          <div
            className="absolute left-4 top-0 h-full w-px bg-charcoal-200 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <ol className="space-y-10 md:space-y-0">
            {MILESTONES.map((item, i) => (
              <li
                key={item.year}
                className={`relative flex flex-col gap-2 pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 md:py-8 ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                <span
                  className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand bg-white md:left-1/2"
                  aria-hidden="true"
                />
                <div
                  className={`md:text-right ${
                    i % 2 === 0 ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:order-2 md:pl-14 md:text-left"
                  }`}
                >
                  <span className="font-display text-2xl font-semibold text-brand">
                    {item.year}
                  </span>
                  <p className="mt-1 text-sm font-medium text-charcoal-700">{item.title}</p>
                </div>
                <div
                  className={i % 2 === 0 ? "hidden md:col-start-2 md:block" : "hidden md:order-1 md:col-start-1 md:block"}
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
