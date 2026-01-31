import { NextResponse } from "next/server";
import client from "../../../../lib/openAI";

/* POST ROUTE TO POST A SURVEY AND SEND IT TO GEMINI */
export async function POST(request: Request) {
  const answersSummary = await request.json();
  
  try {
    /*const response = await Gemini.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents:
        "These are the questions and current situation of the user: " + answersSummary,
      config: {
        systemInstruction: `You are a career advisor. Based on the user's answers to the survey, suggest the top 3 most suitable career paths for them. Provide a brief explanation for each suggestion.The structure of your answer should only be a JSON without the indication that it is a json just the format below and dont send the backticks and should not contain any other text and should follow this format: {
        "jobs": [
            {
                "id": just generate an uuid,
                "title": "Title of the career path",
                "description": "A brief description of why this career path is suitable based on the user's answers"
                "duration": "Estimated duration to achieve this career path",
                "prerequisites": "List of prerequisites or skills needed for this career path"
            }
            ]
        }.
        
        Also you are provided the following questions from the survey.
        If the user is a student, the questions are:
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

  and if the user is a professional, the questions are:
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
        `,
      },
    }); */
    // const question = `QUESTIONS FOURNIES AU MODÈLE :

    //     Si l’utilisateur est étudiant :

    //     student: [
    //       {
    //         id: "q1",
    //         question: "Quels domaines scolaires t'intéressent le plus ?",
    //         options: [
    //           "Sciences",
    //           "Mathématiques",
    //           "Littérature",
    //           "Arts",
    //           "Informatique",
    //           "Économie"
    //         ],
    //         type: "multi"
    //       },
    //       {
    //         id: "q2",
    //         question: "Préféres-tu travailler plutôt seul ou en groupe ?",
    //         options: ["Seul", "En groupe", "Peu importe"],
    //         type: "single"
    //       },
    //       {
    //         id: "q3",
    //         question: "Aimes-tu résoudre des problèmes complexes ?",
    //         options: ["Oui, beaucoup", "Oui, parfois", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q4",
    //         question: "Quel type d'environnement de travail te plaît le plus ?",
    //         options: [
    //           "Bureau",
    //           "Extérieur / terrain",
    //           "Laboratoire",
    //           "Studio / création",
    //           "Tech / numérique"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q5",
    //         question: "Es-tu à l'aise avec les outils numériques et la technologie ?",
    //         options: [
    //           "Très à l'aise",
    //           "À l'aise",
    //           "Peu à l'aise",
    //           "Pas du tout"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q6",
    //         question: "Quel rythme de travail préfères-tu ?",
    //         options: [
    //           "Stable et régulier",
    //           "Intense par période",
    //           "Flexible"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q7",
    //         question: "Quelle est ta motivation principale pour choisir un métier ?",
    //         options: [
    //           "Passion",
    //           "Gagner de l'argent",
    //           "Stabilité",
    //           "Aider les autres",
    //           "Créativité"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q8",
    //         question: "As-tu déjà fait des projets ou stages qui t'ont plu ?",
    //         options: ["Oui, plusieurs", "Oui, un peu", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q9",
    //         question: "Comment décrirais-tu ton style d'apprentissage ?",
    //         options: [
    //           "Pratique / sur le terrain",
    //           "Théorique / livres",
    //           "Par essais-erreurs",
    //           "Créatif / expérimental"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q10",
    //         question: "Aimes-tu travailler avec des chiffres et des données ?",
    //         options: ["Oui beaucoup", "Oui, un peu", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q11",
    //         question: "Aimes-tu aider les autres et collaborer sur des projets ?",
    //         options: ["Oui, beaucoup", "Oui, parfois", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q12",
    //         question:
    //           "Parle-nous un peu plus de toi et de ce que tu aimes (facultatif)",
    //         type: "text"
    //       }
    //     ]

    //     Si l’utilisateur est professionnel :

    //     professional: [
    //       {
    //         id: "q1",
    //         question: "Quel est ton domaine professionnel actuel ?",
    //         options: [
    //           "Tech / Informatique",
    //           "Business / Management",
    //           "Santé",
    //           "Éducation",
    //           "Arts / Création",
    //           "Autre"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q2",
    //         question: "Qu'est-ce que tu apprécies le plus dans ton travail actuel ?",
    //         options: [
    //           "Résolution de problèmes",
    //           "Créativité",
    //           "Relations avec les gens",
    //           "Organisation et planification",
    //           "Technologie"
    //         ],
    //         type: "multi"
    //       },
    //       {
    //         id: "q3",
    //         question: "Es-tu ouvert à changer totalement de domaine ?",
    //         options: [
    //           "Oui, sans hésiter",
    //           "Oui, avec réflexion",
    //           "Non, je préfère rester dans mon domaine"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q4",
    //         question: "Quel type d'environnement de travail te plaît le plus ?",
    //         options: [
    //           "Bureau",
    //           "Travail à distance",
    //           "Extérieur / terrain",
    //           "Laboratoire",
    //           "Studio / création"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q5",
    //         question: "Quel rythme de travail préfères-tu ?",
    //         options: [
    //           "Stable et régulier",
    //           "Intense par période",
    //           "Flexible"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q6",
    //         question: "Quelles compétences souhaites-tu développer ?",
    //         options: [
    //           "Techniques spécialisées",
    //           "Management / leadership",
    //           "Créativité",
    //           "Communication",
    //           "Analyse et chiffres"
    //         ],
    //         type: "multi"
    //       },
    //       {
    //         id: "q7",
    //         question:
    //           "Quelle est ta motivation principale pour changer ou évoluer dans ton métier ?",
    //         options: [
    //           "Passion",
    //           "Gagner plus",
    //           "Stabilité",
    //           "Impact sur les autres",
    //           "Autonomie / créativité"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q8",
    //         question: "Aimes-tu travailler seul ou en équipe ?",
    //         options: ["Seul", "En équipe", "Peu importe"],
    //         type: "single"
    //       },
    //       {
    //         id: "q9",
    //         question: "Comment décrirais-tu ton style de travail ?",
    //         options: [
    //           "Structuré et organisé",
    //           "Flexible et adaptable",
    //           "Créatif et expérimental",
    //           "Orienté résultat / performance"
    //         ],
    //         type: "single"
    //       },
    //       {
    //         id: "q10",
    //         question:
    //           "Es-tu à l'aise avec les nouvelles technologies et outils digitaux ?",
    //         options: ["Oui très à l'aise", "Oui", "Un peu", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q11",
    //         question:
    //           "Aimes-tu aider les autres ou travailler sur des projets collaboratifs ?",
    //         options: ["Oui, beaucoup", "Oui, parfois", "Non"],
    //         type: "single"
    //       },
    //       {
    //         id: "q12",
    //         question:
    //           "Décris en quelques lignes ce qui te passionne et te motive dans ton travail (facultatif)",
    //         type: "text"
    //       }
    //     ]`;
    const response = await client.chat.completions.create({
      model: "arcee-ai/trinity-large-preview:free",
      messages: [
        {
          role: "system",
          content: `
    Tu es un conseiller d’orientation et d’évolution professionnelle expérimenté.
    Tu parles exclusivement français.
    
    MISSION :
    - Analyse le profil résumé de l’utilisateur fourni dans "answersSummary".
    - Propose exactement 4 métiers ou parcours professionnels adaptés à son profil.
    
    FORMAT DE SORTIE :
    - Répond uniquement avec un objet JSON valide.
    - Sans indication que le type de reponses est json
    - Pas de backticks autour du JSON.
    - AUCUN texte hors du JSON.

    Tu es un générateur de JSON strict.

RÈGLES ABSOLUES :
- JSON valide uniquement
- Aucun tableau ou crochet inutile
- Les champs "environment" sont TOUJOURS des strings
- Vérifie la validité JSON avant de répondre
- Ne JAMAIS utiliser de ] ou } en trop

Structure EXACTE attendue :
{
  "jobs": [
    {
      "id": string,
      "title": string,
      "description": {
        "overview": string,
        "missions": string[],
        "environment": string,
        "responsibilities": string[],
        "skills": string[]
      },
      "duration": string,
      "prerequisites": string[],
      "resources": { "href": string, "name": string }[],
      "salary": string
    }
  ]
}
    
    CONTRAINTES :
    - Description riche mais concise, 2-3 missions et responsabilités suffisent.
    - Les ressources doivent contenir uniquement le site principal (ex: https://www.onisep.fr, ...) tu peux ajouter toute les ressources que tu juges necessaire.
    - Salaire = le salaire moyen le plus élevé disponible.
          `,
        },
        {
          role: "user",
          content: `Profil utilisateur à analyser : ${JSON.stringify(
            answersSummary
          )}`,
        },
      ],
      modalities: ["text"],
      temperature: 0,
    });

    console.log(response.choices[0].message);

    return NextResponse.json({ data: response.choices[0].message });
  } catch (error) {
    console.error(error);
  }
}
