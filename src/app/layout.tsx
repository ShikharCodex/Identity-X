import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIT | Creative Developer & Designer",
  description: "Award-winning creative developer portfolio. Specializing in high-end web experiences, brutalist design, and hardware-accelerated animations.",
  keywords: ["Creative Developer", "Frontend Architect", "Motion Design", "React", "Next.js", "WebGL", "Three.js", "GSAP"],
  authors: [{ name: "Shikhar" }],
  creator: "Shikhar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wit-portfolio.com",
    title: "WIT | Creative Developer",
    description: "Award-winning creative developer portfolio.",
    siteName: "WIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIT | Creative Developer",
    description: "Award-winning creative developer portfolio.",
    creator: "@shikhar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
