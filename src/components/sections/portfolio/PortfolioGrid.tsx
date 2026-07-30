"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { PROJECTS, type Project } from "@/lib/projects";

const FILTERS: Array<Project["category"] | "All"> = ["All", "Website", "Software", "Mobile App", "Marketing"];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Project["category"] | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                active === filter
                  ? "bg-brand text-white"
                  : "border border-charcoal-200 text-charcoal-700 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col rounded-md border border-charcoal-200 bg-white p-7"
              >
                <span className="w-fit rounded bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
                  {project.type}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal-950">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-charcoal-200 px-2 py-1 text-[11px] font-medium text-charcoal-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-charcoal-100 pt-4">
                  {project.highlights.map((point) => (
                    <li key={point} className="text-xs leading-relaxed text-charcoal-500">
                      • {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-charcoal-500">
            No projects in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
