import { Handle, Position } from "@xyflow/react";
import Image, { StaticImageData } from "next/image";

interface CustomNodeProps {
  data: {
    title: string;
    description: string;
    duration?: string;
    icon?: StaticImageData;
  };
}

export default function CustomNode({ data }: CustomNodeProps) {
  return (
    <div className="bg-[var(--color-card)] p-4 rounded-lg w-60 shadow-sm">
      {data.icon && (
        <Image
          src={data.icon}
          alt={data.title}
          width={40}
          height={40}
          className="mb-2"
        />
      )}

      <h3 className="font-semibold text-foreground">{data.title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
        {data.description}
      </p>

      {data.duration && (
        <p className="text-xs text-[var(--color-text-secondary)] mt-2">
          ⏱ {data.duration}
        </p>
      )}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
