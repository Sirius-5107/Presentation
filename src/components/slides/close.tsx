import { useState, type ReactNode } from "react";
import { ReplicatorChart } from "@/components/viz/charts";
import { EqBlock, Sub, V } from "@/components/viz/equation";
import {
  bestQrByLambda,
  bestXByLambda,
  lambdaGrid,
  type Lambda,
} from "@/lib/experiment-data";
import { cn } from "@/lib/utils";

export function SlideOptima() {
  const [lam, setLam] = useState<Lambda>(0.2);

  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
        System-aware optimization
      </p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Internalizing network losses changes the preferred choice
      </h2>
      <EqBlock className="mt-4 w-fit">
        <V>J</V> = <V>U</V> − λ<V>L</V>
        <span className="ml-4 font-sans text-sm text-muted">
          U = relevant terminal-equity payoff · L = mean unpaid obligations
        </span>
      </EqBlock>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-3 gap-4">
        <OptTable
          caption="Best tested qR"
          valueFor={(l) => bestQrByLambda[l].toFixed(2)}
          active={lam}
          highlight={bestQrByLambda[lam].toFixed(2)}
        />
        <OptTable
          caption="Best tested x"
          valueFor={(l) => bestXByLambda[l].toFixed(2)}
          active={lam}
          highlight={bestXByLambda[lam].toFixed(2)}
        />
        <div className="flex flex-col rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
            Weight on systemic damage
          </p>
          <p className="mt-3 font-display text-4xl tabular-nums text-cream">λ = {lam.toFixed(2)}</p>
          <p className="mt-1 text-sm text-muted">
            qR* = {bestQrByLambda[lam].toFixed(2)} · x* = {bestXByLambda[lam].toFixed(2)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {lambdaGrid.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLam(l)}
                className={cn(
                  "pressable h-11 min-w-11 rounded-md px-3 text-sm tabular-nums",
                  lam === l ? "bg-cream text-ink" : "bg-ink-2 text-cream/80 hover:bg-panel-2",
                )}
              >
                {l.toFixed(2)}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs leading-normal text-muted">
            Discrete-grid optima, not continuous analytical optima or equilibrium proofs. Private
            only (λ = 0) sits at the high-risk corner; λ ≥ 0.20 pulls both instruments inward.
          </p>
        </div>
      </div>
    </div>
  );
}

function OptTable({
  caption,
  valueFor,
  active,
  highlight,
}: {
  caption: string;
  valueFor: (l: Lambda) => string;
  active: Lambda;
  highlight: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-panel shadow-border">
      <p className="px-4 pt-4 text-kicker font-medium uppercase tracking-kicker text-teal">{caption}</p>
      <table className="mt-3 w-full text-sm">
        <thead>
          <tr className="text-left text-muted">
            <th className="px-4 py-2 font-medium">λ</th>
            <th className="px-4 py-2 font-medium">{caption.includes("qR") ? "qR*" : "x*"}</th>
          </tr>
        </thead>
        <tbody>
          {lambdaGrid.map((l) => {
            const v = valueFor(l);
            const on = l === active;
            return (
              <tr key={l} className={on ? "bg-teal/15" : undefined}>
                <td className="px-4 py-2 tabular-nums text-cream/85">{l.toFixed(2)}</td>
                <td
                  className={cn(
                    "px-4 py-2 font-display text-lg tabular-nums",
                    v === highlight && on ? "text-cream" : "text-cream/80",
                  )}
                >
                  {v}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function SlideDynamics() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Adaptive dynamics</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        What happens when institutions respond to payoffs?
      </h2>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <EqBlock>
            <V>x</V>
            <Sub>t+1</Sub> = <V>x</V>
            <Sub>t</Sub> + η <V>x</V>
            <Sub>t</Sub>(1 − <V>x</V>
            <Sub>t</Sub>)(π<sub>R</sub> − π<sub>L</sub>)
          </EqBlock>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Meta k="x0" v="0.50" />
            <Meta k="η" v="0.10" />
            <Meta k="qL, qR" v="0.20, 0.80" />
            <Meta k="Steps × reps" v="20 × 100" />
          </div>
          <p className="text-sm leading-normal text-muted">
            Illustrative population-dynamics extension using the measured payoff differential; not a behavioural calibration or convergence proof. The risky strategy had a small private payoff advantage; the population update is slow.
          </p>
        </div>
        <div className="flex min-h-0 flex-col rounded-xl bg-panel p-4 shadow-border">
          <p className="text-xs text-muted">Participation path · final x ≈ 0.5064</p>
          <ReplicatorChart className="mt-2 flex-1" />
        </div>
      </div>
      <ul className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <li className="rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border">
          Private return rises with risk in the tested range
        </li>
        <li className="rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border">
          Network losses rise faster once risk is widespread or intense
        </li>
        <li className="rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border">
          System-aware objective produces lower / interior tested choices
        </li>
      </ul>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md bg-panel px-3 py-2 shadow-border">
      <p className="text-2xs uppercase tracking-kicker text-muted">{k}</p>
      <p className="font-display text-lg tabular-nums text-cream">{v}</p>
    </div>
  );
}

export function SlideClose() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Close</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Conclusions, limitations, and next steps
      </h2>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-3 gap-4">
        <Col title="What this establishes">
          <li>Private incentives and systemic stability can diverge in this network.</li>
          <li>Continuous distress measures reveal effects hidden by binary collapse.</li>
          <li>Internalizing network losses changes preferred intensity and participation.</li>
        </Col>
        <Col title="Limitations" muted>
          <li>Simulated networks and simplified balance sheets</li>
          <li>Two-state risky return distribution</li>
          <li>Simplified behavioural update rule</li>
          <li>Finite network size effects</li>
          <li>Experiment-specific systemic-loss objective</li>
          <li>Broad robustness study not yet completed</li>
        </Col>
        <Col title="Next">
          <li>Robustness across seeds, N, shock severity, and scales</li>
          <li>Alternative definitions of systemic loss</li>
          <li>Only later: ML / data-driven extensions</li>
        </Col>
      </div>
      <p className="mt-5 font-display text-lg italic leading-snug text-cream/85">
        Monte Carlo uncertainty is conditional on the model; it does not validate the model. The
        computational model is frozen; the next step is validation and deeper theoretical analysis.
      </p>
    </div>
  );
}

function Col({
  title,
  children,
  muted,
}: {
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="rounded-xl bg-panel p-5 shadow-border">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">{title}</p>
      <ul className={`mt-3 space-y-2 text-sm leading-normal ${muted ? "text-muted" : "text-cream/90"}`}>
        {children}
      </ul>
    </div>
  );
}
