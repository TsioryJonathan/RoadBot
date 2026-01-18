import { Node, Edge } from "@xyflow/react";
import { CareerAbout } from "./cybersecurity";
import { GiCookingPot, GiChefToque, GiKitchenKnives } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";

export const chefCuisineAbout: CareerAbout = {
  id: 6,
  title: "Chef de Cuisine",
  description:
    "Dirige la préparation des repas et l’organisation d’une cuisine professionnelle.",
  prerequisites: ["Bases culinaires", "Hygiène et sécurité alimentaire", "Créativité et gestion de temps"],
  resources: [
    { name: "Le Cordon Bleu Courses", link: "https://www.cordonbleu.edu/home/en" },
    { name: "MasterClass - Gordon Ramsay", link: "https://www.masterclass.com/classes/gordon-ramsay-teaches-cooking" },
    { name: "Food Network Cooking Guides", link: "https://www.foodnetwork.com/how-to" },
  ],
};

export const chefCuisineNodes: Node[] = [
  {
    id: "chef1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Bases Cuisine",
      description: "Techniques de base, couteaux, sauces",
      duration: "6 mois",
      resources: [
        { name: "YouTube - Basics Cooking", link: "https://www.youtube.com/results?search_query=cooking+basics" },
      ],
      icon: GiCookingPot,
    },
  },
  {
    id: "chef2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "Techniques Avancées",
      description: "Cuissons, pâtisserie, plats complexes",
      duration: "1 an",
      resources: [
        { name: "Le Cordon Bleu Techniques", link: "https://www.cordonbleu.edu/home/en" },
      ],
      icon: GiChefToque,
    },
  },
  {
    id: "chef3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "Gestion Cuisine & Équipe",
      description: "Planification, gestion du personnel et commandes",
      duration: "1 an",
      resources: [
        { name: "Kitchen Management - Coursera", link: "https://www.coursera.org/learn/kitchen-management" },
      ],
      icon: GiKitchenKnives,
    },
  },
  {
    id: "chef4",
    type: "roadmapNode",
    position: { x: 900, y: 0 },
    data: {
      title: "Expérience Professionnelle",
      description: "Stage et travail en restaurants",
      duration: "6 mois",
      resources: [
        { name: "Internship Culinary", link: "https://www.internships.com/culinary" },
      ],
      icon: FaUtensils,
    },
  },
];

export const chefCuisineEdges: Edge[] = [
  { id: "e1", source: "chef1", target: "chef2" },
  { id: "e2", source: "chef2", target: "chef3" },
  { id: "e3", source: "chef3", target: "chef4" },
];
