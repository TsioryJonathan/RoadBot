import Hero from "@/components/landing/Hero";
import TopCareers from "@/components/landing/TopCareers";
import { GiCyberEye, GiChefToque, GiMedicalPack } from "react-icons/gi";
import { FaLaptopCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { ClickableCareer } from "@/components/landing/CareerCard";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";

export const topCareers: ClickableCareer[] = [
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

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <TopCareers />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
