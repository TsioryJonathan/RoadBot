export const submitSurvey = async (
  data: Record<string, string | string[] | null>,
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
    const normalizedResponse = dataRes.data
      .replaceAll("json", "")
      .replaceAll("```", "")
      .trim();

    console.log(normalizedResponse);

    return normalizedResponse;
  } catch (error) {
    console.error("Error submitting survey:", error);
  }
};
