import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTA({
  headline = "Ready To Build Something Great?",
  description = "Let's discuss your next website, application or digital transformation project.",
  primaryLabel = "Request Proposal",
  primaryHref = "/contact",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-fog-100 py-20 md:py-24 border-y border-charcoal-200">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-charcoal-950 md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton
            href={primaryHref}
            className="bg-brand text-white hover:bg-brand-deep"
          >
            {primaryLabel}
          </PrimaryButton>
          <SecondaryButton
            href={secondaryHref}
            className="border-charcoal-300 text-charcoal-900 hover:border-brand hover:text-brand"
          >
            {secondaryLabel}
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
