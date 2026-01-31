/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserProfile } from "@/types/UserProfile.type";

// ----------- Étudiants -----------
export function mapStudentAnswers(
  answers: Record<string, any>
): UserProfile {
  return {
    situation: "student",

    // Démographie
    age: answers.q1 ?? null,
    gender: answers.q2 ?? null,

    // Intérêts et compétences
    student_interests: answers.q3,
    teamwork: answers.q4 === "Seul" ? "solo" : "team",
    problemSolving: answers.q5 === "Oui, beaucoup" ? "high" : answers.q5 === "Oui, parfois" ? "medium" : "low",
    workEnvironment: answers.q6,
    techAffinity: answers.q7 === "Très à l'aise" ? "high" : answers.q7 === "À l'aise" ? "medium" : "low",
    workRhythm: answers.q8 === "Stable et régulier" ? "stable" : answers.q8 === "Intense par période" ? "intense" : "flexible",
    motivation:
      answers.q9 === "Gagner de l'argent"
        ? "money"
        : answers.q9 === "Stabilité"
        ? "stability"
        : answers.q9 === "Aider les autres"
        ? "helping"
        : answers.q9 === "Créativité"
        ? "creativity"
        : "passion",
    experienceLevel: answers.q10 === "Oui, plusieurs" ? "experienced" : answers.q10 === "Oui, un peu" ? "some" : "none",
    learningStyle: answers.q11,
    dataAffinity: answers.q12 === "Oui beaucoup" ? "high" : answers.q12 === "Oui, un peu" ? "medium" : "low",
    collaboration: answers.q13 === "Oui, beaucoup" ? "high" : answers.q13 === "Oui, parfois" ? "medium" : "low",

    // Langues
    languages: Array.isArray(answers.q14) ? answers.q14 : [answers.q14].filter(Boolean),

    // Texte libre
    freeText: answers.q15 ?? "",
  };
}

// ----------- Professionnels -----------
export function mapProfessionalAnswers(
  answers: Record<string, any>
): UserProfile {
  return {
    situation: "professional",

    // Démographie
    age: answers.q1 ?? null,

    // Travail
    currentDomain: answers.q2,
    appreciation: Array.isArray(answers.q3) ? answers.q3 : [answers.q3].filter(Boolean),
    opennessToChange: answers.q4 === "Oui, sans hésiter" ? "high" : answers.q4 === "Oui, avec réflexion" ? "medium" : "low",
    workEnvironment: answers.q5,
    workRhythm: answers.q6 === "Stable et régulier" ? "stable" : answers.q6 === "Intense par période" ? "intense" : "flexible",
    skillsToDevelop: Array.isArray(answers.q7) ? answers.q7 : [answers.q7].filter(Boolean),
    motivation:
      answers.q8 === "Gagner plus"
        ? "money"
        : answers.q8 === "Stabilité"
        ? "stability"
        : answers.q8 === "Impact sur les autres"
        ? "impact"
        : answers.q8 === "Autonomie / créativité"
        ? "creativity"
        : "passion",
    teamwork: answers.q9 === "Seul" ? "solo" : "team",
    workingStyle: answers.q10,
    techAffinity: answers.q11 === "Oui très à l'aise" ? "high" : answers.q11 === "Oui" ? "medium" : "low",
   

    // Salaire et contraintes
    salary: answers.q12 ?? null,
    constraints: answers.q13 ?? null,

    // Langues
    languages: Array.isArray(answers.q14) ? answers.q14 : [answers.q14].filter(Boolean),

    // Texte libre
    freeText: answers.q15 ?? "",
  };
}
