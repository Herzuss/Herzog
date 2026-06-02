import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "./compoments/JsonLd";
import { siteConfig, homeGraphLd } from "@/lib/seo";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const title = "HerzogWeb — Nowoczesne strony internetowe w Next.js | Projektowanie i kodowanie";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | HerzogWeb",
  },
  description: siteConfig.description,
  keywords: [
    "strony internetowe",
    "tworzenie stron internetowych",
    "web developer",
    "Next.js",
    "Tailwind CSS",
    "UX/UI design",
    "strony sprzedażowe",
    "HerzogWeb",
    "Filip Herzog",
  ],
  authors: [{ name: siteConfig.person, url: siteConfig.url }],
  creator: siteConfig.person,
  publisher: siteConfig.brand,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "HerzogWeb – Profesjonalne strony internetowe",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/opengraph.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#18181b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth scroll-pt-24">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${DMSans.className} bg-zinc-900 antialiased`}>
        <JsonLd data={homeGraphLd()} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
