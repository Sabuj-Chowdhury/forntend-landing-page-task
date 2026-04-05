import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Senior Software Engineer",
    text: "The Deep Work Blueprint completely changed how I approach my engineering tasks. I went from finishing 2-3 tickets a week to 5-6 without any extra stress.",
    avatar: "https://i.pravatar.cc/100?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    text: "As a designer, flow state is everything. This course gave me the actual tools to protect my time and achieve deep focus daily. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?u=sarah",
  },
  {
    name: "Marcus Thorne",
    role: "Entrepreneur",
    text: "I was always busy but never productive. Now I'm focused and finishing. This is the best investment I've made for my business this year.",
    avatar: "https://i.pravatar.cc/100?u=marcus",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" title="Real Results from Real People" subtitle="Testimonials" centered>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col justify-between h-full hover:border-primary/20 transition-all">
              <p className="text-lg text-white/90 italic mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full h-12 w-12 bg-muted" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
