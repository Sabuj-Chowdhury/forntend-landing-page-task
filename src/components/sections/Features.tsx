import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const FEATURES = [
  {
    title: "Overcome procrastination",
    description: "Learn how to stop delaying and start finishing tasks with our behavioral frameworks.",
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v20M2 12h20M12 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Deep work blocks",
    description: "Structured sessions designed to maximize your cognitive output and minimize distractions.",
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Focus environment",
    description: "Audit and optimize your physical and digital space for effortless concentration.",
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <Section id="features" title="Everything you need to focus" subtitle="Features" centered>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(43,89,255,0.15)] group-hover:shadow-[0_0_50px_rgba(43,89,255,0.25)] transition-all relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
