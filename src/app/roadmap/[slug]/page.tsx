"use client";

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  BackgroundVariant,
  Controls,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import CustomNode from "@/components/roadmap/CustomNode";
import { roadmaps } from "@/data/roadmaps";
import { useParams } from "next/navigation";

const nodeTypes = {
  roadmapNode: CustomNode,
};

export default function RoadmapPage() {
  const params = useParams();
  const roadmap = roadmaps[params.slug as keyof typeof roadmaps];
  console.log(roadmap);

  const [nodes, setNodes] = useState<Node[]>(roadmap?.nodes ?? []);
  const [edges, setEdges] = useState<Edge[]>(roadmap?.edges ?? []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  if (!roadmap) {
    return (
      <div className="flex items-center justify-center h-[500px] text-muted-foreground">
        Roadmap introuvable
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-xl bg-[var(--color-background)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        minZoom={0.4}
        maxZoom={1.5}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1}
          color="rgba(255,255,255,0.15)"
        />

        <Controls className="roadmap-controls" />
      </ReactFlow>
    </div>
  );
}
