import { Node, Edge } from "@xyflow/react";

export const cybersecurityNodes: Node[] = [
  {
    id: "start",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "1 - Bases Informatique",
      description: "Systèmes, Linux, lignes de commande",
      duration: "1 mois",
      icon: "/icons/linux.svg",
    },
  },
  {
    id: "network",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "2 - Réseaux",
      description: "TCP/IP, DNS, HTTP, firewalls",
      duration: "1 mois",
      icon: "/icons/network.svg",
    },
  },
  {
    id: "security-basics",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "3 - Sécurité Informatique",
      description: "Chiffrement, authentification, vulnérabilités",
      duration: "1 mois",
      icon: "/icons/security.svg",
    },
  },
  {
    id: "pentest",
    type: "roadmapNode",
    position: { x: 300, y: 220 },
    data: {
      title: "4 - Pentesting",
      description: "Tests d’intrusion, OWASP, Metasploit",
      duration: "2 mois",
      icon: "/icons/pentest.svg",
    },
  },
  {
    id: "cert",
    type: "roadmapNode",
    position: { x: 600, y: 220 },
    data: {
      title: "5 - Certifications",
      description: "CEH, Security+, OSCP",
      duration: "2 mois",
      icon: "/icons/certification.svg",
    },
  },
];

export const cybersecurityEdges: Edge[] = [
  { id: "e1", source: "start", target: "network" },
  { id: "e2", source: "network", target: "security-basics" },
  { id: "e3", source: "security-basics", target: "pentest" },
  { id: "e4", source: "pentest", target: "cert" },
];
