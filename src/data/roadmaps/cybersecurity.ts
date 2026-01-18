import { Node, Edge } from "@xyflow/react";
import {
  FaLinux,
  FaNetworkWired,
  FaUserShield,
  FaBug,
  FaCertificate,
} from "react-icons/fa";

export interface CareerAbout {
  id: number;
  title: string;
  description: string;
  prerequisites: string[];
  resources: { name: string; link: string }[];
}

export const cybersecurityAbout: CareerAbout = {
  id: 1,
  title: "Ingénieur Cybersécurité",
  description:
    "Protège les systèmes informatiques et les données sensibles contre les attaques.",
  prerequisites: [
    "Bases en informatique",
    "Connaissances réseaux",
    "Notions de sécurité",
  ],
  resources: [
    {
      name: "Cybrary Cybersecurity Path",
      link: "https://www.cybrary.it/skill-paths/cyber-security/",
    },
    { name: "OWASP", link: "https://owasp.org/" },
    {
      name: "Coursera Intro to Cyber Security",
      link: "https://www.coursera.org/specializations/intro-cyber-security",
    },
  ],
};

export const cybersecurityNodes: Node[] = [
  {
    id: "cs1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Bases Informatique",
      description: "Systèmes, Linux, commandes",
      duration: "1 mois",
      resources: [
        { name: "Linux Basics", link: "https://linuxjourney.com/" },
        {
          name: "Computer Networking",
          link: "https://www.coursera.org/learn/computer-networking",
        },
      ],
      icon: FaLinux,
    },
  },
  {
    id: "cs2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "Réseaux",
      description: "TCP/IP, HTTP, Firewalls",
      duration: "1 mois",
      resources: [
        {
          name: "Networking Fundamentals",
          link: "https://www.khanacademy.org/computing/computer-science/internet-intro",
        },
      ],
      icon: FaNetworkWired,
    },
  },
  {
    id: "cs3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "Sécurité Informatique",
      description: "Chiffrement, vulnérabilités, authentification",
      duration: "1 mois",
      resources: [
        {
          name: "Intro to Cryptography",
          link: "https://www.coursera.org/learn/crypto",
        },
      ],
      icon: FaUserShield,
    },
  },
  {
    id: "cs4",
    type: "roadmapNode",
    position: { x: 0, y: 300 },
    data: {
      title: "Pentesting",
      description: "Tests d’intrusion, outils et méthodologies",
      duration: "2 mois",
      resources: [
        { name: "Metasploit Guide", link: "https://www.metasploit.com/" },
      ],
      icon: FaBug,
    },
  },
  {
    id: "cs5",
    type: "roadmapNode",
    position: { x: 300, y: 300 },
    data: {
      title: "Certifications",
      description: "CEH, Security+, OSCP",
      duration: "2 mois",
      resources: [
        { name: "OSCP", link: "https://www.offensive-security.com/pwk-oscp/" },
      ],
      icon: FaCertificate,
    },
  },
];

export const cybersecurityEdges: Edge[] = [
  { id: "e1", source: "cs1", target: "cs2" },
  { id: "e2", source: "cs2", target: "cs3" },
  { id: "e3", source: "cs3", target: "cs4" },
  { id: "e4", source: "cs4", target: "cs5" },
];
