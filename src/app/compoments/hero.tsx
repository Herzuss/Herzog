"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="max-w-screen-3xl mx-auto px-4 sm:px-8  flex flex-col justify-center items-center bg-[url(/tloHero.png)] bg-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-zinc-200 text-4xl/10 sm:text-5xl/11 lg:text-7xl/17 tracking-tighter font-bold max-w-5xl text-center text-shadow-xl text-shadow-zinc-950/25 mt-24 sm:mt-44"
      >
        Rozwijaj swój biznes dzięki{" "}
        <span className="italic bg-[url(/gradientbeanie.png)] bg-clip-text text-transparent text-shadow-none">
          nowoczesnej&nbsp;
        </span>{" "}
        i skutecznej stronie internetowej.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-zinc-200 italic text-md text-center mt-10"
      >
        Umów się na darmową konsultację, nie czekaj aż wyprzedzi cię konkurencja
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-zinc-900 w-[290px] h-[66px] p-px bg-conic/[from_var(--border-angle)] from-zinc-900 via-teal-50 to-zinc-900 from-60% via-80% to-100% rounded-xl flex justify-center items-center animate-rotate-border  mt-10"
      >
        <button
          data-cal-namespace="bezplatna-konsultacja"
          data-cal-link="herzogstronyinternetowe/bezplatna-konsultacja"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="group relative inline-flex w-72 h-16 items-center justify-center overflow-hidden rounded-xl bg-zinc-900 font-extrabold text-zinc-200 uppercase text-2xl hover:bg-zinc-800 transition-all duration-300 cursor-pointer shadow-xl shadow-emerald-100/15 border border-emerald-300/50
          "
        >
          <span>Umów rozmowe</span>
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </motion.div>
    </section>
  );
}
