"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import test1 from "../../../public/test_1.png";
import test2 from "../../../public/test_2_small.jpg";
import img1 from "../../../public/section_1_1.jpg";
import img2 from "../../../public/section_1_2.jpg";
import img3 from "../../../public/section_1_3.jpg";

type Testimonial = {
  id: number;
  type: "text" | "video";
  name: string;
  title: string;
  avatar: any;
  content?: string;
  videoThumb?: any;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    type: "text",
    name: "Alex Carter",
    title: "Freelance Designer",
    avatar: img1,
    content:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
  },
  {
    id: 2,
    type: "video",
    name: "Daniel Foster",
    title: "Content creator",
    avatar: img2,
    videoThumb: test1,
  },
  {
    id: 3,
    type: "text",
    name: "Mark Davidson",
    title: "Software Developer",
    avatar: img3,
    content:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
  {
    id: 4,
    type: "video",
    name: "Tom David",
    title: "Entrepreneur",
    avatar: img1,
    videoThumb: test2,
  },
  {
    id: 5,
    type: "text",
    name: "James Lee",
    title: "Entrepreneur",
    avatar: img2,
    content:
      "Procrastination was my biggest enemy until I enrolled in this course. It gave me the actionable steps I needed to re-focus my energy and finally execute on my highest priorities.",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 384 : 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <Container className="max-w-[90rem]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 dark:bg-[#111214] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full mb-8 shadow-sm dark:shadow-md dark:shadow-[#2466F2]/10 w-fit">
            <span className="w-2 h-2 bg-[#2466F2] rounded-full shadow-[0_0_8px_#2466F2]" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight text-black dark:text-white max-w-2xl px-4">
            Real Results from <br />
            Real People
          </h2>
        </div>

        {/* Carousel Header & Controls Component */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 mb-8 gap-4">
          <h3 className="text-xl sm:text-2xl font-medium text-black dark:text-white">
            Join with 5K other students
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-black/5 dark:bg-[#111214] border border-black/10 dark:border-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors group z-10"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 text-neutral-800 dark:text-neutral-300 group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-black/5 dark:bg-[#111214] border border-black/10 dark:border-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors group z-10"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 text-neutral-800 dark:text-neutral-300 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Carousel Area */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Hide Webkit Scrollbar CSS Hack Inline */}
          <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

          {TESTIMONIALS.map((t) => {
            if (t.type === "text") {
              // Text Card
              return (
                <div
                  key={t.id}
                  className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[360px] h-[400px] md:h-[440px] rounded-3xl border border-black/10 dark:border-white/5 bg-white/50 dark:bg-[#0A0B0E]/80 backdrop-blur-2xl shadow-xl dark:shadow-2xl relative flex flex-col p-6 sm:p-8 hover:border-black/20 dark:hover:border-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shadow-sm shrink-0">
                    <Image src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <p className="mt-8 text-[15px] sm:text-base leading-relaxed text-neutral-700 dark:text-[#A1A1AA]">
                    {t.content}
                  </p>

                  <div className="mt-auto pt-8">
                    <h4 className="text-black dark:text-white font-medium text-lg tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                      {t.title}
                    </p>
                  </div>
                </div>
              );
            } else {
              // Video Card
              return (
                <div
                  key={t.id}
                  className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[360px] h-[400px] md:h-[440px] rounded-3xl border border-black/10 dark:border-white/5 shadow-xl dark:shadow-2xl relative overflow-hidden group cursor-pointer"
                >
                  {/* Avatar Overlay Top Left */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-md z-30 bg-black/20 backdrop-blur-sm">
                    <Image src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Video Thumbnail Full Bleed */}
                  <Image
                    src={t.videoThumb}
                    alt={`${t.name} Video Review`}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Play Button Center Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <path d="M19.5 12L7.5 19V5L19.5 12Z" fill="#2466F2" />
                      </svg>
                    </div>
                  </div>

                  {/* Dark Gradient Bottom Overlay to preserve text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

                  {/* Text Overlay Bottom */}
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-30">
                    <h4 className="text-white font-medium text-lg tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-sm font-medium text-white/70">
                      {t.title}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Container>
    </section>
  );
}
