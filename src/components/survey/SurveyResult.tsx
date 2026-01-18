import { Career } from "@/types/Career";
import React from "react";

export interface SurveyResultType {
  job: Career[];
}
function SurveyResult({ data }: { data: SurveyResultType }) {
  return (
    <div className="bg-background/70 rounded-lg px-6 py-10 min-w-screen">
      Resultat de la survey :
      {data.job.map((career: Career, index: number) => (
        <div key={index} className="mt-6">
          {career.title}
        </div>
      ))}
    </div>
  );
}

export default SurveyResult;
