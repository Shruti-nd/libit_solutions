import { MapPin, Phone, Mail, Clock } from "lucide-react";

const INFO = [
  { icon: MapPin, label: "Address", value: "A-31, Radha Vihar, N.S. Road, Sodala, Jaipur-302019, Rajasthan, India" },
  { icon: Phone, label: "Phone", value: "+91 9509615591", href: "tel:+919509615591" },
  { icon: Mail, label: "Email", value: "info@libit.org", href: "mailto:info@libit.org" },
  { icon: Clock, label: "Business Hours", value: "Monday – Saturday, 9:00 AM – 6:00 PM" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {INFO.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex gap-4 rounded-md border border-charcoal-200 bg-white p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
              <Icon size={18} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="mt-1 block text-sm font-medium text-charcoal-900 hover:text-brand">
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-charcoal-900">{item.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
