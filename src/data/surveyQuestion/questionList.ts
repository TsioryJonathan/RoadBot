import { SurveyQuestion } from "@/types/SurveyQuestion.type";

export const questionList: Record<string, SurveyQuestion[]> = {
  student: [
    {
      id: "q1",
      question: "Quel est ton âge ?",
      type: "single",
      options: ["<12", "12-15", "16-18", "19-22", ">22"],
    },
    {
      id: "q2",
      question: "Quel est ton genre ?",
      type: "single",
      options: ["Femme", "Homme", "Non-binaire", "Préfère ne pas dire"],
    },
    {
      id: "q3",
      question: "Quels domaines scolaires t'intéressent le plus ?",
      type: "multi",
      options: [
        "Sciences",
        "Mathématiques",
        "Littérature",
        "Arts",
        "Informatique",
        "Économie",
        "Langues",
        "Sport",
      ],
    },
    {
      id: "q4",
      question: "Préféres-tu travailler seul ou en groupe ?",
      type: "single",
      options: ["Seul", "En groupe"],
    },
    {
      id: "q5",
      question: "Aimes-tu résoudre des problèmes complexes ?",
      type: "single",
      options: ["Oui, beaucoup", "Oui, parfois", "Non"],
    },
    {
      id: "q6",
      question: "Quel type d'environnement de travail te plaît le plus ?",
      type: "single",
      options: [
        "Bureau",
        "Extérieur / terrain",
        "Laboratoire",
        "Studio / création",
        "Tech / numérique",
        "Autre",
      ],
    },
    {
      id: "q7",
      question: "Es-tu à l'aise avec les outils numériques et la technologie ?",
      type: "single",
      options: ["Très à l'aise", "À l'aise", "Peu à l'aise", "Pas du tout"],
    },
    {
      id: "q8",
      question: "Quel rythme de travail préfères-tu ?",
      type: "single",
      options: ["Stable et régulier", "Intense par période", "Flexible"],
    },
    {
      id: "q9",
      question: "Quelle est ta motivation principale pour choisir un métier ?",
      type: "single",
      options: [
        "Passion",
        "Gagner de l'argent",
        "Stabilité",
        "Aider les autres",
        "Créativité",
        "Reconnaissance sociale",
      ],
    },
    {
      id: "q10",
      question: "As-tu déjà fait des projets ou stages qui t'ont plu ?",
      type: "single",
      options: ["Oui, plusieurs", "Oui, un peu", "Non"],
    },
    {
      id: "q11",
      question: "Comment décrirais-tu ton style d'apprentissage ?",
      type: "single",
      options: [
        "Pratique / terrain",
        "Théorique / livres",
        "Par essais-erreurs",
        "Créatif / expérimental",
      ],
    },
    {
      id: "q12",
      question: "Aimes-tu travailler avec des chiffres et des données ?",
      type: "single",
      options: ["Oui beaucoup", "Oui, un peu", "Non"],
    },
    {
      id: "q13",
      question: "Aimes-tu aider les autres et collaborer sur des projets ?",
      type: "single",
      options: ["Oui, beaucoup", "Oui, parfois", "Non"],
    },
    {
      id: "q14",
      question: "Quelles langues parles-tu couramment ?",
      type: "multi",
      options: [
        "Français",
        "Anglais",
        "Espagnol",
        "Allemand",
        "Chinois",
        "Autre",
      ],
    },
    {
      id: "q15",
      question:
        "Parle-nous un peu plus de toi et de tes centres d'intérêt (facultatif)",
      type: "text",
    },
  ],

  professional: [
    {
      id: "q1",
      question: "Quel est ton âge ?",
      type: "single",
      options: ["<22", "22-30", "31-40", "41-50", "51+"],
    },
    {
      id: "q2",
      question: "Quel est ton domaine professionnel actuel ?",
      type: "single",
      options: [
        "Tech / Informatique",
        "Business / Management",
        "Santé",
        "Éducation",
        "Arts / Création",
        "Autre",
      ],
    },
    {
      id: "q3",
      question: "Qu'apprécies-tu le plus dans ton travail actuel ?",
      type: "multi",
      options: [
        "Résolution de problèmes",
        "Créativité",
        "Relations avec les gens",
        "Organisation et planification",
        "Technologie",
        "Autonomie",
      ],
    },
    {
      id: "q4",
      question: "Es-tu ouvert à changer totalement de domaine ?",
      type: "single",
      options: ["Oui, sans hésiter", "Oui, avec réflexion", "Non"],
    },
    {
      id: "q5",
      question: "Quel type d'environnement de travail te plaît le plus ?",
      type: "single",
      options: [
        "Bureau",
        "Télétravail",
        "Extérieur / terrain",
        "Laboratoire",
        "Studio / création",
      ],
    },
    {
      id: "q6",
      question: "Quel rythme de travail préfères-tu ?",
      type: "single",
      options: ["Stable et régulier", "Intense par période", "Flexible"],
    },
    {
      id: "q7",
      question: "Quelles compétences souhaites-tu développer ?",
      type: "multi",
      options: [
        "Techniques spécialisées",
        "Management / leadership",
        "Créativité",
        "Communication",
        "Analyse et chiffres",
      ],
    },
    {
      id: "q8",
      question: "Quelle est ta motivation principale pour évoluer ?",
      type: "single",
      options: [
        "Passion",
        "Gagner plus",
        "Stabilité",
        "Impact sur les autres",
        "Autonomie / créativité",
      ],
    },
    {
      id: "q9",
      question: "Aimes-tu travailler seul ou en équipe ?",
      type: "single",
      options: ["Seul", "En équipe"],
    },
    {
      id: "q10",
      question: "Comment décrirais-tu ton style de travail ?",
      type: "single",
      options: [
        "Structuré et organisé",
        "Flexible et adaptable",
        "Créatif et expérimental",
        "Orienté résultats",
      ],
    },
    {
      id: "q11",
      question:
        "Es-tu à l'aise avec les nouvelles technologies et outils digitaux ?",
      type: "single",
      options: ["Oui très à l'aise", "Oui", "Un peu", "Non"],
    },
    {
      id: "q12",
      question: "Quel est ton salaire actuel ?",
      type: "single",
      options: ["<1000€", "1000-2000€", "2000-3000€", "3000-5000€", ">5000€"],
    },
    {
      id: "q13",
      question:
        "As-tu des contraintes importantes (déplacement, famille, temps) ?",
      type: "text",
    },
    {
      id: "q14",
      question: "Quelles langues parles-tu couramment ?",
      type: "multi",
      options: [
        "Français",
        "Anglais",
        "Espagnol",
        "Allemand",
        "Chinois",
        "Autre",
      ],
    },
    {
      id: "q15",
      question:
        "Décris en quelques lignes ce qui te passionne et motive dans ton travail (facultatif)",
      type: "text",
    },
  ],
};
