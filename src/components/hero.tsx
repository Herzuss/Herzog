import Image from "next/image";
import Link from "next/link";
import tlo from "@/../public/images/HERO/tlo.svg";
// import logorzepa from "@/../public/images/HERO/rzepkalogo.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className=" relative flex justify-center items-center flex-col"
    >
      <Image
        className="absolute z-2 top-10 sm:top-13 animate-pulse scale-90 sm:scale-100"
        src={tlo}
        alt="Herzog"
      />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8  h-96  flex justify-center items-center">
        <h1 className="text-4xl/10 sm:text-5xl/11 lg:text-6xl/15 text-zinc-200 font-bold z-3 text-center mt-20 sm:mt-40 tracking-tighter max-w-5xl">
          PRZYCIĄGAJ KLIENTÓW I <span className="text-lime-300">ROZWIJAJ </span>
          BIZNES Z<span className="text-lime-300"> NOWOCZESNĄ </span> STRONĄ
          INTERNETOWĄ
        </h1>
      </div>

      <ul className=" flex flex-row items-center gap-10 sm:gap-30 static w-auto h-auto mt-5 sm:mt-15">
        <li className="relative flex justify-center items-center">
          <div className="absolute flex  w-[143px] h-[55px] sm:w-[175px] sm:h-[63px] justify-center items-center bg-lime-500 rounded-4xl overflow-hidden">
            <div className="absolute w-52 h-8 bg-linear-to-r from-lime-100 from-50% to-lime-500 to-50% spin-slow blur-sm"></div>
          </div>
          <Link
            href="https://cal.com/herzogstronyinternetowe/bezplatna-konsultacja"
            className="z-1"
          >
            <button className=" w-35 h-13 sm:w-43 sm:h-15 bg-lime-800 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-lime-500 hover:text-lime-800 transition-all duration-300 cursor-pointer hover:scale-105">
              konsultacja
            </button>
          </Link>
        </li>
        <li>
          <Link href="#o-mnie">
            <button className="w-35 h-13 sm:w-43 sm:h-15 bg-neutral-900 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-zinc-200 hover:text-stone-800 transition-all duration-300 cursor-pointer ">
              o mnie
            </button>
          </Link>
        </li>
      </ul>
      {/* <Image
        className="scale-80 sm:scale-90 mt-15"
        src={logorzepa}
        alt="Rzepka-logo"
      /> */}
    </section>
  );
}
