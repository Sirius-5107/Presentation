import type { ReactNode } from "react";
import { TitleNetwork } from "@/components/viz/network-graph";
import { Sub, V } from "@/components/viz/equation";
import { cn } from "@/lib/utils";

export function SlideTitle() {
  return (
    <div className="relative flex h-full flex-col justify-between px-14 py-12">
      <div className="title-ornament pointer-events-none absolute inset-y-8 right-0 w-2/5 opacity-70">
        <TitleNetwork />
      </div>
      <p className="relative text-kicker font-medium uppercase tracking-kicker text-teal">
        IIT (BHU) · Computational study
      </p>
      <div className="relative max-w-3xl">
        <h1 className="font-display text-5xl font-semibold leading-tight tracking-display text-cream">
          Adaptive Risk-Taking and Systemic Risk
        </h1>
        <p className="mt-3 font-display text-2xl italic leading-snug text-cream/75">
          in a Heterogeneous Financial Network
        </p>
        <p className="mt-6 max-w-xl text-lg leading-normal text-muted">
          Private incentives, network losses, and system-aware risk optimization
        </p>
      </div>
      <div className="relative max-w-2xl rounded-lg bg-panel/80 px-5 py-4 shadow-border">
        <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Research question</p>
        <p className="mt-2 font-display text-xl leading-snug text-cream">
          How do the <em>fraction</em> and <em>intensity</em> of risk-taking affect private returns and
          systemic losses in an interconnected financial network?
        </p>
      </div>
      <p className="relative text-sm text-muted">
        Himanshu Sahoo · IIT (BHU)
      </p>
    </div>
  );
}

export function SlideWhy() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <Kicker>Motivation</Kicker>
      <h2 className="mt-2 max-w-4xl font-display text-slide font-semibold tracking-tight text-cream">
        Why this problem?
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-normal text-muted">
        An institution chooses how much risk to take. Its failure can impose losses on others through
        interbank obligations. Private optimality and system optimality need not coincide.
      </p>
      <div className="mt-8 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <TensionCard
          label="Private upside"
          title="More risk can improve private returns"
          body="In the tested range, a higher risky-asset fraction raises terminal equity for the institution that takes the risk."
        />
        <TensionCard
          label="Network downside"
          title="The same choice raises network distress"
          body="Shortfalls propagate along directed obligations. Partial distress can grow even when the system never crosses a collapse threshold."
          sand
        />
      </div>
      <p className="mt-6 rounded-md bg-panel px-4 py-3 text-sm leading-normal text-cream/85 shadow-border">
        The privately optimal decision need not be system-optimal. This is a computational
        investigation, not a reproduction of a published theorem.
      </p>
    </div>
  );
}

export function SlideQuestion() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <Kicker>Design of the study</Kicker>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Research question and hypotheses
      </h2>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <Hypothesis n="H1" title="Intensity">
            Raising the risky-asset fraction <V>q</V>
            <Sub>R</Sub> increases private terminal equity, while unpaid interbank obligations and the
            distressed-bank fraction rise faster than private gains.
          </Hypothesis>
          <Hypothesis n="H2" title="Participation">
            Raising the share <V>x</V> of high-risk institutions increases network losses, with the increase becoming substantially steeper at high participation levels.
          </Hypothesis>
          <Hypothesis n="H3" title="Internalization">
            A system-aware objective <V>J</V> = <V>U</V> − λ<V>L</V> shifts the preferred tested{" "}
            (<V>q</V>
            <Sub>R</Sub>, <V>x</V>) toward lower or interior grid values as λ increases.
          </Hypothesis>
        </div>
        <aside className="flex flex-col justify-between rounded-xl bg-panel p-5 shadow-border">
          <div>
            <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
              Contribution of this computational study
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-normal text-cream/90">
              <li>1. Separates risk intensity from risk participation.</li>
              <li>2. Measures systemic effects continuously, not only as collapse.</li>
              <li>3. Introduces a simple system-aware objective <span className="font-display italic">U</span> − λ<span className="font-display italic">L</span>.</li>
              <li>4. Tracks how preferred risk changes as systemic costs are internalized.</li>
              <li>5. Adds adaptive population dynamics as a behavioural extension.</li>
            </ol>
          </div>
          <p className="mt-5 text-xs leading-normal text-muted">
            This is a computational framework / proof-of-concept, not a claim of a new systemic-risk
            theorem.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return <p className="text-kicker font-medium uppercase tracking-kicker text-teal">{children}</p>;
}

function TensionCard({
  label,
  title,
  body,
  sand,
}: {
  label: string;
  title: string;
  body: string;
  sand?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-xl bg-panel p-6 shadow-border">
      <p className={cn("text-kicker font-medium uppercase tracking-kicker", sand ? "text-sand" : "text-teal")}>
        {label}
      </p>
      <h3 className="mt-3 font-display text-2xl leading-snug text-cream">{title}</h3>
      <p className="mt-3 text-sm leading-normal text-muted">{body}</p>
    </div>
  );
}

function Hypothesis({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg bg-panel px-4 py-3 shadow-border">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
        {n} · {title}
      </p>
      <p className="mt-1.5 text-sm leading-normal text-cream/90">{children}</p>
    </div>
  );
}
