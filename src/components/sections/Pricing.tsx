import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-[#050505]">
      <Container className="max-w-[1200px] mx-auto px-4">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Card: Introduction & Bonuses */}
          <div className="bg-black/5 dark:bg-[#111214] border border-black/5 dark:border-white/5 rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col justify-center transition-colors">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full mb-8 shadow-[0_0_20px_rgba(36,102,242,0.1)] dark:shadow-[0_0_15px_rgba(36,102,242,0.15)] w-fit">
              <span className="w-2.5 h-2.5 bg-[#2466F2] rounded-full shadow-[0_0_8px_#2466F2]" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
                Introducing
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-medium text-black dark:text-white leading-[1.1] mb-4 tracking-tight">
              The Deep Work Blueprint
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12">
              What extra you will get if you enroll now
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-5">
                {/* Glowing Checkmark */}
                <div className="relative shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-[0_0_20px_rgba(36,102,242,0.25)] dark:shadow-[0_0_20px_rgba(36,102,242,0.4)]">
                  <svg className="w-4 h-4 text-[#2466F2] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[15px] sm:text-base text-neutral-700 dark:text-neutral-300">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">Bonus:</strong>
                  1:1 coaching session to boost focus.
                </span>
              </li>
              <li className="flex items-center gap-5">
                {/* Glowing Checkmark */}
                <div className="relative shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-[0_0_20px_rgba(36,102,242,0.25)] dark:shadow-[0_0_20px_rgba(36,102,242,0.4)]">
                  <svg className="w-4 h-4 text-[#2466F2] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[15px] sm:text-base text-neutral-700 dark:text-neutral-300">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">Discount:</strong>
                  Save 30% when you enroll now!
                </span>
              </li>
            </ul>
          </div>

          {/* Right Card: Pricing */}
          <div className="bg-black/5 dark:bg-[#111214] border border-black/10 dark:border-[#2466F2]/30 rounded-[32px] p-8 md:p-12 lg:p-14 shadow-lg dark:shadow-[0_0_60px_rgba(36,102,242,0.03)] flex flex-col transition-colors relative overflow-hidden">
            {/* Header Pricing Row */}
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-medium text-black dark:text-white tracking-tight">
                  $349
                </span>
                <span className="text-2xl text-neutral-500 dark:text-neutral-500 line-through decoration-red-500 decoration-[3px]">
                  $500
                </span>
              </div>
              <div className="bg-[#2466F2] text-white px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                30% off
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-10 pb-8 border-b border-black/10 dark:border-white/10">
              30% off until 4d : 2h : 41m : 17s
            </p>

            {/* Standard Checkmark List */}
            <ul className="flex flex-col gap-6 mb-12 flex-1">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <svg className="w-3.5 h-3.5 text-black/70 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300 text-base">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">6h of videos -</strong>
                  Step-by-step deep work strategies.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <svg className="w-3.5 h-3.5 text-black/70 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300 text-base">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">Templates & Trackers -</strong>
                  Stay on track effortlessly.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <svg className="w-3.5 h-3.5 text-black/70 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300 text-base">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">Live Q&As -</strong>
                  Expert guidance & accountability.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <svg className="w-3.5 h-3.5 text-black/70 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300 text-base">
                  <strong className="font-semibold text-black dark:text-white font-sans mr-1">Exclusive Community -</strong>
                  Connect with others.
                </span>
              </li>
            </ul>

            <Button
              size="lg"
              className="w-full h-[60px] bg-[#2466F2] hover:bg-[#2466F2]/90 text-white font-semibold text-lg rounded-[16px] shadow-[0_8px_20px_rgba(36,102,242,0.25)] transition-transform active:scale-[0.98]"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
