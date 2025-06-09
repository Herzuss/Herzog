import tlo from "@/../public/images/OMNIE/tlo.svg";
import Image from "next/image";
import rzepa1 from "@/../public/images/RZEPA-TRENER/HERO 1.png";
import rzepa2 from "@/../public/images/RZEPA-TRENER/HERO 2.png";
import rzepa3 from "@/../public/images/RZEPA-TRENER/HERO 3.png";
import rzepa4 from "@/../public/images/RZEPA-TRENER/HERO 4.png";
import rzepa5 from "@/../public/images/RZEPA-TRENER/HERO 5.png";
import rzepa6 from "@/../public/images/RZEPA-TRENER/HERO 6.png";
export default function Projekty() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 max-h-screen-2xl relative bg-[url(/tlo.svg)] bg-cover bg-no-repeat bg-center">
      <div className="relative flex items-center justify-center">
        <div className="grid grid-rows-2 grid-cols-1 justify-center items-center gap-5 mt-20">
          <div>
            <div className="w-96 md:w-xl h-72 border-t border-b border-lime-500 bg-neutral-900  overflow-x-hidden relative flex justify-center items-center md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0.01),#000,rgba(0,0,0,0.01))]">
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-0s] transition-all duration-300 rounded-lg"
                src={rzepa1}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-5s] transition-all duration-300"
                src={rzepa2}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-10s] transition-all duration-300"
                src={rzepa3}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-15s] transition-all duration-300"
                src={rzepa4}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-20s] transition-all duration-300"
                src={rzepa5}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-25s] transition-all duration-300"
                src={rzepa6}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-30s] transition-all duration-300"
                src={rzepa1}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-35s] transition-all duration-300"
                src={rzepa2}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-40s] transition-all duration-300"
                src={rzepa3}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-45s] transition-all duration-300"
                src={rzepa4}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-50s] transition-all duration-300"
                src={rzepa5}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-55s] transition-all duration-300"
                src={rzepa6}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-60s] transition-all duration-300"
                src={rzepa1}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-65s] transition-all duration-300"
                src={rzepa2}
                alt="przemiana"
              />
              <Image
                className="absolute w-72 md:w-96 left-[max(24rem*12,100%)] animate-[slider_72s_linear_infinite_-70s] transition-all duration-300"
                src={rzepa3}
                alt="przemiana"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div></div>
      </div>
    </section>
  );
}
