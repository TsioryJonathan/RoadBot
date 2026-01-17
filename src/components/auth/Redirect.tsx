import Link from "next/link";
import React from "react";

function Redirect({
  currentState,
}: {
  currentState: "signingUp" | "loggingIn";
}) {
  switch (currentState) {
    case "loggingIn":
      return (
        <p className="text-center text-gray-400 text-sm">
          Pas encore de compte ?{" "}
          <Link
            href="/register"
            className="text-[var(--color-accent)] hover:underline"
          >
            Crée-en un
          </Link>
        </p>
      );
    case "signingUp":
      return (
        <p className="text-center text-gray-400 text-sm">
          Vous avez déjà un compte ?{" "}
          <Link
            href="/login"
            className="text-[var(--color-accent)] hover:underline"
          >
            Connectez-vous
          </Link>
        </p>
      );
  }
}

export default Redirect;
