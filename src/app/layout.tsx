import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const SITE_URL = "https://shikhardev-zeta.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ShikharX | AI Engineer • Full-Stack Developer • Agentic AI Builder",
    template: "%s | ShikharX",
  },

  description:
    "ShikharX is an AI Engineer, Full-Stack Developer, and Agentic AI Builder creating production-grade AI applications, RAG systems, intelligent automation, modern SaaS platforms, and high-performance web experiences.",

  applicationName: "ShikharX Portfolio",

  authors: [
    {
      name: "Shikhar",
      url: SITE_URL,
    },
  ],

  creator: "Shikhar",
  publisher: "Shikhar",

  category: "Technology",

  keywords: [
    "Shikhar",
    "ShikharX",
    "AI Engineer",
    "AI Developer",
    "Agentic AI",
    "AI Agents",
    "Multi-Agent Systems",
    "RAG",
    "Retrieval Augmented Generation",
    "Prompt Engineering",
    "LLM Engineer",
    "Generative AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "MCP",
    "GSAP",
    "Web Design",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "SaaS Developer",
    "Application Developer",
    "Web Performance",
    "Developer Portfolio",
    "Creative Developer",
    "Portfolio",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,

    title: "ShikharX | AI Engineer & Full-Stack Developer",

    description:
      "Building Agentic AI systems, RAG applications, intelligent automation, AI-powered SaaS products, and immersive web experiences.",

    siteName: "ShikharX",

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ShikharX Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ShikharX | AI Engineer & Full-Stack Developer",

    description:
      "AI Agents • RAG • Full-Stack Development • Modern SaaS • Creative Engineering",

    creator: "@shikharcodex",

    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shikhar",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    jobTitle: "AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer, Full-Stack Developer, and Agentic AI Builder creating production-grade AI applications and modern web experiences.",
    sameAs: [
      "https://github.com/ShikharCodex",
      "https://www.linkedin.com/in/shikhar-x-9158b8409",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Navbar />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}