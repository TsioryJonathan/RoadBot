import { SurveyQuestion } from "@/types/SurveyQuestion.type";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

export default function QuestionStep({
  question,
  answer,
  setAnswer,
  savedAnswers,
}: {
  question: SurveyQuestion;
  answer: string | string[] | null;
  setAnswer: (ans: string | string[] | null) => void;
  savedAnswers: Record<string, string | string[] | null>;
}) {
  useEffect(() => {
    setAnswer(savedAnswers[question.id] || null);
  }, [question.id, savedAnswers, setAnswer]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{question.question}</h2>

      {question.type === "single" && (
        <div
          className={
            question.options!.length! > 3
              ? "grid grid-cols-2 gap-4"
              : "flex flex-col gap-4"
          }
        >
          {question.options!.map((opt) => (
            <Button
              key={opt}
              type="button"
              className={`text-left px-4 py-2 rounded-lg border transition-colors ${
                answer === opt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-background text-white border-gray-400 hover:bg-background/20 font-semibold"
              }`}
              onClick={() => setAnswer(opt)}
            >
              {opt}
            </Button>
          ))}
        </div>
      )}

      {question.type === "multi" && (
        <div
          className={
            question.options!.length! > 3
              ? "grid grid-cols-2 grid-rows-3 gap-4"
              : "flex flex-col gap-4"
          }
        >
          {question.options!.map((opt) => {
            const selected = (answer as string[] | undefined)?.includes(opt);
            return (
              <Button
                key={opt}
                type="button"
                className={`text-left px-4 py-2 rounded-lg border transition-colors ${
                  selected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-background text-white border-gray-400 hover:bg-background/20 font-semibold"
                }`}
                onClick={() => {
                  if (!answer) setAnswer([opt]);
                  else if ((answer as string[]).includes(opt))
                    setAnswer((answer as string[]).filter((o) => o !== opt));
                  else setAnswer([...(answer as string[]), opt]);
                }}
              >
                {opt}
              </Button>
            );
          })}
        </div>
      )}

      {question.type === "text" && (
        <textarea
          value={(answer as string) || ""}
          onChange={(e) => setAnswer(e.target.value)}
          rows={4}
          placeholder="Écris ta réponse ici..."
          className="w-full rounded-lg border p-3 bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
        />
      )}
    </div>
  );
}
