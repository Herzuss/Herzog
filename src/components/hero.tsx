"use client";

import Image from "next/image";
import Link from "next/link";
import tlo from "@/../public/images/HERO/tlo.svg";
import { motion } from "motion/react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bezplatna-konsultacja" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#7CCF00" },
          dark: { "cal-brand": "#7CCF00" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section
      id="hero"
      className=" relative flex justify-center items-center flex-col mb-20 md:mb-28"
    >
      <motion.div
        className="absolute z-2 top-10 sm:top-13 scale-90 sm:scale-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={tlo} alt="Herzog" />
      </motion.div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8  h-96  flex justify-center items-center">
        <motion.h1
          className="text-4xl/10 sm:text-5xl/11 lg:text-6xl/15 text-zinc-200 font-bold z-3 text-center mt-20 sm:mt-40 tracking-tighter max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PRZYCIĄGAJ KLIENTÓW I <span className="text-lime-300">ROZWIJAJ </span>
          BIZNES Z<span className="text-lime-300"> NOWOCZESNĄ </span> STRONĄ
          INTERNETOWĄ
        </motion.h1>
      </div>

      <ul className=" flex flex-col md:flex-row items-center gap-10 sm:gap-30 static w-auto h-auto mt-5 sm:mt-15">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <li className="relative flex justify-center items-center">
            <div className="absolute flex w-[174px] h-[62px] justify-center items-center bg-lime-600 rounded-4xl overflow-hidden">
              <div className="absolute w-52 h-8 bg-linear-to-r from-lime-50 from-50% to-lime-500 to-50% spin-slow blur-sm"></div>
            </div>
            <button
              className="z-1 w-43 h-15 bg-lime-800 uppercase font-bold text-xl text-zinc-200 rounded-4xl hover:bg-lime-500 hover:text-lime-800 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg shadow-lime-300/30"
              data-cal-namespace="bezplatna-konsultacja"
              data-cal-link="herzogstronyinternetowe/bezplatna-konsultacja"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
              konsultacja
            </button>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <li className="hidden md:block">
            <Link href="#o-mnie">
              <button className="w-43 h-15 bg-neutral-900 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-zinc-200 hover:text-stone-800 transition-all duration-300 cursor-pointer shadow-lg shadow-neutral-600/30 border-2 border-neutral-800">
                o mnie
              </button>
            </Link>
          </li>
        </motion.div>
      </ul>
      {/* <Image
        className="scale-80 sm:scale-90 mt-15"
        src={logorzepa}
        alt="Rzepka-logo"
      /> */}
    </section>
  );
}
