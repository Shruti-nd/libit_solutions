"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const CODE_LINES = [
  { indent: 0, text: "export async function deploy(app: Service) {" },
  { indent: 1, text: "const build = await ci.run(app.pipeline);" },
  { indent: 1, text: "if (build.passed) {" },
  { indent: 2, text: "return release.publish(build, { env: 'prod' });" },
  { indent: 1, text: "}" },
  { indent: 0, text: "}" },
];

const BARS = [38, 62, 48, 74, 58, 88, 70];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-fog-50 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="inline-block h-px w-6 bg-brand" aria-hidden="true" />
            Software &amp; Digital Services, Jaipur
          </p>
          <h1 className="max-w-xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-charcoal-950 md:text-6xl">
            Transforming Ideas Into Digital Solutions
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal-500 md:text-lg">
            LIBIT delivers web development, software engineering, mobile
            applications, digital marketing and enterprise solutions for
            businesses across industries.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Get Free Quote</PrimaryButton>
            <SecondaryButton href="/portfolio">View Portfolio</SecondaryButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-charcoal-200 pt-8">
            {["10+ Years Delivering", "400+ Websites Shipped", "50+ Industries Served"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal-700">
                  <CheckCircle2 size={16} className="text-brand-bright" aria-hidden="true" />
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:mx-0 lg:max-w-none"
          aria-hidden="true"
        >
          {/* Code editor panel */}
          <div className="animate-grid-drift absolute left-0 top-4 w-[92%] rounded-md border border-charcoal-800 bg-charcoal-950 shadow-card-hover md:w-[85%]">
            <div className="flex items-center gap-1.5 border-b border-charcoal-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal-700" />
              <span className="ml-2 text-[11px] text-charcoal-300">deploy.ts</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[12px] leading-relaxed">
              {CODE_LINES.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 14}px` }}>
                  <span className="text-charcoal-300">{line.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics panel */}
          <div
            className="animate-grid-drift absolute bottom-6 right-0 w-[70%] rounded-md border border-charcoal-200 bg-white p-5 shadow-card-hover md:w-[62%]"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
                Delivery Velocity
              </span>
              <span className="rounded bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                +24%
              </span>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-brand/20"
                  style={{ height: `${h}%`, background: i === BARS.length - 1 ? "#C9060A" : undefined }}
                />
              ))}
            </div>
          </div>

          {/* Floating status chip */}
          <div className="absolute -top-3 right-6 flex items-center gap-2 rounded-md border border-charcoal-200 bg-white px-3.5 py-2 shadow-card md:right-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-charcoal-700">Sprint 24 · On track</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
