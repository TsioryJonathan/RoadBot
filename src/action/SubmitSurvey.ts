import { UserProfile } from "@/types/UserProfile.type";

export const submitSurvey = async (
  data: UserProfile,
  situation: "student" | "professional"
) => {
  try {
    const normalizedData = `Situation actuelle: ${situation}.
     Reponses en format JSON: ${JSON.stringify(data)}`;
    const res = await fetch("/api/survey/submit", {
      method: "POST",
      body: JSON.stringify(normalizedData),
    });
    const dataRes = await res.json();
    const toReturn = JSON.parse(dataRes.data.content);
    console.log("Survey submission response:", toReturn);

    return { data: toReturn };
  } catch (error) {
    console.error("Error submitting survey:", error);
  }
};
