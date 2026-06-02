"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import newHero from "@/../public/new-hero.png";
import newCennik from "@/../public/new-cennik.png";
import newTransformacje from "@/../public/new-transformacje.png";
import checkoutShot from "@/../public/rzepa-checkout.png";
import oldHero from "@/../public/rzepa-old-hero.png";

// Opinia Rzepy. Dopóki jest null – sekcja się nie renderuje.
// Wideo: wrzuć plik do public/ i ustaw { kind: "video", src: "/rzepa-opinia.mp4", poster: "/rzepa-opinia-poster.jpg", author, role }.
// Tekst: ustaw { kind: "text", quote, author, role }.
type Testimonial =
  | { kind: "video"; src: string; poster?: string; author: string; role: string }
  | { kind: "text"; quote: string; author: string; role: string };
const testimonial: Testimonial | null = null;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-1">{num}</p>
      <h2 className="text-zinc-100 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function LighthouseRing({ label }: { label: string }) {
  const r = 44;
  const circ = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
          <circle cx="50" cy="50" r={r} strokeWidth="6" fill="none" className="text-zinc-800" stroke="currentColor" />
          <circle
            cx="50"
            cy="50"
            r={r}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="text-emerald-400"
            stroke="currentColor"
            strokeDasharray={circ}
            strokeDashoffset={0}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-emerald-300 font-extrabold text-2xl">
          100
        </span>
      </div>
      <span className="text-zinc-400 text-sm text-center">{label}</span>
    </div>
  );
}

function Shot({ src, alt, caption }: { src: typeof newHero; alt: string; caption: string }) {
  return (
    <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      <Image src={src} alt={alt} className="w-full h-auto" placeholder="blur" sizes="(max-width: 1024px) 100vw, 768px" />
      <figcaption className="text-zinc-500 text-sm px-5 py-3 border-t border-zinc-800">{caption}</figcaption>
    </figure>
  );
}

const goals = [
  "Zautomatyzować sprzedaż planów — koniec ręcznej obsługi DM i BLIK na telefon.",
  "Sprzedaż działająca 24/7, niezależnie od tego, kiedy Rzepa ma czas.",
  "Nowoczesny, konwertujący wygląd pod rosnącą publiczność na Instagramie.",
];

const process = [
  { step: "Design w Figmie", desc: "Projekt każdej sekcji, hierarchia treści i przemyślana ścieżka zakupu — zanim powstała pierwsza linia kodu." },
  { step: "Kod w Next.js + Tailwind", desc: "Strona pisana od zera: błyskawiczne ładowanie, pełna responsywność i SEO gotowe na rozwój." },
  { step: "Integracja Stripe", desc: "Płatności online (BLIK, karta, Klarna) i automatyczne powiadomienia o zamówieniach — zero ręcznej obsługi." },
];

const results = [
  { value: "60+", label: "transakcji online — strona już się zwróciła" },
  { value: "24/7", label: "automatyczna sprzedaż, bez udziału Rzepy" },
  { value: "0", label: "ręcznej obsługi DM i BLIK" },
];

