import { cybersecurityNodes, cybersecurityEdges } from "./cybersecurity";
import { fullstackNodes, fullstackEdges } from "./fullstack";

export const roadmaps = {
  "ingenieur-cybersecurite": {
    nodes: cybersecurityNodes,
    edges: cybersecurityEdges,
  },
  "developpeur-fullstack": {
    nodes: fullstackNodes,
    edges: fullstackEdges,
  },
};
