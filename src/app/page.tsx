import Hero from "@/components/landing/Hero";
import TopCareers from "@/components/landing/TopCareers";
import { Career } from "@/types/Career";
import assets from "../../public/images/assets";

export const topCareers: Career[] = [
  {
    id: 1,
    title: "Ingénieur Cybersécurité",
    description:
      "Protège les systèmes informatiques et les données sensibles contre les attaques.",
    duration: "2 ans",
    icon: assets.cyberIllustration,
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    description:
      "Crée des applications web complètes, du backend au frontend, avec des technologies modernes.",
    duration: "1,5 ans",
    icon: assets.cyberIllustration,
  },
  {
    id: 3,
    title: "Designer UX/UI",
    description:
      "Conçoit des interfaces et expériences utilisateurs intuitives et attractives.",
    duration: "1,5 ans",
    icon: assets.cyberIllustration,
  },
  {
    id: 4,
    title: "Chef de Projet Marketing",
    description:
      "Planifie et coordonne les campagnes marketing pour maximiser l'impact et la visibilité.",
    duration: "1 an",
    icon: assets.cyberIllustration,
  },
  {
    id: 5,
    title: "Médecin Généraliste",
    description:
      "Fournit des soins médicaux primaires et assure le suivi de la santé des patients.",
    duration: "6 ans",
    icon: assets.cyberIllustration,
  },
  {
    id: 6,
    title: "Chef de Cuisine",
    description:
      "Dirige la préparation des repas et l’organisation d’une cuisine professionnelle.",
    duration: "3 ans",
    icon: assets.cyberIllustration,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <TopCareers trendingCareers={topCareers} />
    </div>
  );
}
