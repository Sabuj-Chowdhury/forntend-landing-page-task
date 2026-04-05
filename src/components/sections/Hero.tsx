import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            Enrollment is now open for a limited time
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-[1.1] max-w-5xl mx-auto">
          Master Focus & Get <br />
          <span className="text-primary italic">More Done</span> In Less Time
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop procrastinating and start finishing. Our proven deep work framework helps you reclaim 10+ hours a week for what matters most.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg">Join The Blueprint Now</Button>
          <Button variant="ghost" size="lg">See How It Works</Button>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
          <div className="aspect-video bg-[#1a1c22] rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
             <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(43,89,255,0.4)] group-hover:scale-110 transition-transform relative z-10">
                <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
             </div>
             <div className="absolute bottom-6 left-6 text-left z-10">
                <p className="text-white font-semibold">Watch the intro video</p>
                <p className="text-white/60 text-sm">See what's inside the Blueprint</p>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
