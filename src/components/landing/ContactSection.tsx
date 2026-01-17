"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaCheckCircle,
  FaClock,
  FaLock,
} from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contacte-nous"
      description="Parle-nous de ta situation et de tes doutes, on est là pour t’aider."
      bgColor="bg-[var(--color-card)]/20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center pt-15">
        <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg">
          <form className="flex flex-col gap-5">
            {/* Nom */}
            <div className="flex items-center gap-3 bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3">
              <FaUser className="text-[var(--color-text-secondary)]" />
              <input
                type="text"
                placeholder="Ton prénom"
                className="bg-transparent outline-none w-full text-[var(--color-text-primary)]  border border-foreground/10 px-3 py-3 rounded-lg"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3">
              <FaEnvelope className="text-[var(--color-text-secondary)]" />
              <input
                type="email"
                placeholder="Ton adresse email"
                className="bg-transparent outline-none w-full text-[var(--color-text-primary)] border border-foreground/10 px-3 py-3 rounded-lg"
              />
            </div>

            {/* Message */}
            <div className="flex gap-3 bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3">
              <FaCommentDots className="mt-1 text-[var(--color-text-secondary)]" />
              <textarea
                rows={4}
                placeholder="Explique-nous ta situation ou ce que tu recherches..."
                className="bg-transparent outline-none w-full resize-none text-[var(--color-text-primary)] border border-foreground/10 px-3 py-3 rounded-lg"
              />
            </div>

            <Button className="bg-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] py-5 text-lg">
              Envoyer le message
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            Pourquoi nous contacter ?
          </h3>

          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            RoadBot aide les <strong>lycéens</strong>,{" "}
            <strong>étudiants</strong> et
            <strong> personnes déjà actives</strong> à mieux comprendre leurs
            options d’orientation et de carrière.
          </p>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[var(--color-accent)]" />
              <span>Besoin d’aide pour choisir un métier</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[var(--color-accent)]" />
              <span>Doutes après le bac ou à l’université</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[var(--color-accent)]" />
              <span>Envie de changer de voie ou se reconvertir</span>
            </li>
          </ul>

          <div className="text-sm text-[var(--color-text-secondary)] mt-4">
            <p className="flex items-center gap-2 mb-2">
              <FaClock /> Réponse sous 24 à 48 heures
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaLock /> Tes informations restent strictement confidentielles
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
