import Image from "next/image";
import React from "react";
import assets from "../../../public/images/assets";

function SidebarHeader() {
  return (
    <div className="flex gap-5 items-center">
      <Image
        src={assets.logo}
        width={40}
        height={40}
        alt="Logo RoadBot"
        loading="lazy"
      />
      <h2 className="text-xl font-bold">Roadbot</h2>
    </div>
  );
}

export default SidebarHeader;
