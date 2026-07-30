import Container from "@/components/ui/Container";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="bg-[#FDF1F1] py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto text-brand-bright"
            size={32}
            aria-hidden="true"
          />
          <p className="mt-6 font-display text-xl font-medium leading-relaxed text-charcoal-950 md:text-2xl">
            We started LIBIT with a simple goal: build software that businesses
            can actually rely on, delivered by people who take ownership of the
            outcome. A decade on, that's still the standard every project is
            held to — clear communication, solid engineering, and support that
            doesn't end at launch.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-charcoal-500">
            Founder &amp; Management Team
          </p>
          <p className="text-sm text-charcoal-500">LIBIT Solutions</p>
        </div>
      </Container>
    </section>
  );
}
