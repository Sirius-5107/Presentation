import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function V({ children }: { children: ReactNode }) {
  return <span className="font-display italic">{children}</span>;
}

export function Sub({ children }: { children: ReactNode }) {
  return <sub className="font-sans text-xs italic">{children}</sub>;
}

export function EqBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-panel px-4 py-3 font-display text-base leading-snug text-cream shadow-border",
        className,
      )}
    >
      {children}
    </div>
  );
}
