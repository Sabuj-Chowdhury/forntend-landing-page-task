"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../../public/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 h-24 flex items-center",
          isScrolled && !isMenuOpen
            ? resolvedTheme === "dark"
              ? "bg-black/60 backdrop-blur-xl border-b border-white/5 bg-gradient-to-b from-black/80 to-transparent"
              : "bg-white/70 backdrop-blur-md border-b border-black/5"
            : "bg-transparent border-none",
        )}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start z-[110]">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src={logo}
                alt="PPA icon"
                priority
                className={cn(
                  "h-9 w-auto object-contain transition-all duration-300",
                  !mounted
                    ? "brightness-100"
                    : resolvedTheme === "dark"
                      ? "brightness-100"
                      : "brightness-0",
                )}
              />
              <span
                className={cn(
                  "text-2xl font-bold tracking-tight transition-all duration-300",
                  !mounted
                    ? "text-white"
                    : resolvedTheme === "dark"
                      ? "text-white"
                      : "text-black",
                )}
              >
                PPA
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav Items (Hidden below 680px) */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 z-[120] pointer-events-auto">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors whitespace-nowrap cursor-pointer",
                  !mounted
                    ? "text-white/70"
                    : resolvedTheme === "dark"
                      ? "text-white/70 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6 z-[110]">
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            <Link
              href="#pricing"
              className="hidden [@media(min-width:681px)]:block"
            >
             
              <Button
                size="lg"
                className={cn(
                  "h-12 px-8 rounded-lg hidden md:block",
                  "bg-[#2466F2] text-white",
                  "hover:brightness-110",
                  "font-bold text-base shadow-lg shadow-[#2466F2]/20 transition-all active:scale-95",
                )}
              >
                Enroll now
              </Button>
            </Link>

            {/* Hamburger Toggle (Visible below 680px) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 [@media(min-width:900px)]:hidden",
                "text-black bg-black/5 hover:bg-black/10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20",
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose
                  size={24}
                  className="animate-in fade-in zoom-in duration-300"
                />
              ) : (
                <HiMenuAlt3
                  size={24}
                  className="animate-in fade-in zoom-in duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* bg for mobile menu overlay is not corrrect ple see the scernshot attched */}
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-500 [@media(min-width:681px)]:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
          "bg-white/60 dark:bg-black/60 backdrop-blur-2xl",
        )}
      >
        <div className="flex flex-col items-start justify-start h-full px-6 gap-6 pt-32">
          {navLinks.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-[17px] font-medium transition-all duration-500 transform cursor-pointer",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
                "text-black/80 hover:text-black dark:text-white/90 dark:hover:text-white",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
