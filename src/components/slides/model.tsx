import { Check, Sigma, ShieldCheck } from "lucide-react";
import { EqBlock, Sub, V } from "@/components/viz/equation";
import { NetworkGraph } from "@/components/viz/network-graph";

export function SlideNetwork() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Model</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        A heterogeneous financial network
      </h2>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <Fact title="Nodes and edges">
            <V>N</V> institutions. A directed edge <V>i → j</V> means <V>i</V> owes <V>j</V> an
            interbank amount <V>E</V>
            <Sub>ij</Sub>.
          </Fact>
          <Fact title="Balance sheet">
            External assets <V>A</V>
            <Sub>i</Sub>, external liabilities <V>X</V>
            <Sub>i</Sub>, interbank obligations <V>B</V>
            <Sub>i</Sub> = Σ<sub>j</sub> <V>E</V>
            <Sub>ij</Sub>, strategy <V>s</V>
            <Sub>i</Sub> ∈ {"{L, R}"}.
          </Fact>
          <Fact title="Heterogeneity">
            Connection probabilities <V>p</V>
            <Sub>LL</Sub>, <V>p</V>
            <Sub>RR</Sub>, <V>p</V>
            <Sub>LR</Sub>, <V>p</V>
            <Sub>RL</Sub>. Baseline: <V>p</V>
            <Sub>LL</Sub> = <V>p</V>
            <Sub>RR</Sub> = <V>p</V>
            <Sub>w</Sub> and <V>p</V>
            <Sub>LR</Sub> = <V>p</V>
            <Sub>RL</Sub> = <V>p</V>
            <Sub>c</Sub>.
          </Fact>
        </div>
        <div className="min-h-0 rounded-xl bg-panel/60 p-3 shadow-border">
          <NetworkGraph />
        </div>
      </div>
    </div>
  );
}

export function SlideRisk() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Instruments</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Risk-taking: intensity versus participation
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-normal text-muted">
        The study does not treat “more risk” as a single knob. It separates how aggressively the
        risky strategy is run from how many institutions run it.
      </p>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Intensity</p>
          <h3 className="mt-2 font-display text-2xl text-cream">
            <V>q</V>
            <Sub>L</Sub> vs <V>q</V>
            <Sub>R</Sub>
          </h3>
          <p className="mt-3 text-sm leading-normal text-muted">
            Each institution holds a risky-asset fraction <V>q</V>
            <Sub>i</Sub>. Conservative banks use <V>q</V>
            <Sub>L</Sub> = 0.20. Risky banks use <V>q</V>
            <Sub>R</Sub> ≥ <V>q</V>
            <Sub>L</Sub>, swept from 0.20 to 0.80 in Experiment 1.
          </p>
          <EqBlock className="mt-4 text-sm">
            <V>A</V>
            <Sub>i</Sub>′ = <V>A</V>
            <Sub>i</Sub>
            [(1 − <V>q</V>
            <Sub>i</Sub>) + <V>q</V>
            <Sub>i</Sub>
            <V>R</V>
            <Sub>i</Sub>]
          </EqBlock>
          <p className="mt-3 text-xs leading-normal text-muted">
            <V>R</V>
            <Sub>i</Sub> is a two-state risky return. Post-shock external assets feed the clearing map.
          </p>
        </div>
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-sand">Participation</p>
          <h3 className="mt-2 font-display text-2xl text-cream">
            <V>x</V> = share on the risky strategy
          </h3>
          <p className="mt-3 text-sm leading-normal text-muted">
            Experiment 2 holds <V>q</V>
            <Sub>L</Sub> = 0.20 and <V>q</V>
            <Sub>R</Sub> = 0.80 fixed, and varies the fraction of institutions using R from 0.05 to
            0.95.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-normal text-cream/90">
            <li>Two strategies, not a continuous <V>q</V> for every bank.</li>
            <li>That restriction is deliberate: it isolates the two instruments.</li>
            <li>Common random numbers are reused across <V>x</V> so composition is comparable.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SlideClearing() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Mechanism</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Risk → shock → clearing → contagion
      </h2>
      <ol className="mt-5 grid grid-cols-4 gap-3">
        {[
          ["1", "Risk choice", "si ∈ {L, R} sets qi"],
          ["2", "External shock", "Risky return Ri hits A′i"],
          ["3", "Payment clearing", "Recovery ri from available funds"],
          ["4", "Contagion", "Shortfall is a loss to creditors"],
        ].map(([n, t, d]) => (
          <li key={n} className="rounded-lg bg-panel px-4 py-3 shadow-border">
            <p className="font-mono text-xs text-teal">{n}</p>
            <p className="mt-1 font-display text-lg text-cream">{t}</p>
            <p className="mt-1 text-xs leading-normal text-muted">{d}</p>
          </li>
        ))}
      </ol>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-4">
        <div className="space-y-3">
          <EqBlock>
            <V>I</V>
            <Sub>i</Sub> = Σ<sub>j</sub> <V>r</V>
            <Sub>j</Sub>
            <V>E</V>
            <Sub>ji</Sub>
            <span className="ml-3 text-sm text-muted">interbank inflows</span>
          </EqBlock>
          <EqBlock>
            <V>F</V>
            <Sub>i</Sub> = <V>A</V>
            <Sub>i</Sub>′ + <V>I</V>
            <Sub>i</Sub>
            <span className="ml-3 text-sm text-muted">funds available</span>
          </EqBlock>
          <EqBlock>
            <V>r</V>
            <Sub>i</Sub> = min(1, max(0, (<V>F</V>
            <Sub>i</Sub> − <V>X</V>
            <Sub>i</Sub>) / <V>B</V>
            <Sub>i</Sub>))
          </EqBlock>
        </div>
        <div className="rounded-xl bg-panel p-5 text-sm leading-normal text-muted shadow-border">
          <p className="font-display text-xl text-cream">Clearing</p>
          <p className="mt-3">
            The recovery rate <V>r</V>
            <Sub>i</Sub> is the fraction of interbank obligations paid by <V>i</V>. When{" "}
            <V>r</V>
            <Sub>i</Sub>
            {" < 1"}, the unpaid remainder is a loss to creditor institutions and re-enters
            their <V>I</V>.
          </p>
          <p className="mt-3">
            Distress therefore travels along the directed obligation graph. This is a map-based
            recovery-rate clearing on a finite network — useful for Monte Carlo, not an
            Eisenberg–Noe existence proof.
          </p>
        </div>
      </div>
    </div>
  );
}

