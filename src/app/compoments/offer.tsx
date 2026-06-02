"use client";
import { motion } from "motion/react";
import Image from "next/image";
import ikonka1 from "@/../public/ikonka1Offer.svg";
import ikonka2 from "@/../public/ikonka2Offer.svg";
import ikonka3 from "@/../public/ikonka3Offer.svg";
import CTAButton from "./CTAButton";
import { services } from "@/lib/seo";

const icons = [
  { icon: ikonka1, alt: "ikonka designu" },
  { icon: ikonka2, alt: "ikonka kodowania" },
  { icon: ikonka3, alt: "ikonka wdrożenia" },
];

const cards = services.map((s, i) => ({ ...s, ...icons[i] }));

interface OfferProps {
  onOpenContact: () => void;
}

export default function Offer({ onOpenContact }: OfferProps) {
  return (
    <section id="oferta" className="max-w-screen-3xl mx-auto px-4 sm:px-8 pb-10 flex flex-col justify-center items-center mt-24 bg-[url(/tloOffer.webp)] bg-center bg-no-repeat overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-zinc-200 text-center font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight"
      >
        Oto, co wchodzi w zakres naszej współpracy
      </motion.h2>

      <div className="flex flex-row gap-8 mt-12 pb-10 flex-wrap justify-center items-stretch">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group w-64 min-h-52 bg-zinc-800 border border-zinc-700 rounded-xl flex flex-col p-6 hover:scale-105 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300 cursor-default"
          >
            <Image src={card.icon} alt={card.alt} className="w-10 h-10" />
            <h3 className="text-zinc-100 text-xl font-semibold mt-5">{card.title}</h3>
            <p className="text-zinc-400 text-sm font-light mt-2 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CTAButton onClick={onOpenContact} />
      </motion.div>
    </section>
  );
}
