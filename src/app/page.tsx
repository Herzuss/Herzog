"use client";
import { useState } from "react";
import Nav from "./compoments/nav";
import Hero from "./compoments/hero";
import Offer from "./compoments/offer";
import Projekty from "./compoments/projects";
import Faq from "./compoments/faq";
import Footer from "./compoments/footer";
import ContactModal from "./compoments/ContactModal";
import JsonLd from "./compoments/JsonLd";
import { faqPageLd } from "@/lib/seo";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main>
      <JsonLd data={faqPageLd()} />
      <Nav onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <Offer onOpenContact={openContact} />
      <Projekty />
      <Faq />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </main>
  );
}
