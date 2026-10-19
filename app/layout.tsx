import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Againo — Run Your Salon or Studio, Effortlessly",
  description:
    "Againo is the all-in-one booking, scheduling, and client management platform built for salons and fitness studios. WhatsApp-native. Setup in 5 minutes.",
  keywords: ["salon software", "barber booking", "gym management", "appointment scheduling", "WhatsApp booking", "Againo"],
  openGraph: {
    title: "Againo — Run Your Salon or Studio, Effortlessly",
    description: "All-in-one booking and management for salons & fitness studios.",
    type: "website",
    images: ["/againo-icon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased grain`}>{children}</body>
    </html>
  );
}
