import tlo from "@/../public/images/OMNIE/tlo.svg";
import Image from "next/image";
export default function Projekty() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 max-h-screen-2xl relative">
      <div className="relative flex items-center justify-center">
        <Image src={tlo} alt="tlo" className="" />
        <h2 className="text-6xl text-zinc-200 uppercase text-center absolute font-semibold">
          W TRAKCIE <span className="text-lime-500">BUDOWY...</span>
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div></div>
      </div>
    </section>
  );
}
