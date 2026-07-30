import Container from "@/components/ui/Container";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#FDF1F1] py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-md border border-charcoal-200 bg-white p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-brand text-white">
              <Target size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-charcoal-950">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-charcoal-500">
              To deliver innovative, reliable and cost-effective digital
              solutions that help businesses achieve sustainable growth.
            </p>
          </div>

          <div className="rounded-md border border-charcoal-200 bg-white p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-brand text-white">
              <Eye size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-charcoal-950">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-charcoal-500">
              To become a globally recognized technology partner known for
              quality, innovation and customer success.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
