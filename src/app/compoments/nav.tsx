"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/LOGO.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Oferta", href: "#oferta" },
  { label: "Projekty", href: "#projekty" },
  { label: "FAQ", href: "#faq" },
];

interface NavProps {
  onOpenContact: () => void;
}

export default function Nav({ onOpenContact }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-zinc-900/85 border-b border-zinc-700 sticky top-0 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-xl mx-auto px-4 sm:px-8 h-20 flex justify-between items-center"
      >
        <Link href="/" onClick={handleCloseMenu}>
          <Image className="w-35" src={logo} alt="Herzog" width={140} height={40} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex md:flex-row justify-center items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <CTAButton onClick={onOpenContact} size="sm" />
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 md:hidden"
          onClick={handleToggleOpen}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className={cn("h-0.5 w-8 bg-zinc-200 block rounded-lg transition-all duration-300 origin-center", isOpen && "rotate-45 translate-y-2")} />
          <span className={cn("h-0.5 w-8 bg-zinc-200 block rounded-lg transition-all duration-300", isOpen && "opacity-0 scale-x-0")} />
          <span className={cn("h-0.5 w-8 bg-zinc-200 block rounded-lg transition-all duration-300 origin-center", isOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-zinc-900 border-t border-zinc-800"
          >
            <ul className="flex flex-col items-center gap-6 py-10 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleCloseMenu}
                    className="text-zinc-300 hover:text-zinc-100 text-xl font-medium tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <CTAButton onClick={() => { handleCloseMenu(); onOpenContact(); }} />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
