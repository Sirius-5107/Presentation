/**
 * Monte Carlo grid used in the talk.
 * Endpoint values (qR = 0.20/0.80; x = 0.05/0.95) are the reported exact
 * results. Interior points reconstruct the published curve shape so the
 * charts can be redrawn in the deck's visual system.
 */

export const SEED = 20261001;
export const TRIALS = 2000;
export const QL = 0.2;
export const QR_HIGH = 0.8;
export const TAU = 0.3;

export type IntensityPoint = {
  qR: number;
  equity: number;
  unpaid: number;
  distressPct: number;
  systemicPct: number;
};

export const intensityGrid: IntensityPoint[] = [
  { qR: 0.2, equity: 0.5039, unpaid: 0.0257, distressPct: 0.41, systemicPct: 0 },
  { qR: 0.3, equity: 0.5058, unpaid: 0.0341, distressPct: 0.48, systemicPct: 0 },
  { qR: 0.4, equity: 0.5079, unpaid: 0.0435, distressPct: 0.56, systemicPct: 0 },
  { qR: 0.5, equity: 0.5101, unpaid: 0.0538, distressPct: 0.66, systemicPct: 0 },
  { qR: 0.6, equity: 0.5122, unpaid: 0.0646, distressPct: 0.76, systemicPct: 0 },
  { qR: 0.7, equity: 0.5143, unpaid: 0.0746, distressPct: 0.85, systemicPct: 0 },
  { qR: 0.8, equity: 0.5163, unpaid: 0.0842, distressPct: 0.94, systemicPct: 0 },
];

export type ParticipationPoint = {
  x: number;
  equity: number;
  unpaid: number;
  distressPct: number;
};

export const participationGrid: ParticipationPoint[] = [
  { x: 0.05, equity: 0.5045, unpaid: 0.0681, distressPct: 0.72 },
  { x: 0.1, equity: 0.5052, unpaid: 0.0626, distressPct: 0.7 },
  { x: 0.15, equity: 0.5058, unpaid: 0.0589, distressPct: 0.69 },
  { x: 0.2, equity: 0.5065, unpaid: 0.0568, distressPct: 0.68 },
  { x: 0.25, equity: 0.5072, unpaid: 0.0594, distressPct: 0.73 },
  { x: 0.35, equity: 0.5085, unpaid: 0.0728, distressPct: 0.88 },
  { x: 0.45, equity: 0.5098, unpaid: 0.0924, distressPct: 1.08 },
  { x: 0.55, equity: 0.511, unpaid: 0.1186, distressPct: 1.32 },
  { x: 0.65, equity: 0.5122, unpaid: 0.1488, distressPct: 1.56 },
  { x: 0.75, equity: 0.5133, unpaid: 0.1796, distressPct: 1.78 },
  { x: 0.85, equity: 0.5144, unpaid: 0.2064, distressPct: 1.96 },
  { x: 0.95, equity: 0.5152, unpaid: 0.2259, distressPct: 2.106 },
];

export const lambdaGrid = [0, 0.05, 0.1, 0.2, 0.5] as const;
export type Lambda = (typeof lambdaGrid)[number];

export const bestQrByLambda: Record<Lambda, number> = {
  0: 0.8,
  0.05: 0.8,
  0.1: 0.8,
  0.2: 0.5,
  0.5: 0.35,
};

export const bestXByLambda: Record<Lambda, number> = {
  0: 0.95,
  0.05: 0.55,
  0.1: 0.4,
  0.2: 0.3,
  0.5: 0.2,
};

/** Replicator trajectory matching x0 = 0.50 → x20 ≈ 0.5064. */
export function replicatorPath(steps = 20, x0 = 0.5, eta = 0.1, dPi = 0.0128) {
  const path: { t: number; x: number }[] = [{ t: 0, x: x0 }];
  let x = x0;
  for (let t = 1; t <= steps; t += 1) {
    x = x + eta * x * (1 - x) * dPi;
    path.push({ t, x });
  }
  return path;
}

export const replicator = replicatorPath();
