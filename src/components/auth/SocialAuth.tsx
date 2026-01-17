import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";

function SocialAuth({
  loadingGithub,
  handleLoginWithGithub,
}: {
  loadingGithub: boolean;
  handleLoginWithGithub: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* GitHub */}
      <Button
        onClick={handleLoginWithGithub}
        disabled={loadingGithub}
        variant="outline"
        className="
          w-full flex items-center justify-center gap-2
          border-gray-800 text-gray-900
          hover:bg-gray-900 hover:text-white
          dark:border-gray-700 dark:text-gray-100
        "
      >
        {loadingGithub && <FaSpinner className="animate-spin" />}
        <FaGithub className="text-lg" />
        Connexion avec GitHub
      </Button>

      {/* Google */}
      <Button
        variant="outline"
        className="
          w-full flex items-center justify-center gap-2
          border-blue-500 text-blue-600
          hover:bg-blue-50
          dark:hover:bg-blue-950
        "
      >
        <FaGoogle className="text-lg" />
        <span className="text-lg">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </span>
      </Button>
    </div>
  );
}

export default SocialAuth;
