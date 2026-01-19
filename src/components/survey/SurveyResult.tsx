import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export type Career = {
  id: string;
  title: string;
  description: string;
  duration: string;
  prerequisites: string[];
};

export interface SurveyResultType {
  jobs: Career[];
}

function SurveyResult({ data }: { data: Career[] }) {
  return (
    <div className="w-full min-h-screen bg-background/70 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            <Target /> Résultats de ton orientation
          </h1>
          <p className="text-muted-foreground">
            Voici les 3 carrières qui correspondent le mieux à ton profil
          </p>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((career, index) => (
            <div
              key={career.id}
              className="relative flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Ranking badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">{career.title}</h2>

                <p className="text-sm text-muted-foreground line-clamp-4">
                  {career.description}
                </p>

                <div className="text-sm">
                  <span className="font-medium">⏳ Durée estimée :</span>{" "}
                  {career.duration}
                </div>

                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">
                    Prérequis :
                  </span>{" "}
                  {career.prerequisites.join(", ")}
                </div>
              </div>

              {/* CTA */}
              <Link href={`/careers/${career.id}`} className="mt-6">
                <Button className="w-full">Voir la carrière</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurveyResult;
