import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "India Travel - Explore Incredible Destinations",
    template: "%s | India Travel",
  },
  description:
    "Discover the beautiful destinations of India with our curated travel experiences. From pristine beaches to majestic mountains, explore the diverse beauty and rich culture of India.",
  keywords: [
    "India travel",
    "domestic travel",
    "travel agency",
    "India destinations",
    "Goa",
    "Kerala",
    "Rajasthan",
    "Himachal Pradesh",
  ],
  authors: [{ name: "India Travel" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indiatravel.com",
    siteName: "India Travel",
    title: "India Travel - Explore Incredible Destinations",
    description:
      "Discover the beautiful destinations of India with our curated travel experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "India Travel - Explore Incredible Destinations",
    description:
      "Discover the beautiful destinations of India with our curated travel experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
