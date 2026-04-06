import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeatureSteps } from "@/components/sections/FeatureSteps";
import { ModuleList } from "@/components/sections/ModuleList";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white font-body text-foreground">
      <Navbar />

      <Hero />
      <ProblemStatement />
      <SolutionSection />
      <FeatureSteps />
      <ModuleList />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
