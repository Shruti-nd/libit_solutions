export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="relative rounded-md border border-charcoal-200 bg-white p-7"
        >
          <span className="font-display text-3xl font-semibold text-brand/25">
            {step.number}
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-charcoal-950">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{step.description}</p>
          {i < steps.length - 1 && (
            <span
              className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-charcoal-200 lg:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
