import React from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function RegisterForm({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  loadingEmail,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  loadingEmail: boolean;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 ">
        <Input
          type="text"
          placeholder="Nom Complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-neutral-900 text-white w-full outline-none"
          required
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-neutral-900 text-white w-full outline-none"
          required
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-neutral-900 text-white pr-10 w-full outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loadingEmail}
        className="w-full flex items-center justify-center gap-2"
      >
        {loadingEmail && <FaSpinner className="animate-spin" />}
        Connexion
      </Button>
    </form>
  );
}

export default RegisterForm;
