import type { Metadata } from "next";
import JsonLd from "../../compoments/JsonLd";
import { siteConfig } from "@/lib/seo";

const path = "/case-study/trener-rzepa";
const title = "Case Study – Trener Rzepa";
const description =
  "Jak zaprojektowałem i zakodowałem stronę sprzedażową dla trenera personalnego: automatyzacja sprzedaży przez Stripe, 100/100 w Lighthouse i ponad 60 transakcji.";
const datePublished = "2025-09-01";
const dateModified = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: `${title} | HerzogWeb`,
    description:
      "Automatyzacja sprzedaży planów treningowych przez Stripe, 100/100 w Lighthouse i ponad 60 transakcji.",
    url: `${siteConfig.url}${path}`,
    type: "article",
    images: ["/new-hero.png"],
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case Study – Trener Rzepa: automatyzacja sprzedaży planów treningowych",
  description,
  image: `${siteConfig.url}/new-hero.png`,
  datePublished,
  dateModified,
  inLanguage: "pl-PL",
  author: { "@type": "Person", name: siteConfig.person, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.brand, url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}${path}`,
  about: "Strona sprzedażowa dla trenera personalnego z checkoutem Stripe",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Portfolio", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Case Study – Trener Rzepa", item: `${siteConfig.url}${path}` },
  ],
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      {children}
    </>
  );
}
