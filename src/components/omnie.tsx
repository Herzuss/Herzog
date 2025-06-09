"use client";
import Image from "next/image";
import zdjecie from "@/../public/images/OMNIE/moja fotka.jpg";
import ikonki from "@/../public/images/OMNIE/ikonki.svg";
import tlo from "@/../public/images/OMNIE/tlo.svg";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Omnie() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bezplatna-konsultacja" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#c76802" },
          dark: { "cal-brand": "#7CCF00" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-52" id="o-mnie">
      <div className="flex flex-col sm:flex-row mt-20 gap-10 sm:gap-52 justify-center items-center">
        <Image className="absolute mt-60" src={tlo} alt="Herzog" />
        <h2 className="text-3xl text-zinc-200 uppercase font-extrabold mt-10 text-center sm:text-left">
          Nazywam się Filip <span className="text-lime-500">Herzog</span> <br />
          jestem web developerem i <br />
          designerem.
        </h2>
        <Image
          src={zdjecie}
          alt="Filip Herzog"
          className="w-48 h-48 rounded-full"
        />
      </div>
      <p className="uppercase text-base text-zinc-200 mt-10 leading-[35px] text-center font-semibold">
        Tworzę unikalne, nowoczesne i estetyczne strony internetowe, łącząc
        kreatywność z czystym, dobrze napisanym kodem.{" "}
        <span className="text-lime-500">ZERO gotowców</span>. Każda realizacja
        to indywidualny projekt, dopasowany do Twoich potrzeb. <br />
        <br />
        Specjalizuję się w tworzeniu nowoczesnych stron GŁÓWNIE w Next.js i
        Tailwind CSS. Kodowanie to dla mnie nie tylko praca, ale też pasja.
        uwielbiam projektować i wdrażać estetyczne, szybkie i funkcjonalne
        rozwiązania, które realnie wspierają biznes.
      </p>
      <Image
        src={ikonki}
        alt="Ikony"
        className="mx-auto scale-90 md:scale-100 py-4"
      />
      <p className="uppercase text-base text-zinc-200 leading-[35px] text-center font-semibold">
        Umów się na bezpłatną konsultację, podczas której wspólnie
        zaprojektujemy wstępną wersję strony idealnie dopasowaną do Twoich
        potrzeb i celów biznesowych.
      </p>
      <div className="relative flex justify-center items-center mt-5">
        <div className="absolute flex  w-[142px] h-[54px] sm:w-[174px] sm:h-[62px] justify-center items-center bg-lime-600 rounded-4xl overflow-hidden">
          <div className="absolute w-52 h-8 bg-linear-to-r from-lime-50 from-50% to-lime-500 to-50% spin-slow blur-sm"></div>
        </div>
        <button
          data-cal-namespace="bezplatna-konsultacja"
          data-cal-link="herzogstronyinternetowe/bezplatna-konsultacja"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className=" shadow-lg shadow-lime-300/30 z-1 w-35 h-13 sm:w-43 sm:h-15 bg-lime-800 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-lime-500 hover:text-lime-800 transition-all duration-300 cursor-pointer hover:scale-105"
        >
          konsultacja
        </button>
      </div>
    </section>
  );
}
