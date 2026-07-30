import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const CLIENTS = [
  "Amrapali",
  "Apex",
  "BRPL",
  "Clear Vision",
  "Clat Prep India",
  "HG Infra",
  "Joyti Vidyapeeth",
  "Kings Education",
];

export default function Clients() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          title="Businesses that build with LIBIT"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-charcoal-200 bg-charcoal-200 sm:grid-cols-4">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex h-28 items-center justify-center bg-white px-4"
            >
              <span className="font-display text-base font-semibold text-charcoal-300 grayscale transition-all duration-300 hover:text-brand hover:grayscale-0 sm:text-lg">
                {client}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
