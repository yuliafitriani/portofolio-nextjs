"use client";

import { Button } from "@/components/ui/button";
// import WaveSvg from "@/assets/Wave.svg";
// import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative -mt-30 overflow-hidden text-white">
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
            container
            mx-auto
            px-6
            flex flex-col items-center text-center
            pt-40
            pb-40
          "
        >
          {/* Badge */}
          <div
            className="
          px-4 py-2 rounded-full
          bg-white/10 backdrop-blur-md
          text-sm flex
        "
          >
            👋 Yulia{"'"}s Portfolio
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mt-6 py-5">
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
            Hi, I{"'"}m Yulia, a passionate full-stack developer with 10+ years
            of with cross industry experiences.
          </p>

          {/* Button */}
          <Button
            onClick={() => window.open("/YULIA-FITRIANI-CV.pdf")}
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
            Download CV
          </Button>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-40 leading-none">
        {/* Layer 1 */}
        <motion.svg
          viewBox="0 0 2880 320" // 2x width
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-[200%] h-[220px]"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {/* Wave 1 */}
          <path
            fill="url(#gradient1)"
            d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,176C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160V320H0Z"
          />

          {/* Wave duplicate (geser ke kanan) */}
          <path
            fill="url(#gradient1)"
            d="M1440,160L1500,144C1560,128,1680,96,1800,106.7C1920,117,2040,171,2160,176C2280,181,2400,139,2520,128C2640,117,2760,139,2820,149.3L2880,160V320H1440Z"
          />

          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0A0712" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 2880 320" // 2x width
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-[200%] h-[320px]"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {/* Wave 1 */}
          <path
            fill="url(#gradient1)"
            d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,176C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160V320H0Z"
          />

          {/* Wave duplicate (geser ke kanan) */}
          <path
            fill="url(#gradient1)"
            d="M1440,160L1500,144C1560,128,1680,96,1800,106.7C1920,117,2040,171,2160,176C2280,181,2400,139,2520,128C2640,117,2760,139,2820,149.3L2880,160V320H1440Z"
          />

          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0A0712" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  );
}
