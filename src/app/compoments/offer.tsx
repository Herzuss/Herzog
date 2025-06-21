"use client";
import { motion } from "motion/react";
import Image from "next/image";
import ikonka1 from "@/../public/ikonka1Offer.svg";
import ikonka2 from "@/../public/ikonka2Offer.svg";
import ikonka3 from "@/../public/ikonka3Offer.svg";

export default function Offer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="max-w-screen-3xl mx-auto px-4 sm:px-8 pb-10 flex flex-col justify-center items-center mt-24 bg-[url(/tloOffer.png)] bg-center bg-no-repeat overflow-hidden"
    >
      <h2 className="text-zinc-200 text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-wrap sm:text-nowrap tracking-tight">
        Oto, co wchodzi w zakres naszej współpracy
      </h2>
      <div className="flex flex-row gap-20 mt-10 pb-10 flex-wrap justify-center items-center">
        <div className=" group w-56 h-40 bg-zinc-800 border border-zinc-500 rounded-xl flex flex-col hover:scale-105 transition-all duration-200 hover:bg-linear-to-tl hover:from-0% hover:to-100% hover:from-emerald-300 hover:to-emerald-700 hover:border-emerald-300">
          <Image src={ikonka1} alt="ikonka designu" className="ml-3 mt-3" />
          <h3 className="text-zinc-200 text-xl py-4 ml-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            UI/UX Design
          </h3>
          <p className="text-zinc-200 text-left text-[15px] font-light ml-3 tracking-tighter mr-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            Nowoczesny wygląd dopasowany do Twoich potrzeb
          </p>
        </div>
        <div className=" group w-56 h-40 bg-zinc-800 border border-zinc-500 rounded-xl hover:scale-105 transition-all duration-200 hover:scale-105 transition-all duration-200 hover:bg-linear-to-tl hover:from-0% hover:to-100% hover:from-emerald-300 hover:to-emerald-700 hover:border-emerald-500">
          <Image src={ikonka2} alt="ikonka designu" className="ml-3 mt-3" />
          <h3 className="text-zinc-200 text-xl py-4 ml-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            Zakodowanie strony
          </h3>
          <p className="text-zinc-200 text-left text-[15px] font-light ml-3 tracking-tighter mr-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            Responsywna, szybka i gotowa do działania
          </p>
        </div>
        <div className=" group w-56 h-40 bg-zinc-800 border border-zinc-500 rounded-xl hover:scale-105 transition-all duration-200 hover:scale-105 transition-all duration-200 hover:bg-linear-to-tl hover:from-0% hover:to-100% hover:from-emerald-300 hover:to-emerald-700 hover:border-emerald-500">
          <Image src={ikonka3} alt="ikonka designu" className="ml-3 mt-3" />
          <h3 className="text-zinc-200 text-xl py-4 ml-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            Wdrożenie i wsparcie
          </h3>
          <p className="text-zinc-200 text-left text-[15px] font-light ml-3 tracking-tighter mr-3 group-hover:text-zinc-900 transition-all duration-200 cursor-default">
            Pomoc przy domenie, hostingu i uruchomieniu
          </p>
        </div>
      </div>
    </motion.section>
  );
}
