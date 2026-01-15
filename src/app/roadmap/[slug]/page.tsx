"use client";

import React, { useState } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import CustomNode from "@/components/roadmap/CustomNode";
import { roadmaps } from "@/data/roadmaps";
import { useParams } from "next/navigation";
import AboutTheJobSection from "@/components/roadmap/AboutTheJobSection";

const nodeTypes = {
  roadmapNode: CustomNode,
};

export default function RoadmapPage() {
  const params = useParams();
  const roadmap = roadmaps[params.slug as keyof typeof roadmaps];

  const [nodes, setNodes] = useState<Node[]>(roadmap?.nodes ?? []);
  const [edges, setEdges] = useState<Edge[]>(roadmap?.edges ?? []);

  if (!roadmap) {
    return (
      <div className="flex items-center justify-center h-[500px] text-muted-foreground">
        Roadmap introuvable
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 px-6 md:px-16 py-10 text-white pt-20 overflow-x-hidden">
      {/* Section About */}
      <div className="max-w-5xl mx-auto mb-16">
        <AboutTheJobSection about={roadmap.about} />
      </div>

      {/* Titre Roadmap */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        ROADMAP
      </h1>

      {/* Roadmap Graph */}
      <div className="w-full h-[500px] rounded-xl bg-[var(--color-card)] shadow-xl overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.4}
          maxZoom={1.5}
        >
          <Background
            variant={BackgroundVariant.Lines}
            gap={40}
            size={1}
            color="rgba(255,255,255,0.1)"
          />
          <Controls className="roadmap-controls" />
        </ReactFlow>
      </div>

      {/* Footer / Notes */}
      <div className="max-w-3xl mx-auto mt-12 text-center text-gray-400 text-sm">
        <p>
          Explorez chaque étape pour comprendre les compétences et ressources
          nécessaires pour cette carrière.
        </p>
      </div>
    </div>
  );
}
