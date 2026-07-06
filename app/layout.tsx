import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Memra Bible",
  description: "Memra Bible is a free, beautifully designed offline Bible app featuring powerful study tools, multiple translations, and an ad-free reading experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-inter font-normal" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
