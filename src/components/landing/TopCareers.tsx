import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Career } from "@/types/Career";
import { CometCard } from "../ui/comet-card";
import Image from "next/image";
import { CareerCard } from "./CareerCard";

function TopCareers({ trendingCareers }: { trendingCareers: Career[] }) {
  return (
    <SectionWrapper
      id="top-careers"
      title="Top Careers"
      description="Explore the most sought-after career paths today."
      bgColor="bg-[var(--color-card)]/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-5">
        {trendingCareers.map((career,i) => (
          <CareerCard career={career} key={i}/>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default TopCareers;
