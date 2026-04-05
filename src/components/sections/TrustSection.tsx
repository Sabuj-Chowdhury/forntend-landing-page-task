import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const AVATARS = [
  "https://i.pravatar.cc/100?u=1",
  "https://i.pravatar.cc/100?u=2",
  "https://i.pravatar.cc/100?u=3",
  "https://i.pravatar.cc/100?u=4",
  "https://i.pravatar.cc/100?u=5",
];

export function TrustSection() {
  return (
    <Section className="py-12 md:py-20 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex -space-x-3 overflow-hidden">
            {AVATARS.map((url, i) => (
              <img
                key={i}
                className="inline-block h-12 w-12 rounded-full ring-4 ring-background bg-muted"
                src={url}
                alt="User avatar"
              />
            ))}
            <div className="flex items-center justify-center h-12 w-12 rounded-full ring-4 ring-background bg-primary text-white text-xs font-bold">
              +2k
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold mb-1">
              If you struggle to focus, <span className="text-primary">you're not alone.</span>
            </p>
            <p className="text-muted">
              Join 2,400+ high-performers who mastered their focus with us.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
