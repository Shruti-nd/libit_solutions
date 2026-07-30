import Container from "@/components/ui/Container";

export default function MapSection() {
  return (
    <section className="pb-24 md:pb-28">
      <Container>
        {/*
          Google Maps integration point:
          Replace this placeholder with an <iframe> using your Google Maps
          Embed API URL, or the @react-google-maps/api component, centered on:
          A-31, Radha Vihar, N.S. Road, Sodala, Jaipur-302019, Rajasthan, India
        */}
        <iframe
          title="LIBIT Solutions location"
          src="https://www.google.com/maps?q=A-31+Radha+Vihar+N.S.+Road+Sodala+Jaipur+302019&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md border border-charcoal-200"
        />
      </Container>
    </section>
  );
}
