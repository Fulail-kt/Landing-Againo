import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestPro — Run Your Salon or Studio Effortlessly",
  description:
    "NestPro is the all-in-one booking, scheduling, and client management platform built for salons and fitness studios. WhatsApp-native. No app download needed.",
  keywords: ["salon software", "barber booking", "gym management", "appointment scheduling", "WhatsApp booking"],
  openGraph: {
    title: "NestPro — Run Your Salon or Studio Effortlessly",
    description: "All-in-one booking and management for salons & fitness studios.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
