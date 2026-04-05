import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export function Section({
  title,
  subtitle,
  centered = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-32", className)} {...props}>
      {(title || subtitle) && (
        <div className={cn("mb-12 md:mb-16 max-w-3xl", centered && "mx-auto text-center")}>
          {subtitle && (
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
