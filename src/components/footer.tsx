import Image from "next/image";
import instalogo from "@/../public/images/FOOTER/instagram.svg";
import fb from "@/../public/images/FOOTER/facebook.svg";
import mail from "@/../public/images/FOOTER/mail.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="border border-t-neutral-500 mt-5 mb-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-96 mt-10">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-row  md:-ml-11 mb-1 px-4">
            <Link href="/" className="mx-11">
              <Image src={instalogo} alt="Instagram logo" className="" />
            </Link>
            <Link href="/" className="-mx-4">
              <Image src={fb} alt="facebook logo" className="" />
            </Link>
          </div>
          <div className="flex flex-row justify gap-4 px-4">
            <Image src={mail} alt="mail logo" className="mx-auto" />
            <p className="text-base text-zinc-200 font-normal">
              puffi@puffiland.com
            </p>
          </div>
        </div>

        <div>
          <p className="text-base text-zinc-200 font-normal mx-auto px-4">
            © 2025 HERZOG | Web Developer & Designer
          </p>
        </div>
      </div>
    </section>
  );
}
