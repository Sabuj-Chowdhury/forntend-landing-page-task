import React from "react";
import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
               <span className="text-white font-bold text-sm">D</span>
             </div>
             <span className="font-heading font-bold tracking-tight">DeepWork</span>
           </div>

           <div className="flex items-center gap-8 text-sm text-muted">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
           </div>

           <p className="text-sm text-white/40">
              © {new Date().getFullYear()} DeepWork Academy. All rights reserved.
           </p>
        </div>
      </Container>
    </footer>
  );
}
