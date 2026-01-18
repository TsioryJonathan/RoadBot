import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

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
    <html lang="fr">
      <body className={`${raleway.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        <div className="min-w-screen min-h-screen pt-10 ">{children}</div>
      </body>
    </html>
  );
}
