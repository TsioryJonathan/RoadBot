import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  plugins: [usernameClient()],
});

export const signInWithGithub = async () => {
  const data = await signIn.social({
    provider: "github",
  });
  return data;
};
