interface CTAButtonProps {
  onClick: () => void;
  label?: string;
  size?: "sm" | "lg";
}

export default function CTAButton({ onClick, label = "Napisz do mnie", size = "lg" }: CTAButtonProps) {
  const isLg = size === "lg";

  return (
    <div
      className={`bg-zinc-900 p-px bg-conic/[from_var(--border-angle)] from-zinc-900 via-teal-50 to-zinc-900 from-60% via-80% to-100% rounded-xl flex justify-center items-center animate-rotate-border ${
        isLg ? "w-[290px] h-[66px]" : "w-[226px] h-[46px]"
      }`}
    >
      <button
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-zinc-900 font-extrabold text-zinc-200 uppercase hover:bg-zinc-800 transition-all duration-300 cursor-pointer border border-emerald-300/50 ${
          isLg
            ? "w-72 h-16 text-xl shadow-xl shadow-emerald-100/15"
            : "w-56 h-11 text-lg shadow-lg shadow-emerald-100/10"
        }`}
      >
        <span>{label}</span>
        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isLg ? "h-8 w-8" : "h-6 w-6"}
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
