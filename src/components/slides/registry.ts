import type { ComponentType } from "react";
import { SlideClose, SlideDynamics, SlideOptima } from "@/components/slides/close";
import {
  SlideClearing,
  SlideMeasure,
  SlideNetwork,
  SlideRisk,
  SlideValidation,
} from "@/components/slides/model";
import { SlideQuestion, SlideTitle, SlideWhy } from "@/components/slides/opening";
import { SlideExp1, SlideExp1Learn, SlideExp2, SlideTradeoff } from "@/components/slides/results";

export type SlideDef = {
  id: string;
  n: number;
  kicker: string;
  title: string;
  notes: string;
  Component: ComponentType;
};

export const SLIDES: SlideDef[] = [
  {
    id: "title",
    n: 1,
    kicker: "Title",
    title: "Adaptive Risk-Taking and Systemic Risk",
    notes: "Open with the research question. Stress fraction vs intensity as two separate instruments. Name, IIT (BHU).",
    Component: SlideTitle,
  },
  {
    id: "why",
    n: 2,
    kicker: "Motivation",
    title: "Why this problem?",
    notes: "Core tension: private upside vs network downside. This is computational, not a theorem reproduction.",
    Component: SlideWhy,
  },
  {
    id: "question",
    n: 3,
    kicker: "Design",
    title: "Research question and hypotheses",
    notes: "State H1–H3. End on the contribution list and the ‘not a new theorem’ line — that reads as maturity, not weakness.",
    Component: SlideQuestion,
  },
  {
    id: "network",
    n: 4,
    kicker: "Model",
    title: "A heterogeneous financial network",
    notes: "Walk the balance sheet. Homophily vs cross-group links. Directed edge = obligation, not friendship.",
    Component: SlideNetwork,
  },
  {
    id: "risk",
    n: 5,
    kicker: "Instruments",
    title: "Risk-taking: intensity versus participation",
    notes: "This is the modelling choice Saha should see: two knobs, not one. qR is intensity; x is participation.",
    Component: SlideRisk,
  },
  {
    id: "clearing",
    n: 6,
    kicker: "Mechanism",
    title: "Risk → shock → clearing → contagion",
    notes: "Spend time on ri. Shortfall is a loss to creditors. Do not overclaim Eisenberg–Noe.",
    Component: SlideClearing,
  },
  {
    id: "measure",
    n: 7,
    kicker: "Measurement",
    title: "How do we measure systemic risk?",
    notes: "Binary stayed at 0%. That is why continuous measures are preferred. τ = 0.30 is experiment-specific.",
    Component: SlideMeasure,
  },
  {
    id: "validation",
    n: 8,
    kicker: "Validation",
    title: "Model validation and sanity checks",
    notes: "The point of this slide: the simulator was interrogated before the grids were trusted. Implementation, economic sanity, statistical design.",
    Component: SlideValidation,
  },
  {
    id: "exp1",
    n: 9,
    kicker: "Experiment 1",
    title: "Risk intensity",
    notes: "Show the curve. Read the three endpoints. Do not interpret yet — that is the next slide.",
    Component: SlideExp1,
  },
  {
    id: "exp1learn",
    n: 10,
    kicker: "Experiment 1",
    title: "What Experiment 1 tells us",
    notes: "Private +2.5% equity vs +228% unpaid. Collapse metric silent. Divergence is the result.",
    Component: SlideExp1Learn,
  },
  {
    id: "exp2",
    n: 11,
    kicker: "Experiment 2",
    title: "Risk participation",
    notes: "Note the unpaid minimum near x = 0.20, then the surge to 0.2259. CRN across x.",
    Component: SlideExp2,
  },
  {
    id: "tradeoff",
    n: 12,
    kicker: "Experiment 2",
    title: "The key trade-off",
    notes: "Widespread ≠ scaled-up isolated. 3.3× unpaid vs ~2% equity. Mixing minimum is an observation, not a theorem.",
    Component: SlideTradeoff,
  },
  {
    id: "optima",
    n: 13,
    kicker: "Optimization",
    title: "System-aware optimization",
    notes: "Click λ. Private corner at λ = 0; interior from λ = 0.20. Discrete-grid caveat.",
    Component: SlideOptima,
  },
  {
    id: "dynamics",
    n: 14,
    kicker: "Dynamics",
    title: "Adaptive dynamics",
    notes: "Replicator analogue. x moves 0.50 → 0.5064 in 20 steps: private advantage exists, population update is slow.",
    Component: SlideDynamics,
  },
  {
    id: "close",
    n: 15,
    kicker: "Close",
    title: "Conclusions, limitations, and next steps",
    notes: "Three claims only. Limitations honestly. Freeze the computational model; next is robustness and theory.",
    Component: SlideClose,
  },
];
