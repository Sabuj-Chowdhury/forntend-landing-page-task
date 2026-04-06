"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const MODULES_DATA = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
        active: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: false,
        active: false,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
        active: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: false,
        active: false,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
    ],
  },
  {
    id: 3,
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
        active: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: false,
        active: false,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
    ],
  },
  {
    id: 4,
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
        active: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: false,
        active: false,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        active: false,
      },
    ],
  },
];

export function ModuleList() {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <Container className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full mb-8 shadow-sm dark:shadow-md dark:shadow-[#2466F2]/10 w-fit">
            <span className="w-2 h-2 bg-[#2466F2] rounded-full shadow-[0_0_8px_#2466F2]" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
              Course Curriculum
            </span>
          </div>

          <h2 className="text-3xl text-center sm:text-4xl md:text-5xl  font-medium leading-[1.15] tracking-tight text-black dark:text-white max-w-4xl py-4">
            Mastering Deep Work: A Structured Path to Peak Productivity
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-10 lg:gap-16 items-start">
          {/* Left: Accordion List */}
          <div className="flex flex-col w-full border-t border-black/10 dark:border-white/5">
            {MODULES_DATA.map((module, index) => {
              const isOpen = openModuleIndex === index;
              return (
                <div
                  key={module.id}
                  className="border-b border-black/10 dark:border-white/5 overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-xl md:text-[22px] font-medium text-black dark:text-white transition-colors group-hover:text-[#2466F2]">
                        {module.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {module.duration}
                      </p>
                    </div>
                    {/* Caret Icon */}
                    <div className="ml-4 shrink-0 transition-transform duration-300">
                      <svg
                        className={`w-6 h-6 text-neutral-400 transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Accordion Content Wrapper */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col pt-2 pb-8">
                        {/* Spacer / Opened Gradient Line (Blue) */}
                        <div className="w-full h-1 bg-linear-to-r from-transparent via-[#2466F2]/60 to-transparent shrink-0 opacity-50 block mb-2" />

                        {/* Lessons List */}
                        {module.lessons.length > 0 &&
                          module.lessons.map((lesson, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between py-5 group cursor-pointer hover:bg-black/0.02 dark:hover:bg-white/0.02 px-4 -mx-4 rounded-xl transition-colors"
                            >
                              <div className="flex items-center gap-5">
                                {/* Play Icon Active/Inactive */}
                                {lesson.active ? (
                                  <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                  >
                                    <circle
                                      cx="16"
                                      cy="16"
                                      r="16"
                                      className="fill-white dark:fill-white"
                                    />
                                    <path
                                      d="M21.5 16L13.25 20.7631L13.25 11.2369L21.5 16Z"
                                      fill="#2466F2"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                  >
                                    <circle
                                      cx="16"
                                      cy="16"
                                      r="16"
                                      className="fill-black/5 dark:fill-white/10"
                                    />
                                    <path
                                      d="M21.5 16L13.25 20.7631L13.25 11.2369L21.5 16Z"
                                      className="fill-black/30 dark:fill-white/40"
                                    />
                                  </svg>
                                )}
                                <span className="text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                  {lesson.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-4 shrink-0 pl-4">
                                {lesson.preview && (
                                  <span className="hidden sm:inline-block px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300">
                                    Preview
                                  </span>
                                )}
                                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 w-12 text-right">
                                  {lesson.time}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Pitch Card */}
          <div className="bg-[#111214] rounded-3xl p-8 lg:p-10 border border-black/5 dark:border-white/5 shadow-2xl sticky top-28">
            <h3 className="text-white text-2xl lg:text-3xl font-medium mb-8">
              Not only video lessons!
            </h3>

            <ul className="flex flex-col gap-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-neutral-300 text-base">
                  <strong className="font-semibold text-white font-sans mr-1">
                    6h of videos -
                  </strong>
                  Step-by-step deep work strategies.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-neutral-300 text-base">
                  <strong className="font-semibold text-white font-sans mr-1">
                    Templates & Trackers -
                  </strong>
                  Stay on track effortlessly.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-neutral-300 text-base">
                  <strong className="font-semibold text-white font-sans mr-1">
                    Live Q&As -
                  </strong>
                  Expert guidance & accountability.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-neutral-300 text-base">
                  <strong className="font-semibold text-white font-sans mr-1">
                    Exclusive Community -
                  </strong>
                  Connect with others.
                </span>
              </li>
            </ul>

            <Button
              size="lg"
              className="w-full h-14 bg-[#2466F2] hover:bg-[#2466F2]/90 text-white font-semibold text-base rounded-2xl shadow-[0_8px_20px_rgba(36,102,242,0.25)] transition-all active:scale-[0.98]"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
