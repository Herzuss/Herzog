"use client";
import { motion } from "motion/react";
import CTAButton from "./CTAButton";

const trustSignals = [
  { value: "Clean UI", label: "Nowoczesny i czysty design" },
  { value: "14 dni", label: "Średni czas realizacji" },
  { value: "Autorskie", label: "Projekt skrojony pod Ciebie" },
];

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative max-w-screen-3xl mx-auto px-4 sm:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center bg-[url(/tloHero-mobile.png)] md:bg-[url(/tloHero.png)] bg-cover bg-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-zinc-200 text-5xl/12 md:text-6xl/14 lg:text-7xl/17 tracking-tighter font-bold max-w-5xl text-center text-shadow-xl text-shadow-zinc-950/25 mt-10"
      >
        Rozwijaj swój biznes dzięki{" "}
        <span className="italic bg-[url(/gradientbeanie.webp)] bg-clip-text text-transparent text-shadow-none">
          nowoczesnej&nbsp;
        </span>{" "}
        i skutecznej stronie internetowej.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-zinc-400 text-base sm:text-lg text-center mt-6 max-w-xl leading-relaxed"
      >
        Projektuję i koduję strony, które sprzedają, od designu po wdrożenie.{" "}
        <span className="text-zinc-200 font-semibold">
          Bez gotowców, bez szablonów.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10"
      >
        <CTAButton onClick={onOpenContact} />
      </motion.div>

      {/* Trust signals */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-row gap-8 sm:gap-16 mt-16 mb-10"
      >
        {trustSignals.map((signal, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-lg sm:text-3xl font-extrabold text-emerald-300 tracking-tight">
              {signal.value}
            </span>
            <span className="text-zinc-500 text-xs sm:text-sm text-center tracking-wide">
              {signal.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-zinc-500"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
