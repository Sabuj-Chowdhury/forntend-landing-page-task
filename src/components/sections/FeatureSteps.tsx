import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import icon1 from "../../../public/icon_1.png";
import icon2 from "../../../public/icon_2.png";
import icon3 from "../../../public/icon_3.png";
import icon4 from "../../../public/icon_4.png";

const stepsContent = [
  {
    id: 1,
    icon: icon1,
    text: "Develop laser-sharp focus &\neliminate distractions.",
  },
  {
    id: 2,
    icon: icon2,
    text: "Master deep work techniques\nfor smarter productivity.",
  },
  {
    id: 3,
    icon: icon3,
    text: "Overcome procrastination &\nget more done.",
  },
  {
    id: 4,
    icon: icon4,
    text: "Build lasting habits for long-\nterm success.",
  },
];

export function FeatureSteps() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <Container className="flex justify-center px-4 md:px-0">
        <div className="max-w-md w-full flex flex-col">
          {stepsContent.map((step, index) => (
            <div key={step.id} className="flex group">
              {/* Timeline Indicator Column */}
              <div className="w-16 sm:w-20 shrink-0 flex flex-col items-center relative">
                {/* Glowing Dot */}
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#2466F2] rounded-full shadow-[0_0_16px_#2466F2] mt-[22px] sm:mt-6 z-10 shrink-0" />

                {/* Vertical Gradient Progress Line */}
                {index !== stepsContent.length - 1 && (
                  <div className="w-[1px] flex-1 bg-gradient-to-b from-[#2466F2] via-[#2466F2]/30 to-transparent mt-2" />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col pb-16 sm:pb-24">
                {/* Icon Wrapper Badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/5 dark:bg-[#111317] border border-black/10 dark:border-white/5 flex items-center justify-center mb-5 sm:mb-6 shadow-md dark:shadow-lg dark:shadow-[#2466F2]/10 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={step.icon}
                    alt="Process icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-70 dark:opacity-100 invert dark:invert-0"
                  />
                </div>

                {/* Text Content */}
                <p className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-300 leading-snug whitespace-pre-wrap">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
