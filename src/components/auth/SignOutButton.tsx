import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

function SignOutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await signOut();
      if (res.data?.success == true) {
        router.push("/login");
        return;
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <Button
      onClick={handleLogout}
      className="bg-accent/50 hover:bg-accent/90 flex items-center justify-center gap-5"
    >
      <LogOut />
      Logout
    </Button>
  );
}

export default SignOutButton;
