export type UserProfile = {
  age: string | null;
  gender?: string | null;
  situation: "student" | "professional";

  // Étudiant
  student_interests?: string[] |string;
  StudentInterests?: string[] | string ;
  experienceLevel?: "none" | "some" | "experienced";
  problemSolving?: "low" | "medium" | "high";
  learningStyle?: string;
  dataAffinity?: "low" | "medium" | "high";
  // Professionnel
  currentDomain?: string;
  opennessToChange?: "low" | "medium" | "high";
  salary?: string;
  appreciation?: string[];
  skillsToDevelop?: string[];
  workingStyle?: string;
  constraints?: string | null;

  // Commun
  teamwork: "solo" | "team" | "mixed";
  collaboration?: "low" | "medium" | "high";
  workEnvironment?: string;
  workRhythm: "stable" | "intense" | "flexible";
  techAffinity: "low" | "medium" | "high";
  motivation:
    | "passion"
    | "money"
    | "stability"
    | "helping"
    | "creativity"
    | "impact";

  languages: string[];

  freeText?: string;

  // Optionnel, pour étendre la précision
  environmentPreference?: string;
  projectExperience?: string[];
};
