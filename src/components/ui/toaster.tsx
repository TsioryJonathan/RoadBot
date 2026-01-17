import React, { useState } from "react";
import { HiCheckCircle, HiXCircle, HiExclamationCircle, HiInformationCircle } from "react-icons/hi";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

let toastId = 0;

export function useToaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = "info", duration = 3000) => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return { toasts, addToast };
}

function ToastIcon({ type }: { type: ToastType }) {
  switch (type) {
    case "success":
      return <HiCheckCircle className="w-5 h-5 mr-2" />;
    case "error":
      return <HiXCircle className="w-5 h-5 mr-2" />;
    case "warning":
      return <HiExclamationCircle className="w-5 h-5 mr-2" />;
    case "info":
    default:
      return <HiInformationCircle className="w-5 h-5 mr-2" />;
  }
}

export function Toaster({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center px-4 py-2 rounded shadow-lg text-white animate-slide-down ${
            toast.type === "success"
              ? "bg-green-500"
              : toast.type === "error"
              ? "bg-red-500"
              : toast.type === "warning"
              ? "bg-yellow-500 text-black"
              : "bg-blue-500"
          }`}
        >
          <ToastIcon type={toast.type} />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
