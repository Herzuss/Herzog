import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Nav from "@/components/nav";
import "../styles/globals.css";

const DMSans = DM_Sans({
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Herzog",
  description: "Herzog | Profesjonalne strony internetowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${DMSans.className} bg-neutral-950 font-geist-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
