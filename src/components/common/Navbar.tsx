"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "../../../public/images/assets";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "hero" },
  { label: "Carrières", href: "top-careers" },
  { label: "À propos", href: "about" },
  { label: "Contact", href: "contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-bg-primary)] shadow-md h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 h-full">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src={assets.logo}
            alt="RoadBot"
            className="w-16 h-16 object-contain"
          />
          <span className="ml-2 text-xl font-bold text-[var(--color-text-primary)]">
            RoadBot
          </span>
        </Link>

        {/* Liens de navigation (desktop) */}
        <ul className="hidden md:flex space-x-8 text-[var(--color-text-primary)] font-[var(--font-raleway)] text-lg">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`/#${link.href}`}
                className="hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton principal (desktop) */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="default"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-5 py-2 transition-all duration-200 font-medium"
          >
            Commencer
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden relative">
          <button
            className="text-[var(--color-text-primary)] text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[var(--color-bg-primary)] rounded-lg shadow-lg flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`/#${link.href}`}
                  className="px-4 py-2 text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="default"
                className="mx-4 mt-2 bg-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-5 py-2 transition-all duration-200 font-medium"
              >
                Commencer
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
