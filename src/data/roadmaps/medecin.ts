import { Node, Edge } from "@xyflow/react";
import { CareerAbout } from "./cybersecurity";
import { GiMicroscope, GiStethoscope } from "react-icons/gi";
import { FaHospital } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";

export const medecinAbout: CareerAbout = {
  id: 5,
  title: "Médecin Généraliste",
  description:
    "Fournit des soins médicaux primaires et assure le suivi de la santé des patients.",
  prerequisites: [
    "Connaissances en sciences",
    "Anatomie et physiologie",
    "Communication avec les patients",
  ],
  resources: [
    {
      name: "Khan Academy - Health & Medicine",
      link: "https://www.khanacademy.org/science/health-and-medicine",
    },
    {
      name: "Coursera - Medical Courses",
      link: "https://www.coursera.org/browse/health",
    },
    {
      name: "WHO Guidelines",
      link: "https://www.who.int/publications/guidelines",
    },
  ],
};

export const medecinNodes: Node[] = [
  {
    id: "med1",
    type: "roadmapNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Bases Sciences Médicales",
      description: "Biologie, chimie, anatomie",
      duration: "1 an",
      resources: [
        {
          name: "Biology - Khan Academy",
          link: "https://www.khanacademy.org/science/biology",
        },
      ],
      icon: GiMicroscope,
    },
  },
  {
    id: "med2",
    type: "roadmapNode",
    position: { x: 300, y: 0 },
    data: {
      title: "Pathologie & Médecine Clinique",
      description: "Diagnostics, traitements, maladies courantes",
      duration: "2 ans",
      resources: [{ name: "MedlinePlus", link: "https://medlineplus.gov/" }],
      icon: GiStethoscope,
    },
  },
  {
    id: "med3",
    type: "roadmapNode",
    position: { x: 600, y: 0 },
    data: {
      title: "Stages & Expérience Clinique",
      description: "Pratique dans hôpitaux et cliniques",
      duration: "2 ans",
      resources: [
        {
          name: "Clinical Rotations - MedEd",
          link: "https://www.medicalschoolhq.net/clinical-rotations/",
        },
      ],
      icon: FaHospital,
    },
  },
  {
    id: "med4",
    type: "roadmapNode",
    position: { x: 0, y: 300 },
    data: {
      title: "Examen de Certification",
      description: "Obtenir le diplôme ou licence médicale",
      duration: "1 an",
      resources: [
        {
          name: "National Medical Licensing Exam",
          link: "https://www.usmle.org/",
        },
      ],
      icon: MdAssignmentTurnedIn,
    },
  },
];

export const medecinEdges: Edge[] = [
  { id: "e1", source: "med1", target: "med2" },
  { id: "e2", source: "med2", target: "med3" },
  { id: "e3", source: "med3", target: "med4" },
];
