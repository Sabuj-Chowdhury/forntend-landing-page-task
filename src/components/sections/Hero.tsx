import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import heroImg from "../../../public/hero.png";
import playButtonImg from "../../../public/playbutton.png";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-[#050505]">
      {/* Background Horizontal Scanlines & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Horizontal Scanlines Pattern */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 3px, var(--color-primary) 3px, var(--color-primary) 4px)",
          }}
        />
        {/* Figma Glow-Reflect / Primary Blue Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-[#2466F2]/30 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[75rem] h-[37.5rem] bg-[#2466F2]/15 rounded-full blur-[160px]" />
      </div>

      <Container className="text-center relative z-10">
        {/* Countdown Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-100/50 dark:bg-neutral-900 backdrop-blur-sm border border-neutral-200 dark:border-white/5 rounded-full mb-8 shadow-sm dark:shadow-[0_4px_24px_rgba(36,102,242,0.15)]">
          <span className="w-2 h-2 bg-[#2466F2] rounded-full shadow-[0_0_8px_#2466F2]" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
            30% off until 4d : 2h : 41m : 17s
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans mb-6 leading-tight tracking-tight max-w-5xl mx-auto text-black dark:text-white">
          Master Focus & Get <br className="hidden sm:block" />
          More Done In Less Time
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          A step-by-step system to eliminate procrastination, train your{" "}
          <br className="hidden md:block" />
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-32">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-[#2466F2] hover:bg-[#2466F2]/90 text-white rounded-xl shadow-[0_8px_20px_rgba(36,102,242,0.25)] active:scale-95 transition-all"
          >
            Enroll now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-neutral-100 dark:bg-[#1A1C22] hover:bg-neutral-200 dark:hover:bg-white/10 text-black dark:text-white border-neutral-200 dark:border-white/5 rounded-xl shadow-lg active:scale-95 transition-all"
          >
            Curriculum
          </Button>
        </div>

        {/* Video Placeholder / Frame */}
        <div className="relative max-w-5xl mx-auto rounded-3xl md:rounded-[40px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#1A1C22] shadow-[0_20px_80px_rgba(36,102,242,0.15)] overflow-hidden group cursor-pointer">
          <Image
            src={heroImg}
            alt="Hero Presentation Video"
            className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
            priority
            placeholder="blur"
          />

          {/* Bluish Linear Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#2466F2]/60 via-[#2466F2]/20 to-transparent mix-blend-multiply dark:mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-[88px] h-[88px] rounded-full border-[6px] border-white/30 backdrop-blur-2xl bg-white/10 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <Image
                src={playButtonImg}
                alt="Play"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
