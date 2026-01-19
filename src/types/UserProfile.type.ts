export type UserProfile = {
  situation: "student" | "professional";

  interests?: string[];
  currentDomain?: string;

  opennessToChange?: "low" | "medium" | "high";

  skillsToDevelop?: string[];

  problemSolving?: "low" | "medium" | "high";
  teamwork: "solo" | "team" | "mixed";

  workEnvironment?: string;
  techAffinity: "low" | "medium" | "high";

  workRhythm: "stable" | "intense" | "flexible";

  motivation:
    | "passion"
    | "money"
    | "stability"
    | "helping"
    | "creativity"
    | "impact";

  learningStyle?: string;
  dataAffinity?: "low" | "medium" | "high";

  collaboration: "low" | "medium" | "high";

  experienceLevel?: "none" | "some" | "experienced";

  freeText?: string;
};
