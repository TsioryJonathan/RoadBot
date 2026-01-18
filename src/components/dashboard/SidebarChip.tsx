import React from "react";
import { SideBarChipProps } from "./Sidebar";
import Link from "next/link";

function SidebarChip({ name, icon, link }: SideBarChipProps) {
  const Icon = icon;
  return (
    <Link
      href={link}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
    >
      <Icon size={24} />
      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
}

export default SidebarChip;
