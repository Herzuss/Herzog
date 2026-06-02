"use client";
import Image from "next/image";
import Faqq from "@/../public/FAQ.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "@/lib/seo";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <section id="faq" className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-24 pb-20">
      {/* Oryginalny SVG nagłówek */}
      <div>
        <h2 className="sr-only">Najczęściej zadawane pytania (FAQ)</h2>
        <Image src={Faqq} alt="Najczęściej zadawane pytania" />
      </div>

      {/* FAQ items */}
      <div className="flex flex-col border-t border-zinc-600 -mt-25 md:-mt-30 xl:-mt-35">
        {faqData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="border-b border-zinc-600 bg-zinc-900"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-6 focus:outline-none group"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 font-bold text-lg">
                  {idx + 1}.
                </span>
                <span className="text-zinc-200 text-lg text-left group-hover:text-zinc-100 transition-colors duration-200">
                  {item.question}
                </span>
              </div>
              <motion.span
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-emerald-400 shrink-0 ml-4 leading-none"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-16 pb-6 text-zinc-300 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Email link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <p className="text-zinc-500 text-sm mb-2">Nie znalazłeś odpowiedzi?</p>
        <a
          href="mailto:herzog.web.dev@gmail.com"
          className="text-zinc-200 text-base text-center hover:text-emerald-300 transition-all duration-300"
        >
          herzog.web.dev@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
