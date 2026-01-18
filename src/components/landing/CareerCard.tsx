// CareerCard.tsx
"use client";

import React from "react";
import Link from "next/link";

export interface ClickableCareer {
  id: number;
  title: string;
  description: string;
  duration: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ComponentType<any>;
  href: string;
}

interface CareerCardProps {
  career: ClickableCareer;
}

export const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const Icon = career.icon;
  return (
    <Link
      href={`/roadmap/${career.href}`}
      className="flex flex-col bg-[var(--color-card)] rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.03] cursor-pointer"
    >
      {Icon && <Icon className="w-14 h-14 mb-4 text-primary" />}
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
        {career.title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mb-3">
        {career.description}
      </p>
      <span className="text-xs text-[var(--color-text-secondary)] mt-auto">
        Durée formation : {career.duration}
      </span>
    </Link>
  );
};