export function SlideMeasure() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Measurement</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        How do we measure systemic risk?
      </h2>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-sand">Binary</p>
          <p className="mt-2 font-display text-2xl text-cream">
            <V>D</V> = defaults / <V>N</V>
          </p>
          <p className="mt-3 text-sm leading-normal text-muted">
            A systemic event is declared if <V>D</V> ≥ 0.30. τ = 0.30 is experiment-specific, not a
            universal threshold.
          </p>
          <p className="mt-4 rounded-md bg-ink-2 px-3 py-2 text-sm text-cream">
            Binary systemic failure stayed at 0% in the main intensity experiment.
          </p>
        </div>
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
            Continuous (preferred)
          </p>
          <ul className="mt-3 space-y-3 text-sm leading-normal text-cream/90">
            <li>
              Mean payment shortfall <V>S</V> = mean(1 − <V>r</V>
              <Sub>i</Sub>)
            </li>
            <li>
              Distressed-bank fraction: share with <V>r</V>
              <Sub>i</Sub>
              {" < 1"}
            </li>
            <li>
              Mean unpaid interbank obligations <V>L</V>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-normal text-muted">
            “No systemic collapse” is not equivalent to “no systemic effect.” Binary metrics can
            mask significant partial distress — which is what the experiments actually move.
          </p>
        </div>
      </div>
    </div>
  );
}

export function SlideValidation() {
  const cols = [
    {
      icon: Check,
      title: "Implementation",
      color: "text-teal",
      items: [
        "0 ≤ ri ≤ 1 after every clearing step",
        "Non-negative exposures; no self-loops",
        "Clearing map converges on the finite network",
        "Balance-sheet identities hold by construction",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Economic sanity",
      color: "text-teal",
      items: [
        "No shock: a solvent system stays solvent",
        "Stronger shocks do not systematically improve outcomes",
        "Removing edges removes contagion pathways",
        "Isolated nodes cannot import interbank shortfalls",
      ],
    },
    {
      icon: Sigma,
      title: "Statistical",
      color: "text-sand",
      items: [
        "2,000 Monte Carlo trials per grid point",
        "Fixed seed 20261001",
        "Monte Carlo confidence intervals computed in the underlying experiment",
        "Monte Carlo confidence intervals are computed in the underlying experiment; this presentation does not plot them because the trial-level variance is not stored in the presentation data layer.
        Common random numbers across the x sweep",
      ],
    },
  ] as const;

  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Before the experiments</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Model validation and sanity checks
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-normal text-muted">
        The simulator is not treated as a black box. Three layers of checks sit in front of the
        reported grids.
      </p>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-3 gap-4">
        {cols.map((col) => (
          <div key={col.title} className="flex flex-col rounded-xl bg-panel p-5 shadow-border">
            <col.icon className={`size-5 ${col.color}`} strokeWidth={1.75} />
            <h3 className="mt-3 font-display text-xl text-cream">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-normal text-muted">
              {col.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fact({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-panel px-4 py-3 shadow-border">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">{title}</p>
      <p className="mt-1.5 text-sm leading-normal text-cream/90">{children}</p>
    </div>
  );
}
