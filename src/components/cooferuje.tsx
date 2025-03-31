import Image from "next/image";
import tekstura from "@/../public/images/COOFERUJE/tekstura.svg";
import podkreslenie from "@/../public/images/COOFERUJE/podkreslenie.svg";
import ikona1 from "@/../public/images/COOFERUJE/ikona1.svg";
import ikona2 from "@/../public/images/COOFERUJE/ikona2.svg";
import ikona3 from "@/../public/images/COOFERUJE/ikona3.svg";

export default function Cooferuje() {
  return (
    <section id="co-oferuje" className="">
      <h2 className=" text-center text-2xl text-zinc-200 uppercase font-normal mt-10 mb-8">
        co oferuje?
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-5 relative">
        <div className="w-96 h-[28rem] border border-lime-500 min-w-80 rounded-3xl relative flex flex-col items-center overflow-hidden">
          <Image className="ruszanie absolute" src={tekstura} alt="Herzog" />
          <h3 className="text-3xl text-zinc-200 font-bold text-center mt-5 uppercase">
            <span className="text-lime-500">unikalny </span> design
          </h3>
          <Image src={podkreslenie} alt="Podkreslenie zdjecia" />
          <Image src={ikona1} alt="Ikona1" />
          <p className="text-base text-center text-zinc-200 uppercase font-semibold px-10">
            Tworzę nowoczesne, estetyczne i funkcjonalne strony, które
            przyciągają uwagę i wspierają rozwój Twojego biznesu.
          </p>
        </div>
        <div className="w-96 h-[28rem] border border-lime-500 min-w-80 rounded-3xl relative flex flex-col items-center overflow-hidden">
          <Image className="ruszanie absolute" src={tekstura} alt="Herzog" />
          <h3 className="text-3xl text-zinc-200 font-bold text-center mt-5 uppercase ">
            <span className="text-lime-500">Skuteczne </span> SEO
          </h3>
          <Image src={podkreslenie} alt="Podkreslenie zdjecia" />
          <Image src={ikona2} alt="Ikona2" />
          <p className="text-base text-center text-zinc-200 uppercase font-semibold px-10">
            Twoja strona będzie szybka, lekka i doskonale zoptymalizowana pod
            SEO, aby wyróżniać się w Google.
          </p>
        </div>
        <div className="w-96 h-[28rem] border border-lime-500 min-w-80 rounded-3xl relative flex flex-col items-center overflow-hidden">
          <Image className="ruszanie absolute" src={tekstura} alt="Herzog" />
          <h3 className="text-3xl text-zinc-200 font-bold text-center mt-5 uppercase">
            <span className="text-lime-500">WIEKSZĄ </span> SPRZEDAŻ
          </h3>
          <Image src={podkreslenie} alt="Podkreslenie zdjecia" />
          <Image src={ikona3} alt="Ikona3" />
          <p className="text-base text-center text-zinc-200 uppercase font-semibold px-10">
            Projektuję strony, które nie tylko dobrze wyglądają, ale też
            zwiększają liczbę zapytań i sprzedaży.
          </p>
        </div>
      </div>
    </section>
  );
}
