import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIBIT Solutions | Software Development & Digital Services, Jaipur",
  description:
    "LIBIT Solutions delivers web development, software engineering, mobile applications and digital marketing for businesses across industries. Based in Jaipur, India.",
  keywords: [
    "software development Jaipur",
    "web development company India",
    "mobile app development",
    "enterprise software solutions",
    "SEO agency Jaipur",
  ],
  openGraph: {
    title: "LIBIT Solutions | Software Development & Digital Services",
    description:
      "Transforming ideas into digital solutions — web, mobile, enterprise software and SEO.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
