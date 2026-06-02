import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Polityka Prywatności i zasady przetwarzania danych osobowych serwisu HerzogWeb.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
