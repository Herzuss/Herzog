"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/NAV/logofixed2.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-stone-950/85 border-b border-lime-800 sticky top-0 backdrop-blur-sm z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 h-20 flex justify-between md:justify-center items-center">
        <Link className="inline-block md:hidden" href="/">
          <Image
            className="w-35 scale-90 sm:scale-100"
            src={logo}
            alt="Herzog"
          />
        </Link>
        <ul
          className={cn(
            "hidden md:flex md:flex-row justify-center items-center gap-10 md:gap-30 md:static md:w-auto md:h-auto",
            isOpen &&
              "absolute flex flex-col justify-center top-20 left-0 w-full h-[calc(100dvh-5rem)] bg-stone-950 z-50"
          )}
        >
          <li>
            <Link
              href="#oferta"
              className="text-sm text-zinc-200 hover:text-lime-500 uppercase font-bold transition-all duration-300 inline-block"
              onClick={handleCloseMenu}
            >
              Projekty
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/">
              <Image className="w-35" src={logo} alt="Herzog" />
            </Link>
          </li>
          <li className="relative flex justify-center items-center md:-ml-12">
            <div className="absolute flex w-[122px] h-[42px] justify-center items-center bg-lime-500 rounded-3xl overflow-hidden">
              <div className="absolute w-[150px] h-6 bg-linear-to-r from-lime-100 from-50% to-lime-500 to-50% spin-fast"></div>
            </div>
            <Link
              href="https://cal.com/herzogstronyinternetowe/bezplatna-konsultacja"
              className="inline-block z-1"
              onClick={handleCloseMenu}
            >
              <button className="w-30 h-10 bg-lime-800 uppercase font-bold text-sm text-zinc-200 rounded-3xl hover:bg-lime-500 hover:text-lime-800 transition-all duration-300 cursor-pointer hover:scale-105">
                konsultacja
              </button>
            </Link>
          </li>
        </ul>
        <button className="space-y-3 md:hidden" onClick={handleToggleOpen}>
          <span
            className={cn(
              "h-0.5 w-8 bg-zinc-200 block rounded-lg",
              isOpen && "-translate-x-1"
            )}
          ></span>
          <span
            className={cn(
              "h-0.5 w-8 bg-zinc-200 block rounded-lg",
              isOpen && "translate-x-1"
            )}
          ></span>
        </button>
      </div>
    </nav>
  );
}
