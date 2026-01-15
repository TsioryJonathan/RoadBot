import React from "react";
import SectionWrapper from "./SectionWrapper";
import { FaCompass, FaRoute, FaUserGraduate } from "react-icons/fa";

function AboutSection() {
  return (
    <SectionWrapper
      title="A propos de RoadBot"
      description=" RoadBot t’aide à découvrir les métiers faits pour toi et à comprendre
            comment y accéder, étape par étape."
      id="about"
      bgColor="bg-secondary/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {[
          {
            icon: (
              <FaUserGraduate className="text-3xl text-[var(--color-accent)] mb-4" />
            ),
            title: "Pour tous les profils",
            description:
              "Lycéen, étudiant ou adulte en reconversion, RoadBot s’adapte à ton niveau et à ta situation.",
          },
          {
            icon: (
              <FaCompass className="text-3xl text-[var(--color-accent)] mb-4" />
            ),
            title: "Orientation personnalisée",
            description:
              "Un questionnaire simple pour mieux comprendre qui tu es et ce qui te correspond vraiment.",
          },
          {
            icon: (
              <FaRoute className="text-3xl text-[var(--color-accent)] mb-4" />
            ),
            title: "Roadmaps claires",
            description:
              "Des parcours métiers visuels avec étapes, compétences et ressources pour avancer concrètement.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-[var(--color-card)] rounded-xl p-6 shadow-md"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
