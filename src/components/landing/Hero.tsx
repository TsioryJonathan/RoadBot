"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import assets from "../../../public/images/assets";
import { BackgroundBeams } from "../ui/background-beams";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16  text-[var(--color-foreground)]"
    >
      {/* Optional BackgroundBeams can stay if you want subtle effect */}
      <BackgroundBeams className="-z-1"/>

      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-4 md:gap-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Crée ton{" "}
          <span className="text-[var(--color-primary)]">
            roadmap personnalisé
          </span>{" "}
          vers ton métier idéal
        </h1>

        <p className="text-md md:text-lg text-[var(--color-text-secondary)] max-w-md">
          Quelques réponses suffisent et RoadBot génère un roadmap clair pour te guider pas à pas.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <Button
            variant="default"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white transition-colors duration-300 px-5 py-2"
          >
            Générer mon roadmap
          </Button>
          <Button
            variant="default"
            className="bg-[var(--color-bg-secondary)] hover:bg-[var(--color-primary)] text-white transition-colors duration-300 px-5 py-2"
          >
            Découvrir les top métiers
          </Button>
        </div>
      </div>

      {/* Right Content - Mock Roadmap */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
        <Image
          src={assets.hero}
          alt="Mock roadmap Cybersecurity"
          className="w-full max-w-lg object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
