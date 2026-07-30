"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  "Website Development",
  "Software Development",
  "Mobile App Development",
  "SEO Services",
  "Digital Marketing",
  "Industrial Training",
];

const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000+"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form submission:", data);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-charcoal-200 bg-white p-12 text-center">
        <CheckCircle2 size={36} className="text-brand-bright" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold text-charcoal-950">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-charcoal-500">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-md border border-charcoal-200 bg-white p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            aria-invalid={!!errors.name}
            className="w-full rounded border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
            className="w-full rounded border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            className="w-full rounded border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Company <span className="text-charcoal-400">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="w-full rounded border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Service Required
          </label>
          <select
            id="service"
            defaultValue=""
            {...register("service")}
            aria-invalid={!!errors.service}
            className="w-full rounded border border-charcoal-200 bg-white px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-charcoal-700">
            Project Budget
          </label>
          <select
            id="budget"
            defaultValue=""
            {...register("budget")}
            aria-invalid={!!errors.budget}
            className="w-full rounded border border-charcoal-200 bg-white px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget && <p className="mt-1 text-xs text-red-600">{errors.budget.message}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className="w-full rounded border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-900 outline-none focus:border-brand"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center gap-2 rounded bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        Send Message
      </button>
    </form>
  );
}
