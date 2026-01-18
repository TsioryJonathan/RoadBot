import React from "react";
import SidebarHeader from "./SidebarHeader";
import { BsPatchExclamation } from "react-icons/bs";
import { Settings, User, Workflow } from "lucide-react";
import { IconType } from "react-icons";
import SidebarChip from "./SidebarChip";
import SignOutButton from "../auth/SignOutButton";

export interface SideBarChipProps {
  name: string;
  icon: IconType;
  link: string;
}
const navItems: SideBarChipProps[] = [
  {
    name: "Mes Roadmaps",
    icon: BsPatchExclamation,
    link: "/dashboard/roadmap",
  },
  { name: "Carrières", icon: Workflow, link: "/dashboard/careers" },
  { name: "Profile", icon: User, link: "/dashboard/profile" },
  { name: "Paramètres", icon: Settings, link: "/dashboard/settings" },
];

function Sidebar() {
  return (
    <div className="fixed left-0 w-[20vw] h-screen bg-bg-secondary transition-all  overflow-hidden duration-300 ease-in-out p-5 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <SidebarHeader />
        <div className="flex flex-col gap-5">
          {navItems.map((item) => (
            <SidebarChip {...item} key={item.name} />
          ))}
        </div>
      </div>

      <SignOutButton />
    </div>
  );
}

export default Sidebar;
