// roadmaps/index.ts
import {
  cybersecurityNodes,
  cybersecurityEdges,
  cybersecurityAbout,
} from "./cybersecurity";

import {
  fullstackNodes,
  fullstackEdges,
  fullstackAbout,
} from "./fullstack";

import {
  uxuiNodes,
  uxuiEdges,
  uxuiAbout,
} from "./designerUXUI";

import {
  marketingNodes,
  marketingEdges,
  marketingAbout,
} from "./marketing";

import {
  medecinNodes,
  medecinEdges,
  medecinAbout,
} from "./medecin";

import {
  chefCuisineNodes,
  chefCuisineEdges,
  chefCuisineAbout,
} from "./chefCuisine";

export const roadmaps = {
  "ingenieur-cybersecurite": {
    about: cybersecurityAbout,
    nodes: cybersecurityNodes,
    edges: cybersecurityEdges,
  },
  "developpeur-fullstack": {
    about: fullstackAbout,
    nodes: fullstackNodes,
    edges: fullstackEdges,
  },
  "designer-ux-ui": {
    about: uxuiAbout,
    nodes: uxuiNodes,
    edges: uxuiEdges,
  },
  "chef-de-projet-marketing": {
    about: marketingAbout,
    nodes: marketingNodes,
    edges: marketingEdges,
  },
  "medecin-generaliste": {
    about: medecinAbout,
    nodes: medecinNodes,
    edges: medecinEdges,
  },
  "chef-de-cuisine": {
    about: chefCuisineAbout,
    nodes: chefCuisineNodes,
    edges: chefCuisineEdges,
  },
};
