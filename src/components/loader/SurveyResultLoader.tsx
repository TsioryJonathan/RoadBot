import React from "react";

function SurveyResultLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] mt-25 py-10 space-y-6">
      <div className="w-16 h-16 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>

      <p className="text-lg font-medium text-muted-foreground">
        Calcul des résultats...
      </p>
      <p className="text-lg font-medium text-muted-foreground">
        Veuillez patienter s&apos;il vous plait, l&apos;analyse peut prendre 1 minute.
      </p>

      <div className="flex items-end space-x-1 h-12">
        <div className="w-2 bg-primary animate-bounce delay-0"></div>
        <div className="w-2 bg-primary animate-bounce delay-100"></div>
        <div className="w-2 bg-primary animate-bounce delay-200"></div>
        <div className="w-2 bg-primary animate-bounce delay-300"></div>
        <div className="w-2 bg-primary animate-bounce delay-400"></div>
      </div>
    </div>
  );
}

export default SurveyResultLoader;
