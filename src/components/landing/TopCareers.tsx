"use client";

import SectionWrapper from "./SectionWrapper";
import { CareerCard } from "./CareerCard";
import { GiChefToque, GiCyberEye, GiMedicalPack } from "react-icons/gi";
import { FaBullhorn, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

export const topCareers = [
  {
    id: 1,
    title: "Ingénieur Cybersécurité",
    description:
      "Protège les systèmes informatiques et les données sensibles contre les attaques.",
    duration: "2 ans",
    icon: GiCyberEye,
    href: "ingenieur-cybersecurite",
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    description:
      "Crée des applications web complètes, du backend au frontend, avec des technologies modernes.",
    duration: "1,5 ans",
    icon: FaLaptopCode,
    href: "developpeur-fullstack",
  },
  {
    id: 3,
    title: "Designer UX/UI",
    description:
      "Conçoit des interfaces et expériences utilisateurs intuitives et attractives.",
    duration: "1,5 ans",
    icon: FaPaintBrush,
    href: "designer-ux-ui",
  },
  {
    id: 4,
    title: "Chef de Projet Marketing",
    description:
      "Planifie et coordonne les campagnes marketing pour maximiser l'impact et la visibilité.",
    duration: "1 an",
    icon: FaBullhorn,
    href: "chef-de-projet-marketing",
  },
  {
    id: 5,
    title: "Médecin Généraliste",
    description:
      "Fournit des soins médicaux primaires et assure le suivi de la santé des patients.",
    duration: "6 ans",
    icon: GiMedicalPack,
    href: "medecin-generaliste",
  },
  {
    id: 6,
    title: "Chef de Cuisine",
    description:
      "Dirige la préparation des repas et l’organisation d’une cuisine professionnelle.",
    duration: "3 ans",
    icon: GiChefToque,
    href: "chef-de-cuisine",
  },
];

function TopCareers() {
  return (
    <SectionWrapper
      id="top-careers"
      title="Carrières en vogue"
      description="Découvrez les parcours professionnels les plus recherchés actuellement."
      bgColor="bg-[var(--color-card)]/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {topCareers.map((career) => (
          <CareerCard career={career} key={career.id} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default TopCareers;
