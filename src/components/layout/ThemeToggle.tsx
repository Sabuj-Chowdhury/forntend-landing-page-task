"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-16 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-border/50">
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "p-1.5 rounded-full transition-all duration-200",
          theme === "dark"
            ? "bg-neutral-800 text-white shadow-sm"
            : "text-neutral-500 hover:text-neutral-900",
        )}
        aria-label="Dark mode"
      >
        <Moon className="size-4" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "p-1.5 rounded-full transition-all duration-200",
          theme === "light"
            ? "bg-white text-neutral-900 shadow-sm"
            : "text-neutral-400 hover:text-neutral-600",
        )}
        aria-label="Light mode"
      >
        <Sun className="size-4" />
      </button>
    </div>
  );
}
