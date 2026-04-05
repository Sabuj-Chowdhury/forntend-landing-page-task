import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const MODULES = [
  {
    title: "Module 1: Foundations of Deep Work",
    description: "Understand the science of focus and build your initial deep work capacity.",
    lessons: 6,
    duration: "1.5 hours",
  },
  {
    title: "Module 2: Building Life-Long Habits",
    description: "Advanced routines to maintain high-performance without burning out.",
    lessons: 8,
    duration: "2 hours",
  },
  {
    title: "Module 3: Advanced Focus Techniques",
    description: "Techniques for extreme cognitive tasks and complex problem solving.",
    lessons: 5,
    duration: "1.2 hours",
  },
];

export function ModuleList() {
  return (
    <Section id="how-it-works" title="Mastering Deep Work: A Structured Path to Productivity" subtitle="The Course" centered className="bg-white/[0.02]">
      <Container className="max-w-4xl">
        <div className="space-y-6">
          {MODULES.map((module, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-2">
                    <span className="text-primary font-bold text-lg">0{i + 1}</span>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                 </div>
                 <p className="text-muted mb-4 max-w-xl">
                   {module.description}
                 </p>
                 <div className="flex items-center gap-6 text-sm text-white/40">
                    <span className="flex items-center gap-2">
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.724 5.754 18.247 7.5 18.247s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.724 18.246 18.247 16.5 18.247s-3.332.477-4.5 1.253" />
                       </svg>
                       {module.lessons} lessons
                    </span>
                    <span className="flex items-center gap-2">
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                       </svg>
                       {module.duration}
                    </span>
                 </div>
              </div>
              <Button variant="outline" size="sm" className="hidden md:flex">Explore Module</Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button size="lg">Ready to start Module 1?</Button>
        </div>
      </Container>
    </Section>
  );
}
