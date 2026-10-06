import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShieldCheck, c as ChevronRight, i as Sigma, l as ChevronLeft, o as Grid3x3, r as StickyNote, s as CircleHelp, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as ComposedChart } from "../_libs/recharts+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUS9z3fh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cream = "#f3ece1";
var muted = "#8aa3ab";
var teal = "#2f9d8f";
var sand = "#c9a56a";
var grid = "rgba(243, 236, 225, 0.08)";
var intensityGrid = [
	{
		qR: .2,
		equity: .5039,
		unpaid: .0257,
		distressPct: .41,
		systemicPct: 0
	},
	{
		qR: .3,
		equity: .5058,
		unpaid: .0341,
		distressPct: .48,
		systemicPct: 0
	},
	{
		qR: .4,
		equity: .5079,
		unpaid: .0435,
		distressPct: .56,
		systemicPct: 0
	},
	{
		qR: .5,
		equity: .5101,
		unpaid: .0538,
		distressPct: .66,
		systemicPct: 0
	},
	{
		qR: .6,
		equity: .5122,
		unpaid: .0646,
		distressPct: .76,
		systemicPct: 0
	},
	{
		qR: .7,
		equity: .5143,
		unpaid: .0746,
		distressPct: .85,
		systemicPct: 0
	},
	{
		qR: .8,
		equity: .5163,
		unpaid: .0842,
		distressPct: .94,
		systemicPct: 0
	}
];
var participationGrid = [
	{
		x: .05,
		equity: .5045,
		unpaid: .0681,
		distressPct: .72
	},
	{
		x: .1,
		equity: .5052,
		unpaid: .0626,
		distressPct: .7
	},
	{
		x: .15,
		equity: .5058,
		unpaid: .0589,
		distressPct: .69
	},
	{
		x: .2,
		equity: .5065,
		unpaid: .0568,
		distressPct: .68
	},
	{
		x: .25,
		equity: .5072,
		unpaid: .0594,
		distressPct: .73
	},
	{
		x: .35,
		equity: .5085,
		unpaid: .0728,
		distressPct: .88
	},
	{
		x: .45,
		equity: .5098,
		unpaid: .0924,
		distressPct: 1.08
	},
	{
		x: .55,
		equity: .511,
		unpaid: .1186,
		distressPct: 1.32
	},
	{
		x: .65,
		equity: .5122,
		unpaid: .1488,
		distressPct: 1.56
	},
	{
		x: .75,
		equity: .5133,
		unpaid: .1796,
		distressPct: 1.78
	},
	{
		x: .85,
		equity: .5144,
		unpaid: .2064,
		distressPct: 1.96
	},
	{
		x: .95,
		equity: .5152,
		unpaid: .2259,
		distressPct: 2.106
	}
];
var lambdaGrid = [
	0,
	.05,
	.1,
	.2,
	.5
];
var bestQrByLambda = {
	0: .8,
	.05: .8,
	.1: .8,
	.2: .5,
	.5: .35
};
var bestXByLambda = {
	0: .95,
	.05: .55,
	.1: .4,
	.2: .3,
	.5: .2
};
/** Replicator trajectory matching x0 = 0.50 → x20 ≈ 0.5064. */
function replicatorPath(steps = 20, x0 = .5, eta = .1, dPi = .0128) {
	const path = [{
		t: 0,
		x: x0
	}];
	let x = x0;
	for (let t = 1; t <= steps; t += 1) {
		x = x + eta * x * (1 - x) * dPi;
		path.push({
			t,
			x
		});
	}
	return path;
}
var replicator = replicatorPath();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mounted({ children, fallback }) {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	if (!on) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full min-h-48 rounded-lg bg-panel" }) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function Tip({ active, payload, label, labelPrefix }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-ink-2 px-3 py-2 text-xs text-cream shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-1 text-muted",
			children: [
				labelPrefix,
				" ",
				typeof label === "number" ? label.toFixed(2) : label
			]
		}), payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			style: { color: p.color },
			children: [
				p.name,
				": ",
				typeof p.value === "number" ? p.value.toFixed(4) : p.value
			]
		}, p.name))]
	});
}
var axis = {
	tick: {
		fill: muted,
		fontSize: 11
	},
	axisLine: { stroke: grid },
	tickLine: { stroke: grid }
};
function IntensityChart({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-full min-h-56 w-full", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mounted, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				data: intensityGrid,
				margin: {
					top: 12,
					right: 36,
					left: 4,
					bottom: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "qR",
						tickFormatter: (v) => v.toFixed(2),
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "eq",
						domain: [.502, .518],
						tickFormatter: (v) => v.toFixed(3),
						stroke: teal,
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "un",
						orientation: "right",
						domain: [.02, .09],
						tickFormatter: (v) => v.toFixed(3),
						stroke: sand,
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, { labelPrefix: "qR =" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "eq",
						type: "monotone",
						dataKey: "equity",
						name: "Terminal equity",
						stroke: teal,
						strokeWidth: 2.4,
						dot: {
							r: 3,
							fill: teal,
							stroke: cream,
							strokeWidth: 1
						},
						activeDot: { r: 5 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "un",
						type: "monotone",
						dataKey: "unpaid",
						name: "Unpaid obligations",
						stroke: sand,
						strokeWidth: 2,
						strokeDasharray: "6 4",
						dot: {
							r: 3,
							fill: sand,
							stroke: cream,
							strokeWidth: 1
						}
					})
				]
			})
		}) })
	});
}
function ParticipationChart({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-full min-h-56 w-full", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mounted, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				data: participationGrid,
				margin: {
					top: 12,
					right: 36,
					left: 4,
					bottom: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "x",
						tickFormatter: (v) => v.toFixed(2),
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "eq",
						domain: [.503, .517],
						tickFormatter: (v) => v.toFixed(3),
						stroke: teal,
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "un",
						orientation: "right",
						domain: [.04, .24],
						tickFormatter: (v) => v.toFixed(2),
						stroke: sand,
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, { labelPrefix: "x =" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "eq",
						type: "monotone",
						dataKey: "equity",
						name: "Aggregate equity",
						stroke: teal,
						strokeWidth: 2.4,
						dot: {
							r: 3,
							fill: teal,
							stroke: cream,
							strokeWidth: 1
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "un",
						type: "monotone",
						dataKey: "unpaid",
						name: "Unpaid obligations",
						stroke: sand,
						strokeWidth: 2,
						strokeDasharray: "6 4",
						dot: {
							r: 3,
							fill: sand,
							stroke: cream,
							strokeWidth: 1
						}
					})
				]
			})
		}) })
	});
}
function ReplicatorChart({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-full min-h-44 w-full", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mounted, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				data: replicator,
				margin: {
					top: 8,
					right: 12,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "t",
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [.499, .508],
						tickFormatter: (v) => v.toFixed(3),
						...axis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, { labelPrefix: "step" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "x",
						name: "Participation x",
						stroke: teal,
						strokeWidth: 2.2,
						dot: false
					})
				]
			})
		}) })
	});
}
function ChartKey() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-4 text-xs text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal" }), " Solid · equity"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 border-t border-dashed border-sand" }), " Dashed · unpaid obligations"]
		})]
	});
}
function V({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-display italic",
		children
	});
}
function Sub({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", {
		className: "font-sans text-xs italic",
		children
	});
}
function EqBlock({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg bg-panel px-4 py-3 font-display text-base leading-snug text-cream shadow-border", className),
		children
	});
}
function SlideOptima() {
	const [lam, setLam] = (0, import_react.useState)(.2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "System-aware optimization"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Internalizing network losses changes the preferred choice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, {
				className: "mt-4 w-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "J" }),
					" = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "U" }),
					" − λ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "L" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-4 font-sans text-sm text-muted",
						children: "U = relevant terminal-equity payoff · L = mean unpaid obligations"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid min-h-0 flex-1 grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptTable, {
						caption: "Best tested qR",
						valueFor: (l) => bestQrByLambda[l].toFixed(2),
						active: lam,
						highlight: bestQrByLambda[lam].toFixed(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptTable, {
						caption: "Best tested x",
						valueFor: (l) => bestXByLambda[l].toFixed(2),
						active: lam,
						highlight: bestXByLambda[lam].toFixed(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-xl bg-panel p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker font-medium uppercase tracking-kicker text-teal",
								children: "Weight on systemic damage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-display text-4xl tabular-nums text-cream",
								children: ["λ = ", lam.toFixed(2)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									"qR* = ",
									bestQrByLambda[lam].toFixed(2),
									" · x* = ",
									bestXByLambda[lam].toFixed(2)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: lambdaGrid.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLam(l),
									className: cn("pressable h-11 min-w-11 rounded-md px-3 text-sm tabular-nums", lam === l ? "bg-cream text-ink" : "bg-ink-2 text-cream/80 hover:bg-panel-2"),
									children: l.toFixed(2)
								}, l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-normal text-muted",
								children: "Discrete-grid optima, not continuous analytical optima or equilibrium proofs. Private only (λ = 0) sits at the high-risk corner; λ ≥ 0.20 pulls both instruments inward."
							})
						]
					})
				]
			})
		]
	});
}
function OptTable({ caption, valueFor, active, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-panel shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 pt-4 text-kicker font-medium uppercase tracking-kicker text-teal",
			children: caption
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "mt-3 w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2 font-medium",
					children: "λ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2 font-medium",
					children: caption.includes("qR") ? "qR*" : "x*"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lambdaGrid.map((l) => {
				const v = valueFor(l);
				const on = l === active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: on ? "bg-teal/15" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2 tabular-nums text-cream/85",
						children: l.toFixed(2)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cn("px-4 py-2 font-display text-lg tabular-nums", v === highlight && on ? "text-cream" : "text-cream/80"),
						children: v
					})]
				}, l);
			}) })]
		})]
	});
}
function SlideDynamics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Adaptive dynamics"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "What happens when institutions respond to payoffs?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "t+1" }),
							" = ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "t" }),
							" + η ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "t" }),
							"(1 − ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "t" }),
							")(π",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "R" }),
							" − π",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "L" }),
							")"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
									k: "x0",
									v: "0.50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
									k: "η",
									v: "0.10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
									k: "qL, qR",
									v: "0.20, 0.80"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
									k: "Steps × reps",
									v: "20 × 100"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-normal text-muted",
							children: "Discrete-time replicator as a computational population-dynamics analogue — not a behavioural calibration, and not a convergence proof. The risky strategy had a small private payoff advantage; the population update is slow."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col rounded-xl bg-panel p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Participation path · final x ≈ 0.5064"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplicatorChart, { className: "mt-2 flex-1" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 grid grid-cols-3 gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border",
						children: "Private return rises with risk in the tested range"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border",
						children: "Network losses rise faster once risk is widespread or intense"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-panel px-3 py-2 text-cream/90 shadow-border",
						children: "System-aware objective produces lower / interior tested choices"
					})
				]
			})
		]
	});
}
function Meta({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-panel px-3 py-2 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xs uppercase tracking-kicker text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg tabular-nums text-cream",
			children: v
		})]
	});
}
function SlideClose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Close"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Conclusions, limitations, and next steps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid min-h-0 flex-1 grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Col, {
						title: "What this establishes",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Private incentives and systemic stability can diverge in this network." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Continuous distress measures reveal effects hidden by binary collapse." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Internalizing network losses changes preferred intensity and participation." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Col, {
						title: "Limitations",
						muted: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Simulated networks and simplified balance sheets" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Two-state risky return distribution" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Simplified behavioural update rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Finite network size effects" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Experiment-specific systemic-loss objective" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Broad robustness study not yet completed" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Col, {
						title: "Next",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Robustness across seeds, N, shock severity, and scales" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Alternative definitions of systemic loss" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Only later: ML / data-driven extensions" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-display text-lg italic leading-snug text-cream/85",
				children: "Monte Carlo uncertainty is conditional on the model; it does not validate the model. The computational model is frozen; the next step is validation and deeper theoretical analysis."
			})
		]
	});
}
function Col({ title, children, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-panel p-5 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-kicker font-medium uppercase tracking-kicker text-teal",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: `mt-3 space-y-2 text-sm leading-normal ${muted ? "text-muted" : "text-cream/90"}`,
			children
		})]
	});
}
var L_NODES = [
	{
		id: "L0",
		kind: "L",
		x: 168,
		y: 118
	},
	{
		id: "L1",
		kind: "L",
		x: 96,
		y: 168
	},
	{
		id: "L2",
		kind: "L",
		x: 78,
		y: 248
	},
	{
		id: "L3",
		kind: "L",
		x: 132,
		y: 318
	},
	{
		id: "L4",
		kind: "L",
		x: 220,
		y: 338
	},
	{
		id: "L5",
		kind: "L",
		x: 286,
		y: 278
	},
	{
		id: "L6",
		kind: "L",
		x: 292,
		y: 188
	},
	{
		id: "L7",
		kind: "L",
		x: 236,
		y: 122
	}
];
var R_NODES = [
	{
		id: "R0",
		kind: "R",
		x: 468,
		y: 112
	},
	{
		id: "R1",
		kind: "R",
		x: 396,
		y: 162
	},
	{
		id: "R2",
		kind: "R",
		x: 388,
		y: 248
	},
	{
		id: "R3",
		kind: "R",
		x: 446,
		y: 322
	},
	{
		id: "R4",
		kind: "R",
		x: 538,
		y: 338
	},
	{
		id: "R5",
		kind: "R",
		x: 604,
		y: 268
	},
	{
		id: "R6",
		kind: "R",
		x: 598,
		y: 176
	},
	{
		id: "R7",
		kind: "R",
		x: 534,
		y: 118
	}
];
var NODES = [...L_NODES, ...R_NODES];
var BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));
var EDGES = [
	{
		from: "L0",
		to: "L1"
	},
	{
		from: "L1",
		to: "L2"
	},
	{
		from: "L2",
		to: "L3"
	},
	{
		from: "L3",
		to: "L4"
	},
	{
		from: "L4",
		to: "L5"
	},
	{
		from: "L5",
		to: "L6"
	},
	{
		from: "L6",
		to: "L0"
	},
	{
		from: "L7",
		to: "L0"
	},
	{
		from: "L7",
		to: "L5"
	},
	{
		from: "L1",
		to: "L4"
	},
	{
		from: "R0",
		to: "R1"
	},
	{
		from: "R1",
		to: "R2"
	},
	{
		from: "R2",
		to: "R3"
	},
	{
		from: "R3",
		to: "R4"
	},
	{
		from: "R4",
		to: "R5"
	},
	{
		from: "R5",
		to: "R6"
	},
	{
		from: "R6",
		to: "R0"
	},
	{
		from: "R7",
		to: "R0"
	},
	{
		from: "R7",
		to: "R4"
	},
	{
		from: "R1",
		to: "R5"
	},
	{
		from: "L6",
		to: "R1"
	},
	{
		from: "L5",
		to: "R2"
	},
	{
		from: "R2",
		to: "L5"
	},
	{
		from: "L4",
		to: "R3"
	}
];
function Arrow({ from, to }) {
	const a = BY_ID[from];
	const b = BY_ID[to];
	if (!a || !b) return null;
	const dx = b.x - a.x;
	const dy = b.y - a.y;
	const len = Math.hypot(dx, dy) || 1;
	const r = 11;
	const x1 = a.x + dx / len * r;
	const y1 = a.y + dy / len * r;
	const x2 = b.x - dx / len * r;
	const y2 = b.y - dy / len * r;
	const cross = a.kind !== b.kind;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1,
		y1,
		x2,
		y2,
		stroke: cross ? sand : teal,
		strokeOpacity: cross ? .55 : .38,
		strokeWidth: cross ? 1.4 : 1.1,
		markerEnd: "url(#arrow)"
	});
}
function NetworkGraph({ className, caption = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex h-full min-h-0 flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 680 430",
			className: "h-full w-full",
			role: "img",
			"aria-label": "Heterogeneous financial network",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrow",
					viewBox: "0 0 10 10",
					refX: "8",
					refY: "5",
					markerWidth: "7",
					markerHeight: "7",
					orient: "auto-start-reverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 0 1.2 L 8 5 L 0 8.8",
						fill: "none",
						stroke: muted,
						strokeWidth: "1.4"
					})
				}) }),
				EDGES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { ...e }, `${e.from}-${e.to}`)),
				NODES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: 10,
					fill: n.kind === "L" ? teal : sand,
					fillOpacity: .92,
					stroke: cream,
					strokeOpacity: .18
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: n.x,
					y: n.y + 1,
					textAnchor: "middle",
					dominantBaseline: "middle",
					fill: inkText(n.kind),
					fontSize: "8",
					fontFamily: "Source Sans 3, sans-serif",
					fontWeight: "600",
					children: n.kind
				})] }, n.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "392",
					textAnchor: "middle",
					fill: teal,
					fontSize: "12",
					fontFamily: "Source Sans 3, sans-serif",
					children: "Low-risk cluster"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "512",
					y: "392",
					textAnchor: "middle",
					fill: sand,
					fontSize: "12",
					fontFamily: "Source Sans 3, sans-serif",
					children: "High-risk cluster"
				})
			]
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-center text-xs text-muted",
			children: [
				"Directed edge ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display italic",
					children: "i → j"
				}),
				" means ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display italic",
					children: "i"
				}),
				" owes",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display italic",
					children: "j"
				}),
				". Within-group links (p",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "w" }),
				") denser than cross-group (p",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "c" }),
				")."
			]
		}) : null]
	});
}
function inkText(kind) {
	return kind === "L" ? "#07141a" : "#1a1408";
}
function TitleNetwork({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 680 430",
		className: cn("h-full w-full", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
				id: "t-arrow",
				viewBox: "0 0 10 10",
				refX: "8",
				refY: "5",
				markerWidth: "6",
				markerHeight: "6",
				orient: "auto-start-reverse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 0 1.2 L 8 5 L 0 8.8",
					fill: "none",
					stroke: muted,
					strokeWidth: "1.2"
				})
			}) }),
			EDGES.map((e) => {
				const a = BY_ID[e.from];
				const b = BY_ID[e.to];
				if (!a || !b) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: a.x,
					y1: a.y,
					x2: b.x,
					y2: b.y,
					stroke: a.kind === b.kind ? teal : sand,
					strokeOpacity: .28,
					strokeWidth: 1.1
				}, `${e.from}-${e.to}`);
			}),
			NODES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: n.x,
				cy: n.y,
				r: n.kind === "R" ? 8 : 6.5,
				fill: n.kind === "L" ? teal : sand,
				fillOpacity: n.kind === "R" ? .9 : .7
			}, n.id))
		]
	});
}
function SlideNetwork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Model"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "A heterogeneous financial network"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid min-h-0 flex-1 grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fact, {
							title: "Nodes and edges",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "N" }),
								" institutions. A directed edge ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "i → j" }),
								" means ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "i" }),
								" owes ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "j" }),
								" an interbank amount ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "E" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "ij" }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fact, {
							title: "Balance sheet",
							children: [
								"External assets ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "A" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								", external liabilities ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "X" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								", interbank obligations ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "B" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								" = Σ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "j" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "E" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "ij" }),
								", strategy ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "s" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								" ∈ ",
								"{L, R}",
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fact, {
							title: "Heterogeneity",
							children: [
								"Connection probabilities ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "LL" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "RR" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "LR" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "RL" }),
								". Baseline: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "LL" }),
								" = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "RR" }),
								" = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "w" }),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "LR" }),
								" = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "RL" }),
								" = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "p" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "c" }),
								"."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 rounded-xl bg-panel/60 p-3 shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkGraph, {})
				})]
			})
		]
	});
}
function SlideRisk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Instruments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Risk-taking: intensity versus participation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-base leading-normal text-muted",
				children: "The study does not treat “more risk” as a single knob. It separates how aggressively the risky strategy is run from how many institutions run it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-panel p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker font-medium uppercase tracking-kicker text-teal",
							children: "Intensity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-2 font-display text-2xl text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
								" vs ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-normal text-muted",
							children: [
								"Each institution holds a risky-asset fraction ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								". Conservative banks use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
								" = 0.20. Risky banks use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
								" ≥ ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
								", swept from 0.20 to 0.80 in Experiment 1."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, {
							className: "mt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "A" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								"′ = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "A" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								"[(1 − ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								") + ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "R" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								"]"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs leading-normal text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "R" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								" is a two-state risky return. Post-shock external assets feed the clearing map."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-panel p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker font-medium uppercase tracking-kicker text-sand",
							children: "Participation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-2 font-display text-2xl text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }), " = share on the risky strategy"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-normal text-muted",
							children: [
								"Experiment 2 holds ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
								" = 0.20 and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
								" = 0.80 fixed, and varies the fraction of institutions using R from 0.05 to 0.95."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm leading-normal text-cream/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Two strategies, not a continuous ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
									" for every bank."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "That restriction is deliberate: it isolates the two instruments." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Common random numbers are reused across ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
									" so composition is comparable."
								] })
							]
						})
					]
				})]
			})
		]
	});
}
function SlideClearing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Mechanism"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Risk → shock → clearing → contagion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 grid grid-cols-4 gap-3",
				children: [
					[
						"1",
						"Risk choice",
						"si ∈ {L, R} sets qi"
					],
					[
						"2",
						"External shock",
						"Risky return Ri hits A′i"
					],
					[
						"3",
						"Payment clearing",
						"Recovery ri from available funds"
					],
					[
						"4",
						"Contagion",
						"Shortfall is a loss to creditors"
					]
				].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-panel px-4 py-3 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-teal",
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg text-cream",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-normal text-muted",
							children: d
						})
					]
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid min-h-0 flex-1 grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "I" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							" = Σ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "j" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "j" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "E" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "ji" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 text-sm text-muted",
								children: "interbank inflows"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "F" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							" = ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "A" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							"′ + ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "I" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 text-sm text-muted",
								children: "funds available"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EqBlock, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							" = min(1, max(0, (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "F" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							" − ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "X" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							") / ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "B" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
							"))"
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-panel p-5 text-sm leading-normal text-muted shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-cream",
							children: "Clearing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"The recovery rate ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								" is the fraction of interbank obligations paid by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "i" }),
								". When",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
								" < 1",
								", the unpaid remainder is a loss to creditor institutions and re-enters their ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "I" }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "Distress therefore travels along the directed obligation graph. This is a map-based recovery-rate clearing on a finite network — useful for Monte Carlo, not an Eisenberg–Noe existence proof."
						})
					]
				})]
			})
		]
	});
}
function SlideMeasure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Measurement"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "How do we measure systemic risk?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-panel p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker font-medium uppercase tracking-kicker text-sand",
							children: "Binary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-display text-2xl text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "D" }),
								" = defaults / ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "N" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-normal text-muted",
							children: [
								"A systemic event is declared if ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "D" }),
								" ≥ 0.30. τ = 0.30 is experiment-specific, not a universal threshold."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 rounded-md bg-ink-2 px-3 py-2 text-sm text-cream",
							children: "Binary systemic failure stayed at 0% in the main intensity experiment."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-panel p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker font-medium uppercase tracking-kicker text-teal",
							children: "Continuous (preferred)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-3 text-sm leading-normal text-cream/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Mean payment shortfall ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "S" }),
									" = mean(1 − ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
									")"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Distressed-bank fraction: share with ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "r" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "i" }),
									" < 1"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Mean unpaid interbank obligations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "L" })] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-normal text-muted",
							children: "“No systemic collapse” is not equivalent to “no systemic effect.” Binary metrics can mask significant partial distress — which is what the experiments actually move."
						})
					]
				})]
			})
		]
	});
}
function SlideValidation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Before the experiments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Model validation and sanity checks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-base leading-normal text-muted",
				children: "The simulator is not treated as a black box. Three layers of checks sit in front of the reported grids."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-3 gap-4",
				children: [
					{
						icon: Check,
						title: "Implementation",
						color: "text-teal",
						items: [
							"0 ≤ ri ≤ 1 after every clearing step",
							"Non-negative exposures; no self-loops",
							"Clearing map converges on the finite network",
							"Balance-sheet identities hold by construction"
						]
					},
					{
						icon: ShieldCheck,
						title: "Economic sanity",
						color: "text-teal",
						items: [
							"No shock: a solvent system stays solvent",
							"Stronger shocks do not systematically improve outcomes",
							"Removing edges removes contagion pathways",
							"Isolated nodes cannot import interbank shortfalls"
						]
					},
					{
						icon: Sigma,
						title: "Statistical",
						color: "text-sand",
						items: [
							"2,000 Monte Carlo trials per grid point",
							"Fixed seed 20261001",
							"Confidence intervals from the MC sample",
							"Common random numbers across the x sweep"
						]
					}
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col rounded-xl bg-panel p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(col.icon, {
							className: `size-5 ${col.color}`,
							strokeWidth: 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl text-cream",
							children: col.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm leading-normal text-muted",
							children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 shrink-0 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})
					]
				}, col.title))
			})
		]
	});
}
function Fact({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-panel px-4 py-3 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-kicker font-medium uppercase tracking-kicker text-teal",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm leading-normal text-cream/90",
			children
		})]
	});
}
function SlideTitle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-between px-14 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "title-ornament pointer-events-none absolute inset-y-8 right-0 w-2/5 opacity-70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleNetwork, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "IIT (BHU) · Computational study"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl font-semibold leading-tight tracking-display text-cream",
						children: "Adaptive Risk-Taking and Systemic Risk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl italic leading-snug text-cream/75",
						children: "in a Heterogeneous Financial Network"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-normal text-muted",
						children: "Private incentives, network losses, and system-aware risk optimization"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-2xl rounded-lg bg-panel/80 px-5 py-4 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium uppercase tracking-kicker text-teal",
					children: "Research question"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-display text-xl leading-snug text-cream",
					children: [
						"How do the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "fraction" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "intensity" }),
						" of risk-taking affect private returns and systemic losses in an interconnected financial network?"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative text-sm text-muted",
				children: "Himanshu Sahoo · IIT (BHU)"
			})
		]
	});
}
function SlideWhy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Motivation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-4xl font-display text-slide font-semibold tracking-tight text-cream",
				children: "Why this problem?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-lg leading-normal text-muted",
				children: "An institution chooses how much risk to take. Its failure can impose losses on others through interbank obligations. Private optimality and system optimality need not coincide."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TensionCard, {
					label: "Private upside",
					title: "More risk can improve private returns",
					body: "In the tested range, a higher risky-asset fraction raises terminal equity for the institution that takes the risk."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TensionCard, {
					label: "Network downside",
					title: "The same choice raises network distress",
					body: "Shortfalls propagate along directed obligations. Partial distress can grow even when the system never crosses a collapse threshold.",
					sand: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 rounded-md bg-panel px-4 py-3 text-sm leading-normal text-cream/85 shadow-border",
				children: "The privately optimal decision need not be system-optimal. This is a computational investigation, not a reproduction of a published theorem."
			})
		]
	});
}
function SlideQuestion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Design of the study" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Research question and hypotheses"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Hypothesis, {
							n: "H1",
							title: "Intensity",
							children: [
								"Raising the risky-asset fraction ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
								" increases private terminal equity, while unpaid interbank obligations and the distressed-bank fraction rise faster than private gains."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Hypothesis, {
							n: "H2",
							title: "Participation",
							children: [
								"Raising the share ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
								" of high-risk institutions produces a larger network externality than isolated high-risk behaviour — even if binary collapse stays at 0%."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Hypothesis, {
							n: "H3",
							title: "Internalization",
							children: [
								"A system-aware objective ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "J" }),
								" = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "U" }),
								" − λ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "L" }),
								" shifts the preferred tested",
								" ",
								"(",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
								") toward lower or interior grid values as λ increases."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex flex-col justify-between rounded-xl bg-panel p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker font-medium uppercase tracking-kicker text-teal",
						children: "Contribution of this computational study"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-3 text-sm leading-normal text-cream/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Separates risk intensity from risk participation." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Measures systemic effects continuously, not only as collapse." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"3. Introduces a simple system-aware objective ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display italic",
									children: "U"
								}),
								" − λ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display italic",
									children: "L"
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4. Tracks how preferred risk changes as systemic costs are internalized." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "5. Adds adaptive population dynamics as a behavioural extension." })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs leading-normal text-muted",
						children: "This is a computational framework / proof-of-concept, not a claim of a new systemic-risk theorem."
					})]
				})]
			})
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-kicker font-medium uppercase tracking-kicker text-teal",
		children
	});
}
function TensionCard({ label, title, body, sand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-xl bg-panel p-6 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-kicker font-medium uppercase tracking-kicker", sand ? "text-sand" : "text-teal"),
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl leading-snug text-cream",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-normal text-muted",
				children: body
			})
		]
	});
}
function Hypothesis({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-panel px-4 py-3 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-kicker font-medium uppercase tracking-kicker text-teal",
			children: [
				n,
				" · ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm leading-normal text-cream/90",
			children
		})]
	});
}
function SlideExp1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Experiment 1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "What happens when a risky institution becomes more aggressive?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
					" = 0.20 · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
					" grid 0.20–0.80 · 2,000 trials/point · seed 20261001"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-72 flex-col rounded-xl bg-panel p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntensityChart, { className: "flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartKey, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs text-subtle",
							children: "Endpoints are exact MC values"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-rows-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "0.5039 → 0.5163",
							l: "Terminal equity",
							d: "High-risk institutions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "0.0257 → 0.0842",
							l: "Unpaid obligations",
							d: "Mean unpaid interbank",
							sand: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "0.41% → 0.94%",
							l: "Distressed banks",
							d: "Share with ri < 1"
						})
					]
				})]
			})
		]
	});
}
function SlideExp1Learn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Experiment 1 · interpretation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Private benefit and network damage diverge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-3xl text-base leading-normal text-muted",
				children: [
					"As ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
					" rises from 0.20 to 0.80, the privately useful move is cheap to the institution and expensive to the network — but the expense is partial distress, not collapse."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnRow, {
						dir: "up",
						title: "Risky-institution payoff rises",
						body: "Terminal equity 0.5039 → 0.5163. About +2.5% over the tested range. The private incentive to intensify is positive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnRow, {
						dir: "up",
						title: "Unpaid obligations rise much faster",
						body: "Mean unpaid 0.0257 → 0.0842. Roughly +228%. Network losses scale far more steeply than private equity.",
						sand: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnRow, {
						dir: "up",
						title: "Distressed-bank fraction rises",
						body: "0.41% → 0.94%. More institutions fail to pay in full, even though none of this registers as a systemic event."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnRow, {
						dir: "flat",
						title: "Binary systemic failure remains 0%",
						body: "D never crosses τ = 0.30. A collapse metric would have reported ‘nothing happened.’ Continuous measures disagree."
					})
				]
			})
		]
	});
}
function SlideExp2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Experiment 2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "What happens when more institutions take the same risk?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" }),
					" = fraction on the high-risk strategy · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "L" }),
					" = 0.20 · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "q" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "R" }),
					" = 0.80 · 2,000 trials · CRN across ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { children: "x" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid min-h-0 flex-1 grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-72 flex-col rounded-xl bg-panel p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticipationChart, { className: "flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartKey, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs text-subtle",
							children: "Minimum unpaid near x = 0.20"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-rows-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "0.5045 → 0.5152",
							l: "Aggregate equity",
							d: "x = 0.05 → 0.95"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "0.0681 → 0.2259",
							l: "Unpaid obligations",
							d: "Min near x = 0.20",
							sand: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "2.106%",
							l: "Distressed banks",
							d: "At x = 0.95"
						})
					]
				})]
			})
		]
	});
}
function SlideTradeoff() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-14 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium uppercase tracking-kicker text-teal",
				children: "Experiment 2 · interpretation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-slide font-semibold tracking-tight text-cream",
				children: "Widespread risk-taking is a different object"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-panel p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker font-medium uppercase tracking-kicker text-teal",
								children: "Isolated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl tabular-nums text-cream",
								children: "x = 0.05"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-normal text-muted",
								children: "A thin high-risk fringe. Unpaid obligations 0.0681. The network still contains a large conservative core that can absorb some shortfalls."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-panel p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker font-medium uppercase tracking-kicker text-sand",
								children: "Mixed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl tabular-nums text-cream",
								children: "x ≈ 0.20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-normal text-muted",
								children: "Unpaid obligations reach a grid minimum near here. Strategy mixing changes who is exposed to whom. Reported as a grid observation, not a mixing theorem."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-panel p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker font-medium uppercase tracking-kicker text-rose",
								children: "Widespread"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl tabular-nums text-cream",
								children: "x = 0.95"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-normal text-muted",
								children: "Unpaid 0.2259 — about 3.3× the isolated case. Distressed-bank fraction 2.106%. Aggregate equity has only risen ~2%."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 rounded-md bg-panel px-4 py-3 text-sm leading-normal text-cream/90 shadow-border",
				children: "The network externality of correlated risk-taking is much larger than that of isolated risk-taking. Intensity and participation are not interchangeable instruments."
			})
		]
	});
}
function Stat({ k, l, d, sand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-center rounded-xl bg-panel px-4 py-3 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `font-display text-2xl tabular-nums leading-tight ${sand ? "text-sand" : "text-cream"}`,
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-cream/90",
				children: l
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: d
			})
		]
	});
}
function LearnRow({ title, body, sand, dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-panel p-5 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-kicker font-medium uppercase tracking-kicker ${sand ? "text-sand" : "text-teal"}`,
				children: dir === "up" ? "Increases" : "Unchanged"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-xl text-cream",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-muted",
				children: body
			})
		]
	});
}
var SLIDES = [
	{
		id: "title",
		n: 1,
		kicker: "Title",
		title: "Adaptive Risk-Taking and Systemic Risk",
		notes: "Open with the research question. Stress fraction vs intensity as two separate instruments. Name, IIT (BHU).",
		Component: SlideTitle
	},
	{
		id: "why",
		n: 2,
		kicker: "Motivation",
		title: "Why this problem?",
		notes: "Core tension: private upside vs network downside. This is computational, not a theorem reproduction.",
		Component: SlideWhy
	},
	{
		id: "question",
		n: 3,
		kicker: "Design",
		title: "Research question and hypotheses",
		notes: "State H1–H3. End on the contribution list and the ‘not a new theorem’ line — that reads as maturity, not weakness.",
		Component: SlideQuestion
	},
	{
		id: "network",
		n: 4,
		kicker: "Model",
		title: "A heterogeneous financial network",
		notes: "Walk the balance sheet. Homophily vs cross-group links. Directed edge = obligation, not friendship.",
		Component: SlideNetwork
	},
	{
		id: "risk",
		n: 5,
		kicker: "Instruments",
		title: "Risk-taking: intensity versus participation",
		notes: "This is the modelling choice Saha should see: two knobs, not one. qR is intensity; x is participation.",
		Component: SlideRisk
	},
	{
		id: "clearing",
		n: 6,
		kicker: "Mechanism",
		title: "Risk → shock → clearing → contagion",
		notes: "Spend time on ri. Shortfall is a loss to creditors. Do not overclaim Eisenberg–Noe.",
		Component: SlideClearing
	},
	{
		id: "measure",
		n: 7,
		kicker: "Measurement",
		title: "How do we measure systemic risk?",
		notes: "Binary stayed at 0%. That is why continuous measures are preferred. τ = 0.30 is experiment-specific.",
		Component: SlideMeasure
	},
	{
		id: "validation",
		n: 8,
		kicker: "Validation",
		title: "Model validation and sanity checks",
		notes: "The point of this slide: the simulator was interrogated before the grids were trusted. Implementation, economic sanity, statistical design.",
		Component: SlideValidation
	},
	{
		id: "exp1",
		n: 9,
		kicker: "Experiment 1",
		title: "Risk intensity",
		notes: "Show the curve. Read the three endpoints. Do not interpret yet — that is the next slide.",
		Component: SlideExp1
	},
	{
		id: "exp1learn",
		n: 10,
		kicker: "Experiment 1",
		title: "What Experiment 1 tells us",
		notes: "Private +2.5% equity vs +228% unpaid. Collapse metric silent. Divergence is the result.",
		Component: SlideExp1Learn
	},
	{
		id: "exp2",
		n: 11,
		kicker: "Experiment 2",
		title: "Risk participation",
		notes: "Note the unpaid minimum near x = 0.20, then the surge to 0.2259. CRN across x.",
		Component: SlideExp2
	},
	{
		id: "tradeoff",
		n: 12,
		kicker: "Experiment 2",
		title: "The key trade-off",
		notes: "Widespread ≠ scaled-up isolated. 3.3× unpaid vs ~2% equity. Mixing minimum is an observation, not a theorem.",
		Component: SlideTradeoff
	},
	{
		id: "optima",
		n: 13,
		kicker: "Optimization",
		title: "System-aware optimization",
		notes: "Click λ. Private corner at λ = 0; interior from λ = 0.20. Discrete-grid caveat.",
		Component: SlideOptima
	},
	{
		id: "dynamics",
		n: 14,
		kicker: "Dynamics",
		title: "Adaptive dynamics",
		notes: "Replicator analogue. x moves 0.50 → 0.5064 in 20 steps: private advantage exists, population update is slow.",
		Component: SlideDynamics
	},
	{
		id: "close",
		n: 15,
		kicker: "Close",
		title: "Conclusions, limitations, and next steps",
		notes: "Three claims only. Limitations honestly. Freeze the computational model; next is robustness and theory.",
		Component: SlideClose
	}
];
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/80 disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			default: "bg-cream text-ink hover:bg-cream/90",
			ghost: "text-cream/80 hover:bg-panel hover:text-cream",
			outline: "text-cream shadow-border hover:bg-panel",
			teal: "bg-teal text-ink hover:bg-teal/90"
		},
		size: {
			default: "h-11 px-4 text-sm",
			sm: "h-9 px-3 text-sm",
			icon: "size-11",
			iconSm: "size-9"
		}
	},
	defaultVariants: {
		variant: "ghost",
		size: "icon"
	}
});
var Button = import_react.forwardRef(function Button({ className, variant, size, type = "button", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
var LAST = SLIDES.length - 1;
var W = 1280;
var H = 720;
function readHash() {
	if (typeof window === "undefined") return 0;
	const n = Number.parseInt(window.location.hash.replace("#", ""), 10);
	if (Number.isFinite(n) && n >= 1 && n <= SLIDES.length) return n - 1;
	return 0;
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [overview, setOverview] = (0, import_react.useState)(false);
	const [help, setHelp] = (0, import_react.useState)(false);
	const [notes, setNotes] = (0, import_react.useState)(false);
	const [compact, setCompact] = (0, import_react.useState)(false);
	const [scale, setScale] = (0, import_react.useState)(1);
	const frameRef = (0, import_react.useRef)(null);
	const touchX = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((i) => {
		const next = Math.max(0, Math.min(LAST, i));
		setIndex(next);
		setOverview(false);
		if (typeof window !== "undefined") window.history.replaceState(null, "", `#${next + 1}`);
	}, []);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 860px)");
		const apply = () => setCompact(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = frameRef.current;
		if (!el || compact) return;
		const update = () => {
			const s = Math.min(el.clientWidth / W, el.clientHeight / H);
			setScale(s);
		};
		update();
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => ro.disconnect();
	}, [compact]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
				e.preventDefault();
				if (overview) go(index);
				else go(index + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(index - 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(LAST);
			else if (e.key === "Escape") {
				if (help) setHelp(false);
				else if (overview) setOverview(false);
				else setOverview(true);
			} else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") setOverview((v) => !v);
			else if (e.key === "n" || e.key === "N") setNotes((v) => !v);
			else if (e.key === "?" || e.key === "h" || e.key === "H") setHelp((v) => !v);
			else if (e.key === "f" || e.key === "F") {
				if (!document.fullscreenElement) document.documentElement.requestFullscreen();
				else document.exitFullscreen();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		help,
		index,
		overview
	]);
	(0, import_react.useEffect)(() => {
		setIndex(readHash());
		const onHash = () => setIndex(readHash());
		window.addEventListener("hashchange", onHash);
		return () => window.removeEventListener("hashchange", onHash);
	}, []);
	const slide = SLIDES[index] ?? SLIDES[0];
	const SlideView = slide.Component;
	const onTouchStart = (e) => {
		touchX.current = e.changedTouches[0]?.clientX ?? null;
	};
	const onTouchEnd = (e) => {
		const start = touchX.current;
		const end = e.changedTouches[0]?.clientX;
		touchX.current = null;
		if (start == null || end == null) return;
		const dx = end - start;
		if (dx < -48) go(index + 1);
		if (dx > 48) go(index - 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-svh flex-col bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 items-center justify-between gap-3 px-4 py-2 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted",
						children: "Himanshu Sahoo · IIT (BHU)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-cream/90",
						children: slide.kicker
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"aria-label": "Speaker notes",
							onClick: () => setNotes((v) => !v),
							className: notes ? "bg-panel" : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNote, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"aria-label": "Overview",
							onClick: () => setOverview((v) => !v),
							className: overview ? "bg-panel" : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"aria-label": "Keyboard shortcuts",
							onClick: () => setHelp((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: frameRef,
				className: "relative min-h-0 flex-1",
				onTouchStart,
				onTouchEnd,
				children: compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "slide-surface compact-deck relative h-full overflow-x-hidden overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "slide-enter",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {})
					}, slide.id)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full w-full place-items-center overflow-hidden p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							width: W * scale,
							height: H * scale
						},
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "slide-surface absolute top-0 left-0 overflow-hidden rounded-xl shadow-border",
							style: {
								width: W,
								height: H,
								transform: `scale(${scale})`,
								transformOrigin: "top left"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "slide-enter relative h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {})
							}, slide.id)
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex shrink-0 items-center gap-3 px-4 py-3 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"aria-label": "Previous slide",
						onClick: () => go(index - 1),
						disabled: index === 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1 overflow-hidden rounded-full bg-panel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-teal transition-[width] duration-200 ease-out",
								style: { width: `${(index + 1) / SLIDES.length * 100}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 truncate text-xs tabular-nums text-muted",
							children: [
								index + 1,
								" / ",
								SLIDES.length,
								" · ",
								slide.title
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"aria-label": "Next slide",
						onClick: () => go(index + 1),
						disabled: index === LAST,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-t border-line bg-ink-2 px-4 py-3 text-sm leading-normal text-cream/90 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium uppercase tracking-kicker text-teal",
					children: "Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: slide.notes
				})]
			}) : null,
			overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-20 overflow-y-auto bg-ink/95 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-cream",
						children: "Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"aria-label": "Close overview",
						onClick: () => setOverview(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
					children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(i),
						className: cn("pressable flex min-h-24 w-full flex-col rounded-lg bg-panel p-4 text-left shadow-border", i === index && "ring-2 ring-teal"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-teal",
								children: String(s.n).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-kicker uppercase tracking-kicker text-muted",
								children: s.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 font-display text-lg leading-snug text-cream",
								children: s.title
							})
						]
					}) }, s.id))
				})]
			}) : null,
			help ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-30 grid place-items-center bg-ink/80 p-4",
				onClick: () => setHelp(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl bg-ink-2 p-6 shadow-border",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-cream",
							children: "Shortcuts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"aria-label": "Close help",
							onClick: () => setHelp(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							["→ / Space", "Next slide"],
							["←", "Previous slide"],
							["O or Esc", "Overview"],
							["N", "Speaker notes"],
							["F", "Fullscreen"],
							["Home / End", "First / last"],
							["?", "This panel"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-teal",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-muted",
								children: v
							})]
						}, k))
					})]
				})
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
