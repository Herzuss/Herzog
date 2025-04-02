import Image from "next/image";
import Link from "next/link";
import zdjecie from "@/../public/images/OMNIE/moja fotka.svg";
import ikonki from "@/../public/images/OMNIE/ikonki.svg";

export default function Omnie() {
  return (
    <section className="max-w-screen-xl mx-auto px-44 lg:px-52" id="o-mnie">
      <div className="flex flex-col sm:flex-row mt-20 gap-10 sm:gap-52 justify-center items-center">
        <h2 className="text-3xl text-zinc-200 uppercase font-extrabold mt-10">
          Nazywam się Filip <span className="text-lime-500">Herzog</span> <br />
          jestem web developerem i <br />
          designerem.
        </h2>
        <Image src={zdjecie} alt="Filip Herzog" />
      </div>
      <p className="uppercase text-base text-zinc-200 mt-10 leading-[35px] text-center font-semibold">
        Tworzę unikalne, nowoczesne i estetyczne strony internetowe, łącząc
        kreatywność z czystym, dobrze napisanym kodem. ZERO gotowców – każda
        realizacja to indywidualny projekt, dopasowany do Twoich potrzeb. <br />
        <br />
        Specjalizuję się w tworzeniu nowoczesnych stron GŁÓWNIE w Next.js i
        Tailwind CSS. Kodowanie to dla mnie nie tylko praca, ale też pasja.
        uwielbiam projektować i wdrażać estetyczne, szybkie i funkcjonalne
        rozwiązania, które realnie wspierają biznes.
      </p>
      <Image src={ikonki} alt="Ikony" className="mx-auto" />
      <p className="uppercase text-base text-zinc-200 leading-[35px] text-center font-semibold">
        Zapraszam na bezpłatną konsultację, podczas której wspólnie stworzymy
        SZKIC stronY dopasowaną do Twoich oczekiwań.
      </p>
      <div className="relative flex justify-center items-center mt-5">
        <div className="absolute flex  w-[143px] h-[55px] sm:w-[175px] sm:h-[63px] justify-center items-center bg-stone-950 rounded-4xl overflow-hidden">
          <div className="absolute w-52 h-8 bg-linear-to-r from-lime-200 from-50% to-gray-950 to-50% spin-slow"></div>
        </div>
        <Link
          href="https://cal.com/herzogstronyinternetowe/bezplatna-konsultacja"
          className="z-1"
        >
          <button className=" w-35 h-13 sm:w-43 sm:h-15 bg-lime-500 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-lime-200 hover:text-lime-500 transition-all duration-300 cursor-pointer hover:scale-105">
            konsultacja
          </button>
        </Link>
      </div>
    </section>
  );
}
