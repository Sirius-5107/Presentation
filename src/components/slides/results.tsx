import { ChartKey, IntensityChart, ParticipationChart } from "@/components/viz/charts";
import { Sub, V } from "@/components/viz/equation";

export function SlideExp1() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Experiment 1</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        What happens when a risky institution becomes more aggressive?
      </h2>
      <p className="mt-2 text-sm text-muted">
        <V>q</V>
        <Sub>L</Sub> = 0.20 · <V>q</V>
        <Sub>R</Sub> grid 0.20–0.80 · 2,000 trials/point · seed 20261001
      </p>
      <div className="mt-4 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <div className="flex min-h-72 flex-col rounded-xl bg-panel p-4 shadow-border">
          <IntensityChart className="flex-1" />
          <div className="mt-2 flex items-center justify-between">
            <ChartKey />
            <p className="text-2xs text-subtle">Endpoints are exact MC values</p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <Stat k="0.5039 → 0.5163" l="Terminal equity" d="High-risk institutions" />
          <Stat k="0.0257 → 0.0842" l="Unpaid obligations" d="Mean unpaid interbank" sand />
          <Stat k="0.41% → 0.94%" l="Distressed banks" d="Share with ri < 1" />
        </div>
      </div>
    </div>
  );
}

export function SlideExp1Learn() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
        Experiment 1 · interpretation
      </p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Private benefit and network damage diverge
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-normal text-muted">
        As <V>q</V>
        <Sub>R</Sub> rises from 0.20 to 0.80, the privately useful move is cheap to the institution
        and expensive to the network — but the expense is partial distress, not collapse.
      </p>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-4">
        <LearnRow
          dir="up"
          title="Risky-institution payoff rises"
          body="Terminal equity 0.5039 → 0.5163. About +2.5% over the tested range. The private incentive to intensify is positive."
        />
        <LearnRow
          dir="up"
          title="Unpaid obligations rise much faster"
          body="Mean unpaid 0.0257 → 0.0842. Roughly +228%. Network losses scale far more steeply than private equity."
          sand
        />
        <LearnRow
          dir="up"
          title="Distressed-bank fraction rises"
          body="0.41% → 0.94%. More institutions fail to pay in full, even though none of this registers as a systemic event."
        />
        <LearnRow
          dir="flat"
          title="Binary systemic failure remains 0%"
          body="D never crosses τ = 0.30. A collapse metric would have reported ‘nothing happened.’ Continuous measures disagree."
        />
      </div>
    </div>
  );
}

export function SlideExp2() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Experiment 2</p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        What happens when more institutions take the same risk?
      </h2>
      <p className="mt-2 text-sm text-muted">
        <V>x</V> = fraction on the high-risk strategy · <V>q</V>
        <Sub>L</Sub> = 0.20 · <V>q</V>
        <Sub>R</Sub> = 0.80 · 2,000 trials · CRN across <V>x</V>
      </p>
      <div className="mt-4 grid min-h-0 flex-1 grid-cols-2 gap-5">
        <div className="flex min-h-72 flex-col rounded-xl bg-panel p-4 shadow-border">
          <ParticipationChart className="flex-1" />
          <div className="mt-2 flex items-center justify-between">
            <ChartKey />
            <p className="text-2xs text-subtle">Minimum unpaid near x = 0.20</p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <Stat k="0.5045 → 0.5152" l="Aggregate equity" d="x = 0.05 → 0.95" />
          <Stat k="0.0681 → 0.2259" l="Unpaid obligations" d="Minimum near x = 0.20" sand />
          <Stat k="2.106%" l="Distressed banks" d="At x = 0.95" />
        </div>
      </div>
    </div>
  );
}

export function SlideTradeoff() {
  return (
    <div className="flex h-full flex-col px-14 py-10">
      <p className="text-kicker font-medium uppercase tracking-kicker text-teal">
        Experiment 2 · interpretation
      </p>
      <h2 className="mt-2 font-display text-slide font-semibold tracking-tight text-cream">
        Widespread risk-taking is a different object
      </h2>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-3 gap-4">
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Isolated</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-cream">x = 0.05</p>
          <p className="mt-4 text-sm leading-normal text-muted">
            A thin high-risk fringe. Unpaid obligations 0.0681. The network still contains a large
            conservative core that can absorb some shortfalls.
          </p>
        </div>
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-sand">Mixed</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-cream">x ≈ 0.20</p>
          <p className="mt-4 text-sm leading-normal text-muted">
            Unpaid obligations reach a grid minimum near here. The loss curve is non-monotone at low participation, then steepens markedly. Reported as a grid observation, not a mixing theorem.
          </p>
        </div>
        <div className="rounded-xl bg-panel p-5 shadow-border">
          <p className="text-kicker font-medium uppercase tracking-kicker text-rose">Widespread</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-cream">x = 0.95</p>
          <p className="mt-4 text-sm leading-normal text-muted">
            Unpaid 0.2259 — about 3.3× the isolated case. Distressed-bank fraction 2.106%. Aggregate
            equity has only risen ~2%.
          </p>
        </div>
      </div>
      <p className="mt-5 rounded-md bg-panel px-4 py-3 text-sm leading-normal text-cream/90 shadow-border">
        The network effect of widespread risk-taking can be much larger than its private benefit. Intensity and participation are not interchangeable instruments.
      </p>
    </div>
  );
}

function Stat({
  k,
  l,
  d,
  sand,
}: {
  k: string;
  l: string;
  d: string;
  sand?: boolean;
}) {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-panel px-4 py-3 shadow-border">
      <p className={`font-display text-2xl tabular-nums leading-tight ${sand ? "text-sand" : "text-cream"}`}>
        {k}
      </p>
      <p className="mt-1 text-sm text-cream/90">{l}</p>
      <p className="text-xs text-muted">{d}</p>
    </div>
  );
}

function LearnRow({
  title,
  body,
  sand,
  dir,
}: {
  title: string;
  body: string;
  sand?: boolean;
  dir: "up" | "flat";
}) {
  return (
    <div className="rounded-xl bg-panel p-5 shadow-border">
      <p className={`text-kicker font-medium uppercase tracking-kicker ${sand ? "text-sand" : "text-teal"}`}>
        {dir === "up" ? "Increases" : "Unchanged"}
      </p>
      <h3 className="mt-2 font-display text-xl text-cream">{title}</h3>
      <p className="mt-2 text-sm leading-normal text-muted">{body}</p>
    </div>
  );
}
