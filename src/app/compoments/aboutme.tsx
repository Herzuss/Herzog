"use client";
import Image from "next/image";
import zdjecie from "@/../public/moja fotka.jpg";
import ikonki from "@/../public/ikonkiTechnologi.svg";
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
        <h2 className="text-3xl text-zinc-200 uppercase font-extrabold mt-10 text-center sm:text-left">
          Nazywam się Filip <span className="text-emerald-300">Herzog</span>{" "}
          <br />
          jestem web developerem i <br />
          designerem.
        </h2>
        <Image
          src={zdjecie}
          alt="Filip Herzog"
          className="w-48 h-48 rounded-full"
        />
      </div>
      <p className=" text-lg text-zinc-200 mt-10 leading-[35px] text-center font-semibold">
        Tworzę unikalne, nowoczesne i estetyczne strony internetowe, łącząc
        kreatywność z czystym, dobrze napisanym kodem.{" "}
        <span className="text-emerald-300">ZERO gotowców</span>. Każda
        realizacja to indywidualny projekt, dopasowany do Twoich potrzeb. <br />
        <br />
        Specjalizuję się w tworzeniu nowoczesnych stron głównie w Next.js i
        Tailwind CSS. Kodowanie to dla mnie nie tylko praca, ale też pasja.
        uwielbiam projektować i wdrażać estetyczne, szybkie i funkcjonalne
        rozwiązania, które realnie wspierają biznes.
      </p>
      <Image
        src={ikonki}
        alt="Ikony"
        className="mx-auto scale-90 md:scale-100 py-4"
      />
      <p className="text-lg text-zinc-200 leading-[35px] text-center font-semibold">
        Umów się na bezpłatną konsultację, podczas której wspólnie
        zaprojektujemy wstępną wersję strony idealnie dopasowaną do Twoich
        potrzeb i celów biznesowych.
      </p>
      <div className="flex justify-center items-center mt-4">
        <div className="bg-zinc-900 w-[290px] h-[66px] p-px bg-conic/[from_var(--border-angle)] from-zinc-900 via-teal-50 to-zinc-900 from-60% via-80% to-100% rounded-xl flex justify-center items-center animate-rotate-border ">
          <button
            data-cal-namespace="bezplatna-konsultacja"
            data-cal-link="herzogstronyinternetowe/bezplatna-konsultacja"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className=" group relative inline-flex w-72 h-16 items-center justify-center overflow-hidden rounded-xl bg-zinc-900 font-extrabold text-zinc-200 uppercase text-2xl hover:bg-zinc-800 transition-all duration-300 cursor-pointer shadow-xl shadow-emerald-100/15 border border-emerald-300/50
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
        </div>
      </div>
    </section>
  );
}
