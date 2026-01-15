import React from "react";
import Image from "next/image";
import { Career } from "@/types/Career";

interface CareerCardProps {
  career: Career;
}

export const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  return (
    <div className="flex flex-col bg-[var(--color-card)] rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-800 hover:scale-[1.03] cursor-pointer ease-in-out">
      {career.icon && (
        <div className="w-14 h-14 mb-4">
          <Image
            src={career.icon as string}
            alt={career.title}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      )}

      {/* Titre */}
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
        {career.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mb-3">
        {career.description}
      </p>

      {/* Durée */}
      <span className="text-xs text-[var(--color-text-secondary)] mt-auto">
        Durée formation : {career.duration}
      </span>
    </div>
  );
};
