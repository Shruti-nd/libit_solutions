import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export default function PrimaryButton({
  href,
  children,
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded bg-brand px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
