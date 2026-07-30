"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-card backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="LIBIT Solutions"
              width={36}
              height={36}
            />
            <span className="font-display text-lg font-semibold tracking-tight text-charcoal-950">
              LIBIT{" "}
              <span className="font-normal text-charcoal-500">Solutions</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-charcoal-700 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Get Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded text-charcoal-900 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-fog-100 lg:hidden"
          >
            <Container className="flex h-20 items-center justify-between">
              <span className="font-display text-lg font-semibold text-charcoal-950">
                LIBIT Solutions
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded text-charcoal-950"
                aria-label="Close menu"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </Container>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                },
              }}
              className="mt-6 flex flex-col gap-1 px-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-charcoal-200 py-4 font-display text-2xl font-medium text-charcoal-950"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-6 pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex rounded bg-brand px-6 py-3.5 text-sm font-semibold text-white"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
