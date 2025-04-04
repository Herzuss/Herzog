import Image from "next/image";
import instalogo from "@/../public/images/FOOTER/instagram.svg";
import fb from "@/../public/images/FOOTER/facebook.svg";
import mail from "@/../public/images/FOOTER/mail.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="border border-t-neutral-500 mt-5 mb-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-96 mt-10">
        <div className="flex flex-col gap-5 px-4">
          <div className="flex flex-row mb-1 items-center justify-center md:-ml-36 gap-x-8">
            <Link href="/" className="">
              <Image src={instalogo} alt="Instagram logo" />
            </Link>
            <Link href="/" className="">
              <Image src={fb} alt="facebook logo" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 px-4">
            <Image src={mail} alt="mail logo" className="mx-auto" />
            <p className="text-base text-zinc-200 font-normal">
              herzog.web.dev@gmail.com
            </p>
          </div>
        </div>

        <div>
          <p className="text-base text-zinc-200 font-normal mx-auto px-4">
            © 2025 HERZOG
          </p>
        </div>
      </div>
    </section>
  );
}
