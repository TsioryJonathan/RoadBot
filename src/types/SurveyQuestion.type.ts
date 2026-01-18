export interface SurveyQuestion {
  id: string;
  question: string;
  options?: string[];
  type: "single" | "multi" | "text";
}
