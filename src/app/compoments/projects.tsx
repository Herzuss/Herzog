"use client";
import Rzepa from "@/../public/RzepaProjekt.png";
import RzepaHero from "@/../public/rzepecki hero sekcja.png";
import RzepaOffer from "@/../public/rzepecki oferta.png";
import RzepaStripe from "@/../public/Rzepa stripe.png";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projekty() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="max-w-screen-3xl mx-auto px-4 sm:px-8 flex flex-col gap-10 bg-[url(/tloProjekty.png)] bg-center bg-no-repeat">
      <h2 className="text-zinc-200 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mt-10">
        Projekty
      </h2>
      <div
        onClick={() => setShowPopup(true)}
        className="flex justify-center items-center transition-all duration-150"
      >
        <div className="flex flex-col w-md h-96 bg-gradient-to-tr from-0-% to-100% from-zinc-600 to-zinc-800 border border-zinc-500 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center pt-4 pl-4 gap-4">
              <div className="w-24 h-7 rounded-2xl bg-linear-to-r from-amber-200 from-0% to-yellow-600 to-100% flex items-center justify-center">
                <p className="text-zinc-950 text-[15px] font-bold tracking-tighter">
                  UX/UI Design
                </p>
              </div>
              <div className="w-24 h-7 rounded-2xl bg-linear-to-r from-emerald-300 from-0% to-teal-100 to-100% flex items-center justify-center">
                <p className="text-zinc-950 text-[15px] font-bold tracking-tighter">
                  Kodowanie
                </p>
              </div>
            </div>
            <div className="w-12 h-7 bg-zinc-700 rounded-2xl border border-zinc-900 mt-4 mr-4 flex justify-center items-center">
              <p className="text-zinc-200 font-light text-xs">2025</p>
            </div>
          </div>
          <h3 className="text-zinc-200 text-left text-3xl uppercase font-bold ml-4 mt-4">
            Trener Rzepa
          </h3>
          <p className="text-zinc-200 text-left font-light pl-4 pt-4 text-[15px] mr-5">
            Strona wykonana dla trenera personalnego, aby zautomatyzować
            sprzedaże planów treningowych i prowadzeń online.{" "}
          </p>
          <Image
            src={Rzepa}
            alt="rzepa fotka"
            className="scale-90 border-r border-l border-t border-zinc-500 rounded-2xl"
          />
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center mt-10 sm:mt-0">
            <div
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 bg-zinc-700 rounded-xl border border-zinc-500 p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <button
                className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-100 text-2xl cursor-pointer"
                onClick={() => setShowPopup(false)}
                aria-label="Zamknij"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-zinc-100">
                TRENER RZEPA
              </h2>
              <p className="text-zinc-200 mb-2 text-xl">
                <span className="text-red-500"> Trenera Rzepe</span> wychaczyłem
                na instagramie, i zobaczyłem, że sprzedaję plany treningowe przy
                stale rosnącej publice. <br /> <br />
              </p>
              <p className="text-zinc-200 text-xl">
                Napisałem więc do niego z ofertą automatyzacji sprzedaży. <br />{" "}
                <br />
              </p>
              <p className="text-zinc-200 mb-4 text-xl">
                Dzięki nowej stronie klient nie musi już pisać wiadomości na
                Instagramie, może od razu dokonać zakupu, a plan treningowy
                trafia do niego po jego realizacji. Strona działa 24/7, co
                pozwala na ciągłą sprzedaż bez konieczności ręcznej obsługi. To
                znacznie usprawniło proces sprzedaży i zwiększyło wygodę zarówno
                dla trenera, jak i jego klientów.
              </p>
              <Image
                src={Rzepa}
                alt="zdjecie strony rzepy"
                className="border border-zinc-400 rounded-xl"
              />
              <p className="text-zinc-200 text-xl">
                <br />
                Czerwone kolory i żółte akcenty nadają stronie dynamicznej
                energii i zdecydowanego charakteru, jednocześnie podkreślając
                jej profesjonalizm i budząc zaufanie. <br /> <br />
              </p>
              <Image
                src={RzepaHero}
                alt="trener rzepka sekcja hero"
                className="border border-zinc-400 rounded-xl"
              />
              <p className="text-zinc-200 text-xl">
                <br />
                Sekcja HERO zawiera mocny, motywujący nagłówek, który
                jednocześnie zachęca do działania. Pod nim znajduje się
                podtytuł, który od razu przekonuje klienta do zakupu planu
                treningowego, budując zaufanie i zainteresowanie ofertą. Duży,
                wyraźny przycisk „Zamów plan” ułatwia szybkie podjęcie decyzji i
                prowadzi użytkownika bezpośrednio do procesu zakupu. <br />{" "}
                <br />
              </p>
              <Image
                src={RzepaOffer}
                alt="trener rzepka oferta"
                className="border border-zinc-400 rounded-xl"
              />
              <p className="text-zinc-200 text-xl">
                <br />
                Obie opcje są jasno przedstawione i łatwe do porównania.
                Najważniejsze korzyści są wyróżnione, a duże przyciski „Kup
                teraz” zachęcają do szybkiego wyboru. Bestseller dodatkowo
                przyciąga uwagę do najpopularniejszej oferty <br /> <br />
              </p>
              <Image
                src={RzepaStripe}
                alt="trener rzepka oferta"
                className="border border-zinc-400 rounded-xl"
              />
              <p className="text-zinc-200 text-xl">
                <br />
                Zdjęcie przedstawia okno płatności Stripe, które umożliwia
                szybkie i wygodne dokonanie zakupu za pomocą popularnych metod,
                takich jak BLIK czy karta. Dzięki temu proces zakupowy jest
                prosty, bezpieczny i dostępny 24/7, co znacznie ułatwia klientom
                finalizację zamówienia. <br /> <br />
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
