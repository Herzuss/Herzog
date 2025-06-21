"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/LOGO.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bezplatna-konsultacja" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#CBFBF1" },
          dark: { "cal-brand": "#CBFBF1" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }
  return (
    <nav className="bg-zinc-900/85 border-b border-zinc-700 sticky top-0 backdrop-blur-sm z-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-xl mx-auto px-4 sm:px-8 h-20 flex justify-between items-center"
      >
        <Link href="/">
          <Image className="w-35" src={logo} alt="Herzog" />
        </Link>
        <ul
          className={cn(
            "hidden md:flex md:flex-row justify-center items-center gap-10 md:gap-30 md:static md:w-auto md:h-auto",
            isOpen &&
              "absolute flex flex-col justify-center top-20 left-0 w-full h-[calc(100dvh-5rem)] bg-zinc-900 z-50"
          )}
        >
          <li className="bg-zinc-900 w-[226px] h-[46px] bg-conic/[from_var(--border-angle)] from-zinc-900 via-teal-50 to-zinc-900 from-80% via-90% to-100% rounded-xl flex justify-center items-center animate-rotate-border ">
            <button
              data-cal-namespace="bezplatna-konsultacja"
              data-cal-link="herzogstronyinternetowe/bezplatna-konsultacja"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              onClick={handleCloseMenu}
              className="border border-emerald-300 group relative inline-flex w-56 h-11 items-center justify-center overflow-hidden rounded-xl bg-zinc-900 font-extrabold text-zinc-200 uppercase text-lg hover:bg-zinc-800 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-100/10"
            >
              <span>Umów rozmowe</span>
              <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
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
      </motion.div>
    </nav>
  );
}
