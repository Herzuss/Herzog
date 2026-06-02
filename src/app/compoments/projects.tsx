"use client";
import Rzepa from "@/../public/rzepa-fullpage.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Projekty() {
  return (
    <section id="projekty" className="max-w-screen-xl mx-auto px-4 sm:px-8 mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-zinc-200 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10"
      >
        Projekty
      </motion.h2>

      {/* Featured project card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left – content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Tags + year */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3 h-7 rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 text-zinc-900 text-xs font-bold flex items-center">
                  UX/UI Design
                </span>
                <span className="px-3 h-7 rounded-full bg-gradient-to-r from-emerald-300 to-teal-200 text-zinc-900 text-xs font-bold flex items-center">
                  Kodowanie
                </span>
                <span className="px-3 h-7 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-light flex items-center">
                  2025
                </span>
              </div>

              <h3 className="text-zinc-100 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4">
                Trener Rzepa
              </h3>

              <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                Strona sprzedażowa dla trenera personalnego z rosnącą publicznością na Instagramie.
                Celem było wyeliminowanie ręcznej obsługi zamówień i stworzenie systemu
                działającego 24/7 z integracją Stripe.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/case-study/trener-rzepa"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-sm uppercase tracking-wide transition-all duration-200"
              >
                Case Study
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </Link>
              <a
                href="https://www.rzepatrener.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-all duration-200"
              >
                rzepatrener.pl
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                  <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.43067 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right – screenshot */}
          <div className="lg:w-[480px] relative overflow-hidden bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 flex flex-col">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-zinc-800 rounded-md h-6 flex items-center px-3">
                <span className="text-zinc-500 text-xs">rzepatrener.pl</span>
              </div>
            </div>
            {/* Auto-scrolling site preview */}
            <div className="relative flex-1 overflow-hidden min-h-[380px]">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                className="absolute inset-x-0 top-0 will-change-transform"
              >
                <Image src={Rzepa} alt="Strona Trener Rzepa – podgląd wszystkich sekcji" className="w-full h-auto" priority />
                <Image src={Rzepa} alt="" aria-hidden className="w-full h-auto" />
              </motion.div>
              {/* Subtelny gradient u dołu dla efektu „okna" */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
