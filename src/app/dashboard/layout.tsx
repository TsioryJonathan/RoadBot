"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [isPending, session, router]);
  console.log(session?.user);

  if (isPending)
    return <p className="text-center mt-8 text-white">Loading...</p>;
  if (!session?.user)
    return <p className="text-center mt-8 text-white">Redirecting...</p>;

  return (
    <div className="min-w-screen min-h-screen bg-background">
      <DashboardHeader
        name={session.user.username || session.user.name}
        image={session.user.image || "https://avatar.iran.liara.run/public"}
      />
      <Sidebar />
      <main className="pl-20 pt-20"> {children}</main>
    </div>
  );
}

export default DashboardLayout;
