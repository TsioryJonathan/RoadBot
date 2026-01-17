"use client";

import Image from "next/image";
import assets from "../../../public/images/assets";

export default function FormHeader({ text }: { text: string }) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2">
      <Image
        src={assets.logo}
        alt="RoadBot"
        width={60}
        height={60}
        loading="lazy"
      />
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}
