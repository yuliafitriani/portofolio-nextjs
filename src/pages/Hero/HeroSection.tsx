"use client";

import { Button } from "@/components/ui/button";
import WaveSvg from "@/assets/Wave.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative
        -mt-30 container overflow-hidden bg-black text-white"
    >
      {/* Grid Overlay */}
      <div>
        <div
          className="
        absolute inset-0
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-size:80px_80px
      "
        />

        {/* Content */}
        <div
          className="
        relative z-10
        max-w-6xl mx-auto
        px-6
        flex flex-col items-center text-center
        pt-40
      "
        >
          {/* Badge */}
          <div
            className="
          px-4 py-2 rounded-full
          bg-white/10 backdrop-blur-md
          text-sm
        "
          >
            👋 Yulia{"'"}s Portfolio
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mt-6">
            I am a{" "}
            <span className="relative inline-block border-1 border-[#8746EB]">
              {/* Corner Accents */}
              <span className="absolute -top-2 -left-2 w-5 h-2 bg-white" />
              <span className="absolute -top-2 -right-2 w-5 h-2 bg-white" />
              <span className="absolute -bottom-2 -left-2 w-5 h-2 bg-white" />
              <span className="absolute -bottom-2 -right-2 w-5 h-2 bg-white" />

              {/* Text */}
              <span
                className="
                relative px-4 py-1
                bg-linear-to-r from-[#DC49A6] to-[#8746EB]
                bg-clip-text text-transparent
  "
              >
                Full-Stack Developer
              </span>
            </span>
            & Web Programming Instructor
          </h1>

          {/* Description */}
          <p
            className="
          mt-6
          max-w-2xl
          text-neutral-200
          text-lg
        "
          >
            Hi, I{"'"}m Yulia, a passionate web developer with 10+ years of
            experience creating responsive websites. I also teach aspiring
            developers to master modern web programming.
          </p>

          {/* Button */}
          <Button
            className="
            mt-10
            px-8 py-3
            rounded-full
            bg-linear-to-l from-[#8746EB] to-[#DC49A6]
            shadow-[0px_4px_24px_rgba(135,70,235,0.32)]
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0px_8px_40px_rgba(135,70,235,0.45)]
          "
          >
            View Portfolio
          </Button>
        </div>
      </div>
      <div
        className="
        relative
    w-full
    h-[338px]
    pointer-events-none
  "
      >
        {/* Gradient Overlay */}
        <div
          className="
    absolute inset-0
    bg-[linear-gradient(3.46deg,#0A0712_13.11%,rgba(10,7,18,0.44)_57.01%,rgba(10,7,18,0)_91.95%)]
    z-10
  "
        />

        {/* Wave Image */}
        <Image
          src={WaveSvg}
          alt="wave"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
