import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import img1 from "../../../public/section_1_1.jpg";
import img2 from "../../../public/section_1_2.jpg";
import img3 from "../../../public/section_1_3.jpg";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] pt-24 pb-8 overflow-hidden">
      <Container className="max-w-[1200px] mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8 mb-24">
          {/* Left: Brand Identity */}
          <div className="flex flex-col max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black dark:text-white leading-[1.1]">
              The Deep <br />
              Work Blueprint
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-6">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          {/* Right: CTA Box */}
          <div className="w-full sm:w-[380px] lg:w-[420px] bg-[#2466F2] rounded-[32px] p-8 md:p-10 shadow-2xl shrink-0 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-between items-start mb-16">
              {/* Avatar Cluster */}
              <div className="flex -space-x-3">
                <Image
                  src={img1}
                  alt="Student 1"
                  className="w-12 h-12 rounded-full border-2 border-[#2466F2] object-cover"
                />
                <Image
                  src={img3}
                  alt="Student 2"
                  className="w-12 h-12 rounded-full border-2 border-[#2466F2] object-cover"
                />
                <Image
                  src={img2}
                  alt="Student 3"
                  className="w-12 h-12 rounded-full border-2 border-[#2466F2] object-cover"
                />
              </div>

              {/* White Arrow Button */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg
                  className="w-6 h-6 text-[#2466F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <p className="text-white text-xl font-medium tracking-wide">
              Join with 5K other students
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-black/10 dark:bg-gradient-to-r dark:from-transparent dark:via-white/15 dark:to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500 dark:text-neutral-400 font-medium tracking-wide">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Terms & conditions
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Refund policy
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
