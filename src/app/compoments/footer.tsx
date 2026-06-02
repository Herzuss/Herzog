import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-400 text-xs">
            © {currentYear} HerzogWeb. Wszelkie prawa zastrzeżone.
          </p>
          <Link href={"/polityka-prywatnosci"} className="text-zinc-400 text-xs hover:text-emerald-400 transition-colors duration-200">
            Polityka prywatności
          </Link>
          <p className="text-zinc-400 text-xs">
            Zaprojektowane i zakodowane przez{" "}
            <span className="text-emerald-400">HerzogWeb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
