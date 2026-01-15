"use client";

import Image from "next/image";
import React from "react";
import assets from "../../../public/images/assets";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Top Careers", href: "#top-careers" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">
        {/* Logo */}
        <Link className="flex items-center" href={"/"}>
          <Image
            src={assets.logo}
            alt="RoadBot"
            className="w-15 h-15 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-[var(--font-raleway)]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-[var(--color-neon-blue)] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="default"
            className="bg-[var(--color-neon-blue)] hover:bg-[var(--color-neon-cyan)] text-black shadow-[0_0_10px_var(--color-glow-blue)] transition-all duration-300"
          >
            Get Started
          </Button>
          <Button
            variant="default"
            className="bg-[var(--color-neon-blue)] hover:bg-[var(--color-neon-cyan)] text-black shadow-[0_0_10px_var(--color-glow-blue)] transition-all duration-300"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
