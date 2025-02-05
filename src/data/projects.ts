export interface Project {
  name: string;
  scope: string;
  stage: string;
  sector: string;
  client: string;
}

export const projects: Project[] = [
  {
    name: "The Carbuncle",
    scope: "Refurb",
    stage: "Feasibility",
    sector: "Office",
    client: "Stanhope"
  },
  {
    name: "123 Moorgate",
    scope: "Fit Out",
    stage: "Stage 2",
    sector: "Office",
    client: "Derwent"
  },
  {
    name: "The Burgerbun",
    scope: "New Build",
    stage: "Stage 3",
    sector: "Mixed User",
    client: "Landsec"
  },
  {
    name: "Victoria Square",
    scope: "New Build",
    stage: "Stage 4",
    sector: "Residential",
    client: "Berkeley"
  },
  {
    name: "Canary Wharf Tower",
    scope: "Refurb",
    stage: "Stage 1",
    sector: "Office",
    client: "CWG"
  },
  {
    name: "Kings Cross Station",
    scope: "Renovation",
    stage: "Stage 2",
    sector: "Transport",
    client: "Network Rail"
  },
  {
    name: "Battersea Power",
    scope: "Conservation",
    stage: "Stage 5",
    sector: "Mixed Use",
    client: "BPS Development"
  },
  {
    name: "Olympic Village",
    scope: "New Build",
    stage: "Stage 3",
    sector: "Residential",
    client: "ODA"
  },
  {
    name: "Shard Place",
    scope: "New Build",
    stage: "Stage 4",
    sector: "Office",
    client: "Sellar"
  },
  {
    name: "Crossrail Liverpool",
    scope: "Infrastructure",
    stage: "Stage 2",
    sector: "Transport",
    client: "TfL"
  }
];