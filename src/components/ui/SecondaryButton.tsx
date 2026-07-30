import Link from "next/link";
import { ReactNode } from "react";

export default function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded border border-charcoal-900 px-6 py-3.5 text-sm font-semibold tracking-wide text-charcoal-900 transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright ${className}`}
    >
      {children}
    </Link>
  );
}
