"use client";

import React, { useState } from "react";
import { signIn, signInWithGithub } from "@/lib/auth-client";
import { Toaster, useToaster } from "@/components/ui/toaster";
import Dot from "@/components/auth/Dot";
import FormHeader from "@/components/auth/FormHeader";
import LoginForm from "@/components/auth/LoginForm";
import SocialAuth from "@/components/auth/SocialAuth";
import Redirect from "@/components/auth/Redirect";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { toasts, addToast } = useToaster();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingEmail(true);
    setError("");

    try {
      const res = await signIn.email({ email, password });

      if (res.error) {
        setError("Identifiants invalides");
        addToast(res.error.message!, "error");
        return;
      }
      router.push("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Identifiants invalides");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleLoginWithGithub = async () => {
    setLoadingGithub(true);
    try {
      const res = await signInWithGithub();
      if (res.error) {
        setError("Erreur GitHub");
        addToast(error, "error");
      }
      router.push("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Erreur GitHub");
      addToast(error, "error");
    } finally {
      setLoadingGithub(false);
    }
  };

  return (
    <div
      className="h-[93vh] flex flex-col items-center justify-between bg-gray-600/10
     px-20 py-5 backdrop-blur-sm min-w-2xl rounded-xl"
    >
      <FormHeader text="Connectez-vous à votre compte" />

      {/* Formulaire */}
      <div className="rounded-2xl px-8 w-full max-w-md space-y-5">
        <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          loadingEmail={loadingEmail}
        />

        <SocialAuth
          handleLoginWithGithub={handleLoginWithGithub}
          loadingGithub={loadingGithub}
        />

        <Redirect currentState="loggingIn" />
      </div>
      <Dot />
      <Toaster toasts={toasts} />
    </div>
  );
}
