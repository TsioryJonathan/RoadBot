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
    <nav className="fixed w-full z-50 bg-[var(--color-bg-primary)] shadow-md h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 h-full">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src={assets.logo}
            alt="RoadBot"
            className="w-16 h-16 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-[var(--color-text-primary)] font-[var(--font-raleway)] text-lg">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-[var(--color-accent)] transition-colors duration-200"
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
            className="bg-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-5 py-2 transition-colors duration-200"
          >
            Get Started
          </Button>
          <Button
            variant="default"
            className="bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)] text-[var(--color-text-primary)] px-5 py-2 transition-colors duration-200"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-[var(--color-text-primary)] text-2xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
