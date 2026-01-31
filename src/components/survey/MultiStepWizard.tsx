import { SurveyQuestion } from "@/types/SurveyQuestion.type";
import React, { useMemo, useEffect } from "react";
import QuestionStep from "./QuestionStep";
import { Button } from "../ui/button";

function MultiStepWizard({
  questionList,
  currentStep,
  setAnswers,
  handleNext,
  handleBack,
  handleSubmit,
  answers,
}: {
  questionList: SurveyQuestion[];
  currentStep: number;
  answers: Record<string, string | string[] | null>;
  setAnswers: React.Dispatch<
    React.SetStateAction<Record<string, string | string[] | null>>
  >;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
}) {
  const currentQuestion = useMemo<SurveyQuestion | null>(() => {
    if (currentStep < 1 || currentStep > questionList.length) return null;
    return questionList[currentStep - 1];
  }, [currentStep, questionList]);

  const [currentAnswer, setCurrentAnswer] = React.useState<
    string | string[] | null
  >(null);

  const saveCurrentAnswer = () => {
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: currentAnswer,
      }));
    }
  };

  const progressPercent = Math.floor((currentStep / questionList.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 p-6 bg-[var(--color-card)] rounded-2xl shadow-lg">
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-2 bg-[var(--color-accent)] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Step info */}
      <div className="text-gray-100 font-semibold text-md">
        Étape {currentStep} sur {questionList.length}
      </div>

      {/* Question card */}
      <div className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-inner">
        {currentQuestion ? (
          <QuestionStep
            question={currentQuestion}
            answer={currentAnswer}
            setAnswer={setCurrentAnswer}
            savedAnswers={answers}
          />
        ) : (
          <div>Aucune question disponible.</div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4 gap-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => {
            saveCurrentAnswer();
            handleBack();
          }}
          disabled={currentStep === 1}
        >
          Précédent
        </Button>

        {currentStep === questionList.length ? (
          <Button
            className="flex-1"
            onClick={() => {
              saveCurrentAnswer();
              handleSubmit();
            }}
          >
            Terminer
          </Button>
        ) : (
          <Button
            className="flex-1"
            onClick={() => {
              if (currentAnswer == null) return;
              saveCurrentAnswer();
              handleNext();
            }}
          >
            Suivant
          </Button>
        )}
      </div>
    </div>
  );
}

export default MultiStepWizard;
