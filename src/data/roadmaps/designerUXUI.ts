// uxui.ts
import { Node, Edge } from "@xyflow/react";
import { CareerAbout } from "./cybersecurity";
import {
  FaPaintBrush,
  FaSearch,
  FaFigma,
  FaUserCheck,
  FaBriefcase,
} from "react-icons/fa";

export const uxuiAbout: CareerAbout = {
  id: 3,
  title: "Designer UX/UI",
  description:
    "Conçoit des interfaces et expériences utilisateurs intuitives et attractives.",
  prerequisites: [
    "Bases en design graphique",
    "Notions de web",
    "Sens de l'ergonomie",
  ],
  resources: [
    {
      name: "Adobe XD Tutorials",
      link: "https://helpx.adobe.com/xd/tutorials.html",
    },
    { name: "Figma Learn", link: "https://www.figma.com/learn/" },
    {
      name: "UX Design Courses - Coursera",
      link: "https://www.coursera.org/specializations/ux-design",
    },
  ],
};

export const uxuiNodes: Node[] = [
  {
    id: "ux1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Bases Design Graphique",
      description: "Couleurs, typographie, composition",
      duration: "1 mois",
      resources: [
        {
          name: "Canva Design School",
          link: "https://www.canva.com/learn/design-school/",
        },
      ],
      icon: FaPaintBrush,
    },
  },
  {
    id: "ux2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "UX Research",
      description: "Comprendre l'utilisateur, tests, persona",
      duration: "1 mois",
      resources: [
        { name: "Nielsen Norman Group", link: "https://www.nngroup.com/" },
      ],
      icon: FaSearch,
    },
  },
  {
    id: "ux3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "Prototypage & UI",
      description: "Figma, Adobe XD, wireframes, maquettes",
      duration: "2 mois",
      resources: [
        { name: "Figma Learn", link: "https://www.figma.com/learn/" },
      ],
      icon: FaFigma,
    },
  },
  {
    id: "ux4",
    type: "roadmapNode",
    position: { x: 0, y: 300 },
    data: {
      title: "Tests Utilisateurs",
      description: "Validation et ajustement des interfaces",
      duration: "1 mois",
      resources: [
        { name: "Usability.gov", link: "https://www.usability.gov/" },
      ],
      icon: FaUserCheck,
    },
  },
  {
    id: "ux5",
    type: "roadmapNode",
    position: { x: 300, y: 300 },
    data: {
      title: "Portfolio & Projets",
      description: "Créer un portfolio convaincant",
      duration: "1 mois",
      resources: [{ name: "Behance", link: "https://www.behance.net/" }],
      icon: FaBriefcase,
    },
  },
];

export const uxuiEdges: Edge[] = [
  { id: "e1", source: "ux1", target: "ux2" },
  { id: "e2", source: "ux2", target: "ux3" },
  { id: "e3", source: "ux3", target: "ux4" },
  { id: "e4", source: "ux4", target: "ux5" },
];
