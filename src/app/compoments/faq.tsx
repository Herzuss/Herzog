"use client";
import Image from "next/image";
import Faqq from "@/../public/FAQ.svg";
import { useState } from "react";
const faqData = [
  {
    question: "Jak długo trwa realizacja strony?",
    answer: "Standardowo od 7 do 21 dni, w zależności od złożoności projektu.",
  },
  {
    question: "Jakie technologie wykorzystujesz przy tworzeniu stron?",
    answer:
      "Korzystam z Next.js do tworzenia szybkich i responsywnych stron oraz Tailwind CSS, który pozwala na szybkie i elastyczne stylowanie interfejsów.",
  },
  {
    question: "Co muszę przygotować, zanim zaczniemy współpracę?",
    answer:
      "Przed współpracą przygotuj informacje o swojej działalności, materiały graficzne, treści oraz oczekiwania co do funkcji strony.",
  },
  {
    question: "Czy oferujesz wsparcie techniczne po zakończeniu projektu?",
    answer:
      "Tak, oferuję wsparcie techniczne przez miesiąc po zakończeniu projektu. W tym czasie można zgłaszać ewentualne poprawki i wprowadzać niezbędne zmiany.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-20">
      <Image src={Faqq} alt="faq napis" />
      <div className="flex justify-center items-center flex-col -mt-18 sm:-mt-28 md:-mt-36 border-t border-zinc-600">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="w-full border-b border-zinc-600 bg-zinc-900 transition-colors"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-6 focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 font-bold text-lg">
                  {idx + 1}.
                </span>
                <span className="text-zinc-200 text-lg text-left">
                  {item.question}
                </span>
              </div>
              <span className="text-2xl text-emerald-400 transition-transform duration-200">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            <div
              className={`px-16 pb-6 text-zinc-300 text-base transition-all duration-300 overflow-hidden ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <a href="mailto:herzog.web.dev@gmail.com">
        <p className="text-zinc-200 text-base text-center mt-20 pb-10 hover:text-emerald-300 transition-all duration-300">
          herzog.web.dev@gmail.com
        </p>
      </a>
    </section>
  );
}
