"use client";
import { submitSurvey } from "@/action/SubmitSurvey";
import MultiStepWizard from "@/components/survey/MultiStepWizard";
import SurveyResult, {
  SurveyResultType,
} from "@/components/survey/SurveyResult";
import { Button } from "@/components/ui/button";
import { Toaster, useToaster } from "@/components/ui/toaster";
import { questionList } from "@/data/surveyQuestion/questionList";
import { SurveyQuestion } from "@/types/SurveyQuestion.type";
import {
  mapProfessionalAnswers,
  mapStudentAnswers,
} from "@/util/mapUserProfileAnswer";
import React, { useMemo, useState } from "react";

function TakeSurvey() {
  const [userSituation, setUserSituation] = useState<
    null | "student" | "professional"
  >(null);

  const { toasts, addToast } = useToaster();

  const [data, setData] = useState(null);

  /* Questions based on user situation */
  const question = useMemo<SurveyQuestion[] | null>(() => {
    if (!userSituation) return [];
    return questionList[userSituation];
  }, [userSituation]);

  const [answers, setAnswers] = useState<
    Record<string, string | string[] | null>
  >({});
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [surveyDone, setSurveyDone] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentStep(Math.min(currentStep + 1, question!.length));
  };
  const handleBack = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };
  const handlePassToSurvey = () => {
    setCurrentStep(1);
  };
  const handleSubmit = async () => {
    addToast(
      "Merci d'avoir complété le sondage ! Veuillez patienter pour les résultats",
      "success"
    );
    setSurveyDone(true);
    const optimizedAnswers =
      userSituation == "student"
        ? mapStudentAnswers(answers)
        : mapProfessionalAnswers(answers);
    const res = await submitSurvey(optimizedAnswers, userSituation!);    
    setData(res?.data.jobs);
  };

  return (
    <div className="px-10">
      <Toaster toasts={toasts} />
      {surveyDone && data ? (
        <SurveyResult data={data} />
      ) : (
        <div className="flex flex-col items-center p-6 overflow-y-hidden mt-5">
          {currentStep === 0 && (
            <div className="w-full max-w-lg bg-[var(--color-card)] p-8 rounded-2xl shadow-lg text-center mt-10">
              <h2 className="text-2xl font-bold mb-6">
                Sélectionnez votre situation actuelle
              </h2>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                {/* Étudiant */}
                <label
                  className={`cursor-pointer flex-1 border-2 rounded-xl p-6 transition-transform hover:scale-105 ${
                    userSituation === "student"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="situation"
                    value="student"
                    className="hidden"
                    checked={userSituation === "student"}
                    onChange={() => setUserSituation("student")}
                  />
                  <h3 className="text-xl font-semibold mb-2">Étudiant</h3>
                  <p className="text-gray-100">
                    Vous êtes actuellement au lycée ou à l’université.
                  </p>
                </label>

                {/* Professionnel */}
                <label
                  className={`cursor-pointer flex-1 border-2 rounded-xl p-6 transition-transform hover:scale-105 ${
                    userSituation === "professional"
                      ? "border-green-500 bg-green-500"
                      : "border-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="situation"
                    value="professional"
                    className="hidden"
                    checked={userSituation === "professional"}
                    onChange={() => setUserSituation("professional")}
                  />
                  <h3 className="text-xl font-semibold mb-2">Professionnel</h3>
                  <p className="text-gray-100">
                    Vous travaillez déjà et cherchez à évoluer ou changer de
                    carrière.
                  </p>
                </label>
              </div>

              <Button
                className="mt-8 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-50"
                onClick={handlePassToSurvey}
                disabled={!userSituation}
              >
                Commencer le sondage
              </Button>
            </div>
          )}

          {userSituation && currentStep !== 0 && question && (
            <MultiStepWizard
              questionList={question}
              currentStep={currentStep}
              answers={answers}
              setAnswers={setAnswers}
              handleNext={handleNext}
              handleBack={handleBack}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TakeSurvey;