export default function TrenerRzepaCaseStudy() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-zinc-900/85 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 h-16 flex items-center">
          <Link
            href="/#projekty"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
            Wróć do portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 h-7 rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 text-zinc-900 text-xs font-bold flex items-center">
                UX/UI Design
              </span>
              <span className="px-3 h-7 rounded-full bg-gradient-to-r from-emerald-300 to-teal-200 text-zinc-900 text-xs font-bold flex items-center">
                Kodowanie
              </span>
              <span className="px-3 h-7 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-light flex items-center">
                2025
              </span>
            </div>

            <h1 className="text-zinc-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">
              Trener Rzepa
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-6">
              Strona sprzedażowa dla trenera personalnego z automatyczną sprzedażą planów
              treningowych. Projekt wyeliminował ręczną obsługę zamówień i umożliwił sprzedaż 24/7.
            </p>

            <a
              href="https://www.rzepatrener.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.43067 13 2.497L13 2.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              Zobacz stronę na żywo – rzepatrener.pl
            </a>
          </div>
        </Reveal>

        {/* Meta bar */}
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mb-16">
            {[
              { k: "Klient", v: "Trener personalny" },
              { k: "Rola", v: "Design + Kod" },
              { k: "Stack", v: "Next.js · Stripe" },
              { k: "Rok", v: "2025" },
            ].map((m) => (
              <div key={m.k} className="bg-zinc-900 px-5 py-4">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">{m.k}</p>
                <p className="text-zinc-200 text-sm font-medium">{m.v}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-20">
          {/* 01 Wyzwanie */}
          <Reveal>
            <SectionHeading num="01" title="Wyzwanie" />
            <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
              Zanim powstała ta strona, Rzepa obsługiwał sprzedaż całkowicie ręcznie. Klienci pisali
              do niego w DM na Instagramie, dogadywali szczegóły i płacili BLIKIEM bezpośrednio na
              telefon. Każde zamówienie to była osobna rozmowa i ręczne pilnowanie płatności. Przy
              rosnącej publiczności taki system po prostu się nie skalował.
            </p>
          </Reveal>

          {/* 02 Cel */}
          <Reveal>
            <SectionHeading num="02" title="Cel" />
            <ul className="flex flex-col gap-4 max-w-2xl">
              {goals.map((g, i) => (
                <li key={i} className="flex gap-3 text-zinc-300 text-base leading-relaxed">
                  <span className="text-emerald-400 mt-1 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                      <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3469 6.95402 11.3704C6.77247 11.3938 6.58989 11.3365 6.45446 11.2137L3.70446 8.71374C3.44529 8.47922 3.42588 8.07882 3.66039 7.81965C3.89491 7.56048 4.29531 7.54107 4.55448 7.77558L6.75102 9.77185L10.6018 3.90801C10.7907 3.61911 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 03 Proces */}
          <Reveal>
            <SectionHeading num="03" title="Proces" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {process.map((p, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                  <span className="text-emerald-400/80 text-sm font-bold">0{i + 1}</span>
                  <h3 className="text-zinc-100 text-lg font-semibold mt-2 mb-2">{p.step}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 04 Rozwiązanie */}
          <Reveal>
            <SectionHeading num="04" title="Rozwiązanie" />
            <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mb-8">
              Zaprojektowałem i zakodowałem stronę od zera w Next.js, z naciskiem na jasną ścieżkę
              zakupu i mocny przekaz. Ciemny motyw z żółtym akcentem buduje energiczny, sportowy
              charakter spójny z marką Rzepy.
            </p>
            <div className="flex flex-col gap-6">
              <Shot src={newHero} alt="Nowa sekcja hero strony Trener Rzepa" caption="Sekcja hero — mocny przekaz i jasne CTA" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Shot src={newCennik} alt="Cennik planów treningowych" caption="Cennik planów z wyróżnioną opcją" />
                <Shot src={newTransformacje} alt="Sekcja przemian klientów" caption="Dowód skuteczności — przemiany klientów" />
              </div>
            </div>
          </Reveal>

          {/* 05 Stripe */}
          <Reveal>
            <SectionHeading num="05" title="Automatyzacja przez Stripe" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  Sercem strony jest checkout wbudowany bezpośrednio na domenie — klient płaci bez
                  przekierowań na zewnętrzną bramkę. Wybiera plan i płaci online (BLIK, karta lub
                  Klarna), a zamówienie trafia do systemu automatycznie.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  Rzepa wchodzi na maila, kiedy ma czas, widzi nowe zamówienie i zabiera się do
                  roboty. Żadnych DM, żadnego ręcznego pilnowania płatności.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Płatność BLIK, kartą lub Klarna",
                    "Zamówienie automatycznie trafia na maila",
                    "Zero przekierowań na zewnętrzną bramkę",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" className="text-emerald-400 mt-0.5 shrink-0">
                        <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3469 6.95402 11.3704C6.77247 11.3938 6.58989 11.3365 6.45446 11.2137L3.70446 8.71374C3.44529 8.47922 3.42588 8.07882 3.66039 7.81965C3.89491 7.56048 4.29531 7.54107 4.55448 7.77558L6.75102 9.77185L10.6018 3.90801C10.7907 3.61911 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="mx-auto w-full max-w-[340px]">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-black/40">
                  <Image
                    src={checkoutShot}
                    alt="Wbudowany checkout Stripe na domenie Trener Rzepa"
                    className="w-full h-auto rounded-2xl"
                    placeholder="blur"
                    sizes="340px"
                  />
                </div>
                <figcaption className="text-zinc-500 text-sm text-center mt-4">
                  Checkout na domenie — płatność BLIK / karta / Klarna 24/7
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* 06 Wyniki */}
          <Reveal>
            <SectionHeading num="06" title="Wyniki" />
            <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mb-10">
              Strona nie jest tylko ładna — jest mierzalnie skuteczna. Komplet setek w Lighthouse i
              realna sprzedaż od pierwszego dnia.
            </p>

            <div className="bg-zinc-800/40 border border-zinc-700 rounded-2xl p-8 mb-8">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6 text-center">
                Google Lighthouse
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
                <LighthouseRing label="Wydajność" />
                <LighthouseRing label="Dostępność" />
                <LighthouseRing label="Sprawdzone metody" />
                <LighthouseRing label="SEO" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {results.map((r, i) => (
                <div key={i} className="bg-zinc-800/40 border border-zinc-700 rounded-2xl p-6 text-center">
                  <p className="text-emerald-300 text-4xl font-extrabold tracking-tight mb-2">{r.value}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{r.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 07 Opinia (renderuje się dopiero po wpisaniu prawdziwej opinii) */}
          {testimonial && (
            <Reveal>
              <SectionHeading num="07" title="Opinia klienta" />
              {testimonial.kind === "video" ? (
                <figure className="bg-zinc-800/40 border border-zinc-700 rounded-2xl p-4 sm:p-6">
                  <div className="rounded-xl overflow-hidden bg-black aspect-video">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={testimonial.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={testimonial.src} type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="text-zinc-400 text-sm mt-4 px-2">
                    <span className="text-zinc-200 font-semibold">{testimonial.author}</span> · {testimonial.role}
                  </figcaption>
                </figure>
              ) : (
                <figure className="bg-zinc-800/40 border border-zinc-700 rounded-2xl p-8 sm:p-10">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-emerald-400/40 mb-4">
                    <path d="M9 11H5a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h1m12 7h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <blockquote className="text-zinc-200 text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="text-zinc-400 text-sm">
                    <span className="text-zinc-200 font-semibold">{testimonial.author}</span> · {testimonial.role}
                  </figcaption>
                </figure>
              )}
            </Reveal>
          )}

          {/* 08 Ewolucja designu */}
          <Reveal>
            <SectionHeading num={testimonial ? "08" : "07"} title="Ewolucja designu" />
            <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mb-8">
              Pierwsza wersja strony była już dobra — ale nie poprzestaję na pierwszym podejściu.
              Przeprojektowałem ją do wersji 2: czytelniejsza hierarchia, mocniejszy przekaz i
              spójniejszy branding.
            </p>
            <div className="flex flex-col gap-6">
              <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium">v1</span>
                  <span className="text-zinc-500 text-xs">Pierwsza wersja</span>
                </div>
                <Image src={oldHero} alt="Pierwsza wersja strony Trener Rzepa" className="w-full h-auto" placeholder="blur" sizes="(max-width: 1024px) 100vw, 960px" />
              </figure>
              <figure className="rounded-2xl border border-emerald-400/30 bg-zinc-950 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-400/15 text-emerald-300 text-xs font-medium">v2</span>
                  <span className="text-zinc-500 text-xs">Wersja finalna</span>
                </div>
                <Image src={newHero} alt="Finalna wersja strony Trener Rzepa" className="w-full h-auto" placeholder="blur" sizes="(max-width: 1024px) 100vw, 960px" />
              </figure>
            </div>
          </Reveal>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-16 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm mb-2">Chcesz podobną stronę?</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-200 hover:text-emerald-300 font-medium text-base transition-colors duration-200"
          >
            Wróć do portfolio i skontaktuj się ze mną
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
