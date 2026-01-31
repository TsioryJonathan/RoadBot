/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserProfile } from "@/types/UserProfile.type";

export function mapStudentAnswers(
  answers: Record<string, any>
): UserProfile {
  return {
    situation: "student",

    student_interests: answers.q1,

    teamwork:
      answers.q2 === "Seul"
        ? "solo"
        : answers.q2 === "En groupe"
        ? "team"
        : "mixed",

    problemSolving:
      answers.q3 === "Oui, beaucoup"
        ? "high"
        : answers.q3 === "Oui, parfois"
        ? "medium"
        : "low",

    workEnvironment: answers.q4,

    techAffinity:
      answers.q5 === "Très à l'aise"
        ? "high"
        : answers.q5 === "À l'aise"
        ? "medium"
        : "low",

    workRhythm:
      answers.q6 === "Stable et régulier"
        ? "stable"
        : answers.q6 === "Intense par période"
        ? "intense"
        : "flexible",

    motivation:
      answers.q7 === "Gagner de l'argent"
        ? "money"
        : answers.q7 === "Stabilité"
        ? "stability"
        : answers.q7 === "Aider les autres"
        ? "helping"
        : answers.q7 === "Créativité"
        ? "creativity"
        : "passion",

    experienceLevel:
      answers.q8 === "Oui, plusieurs"
        ? "experienced"
        : answers.q8 === "Oui, un peu"
        ? "some"
        : "none",

    learningStyle: answers.q9,

    dataAffinity:
      answers.q10 === "Oui beaucoup"
        ? "high"
        : answers.q10 === "Oui, un peu"
        ? "medium"
        : "low",

    collaboration:
      answers.q11 === "Oui, beaucoup"
        ? "high"
        : answers.q11 === "Oui, parfois"
        ? "medium"
        : "low",

    freeText: answers.q12 ?? "",
  };
}

export function mapProfessionalAnswers(
  answers: Record<string, any>
): UserProfile {
  return {
    situation: "professional",

    currentDomain: answers.q1,

    opennessToChange:
      answers.q3 === "Oui, sans hésiter"
        ? "high"
        : answers.q3 === "Oui, avec réflexion"
        ? "medium"
        : "low",

    skillsToDevelop: Array.isArray(answers.q6) ? answers.q6 : [answers.q6].filter(Boolean),

    teamwork:
      answers.q8 === "Seul"
        ? "solo"
        : answers.q8 === "En équipe"
        ? "team"
        : "mixed",

    workEnvironment: answers.q4,

    techAffinity:
      answers.q10 === "Oui très à l'aise"
        ? "high"
        : answers.q10 === "Oui"
        ? "medium"
        : "low",

    workRhythm:
      answers.q5 === "Stable et régulier"
        ? "stable"
        : answers.q5 === "Intense par période"
        ? "intense"
        : "flexible",

    motivation:
      answers.q7 === "Gagner plus"
        ? "money"
        : answers.q7 === "Stabilité"
        ? "stability"
        : answers.q7 === "Impact sur les autres"
        ? "impact"
        : answers.q7 === "Autonomie / créativité"
        ? "creativity"
        : "passion",

    learningStyle: answers.q9,

    collaboration:
      answers.q11 === "Oui, beaucoup"
        ? "high"
        : answers.q11 === "Oui, parfois"
        ? "medium"
        : "low",

    freeText: answers.q12 ?? "",
  };
}
