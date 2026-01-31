"use client";

import React, { useEffect } from "react";
import { Career } from "../survey/SurveyResult";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import Link from "next/link";

function JobModal({ job, onClose }: { job: Career; onClose: () => void }) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-md">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-6 right-6 rounded-full hover:bg-white/10"
      >
        <X className="w-5 h-5" />
      </Button>

      {/* Modal content */}
      <div className="w-full max-w-3xl mx-4 rounded-2xl bg-background shadow-2xl border border-border p-8 space-y-6 animate-in fade-in zoom-in overflow-auto max-h-[97vh] modal-scroll">
        {/* Title & Duration */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
          <p className="text-sm text-muted-foreground">
            Durée estimée : <span className="font-medium">{job.duration}</span>
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Présentation générale</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.description.overview}
          </p>
        </div>

        {/* Missions */}
        {job.description.missions.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Missions principales</h2>
            <ul className="list-disc list-inside space-y-1">
              {job.description.missions.map((mission, i) => (
                <li key={i} className="text-muted-foreground">
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Responsibilities */}
        {job.description.responsibilities
          ? job.description.responsibilities.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Responsabilités</h2>
                <ul className="list-disc list-inside space-y-1">
                  {job.description.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )
          : null}
        {job.description.responsabilities
          ? job.description.responsabilities.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Responsabilités</h2>
                <ul className="list-disc list-inside space-y-1">
                  {job.description.responsabilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )
          : null}

        {/* Skills */}
        {job.description.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Compétences utilisées
            </h2>
            <ul className="flex flex-wrap gap-2">
              {job.description.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Environment */}
        {job.description.environment && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Environnement</h2>
            <p className="text-muted-foreground">
              {job.description.environment}
            </p>
          </div>
        )}

        {/* Prerequisites */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Prérequis</h2>
          {job.prerequisites.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {job.prerequisites.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              Aucun prérequis nécessaire
            </p>
          )}
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Ressources</h2>
          {job.resources.length > 0 && (
            <ul className="list-disc list-inside space-y-1">
              {job.resources.map((res, i) => (
                <li key={i}>
                  <Link
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {res.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Salary */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Salaire moyen</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.salary ? job.salary : "Information non disponible"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="secondary" onClick={onClose}>
            Fermer
          </Button>
          <Button>Commencer ce parcours</Button>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
