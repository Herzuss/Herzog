"use client";
import Image from "next/image";
import zdjecie from "@/../public/moja fotka.jpg";
import { motion } from "motion/react";
import CTAButton from "./CTAButton";

const techStack = [
  { name: "Next.js", color: "text-zinc-100" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "Framer Motion", color: "text-pink-400" },
  { name: "Figma", color: "text-violet-400" },
];

const stats = [
  { value: "5+", label: "Projektów" },
  { value: "2+", label: "Lata doświadczenia" },
  { value: "100%", label: "Custom code" },
];

interface AboutMeProps {
  onOpenContact: () => void;
}

export default function Omnie({ onOpenContact }: AboutMeProps) {
  return (
    <section id="o-mnie" className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 mt-24 pb-10">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 justify-between items-center sm:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl text-zinc-200 uppercase font-extrabold text-center sm:text-left leading-tight">
            Nazywam się Filip{" "}
            <span className="text-emerald-300">Herzog</span>
            <br />
            jestem web developerem i designerem.
          </h2>

          <div className="flex flex-row gap-8 mt-8 flex-wrap">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-2xl font-extrabold text-emerald-300 tracking-tight">{s.value}</span>
                <span className="text-zinc-500 text-xs tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0"
        >
          <Image
            src={zdjecie}
            alt="Filip Herzog"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border border-zinc-700"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-base sm:text-lg text-zinc-400 mt-10 leading-relaxed text-left font-normal max-w-2xl"
      >
        Tworzę unikalne, nowoczesne i estetyczne strony internetowe, łącząc kreatywność z
        czystym, dobrze napisanym kodem.{" "}
        <span className="text-emerald-300 font-semibold">ZERO gotowców.</span> Każda realizacja to
        indywidualny projekt, dopasowany do Twoich potrzeb i grupy docelowej.
        <br /><br />
        Specjalizuję się w Next.js i Tailwind CSS. Kodowanie to dla mnie nie tylko praca, ale też
        pasja – uwielbiam projektować i wdrażać estetyczne, szybkie i funkcjonalne rozwiązania,
        które realnie wspierają biznes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-row flex-wrap gap-3 mt-8"
      >
        {techStack.map((tech, i) => (
          <span key={i} className={`px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm font-medium ${tech.color}`}>
            {tech.name}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8"
      >
        <p className="text-base text-zinc-400 leading-relaxed mb-6 max-w-xl">
          Umów się na bezpłatną konsultację, podczas której wspólnie zaprojektujemy wstępną
          wersję strony idealnie dopasowaną do Twoich potrzeb i celów biznesowych.
        </p>
        <CTAButton onClick={onOpenContact} />
      </motion.div>
    </section>
  );
}
