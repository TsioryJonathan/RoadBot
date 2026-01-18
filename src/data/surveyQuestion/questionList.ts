import { SurveyQuestion } from "@/types/SurveyQuestion.type";

export const questionList: Record<string, SurveyQuestion[]> = {
  student: [
    {
      id: "q1",
      question: "Quels domaines scolaires t'intéressent le plus ?",
      options: [
        "Sciences",
        "Mathématiques",
        "Littérature",
        "Arts",
        "Informatique",
        "Économie",
      ],
      type: "multi",
    },
    {
      id: "q2",
      question: "Préféres-tu travailler plutôt seul ou en groupe ?",
      options: ["Seul", "En groupe", "Peu importe"],
      type: "single",
    },
    {
      id: "q3",
      question: "Aimes-tu résoudre des problèmes complexes ?",
      options: ["Oui, beaucoup", "Oui, parfois", "Non"],
      type: "single",
    },
    {
      id: "q4",
      question: "Quel type d'environnement de travail te plaît le plus ?",
      options: [
        "Bureau",
        "Extérieur / terrain",
        "Laboratoire",
        "Studio / création",
        "Tech / numérique",
      ],
      type: "single",
    },
    {
      id: "q5",
      question: "Es-tu à l'aise avec les outils numériques et la technologie ?",
      options: ["Très à l'aise", "À l'aise", "Peu à l'aise", "Pas du tout"],
      type: "single",
    },
    {
      id: "q6",
      question: "Quel rythme de travail préfères-tu ?",
      options: ["Stable et régulier", "Intense par période", "Flexible"],
      type: "single",
    },
    {
      id: "q7",
      question: "Quelle est ta motivation principale pour choisir un métier ?",
      options: [
        "Passion",
        "Gagner de l'argent",
        "Stabilité",
        "Aider les autres",
        "Créativité",
      ],
      type: "single",
    },
    {
      id: "q8",
      question: "As-tu déjà fait des projets ou stages qui t'ont plu ?",
      options: ["Oui, plusieurs", "Oui, un peu", "Non"],
      type: "single",
    },
    {
      id: "q9",
      question: "Comment décrirais-tu ton style d'apprentissage ?",
      options: [
        "Pratique / sur le terrain",
        "Théorique / livres",
        "Par essais-erreurs",
        "Créatif / expérimental",
      ],
      type: "single",
    },
    {
      id: "q10",
      question: "Aimes-tu travailler avec des chiffres et des données ?",
      options: ["Oui beaucoup", "Oui, un peu", "Non"],
      type: "single",
    },
    {
      id: "q11",
      question: "Aimes-tu aider les autres et collaborer sur des projets ?",
      options: ["Oui, beaucoup", "Oui, parfois", "Non"],
      type: "single",
    },
    {
      id: "q12",
      question:
        "Parle-nous un peu plus de toi et de ce que tu aimes (facultatif)",
      type: "text",
    },
  ],

  professional: [
    {
      id: "q1",
      question: "Quel est ton domaine professionnel actuel ?",
      options: [
        "Tech / Informatique",
        "Business / Management",
        "Santé",
        "Éducation",
        "Arts / Création",
        "Autre",
      ],
      type: "single",
    },
    {
      id: "q2",
      question: "Qu'est-ce que tu apprécies le plus dans ton travail actuel ?",
      options: [
        "Résolution de problèmes",
        "Créativité",
        "Relations avec les gens",
        "Organisation et planification",
        "Technologie",
      ],
      type: "multi",
    },
    {
      id: "q3",
      question: "Es-tu ouvert à changer totalement de domaine ?",
      options: [
        "Oui, sans hésiter",
        "Oui, avec réflexion",
        "Non, je préfère rester dans mon domaine",
      ],
      type: "single",
    },
    {
      id: "q4",
      question: "Quel type d'environnement de travail te plaît le plus ?",
      options: [
        "Bureau",
        "Travail à distance",
        "Extérieur / terrain",
        "Laboratoire",
        "Studio / création",
      ],
      type: "single",
    },
    {
      id: "q5",
      question: "Quel rythme de travail préfères-tu ?",
      options: ["Stable et régulier", "Intense par période", "Flexible"],
      type: "single",
    },
    {
      id: "q6",
      question: "Quelles compétences souhaites-tu développer ?",
      options: [
        "Techniques spécialisées",
        "Management / leadership",
        "Créativité",
        "Communication",
        "Analyse et chiffres",
      ],
      type: "multi",
    },
    {
      id: "q7",
      question:
        "Quelle est ta motivation principale pour changer ou évoluer dans ton métier ?",
      options: [
        "Passion",
        "Gagner plus",
        "Stabilité",
        "Impact sur les autres",
        "Autonomie / créativité",
      ],
      type: "single",
    },
    {
      id: "q8",
      question: "Aimes-tu travailler seul ou en équipe ?",
      options: ["Seul", "En équipe", "Peu importe"],
      type: "single",
    },
    {
      id: "q9",
      question: "Comment décrirais-tu ton style de travail ?",
      options: [
        "Structuré et organisé",
        "Flexible et adaptable",
        "Créatif et expérimental",
        "Orienté résultat / performance",
      ],
      type: "single",
    },
    {
      id: "q10",
      question:
        "Es-tu à l'aise avec les nouvelles technologies et outils digitaux ?",
      options: ["Oui très à l'aise", "Oui", "Un peu", "Non"],
      type: "single",
    },
    {
      id: "q11",
      question:
        "Aimes-tu aider les autres ou travailler sur des projets collaboratifs ?",
      options: ["Oui, beaucoup", "Oui, parfois", "Non"],
      type: "single",
    },
    {
      id: "q12",
      question:
        "Décris en quelques lignes ce qui te passionne et te motive dans ton travail (facultatif)",
      type: "text",
    },
  ],
};
