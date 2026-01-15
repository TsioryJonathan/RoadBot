// fullstack.ts
import { Node, Edge } from "@xyflow/react";
import { CareerAbout } from "./cybersecurity";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaServer,
} from "react-icons/fa";

export const fullstackAbout: CareerAbout = {
  id: 2,
  title: "Développeur Full Stack",
  description: "Crée des applications web complètes, du backend au frontend.",
  prerequisites: ["HTML/CSS", "JavaScript", "Bases backend"],
  resources: [
    { name: "freeCodeCamp Full Stack", link: "https://www.freecodecamp.org/" },
    { name: "The Odin Project", link: "https://www.theodinproject.com/" },
  ],
};

export const fullstackNodes: Node[] = [
  {
    id: "fs1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "HTML & CSS",
      description: "Bases du web, responsive design",
      duration: "1 mois",
      resources: [
        {
          name: "MDN HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
      ],
      icon: FaHtml5,
    },
  },
  {
    id: "fs2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "JavaScript",
      description: "ES6+, DOM, async/await",
      duration: "1 mois",
      resources: [
        {
          name: "MDN JS Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        },
      ],
      icon: FaJs,
    },
  },
  {
    id: "fs3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "React & Next.js",
      description: "Hooks, composants, routing SSR",
      duration: "2 mois",
      resources: [
        {
          name: "React Docs",
          link: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "Next.js Docs", link: "https://nextjs.org/docs" },
      ],
      icon: FaReact,
    },
  },
  {
    id: "fs4",
    type: "roadmapNode",
    position: { x: 0, y: 300 },
    data: {
      title: "Node.js & Express",
      description: "API REST, bases de données, authentification",
      duration: "2 mois",
      resources: [
        { name: "Node.js Docs", link: "https://nodejs.org/en/docs/" },
        { name: "Express Docs", link: "https://expressjs.com/" },
      ],
      icon: FaNode,
    },
  },
  {
    id: "fs5",
    type: "roadmapNode",
    position: { x: 300, y: 300 },
    data: {
      title: "Déploiement & CI/CD",
      description: "Docker, Netlify, Heroku",
      duration: "1 mois",
      resources: [{ name: "Docker Docs", link: "https://docs.docker.com/" }],
      icon: FaServer,
    },
  },
];

export const fullstackEdges: Edge[] = [
  { id: "e1", source: "fs1", target: "fs2" },
  { id: "e2", source: "fs2", target: "fs3" },
  { id: "e3", source: "fs3", target: "fs4" },
  { id: "e4", source: "fs4", target: "fs5" },
];
