import React from "react";

function SectionWrapper({
  bgColor,
  title,
  description,
  id,
  children,
}: {
  bgColor?: string;
  title: string;
  description: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`w-full h-full flex flex-col items-center justify-center px-14 py-8 ${
        bgColor ? bgColor : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-center text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
