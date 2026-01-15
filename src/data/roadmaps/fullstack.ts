import { Node, Edge } from "@xyflow/react";

export const fullstackNodes: Node[] = [
    {
      id: "html-css",
      type: "roadmapNode",
      position: { x: 0, y: 0 },
      data: {
        title: "HTML / CSS",
        description: "Bases du web, responsive design",
        duration: "2 semaines",
        icon: "/icons/html.svg",
      },
    },
    {
      id: "javascript",
      type: "roadmapNode",
      position: { x: 300, y: 0 },
      data: {
        title: "JavaScript",
        description: "ES6, async, DOM",
        duration: "1 mois",
        icon: "/icons/js.svg",
      },
    },
    {
      id: "frontend",
      type: "roadmapNode",
      position: { x: 600, y: 0 },
      data: {
        title: "Frontend",
        description: "React, Next.js, UI",
        duration: "1 mois",
        icon: "/icons/react.svg",
      },
    },
    {
      id: "backend",
      type: "roadmapNode",
      position: { x: 300, y: 220 },
      data: {
        title: "Backend",
        description: "API, Auth, Base de données",
        duration: "1 mois",
        icon: "/icons/backend.svg",
      },
    },
    {
      id: "deploy",
      type: "roadmapNode",
      position: { x: 600, y: 220 },
      data: {
        title: "Déploiement",
        description: "Docker, CI/CD, Cloud",
        duration: "2 semaines",
        icon: "/icons/cloud.svg",
      },
    },
  ];
  
  export const fullstackEdges: Edge[] = [
    { id: "f1", source: "html-css", target: "javascript" },
    { id: "f2", source: "javascript", target: "frontend" },
    { id: "f3", source: "frontend", target: "backend" },
    { id: "f4", source: "backend", target: "deploy" },
  ];
  