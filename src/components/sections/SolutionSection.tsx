import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import img1 from "../../../public/section_1_1.jpg";
import img2 from "../../../public/section_1_2.jpg";
import img3 from "../../../public/section_1_3.jpg";

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <Container className="max-w-[85rem] px-4 mx-auto">
        {/* Layout Grid: 5 columns image / 7 columns content on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Left Image (Hidden on tablet/mobile) */}
          <div className="hidden lg:block lg:col-span-5 relative w-full h-[650px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Using img3 as a placeholder since a specific large image wasn't provided yet */}
            <Image
              src={img3}
              alt="Deep Work Concentration"
              className="absolute inset-0 w-full h-full object-cover"
              placeholder="blur"
            />
          </div>

          {/* Right Card (Full width on mobile/tablet) */}
          <div className="lg:col-span-7 bg-[#111214] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col shadow-2xl relative w-full h-full border border-white/5">
            
            {/* Top Header Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16 lg:mb-auto">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 bg-[#2466F2] rounded-full shadow-[0_0_8px_#2466F2]" />
                <span className="text-sm font-medium text-neutral-300 tracking-wide">
                  No worries
                </span>
              </div>

              {/* Avatars Cluster */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#111214] overflow-hidden bg-neutral-800">
                    <Image src={img1} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#111214] overflow-hidden bg-neutral-800">
                    <Image src={img2} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  {/* Figma design shows a distinct yellow square for the third avatar */}
                  <div className="w-10 h-10 rounded-sm border-[2px] border-yellow-400 overflow-hidden bg-neutral-800 relative z-10 shadow-lg">
                    <Image src={img3} alt="Student" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-sm text-neutral-400 font-medium">
                  Join with 5K other students
                </span>
              </div>
            </div>

            {/* Bottom Content Row */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 sm:gap-6 items-end mt-auto pt-10 lg:pt-20">
              
              {/* Text Block */}
              <div className="flex flex-col gap-8 max-w-lg">
                <p className="text-[#888888] text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                  The ability to concentrate <br className="hidden xl:block"/>
                  deeply is the ultimate <br className="hidden xl:block"/>
                  productivity hack
                </p>
                <h3 className="text-white text-[32px] md:text-4xl lg:text-[42px] font-medium leading-[1.2] tracking-tight">
                  And fortunately it&apos;s <br className="hidden md:block"/>
                  a skill you can train <br className="hidden md:block"/>
                  & develop.
                </h3>
              </div>

              {/* Vertical Stacked Images */}
              <div className="flex flex-row sm:flex-col gap-3 justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border border-white/10 shrink-0">
                  <Image src={img1} alt="Stressed person 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border border-white/10 shrink-0">
                  <Image src={img2} alt="Stressed person 2" className="w-full h-full object-cover" />
                </div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border border-white/10 shrink-0">
                  <Image src={img3} alt="Stressed person 3" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
