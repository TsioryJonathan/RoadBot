import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function GenerateRoadmapButton() {
  return (
    <Link
      href={"/dashboard/roadmap/new"}
      className=" flex items-center justify-center gap-3 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition text-nowrap"
    >
      <PlusCircle />
      Nouvelle Roadmap
    </Link>
  );
}

export default GenerateRoadmapButton;
