/**
 * Exact Monte Carlo grid used in the talk.
 *
 * E5: 2,000 trials per qR point, qL = 0.20.
 * E7: 2,000 trials per x point, qL = 0.20, qR = 0.80.
 *
 * Values below are the reported simulation outputs, not interpolated
 * or reconstructed chart points.
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
  { qR: 0.20, equity: 0.503883, unpaid: 0.025726, distressPct: 0.4105, systemicPct: 0 },
  { qR: 0.25, equity: 0.504892, unpaid: 0.026884, distressPct: 0.4105, systemicPct: 0 },
  { qR: 0.30, equity: 0.505902, unpaid: 0.028042, distressPct: 0.4105, systemicPct: 0 },
  { qR: 0.35, equity: 0.506916, unpaid: 0.029759, distressPct: 0.5190, systemicPct: 0 },
  { qR: 0.40, equity: 0.507936, unpaid: 0.032550, distressPct: 0.5190, systemicPct: 0 },
  { qR: 0.45, equity: 0.508957, unpaid: 0.035340, distressPct: 0.5190, systemicPct: 0 },
  { qR: 0.50, equity: 0.509978, unpaid: 0.038170, distressPct: 0.4780, systemicPct: 0 },
  { qR: 0.55, equity: 0.511020, unpaid: 0.043951, distressPct: 0.6545, systemicPct: 0 },
  { qR: 0.60, equity: 0.512062, unpaid: 0.049734, distressPct: 0.6540, systemicPct: 0 },
  { qR: 0.65, equity: 0.513104, unpaid: 0.055552, distressPct: 0.6605, systemicPct: 0 },
  { qR: 0.70, equity: 0.514165, unpaid: 0.064199, distressPct: 0.9300, systemicPct: 0 },
  { qR: 0.75, equity: 0.515235, unpaid: 0.074168, distressPct: 0.9300, systemicPct: 0 },
  { qR: 0.80, equity: 0.516306, unpaid: 0.084183, distressPct: 0.9375, systemicPct: 0 },
];

export type ParticipationPoint = {
  x: number;
  equity: number;
  unpaid: number;
  distressPct: number;
};

export const participationGrid: ParticipationPoint[] = [
  { x: 0.05, equity: 0.504469, unpaid: 0.068125, distressPct: 0.9105 },
  { x: 0.10, equity: 0.505037, unpaid: 0.064174, distressPct: 0.8730 },
  { x: 0.15, equity: 0.505636, unpaid: 0.060140, distressPct: 0.8365 },
  { x: 0.20, equity: 0.506260, unpaid: 0.059541, distressPct: 0.8235 },
  { x: 0.25, equity: 0.506836, unpaid: 0.061328, distressPct: 0.8165 },
  { x: 0.30, equity: 0.507419, unpaid: 0.062044, distressPct: 0.8000 },
  { x: 0.35, equity: 0.508001, unpaid: 0.065399, distressPct: 0.8205 },
  { x: 0.40, equity: 0.508619, unpaid: 0.069623, distressPct: 0.8465 },
  { x: 0.45, equity: 0.509258, unpaid: 0.076936, distressPct: 0.8925 },
  { x: 0.50, equity: 0.509942, unpaid: 0.084183, distressPct: 0.9375 },
  { x: 0.55, equity: 0.510509, unpaid: 0.093649, distressPct: 1.0210 },
  { x: 0.60, equity: 0.511069, unpaid: 0.105064, distressPct: 1.1080 },
  { x: 0.65, equity: 0.511649, unpaid: 0.119241, distressPct: 1.2355 },
  { x: 0.70, equity: 0.512192, unpaid: 0.133535, distressPct: 1.3365 },
  { x: 0.75, equity: 0.512786, unpaid: 0.149388, distressPct: 1.4700 },
  { x: 0.80, equity: 0.513342, unpaid: 0.167610, distressPct: 1.6285 },
  { x: 0.85, equity: 0.514042, unpaid: 0.186895, distressPct: 1.7675 },
  { x: 0.90, equity: 0.514610, unpaid: 0.202855, distressPct: 1.9125 },
  { x: 0.95, equity: 0.515161, unpaid: 0.225888, distressPct: 2.1060 },
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

/** Illustrative replicator trajectory using the measured payoff differential. */
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
