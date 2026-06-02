"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-full max-w-lg shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer text-xl leading-none"
              aria-label="Zamknij"
            >
              ×
            </button>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-zinc-100 font-semibold text-lg">Wiadomość wysłana!</p>
                <p className="text-zinc-500 text-sm mt-1">Odpiszę w ciągu 24 godzin.</p>
                <button
                  onClick={() => { setStatus("idle"); onClose(); }}
                  className="mt-6 text-emerald-400 hover:text-emerald-300 text-sm transition-colors cursor-pointer"
                >
                  Zamknij
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-zinc-100 mb-1">Napisz do mnie</h2>
                <p className="text-zinc-500 text-sm mb-7">Odpiszę w ciągu 24 godzin.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-sm">Imię i nazwisko *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-400/60 transition-colors placeholder:text-zinc-600"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-sm">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-400/60 transition-colors placeholder:text-zinc-600"
                      placeholder="jan@firma.pl"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-sm">
                      Telefon <span className="text-zinc-600">(opcjonalnie)</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-400/60 transition-colors placeholder:text-zinc-600"
                      placeholder="+48 000 000 000"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-sm">Wiadomość *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-400/60 transition-colors placeholder:text-zinc-600 resize-none"
                      placeholder="Opowiedz mi o swoim projekcie..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Coś poszło nie tak. Spróbuj ponownie lub napisz na{" "}
                      <a href="mailto:herzog.web.dev@gmail.com" className="underline">
                        herzog.web.dev@gmail.com
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 w-full h-12 bg-emerald-400 hover:bg-emerald-300 text-zinc-900 font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm uppercase tracking-wide"
                  >
                    {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
