// marketing.ts
import { Node, Edge } from "@xyflow/react";
import { CareerAbout } from "./cybersecurity";
import { FaBullhorn, FaChartLine, FaEnvelope, FaUsers } from "react-icons/fa";

export const marketingAbout: CareerAbout = {
  id: 4,
  title: "Chef de Projet Marketing",
  description:
    "Planifie et coordonne les campagnes marketing pour maximiser l'impact et la visibilité.",
  prerequisites: ["Bases en marketing", "Compétences en communication", "Analyse de données"],
  resources: [
    { name: "HubSpot Academy", link: "https://academy.hubspot.com/" },
    { name: "Coursera Marketing Specialization", link: "https://www.coursera.org/specializations/marketing" },
    { name: "Google Digital Garage", link: "https://learndigital.withgoogle.com/digitalgarage" },
  ],
};

export const marketingNodes: Node[] = [
  {
    id: "m1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Bases Marketing",
      description: "Principes, études de marché",
      duration: "1 mois",
      resources: [
        { name: "Principles of Marketing - Coursera", link: "https://www.coursera.org/learn/principles-of-marketing" },
      ],
      icon: FaBullhorn,
    },
  },
  {
    id: "m2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "Communication & Branding",
      description: "Stratégie de marque, message",
      duration: "1 mois",
      resources: [
        { name: "Branding Basics - HubSpot", link: "https://blog.hubspot.com/marketing/branding" },
      ],
      icon: FaChartLine,
    },
  },
  {
    id: "m3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "Campagnes Marketing",
      description: "Email, réseaux sociaux, publicité",
      duration: "2 mois",
      resources: [
        { name: "Google Ads Learning", link: "https://skillshop.exceedlms.com/student/catalog" },
      ],
      icon: FaEnvelope,
    },
  },
  {
    id: "m4",
    type: "roadmapNode",
    position: { x: 0, y: 300 },
    data: {
      title: "Analyse & Optimisation",
      description: "KPI, analytics, amélioration continue",
      duration: "1 mois",
      resources: [
        { name: "Google Analytics Academy", link: "https://analytics.google.com/analytics/academy/" },
      ],
      icon: FaChartLine,
    },
  },
  {
    id: "m5",
    type: "roadmapNode",
    position: { x: 300, y: 300 },
    data: {
      title: "Portfolio & Réseautage",
      description: "Projets, LinkedIn, contacts professionnels",
      duration: "1 mois",
      resources: [
        { name: "LinkedIn Learning", link: "https://www.linkedin.com/learning/" },
      ],
      icon: FaUsers,
    },
  },
];

export const marketingEdges: Edge[] = [
  { id: "e1", source: "m1", target: "m2" },
  { id: "e2", source: "m2", target: "m3" },
  { id: "e3", source: "m3", target: "m4" },
  { id: "e4", source: "m4", target: "m5" },
];
