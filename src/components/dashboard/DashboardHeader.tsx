"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User, Waves } from "lucide-react";

interface DashboardHeaderProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function DashboardHeader({
  name,
  email,
  image,
}: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 left-[20vw] w-[80vw] h-20 z-999 bg-gray-700 border-b border-white/10 px-6 flex items-center justify-between backdrop-blur-sm">
      {/* Texte de bienvenue */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Waves /> Bienvenue{name ? `, ${name}` : ""}
        </h2>
        <p className="text-sm text-white/70">
          Gérez vos roadmaps et explorez des carrières adaptées à votre profil
        </p>
      </div>

      {/* User menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 hover:opacity-80 transition">
            <Avatar className="h-10 w-10">
              <AvatarImage src={image ?? undefined} />
              <AvatarFallback>
                {name?.charAt(0).toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <div className="px-3 py-2">
            <p className="text-sm font-medium">{name ?? "Utilisateur"}</p>
            <p className="text-xs text-muted-foreground truncate">{email}</p>
          </div>

          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profil
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Paramètres
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
