"use client";

import React, { useState } from "react";
import { signInWithGithub, signUp } from "@/lib/auth-client";
import { Toaster, useToaster } from "@/components/ui/toaster";
import FormHeader from "@/components/auth/FormHeader";
import RegisterForm from "@/components/auth/RegisterForm";
import Dot from "@/components/auth/Dot";
import SocialAuth from "@/components/auth/SocialAuth";
import Redirect from "@/components/auth/Redirect";

export default function RegisterPage() {
  const { toasts, addToast } = useToaster();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingEmail(true);

    try {
      const res = await signUp.email({ email, password, name });
      if (res.error) {
        addToast(res.error.message!, "error");
      }
    } catch (error) {
      addToast(error as string, "error");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleLoginWithGithub = async () => {
    setLoadingGithub(true);
    try {
      await signInWithGithub();
    } catch (err) {
      addToast(err as string, "error");
    } finally {
      setLoadingGithub(false);
    }
  };

  return (
    <div
      className="h-[93vh] flex flex-col items-center  bg-gray-600/10
     px-20 py-5 backdrop-blur-sm min-w-2xl rounded-xl "
    >
      <FormHeader text="Rejoint RoadBot pour génere des Roadmap personalisé" />
      <div className="rounded-2xl px-8 w-full max-w-md space-y-5">
        <RegisterForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
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
        <Redirect currentState="signingUp" />
      </div>
      <Dot />
      <Toaster toasts={toasts} />
    </div>
  );
}
