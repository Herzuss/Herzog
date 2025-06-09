import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Nav from "@/components/nav";
import "../styles/globals.css";
// import logo from "@/../public/images/NAV/logofixed2.svg";

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
        url: "/favicon.png",
        width: 133,
        height: 41,
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
      <body className={`${DMSans.className} bg-neutral-950`}>
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
