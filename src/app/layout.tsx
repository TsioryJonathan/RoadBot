import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RoadBot",
  description: "Génère ta roadmap personnalisée avec IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
