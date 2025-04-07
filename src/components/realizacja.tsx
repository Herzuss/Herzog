"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import hero1 from "@/../public/images/NAJNOWSZA REALIZACJA/HERO 1.svg";
import hero2 from "@/../public/images/NAJNOWSZA REALIZACJA/HERO 2.svg";
import hero3 from "@/../public/images/NAJNOWSZA REALIZACJA/HERO 3.svg";
import hero4 from "@/../public/images/NAJNOWSZA REALIZACJA/HERO 4.svg";

export default function Realizacja() {
  const images = [hero1, hero2, hero3, hero4];
  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="text-zinc-200 uppercase text-2xl font-normal text-center mt-10 mb-10">
        Najnowsza realizacja
      </h2>
      <div className="flex flex-col xl:flex-row gap-60 justify-center items-center">
        <div className="mx-auto  rounded-3xl bg-stone-950 ">
          <InfiniteMovingCards
            items={images}
            direction="left"
            speed="fast"
            className="w-[461px] h-[330px] border border-lime-500 z-1"
          />
          <div className="relative flex justify-center items-center mt-5">
            <div className="absolute flex  w-[143px] h-[55px] sm:w-[175px] sm:h-[63px] justify-center items-center bg-lime-500 rounded-4xl overflow-hidden">
              <div className="absolute w-52 h-8 bg-linear-to-r from-lime-100 from-50% to-lime-500 to-50% spin-slow"></div>
            </div>
            <Link
              href="https://cal.com/herzogstronyinternetowe/bezplatna-konsultacja"
              className="z-1"
            >
              <button className=" w-35 h-13 sm:w-43 sm:h-15 bg-lime-800 uppercase font-bold text-lg sm:text-xl text-zinc-200 rounded-4xl hover:bg-lime-500 hover:text-lime-800 transition-all duration-300 cursor-pointer hover:scale-105">
                zobacz <br /> realizacje
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-zinc-200 uppercase text-2xl font-bold text-center mb-10">
            Trener Rzepa <br />
            trener personalny
          </h3>
          <p className="text-zinc-200 font-regular text-xl text-center uppercase lg:w-[451px] leading-[35px]">
            Strona zaprojektowana dla trenera personalnego, aby zwiększyć
            sprzedaż planów treningowych i indywidualnych prowadzeń. Kliknij
            przycisk, aby zobaczyć pełny opis najnowszej realizacji.
          </p>
        </div>
      </div>
    </section>
  );
}
