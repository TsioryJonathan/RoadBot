"use client";
import { useSession } from "@/lib/auth-client";
import React from "react";

function Dashboard() {
  const session = useSession();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {session.data?.user.email}
    </div>
  );
}

export default Dashboard;
