import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herzog | Profesjonalne strony internetowe",
  description:
    "Tworze nowoczesne i funkcjonalne strony internetowe dostosowane do Twoich potrzeb.",
  openGraph: {
    title: "Herzog | Profesjonalne strony internetowe",
    description:
      "Tworze nowoczesne i funkcjonalne strony internetowe dostosowane do Twoich potrzeb.",
    url: "https://www.herzogweb.pl",
    siteName: "Herzog",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Herzog - Profesjonalne strony internetowe",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
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
      <body className={`${DMSans.className} bg-zinc-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
