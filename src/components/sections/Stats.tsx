import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export type Stat = { value: number; suffix?: string; label: string };

const DEFAULT_STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 400, suffix: "+", label: "Websites Delivered" },
  { value: 250, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Ongoing Projects" },
  { value: 50, suffix: "+", label: "Industries Served" },
];

export default function Stats({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="bg-fog-100 py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 sm:justify-between">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[120px] flex-1 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ""} />
              <p className="mt-2 text-sm font-medium text-charcoal-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
