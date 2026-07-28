import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.doctorName} | ${site.clinicName}`,
  description:
    "Premium internal medicine and preventive care clinic led by Dr. Eleanor Ashford. Book an appointment for personalized, unhurried healthcare in Portland, OR.",
  keywords: [
    "doctor",
    "clinic",
    "internal medicine",
    "preventive care",
    "Portland doctor",
    "book appointment",
  ],
  openGraph: {
    title: `${site.doctorName} | ${site.clinicName}`,
    description:
      "Personalized, unhurried internal medicine and preventive care in Portland, OR.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased bg-ivory text-ink">{children}</body>
    </html>
  );
}
