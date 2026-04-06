import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

import img1 from "../../../public/section_1_1.jpg";
import img2 from "../../../public/section_1_2.jpg";
import img3 from "../../../public/section_1_3.jpg";

export function ProblemStatement() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#050505] overflow-hidden relative">
      <Container className="text-center relative z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 dark:bg-[#111317] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full mb-8 lg:mb-10 shadow-sm dark:shadow-md dark:shadow-[#2466F2]/20">
          <span className="w-2 h-2 bg-[#2466F2] rounded-full shadow-sm shadow-[#2466F2]/50" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
            Are Distractions Holding You Back?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-medium font-sans mb-12 sm:mb-16 leading-tight tracking-tight max-w-4xl mx-auto">
          <span className="text-black dark:text-white">
            If you struggle to focus, feel overwhelmed by endl</span><span className="text-neutral-400 dark:text-[#555]">ess tasks, or procrastinate instead of making progress, you&apos;re not alone.
          </span>
        </h2>

        {/* Image Row */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-5 mt-4">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border border-black/5 dark:border-white/5">
            <Image
              src={img1}
              alt="Stressed person 1"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border border-black/5 dark:border-white/5">
            <Image
              src={img2}
              alt="Stressed person 2"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border border-black/5 dark:border-white/5">
            <Image
              src={img3}
              alt="Stressed person 3"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
