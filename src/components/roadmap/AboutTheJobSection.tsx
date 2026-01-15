"use client";

import { CareerAbout } from "@/data/roadmaps/cybersecurity";
import React from "react";
import { BsInfoCircle, BsBook } from "react-icons/bs";
import { GiChecklist } from "react-icons/gi";

interface Props {
  about: CareerAbout;
}

export default function AboutTheJobSection({ about }: Props) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 shadow-lg w-full max-w-4xl mx-auto space-y-6">
      {/* Titre */}
      <h2 className="text-4xl font-bold text-center text-indigo-400">
        {about.title}
      </h2>

      {/* Description */}
      <div className="flex flex-row gap-3 items-center">
        <BsInfoCircle className="w-6 h-6 text-green-300 mt-1" />
        <p className="text-gray-200">{about.description}</p>
      </div>

      {/* Prérequis */}
      {about.prerequisites.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <GiChecklist className="w-6 h-6 text-green-300" />
            <h3 className="text-lg font-semibold text-green-300">Prérequis</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {about.prerequisites.map((prereq, index) => (
              <span
                key={index}
                className="bg-green-700/40 text-green-200 px-3 py-1 rounded-full text-sm"
              >
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ressources */}
      {about.resources.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BsBook className="w-5 h-5 text-green-300" />
            <h3 className="text-lg font-semibold text-green-300">
              Ressources recommandées
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {about.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
