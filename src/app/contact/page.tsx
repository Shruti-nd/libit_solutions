import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactMain from "@/components/sections/contact/ContactMain";
import MapSection from "@/components/sections/contact/MapSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact | LIBIT Solutions",
  description:
    "Get in touch with LIBIT Solutions in Jaipur for web development, software, mobile apps and digital marketing enquiries.",
};

const FAQS = [
  { question: "How quickly will I hear back after submitting the form?", answer: "We respond to every enquiry within one business day, usually sooner during working hours." },
  { question: "Do you offer free consultations?", answer: "Yes, an initial consultation is free and helps us understand your requirements before scoping any paid work." },
  { question: "Can we schedule a call instead of using the form?", answer: "Yes, mention your preferred time in the message field and our team will arrange a call." },
  { question: "Do you work with clients outside Jaipur?", answer: "Yes, we work with clients across India and internationally, coordinating primarily over calls and email." },
  { question: "What information should I include in my message?", answer: "A short description of your project, rough timeline and any specific requirements helps us prepare a relevant response." },
  { question: "Is there a minimum project size you work with?", answer: "We take on projects of varying scope, from single landing pages to multi-month enterprise builds." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Next Project"
        description="Whether you need a website, software solution, mobile app or digital marketing services, our team is ready to help."
      />
      <ContactMain />
      <MapSection />

      <section className="bg-fog-100 py-24 md:py-28">
        <Container className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions before you reach out" align="center" />
          <div className="mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CTA
        headline="Ready To Start?"
        description="Request a free consultation and our team will help you scope the right approach."
        primaryLabel="Request A Free Consultation"
        primaryHref="tel:+919509615591"
        secondaryLabel="Email Us"
        secondaryHref="mailto:info@libit.org"
      />
    </>
  );
}
