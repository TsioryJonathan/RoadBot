"use client";

import { Handle, Position } from "@xyflow/react";
import { Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
interface Resource {
  name: string;
  link: string;
}

interface CustomNodeProps {
  data: {
    title: string;
    description: string;
    duration?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: React.ComponentType<any> | StaticImageData;
    resources?: Resource[];
  };
}

export default function CustomNode({ data }: CustomNodeProps) {
  const [showResources, setShowResources] = useState(false);

  const IconComponent =
    data.icon && typeof data.icon === "function" ? data.icon : null;
  const isStaticImage =
    data.icon && typeof data.icon !== "function" ? data.icon : null;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-xl w-64 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      {/* Icône */}
      {IconComponent && (
        <div className="flex justify-center mb-3">
          <IconComponent className="w-12 h-12 text-indigo-400" />
        </div>
      )}
      {isStaticImage && (
        <div className="flex justify-center mb-3">
          <Image src={isStaticImage} alt={data.title} className="w-12 h-12" />
        </div>
      )}

      {/* Titre */}
      <h3 className="font-bold text-xl text-center">{data.title}</h3>

      {/* Description */}
      <p className="text-md text-gray-300 font-semibold mt-1 text-center line-clamp-3">
        {data.description}
      </p>

      {/* Durée */}
      {data.duration && (
        <p className="text-sm text-gray-400 mt-2 text-center flex flex-row items-center gap-2">
          <Clock /> {data.duration}
        </p>
      )}

      {/* Ressources collapsibles */}
      {data.resources && data.resources.length > 0 && (
        <div className="mt-2">
          <button
            onClick={() => setShowResources(!showResources)}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 w-full text-left"
          >
            {showResources
              ? "Masquer les ressources ▲"
              : "Voir les ressources ▼"}
          </button>

          {showResources && (
            <ul className="text-xs text-gray-300 list-disc list-inside mt-1 space-y-1">
              {data.resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-indigo-300"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Handles */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
