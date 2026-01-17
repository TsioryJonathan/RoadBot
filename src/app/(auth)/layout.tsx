import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center ">
      <BackgroundBeams className="-z-1" />
      {children}
    </div>
  );
}
