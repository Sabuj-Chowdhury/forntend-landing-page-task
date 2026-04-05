import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { Features } from "@/components/sections/Features";
import { ModuleList } from "@/components/sections/ModuleList";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white font-body text-white">
      <Navbar />

      <Hero />
      <TrustSection />
      <Features />
      <ModuleList />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
