import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

function GlowButton({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <Button
      variant="default"
      className={cn(
        "bg-[var(--color-neon-blue)] hover:bg-[var(--color-neon-cyan)] text-black shadow-[0_0_15px_var(--color-glow-blue)] transition-all duration-300 px-6 py-3",
        classname
      )}
    >
      {children}
    </Button>
  );
}

export default GlowButton;
