"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-fog-50 pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="inline-block h-px w-6 bg-brand" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-charcoal-950 md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-500 md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
