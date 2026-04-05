import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  "Comprehensive 6-week video curriculum",
  "The Deep Work OS Notion template",
  "Bi-weekly live Q&A sessions",
  "Private Discord community access",
  "Lifetime updates & new modules",
];

export function Pricing() {
  return (
    <Section id="pricing" title="Level Up Your Productivity" subtitle="Pricing" centered className="bg-primary/5">
      <Container className="max-w-3xl">
        <div className="relative p-12 md:p-16 rounded-[40px] border border-primary/20 bg-[#12141c] overflow-hidden shadow-2xl">
          {/* Spotlight Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The Deep Work Blueprint</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold font-heading">$349</span>
              <span className="text-muted line-through">$599</span>
            </div>
            <p className="text-muted mt-4">One-time payment. Lifetime access.</p>
          </div>

          <div className="space-y-4 mb-12">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-lg text-white/90">{f}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="w-full text-xl h-16 rounded-2xl">
            Get Instant Access Now
          </Button>
          
          <p className="text-center text-sm text-white/40 mt-6">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 opacity-50 grayscale hover:grayscale-0 transition-opacity">
           <span className="font-bold text-xl">Stripe</span>
           <span className="font-bold text-xl">PayPal</span>
           <span className="font-bold text-xl">Visa</span>
           <span className="font-bold text-xl">Mastercard</span>
        </div>
      </Container>
    </Section>
  );
}
