import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Sanatana Veer",
  description: "Connect with expert astrologers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${quicksand.variable} h-full antialiased overflow-x-hidden w-full flex-1`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden w-full flex-1">
        <Header />
        <div className="mt-28 md:mt-36 overflow-x-hidden w-full flex-1">
          <div className="px-5 sm:px-8 md:px-12 lg:px-20 pb-5"></div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
