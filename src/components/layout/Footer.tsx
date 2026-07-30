import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Website Development", href: "/services#web-development" },
  { label: "Application Development", href: "/services#app-development" },
  { label: "SEO Optimization", href: "/services#seo" },
  { label: "Mobile Development", href: "/services#mobile" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-200 bg-fog-100 text-fog-200">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="LIBIT Solutions"
              width={36}
              height={36}
            />
            <span className="font-display text-lg font-semibold text-charcoal-950">
              LIBIT{" "}
              <span className="font-normal text-charcoal-500">Solutions</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal-500">
            LIBIT is a website and software development company implementing IT
            projects of varying complexities. We deliver quality solutions in a
            cost-effective manner.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded border border-charcoal-300 text-charcoal-500 transition-colors hover:border-brand-bright hover:text-brand-bright"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-charcoal-950">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-charcoal-500 transition-colors hover:text-brand-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-charcoal-950">
            Services
          </h3>
          <ul className="space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-charcoal-500 transition-colors hover:text-brand-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-charcoal-950">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-charcoal-500">
            <li className="flex gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-brand-bright"
                aria-hidden="true"
              />
              <span>
                A-31 Radha Vihar, N.S. Road, Sodala, Jaipur, Rajasthan
              </span>
            </li>
            <li className="flex gap-3">
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-brand-bright"
                aria-hidden="true"
              />
              <a href="tel:+919509615591" className="hover:text-brand-bright">
                +91 9509615591
              </a>
            </li>
            <li className="flex gap-3">
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-brand-bright"
                aria-hidden="true"
              />
              <a
                href="mailto:info@libit.org"
                className="hover:text-brand-bright"
              >
                info@libit.org
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal-200">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-500 sm:flex-row">
          <p>&copy; {year} LIBIT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-bright">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-bright">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
