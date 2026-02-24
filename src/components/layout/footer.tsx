"use client";

import { Instagram } from "iconsax-reactjs";
import Linkedin from "@/assets/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F0F0F]">
      <div className="container h-16 mx-auto flex items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <Image src={LogoImg} height={40} width={40} alt="Logo" />
          </Link>
          <p className="text-[#B5B5B5] text-[16px]">© 2026 Yulia</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            className="
              group relative w-12 h-12 flex items-center justify-center
              rounded-full border border-neutral-400
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* Glow Layer */}
            <span
              className="
              absolute inset-0 rounded-full
              bg-linear-to-l from-[#8746EB] to-[#DC49A6]
              opacity-0 blur-md
              transition-all duration-300
              group-hover:opacity-40
            "
            />

            <Instagram
              size="20"
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              color="#FFFFFF"
              variant="Bold"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="
              group relative w-12 h-12 flex items-center justify-center
              rounded-full border border-neutral-400
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <span
              className="
              absolute inset-0 rounded-full
              bg-linear-to-l from-[#8746EB] to-[#DC49A6]
              opacity-0 blur-md
              transition-all duration-300
              group-hover:opacity-40
            "
            />

            {/* <img
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              color="#FFFFFF"
              variant="Bold"
            /> */}
            <Image
              src={Linkedin}
              alt="Linkedin Logo"
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              color="#FFFFFF"
              height={20}
              width={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
