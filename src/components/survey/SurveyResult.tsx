import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, Target } from "lucide-react";
import { useState } from "react";
import JobModal from "../career/JobModal";

export type Career = {
  id: string;
  title: string;
  description: {
    overview: string;
    missions: string[];
    environment: string;
    responsibilities: string[];
    responsabilities: string[];
    skills: string[];
  };
  duration: string;
  prerequisites: string[];
  resources: { href: string; name: string }[];
  salary: string;
};

export interface SurveyResultType {
  jobs: Career[];
}

function SurveyResult({ data }: { data: Career[] }) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);

  const onClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="w-full min-h-screen bg-background/70 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
            <Target /> Résultats de ton orientation
          </h1>
          <p className="text-muted-foreground">
            Voici les 4 carrières qui correspondent le mieux à ton profil
          </p>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((career, index) => (
            <div
              key={career.id}
              className="relative flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition gap-5"
            >
              {/* Ranking badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">{career.title}</h2>

                <p className="text-sm text-muted-foreground line-clamp-4">
                  {career.description.overview}
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

                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">
                    Compétences :
                  </span>{" "}
                  {career.description.skills.join(", ")}
                </div>

                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">
                    Environnement :
                  </span>{" "}
                  {career.description.environment}
                </div>

                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">Salaire :</span>{" "}
                  {career.salary}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-4">
                <Button
                  onClick={() => {
                    setSelectedJob(career);
                    setOpen(true);
                  }}
                  className="min-w-40"
                >
                  Voir plus
                </Button>

                <Button className="min-w-40 flex items-center gap-2">
                  <Link href={`/careers/${career.id}`}>Détails complet</Link>
                  <ArrowBigRight />
                </Button>
              </div>

              {/* Resources */}
              <div className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Ressources :
                </span>{" "}
                {career.resources.map((res, i) => (
                  <Link
                    key={i}
                    href={res.href}
                    target="_blank"
                    className="underline"
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {open && selectedJob && (
          <JobModal job={selectedJob} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

export default SurveyResult;
