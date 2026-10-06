import { cream, muted, sand, teal } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type NodeT = { id: string; kind: "L" | "R"; x: number; y: number };
type EdgeT = { from: string; to: string };

const L_NODES: NodeT[] = [
  { id: "L0", kind: "L", x: 168, y: 118 },
  { id: "L1", kind: "L", x: 96, y: 168 },
  { id: "L2", kind: "L", x: 78, y: 248 },
  { id: "L3", kind: "L", x: 132, y: 318 },
  { id: "L4", kind: "L", x: 220, y: 338 },
  { id: "L5", kind: "L", x: 286, y: 278 },
  { id: "L6", kind: "L", x: 292, y: 188 },
  { id: "L7", kind: "L", x: 236, y: 122 },
];

const R_NODES: NodeT[] = [
  { id: "R0", kind: "R", x: 468, y: 112 },
  { id: "R1", kind: "R", x: 396, y: 162 },
  { id: "R2", kind: "R", x: 388, y: 248 },
  { id: "R3", kind: "R", x: 446, y: 322 },
  { id: "R4", kind: "R", x: 538, y: 338 },
  { id: "R5", kind: "R", x: 604, y: 268 },
  { id: "R6", kind: "R", x: 598, y: 176 },
  { id: "R7", kind: "R", x: 534, y: 118 },
];

const NODES = [...L_NODES, ...R_NODES];
const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));

const EDGES: EdgeT[] = [
  { from: "L0", to: "L1" },
  { from: "L1", to: "L2" },
  { from: "L2", to: "L3" },
  { from: "L3", to: "L4" },
  { from: "L4", to: "L5" },
  { from: "L5", to: "L6" },
  { from: "L6", to: "L0" },
  { from: "L7", to: "L0" },
  { from: "L7", to: "L5" },
  { from: "L1", to: "L4" },
  { from: "R0", to: "R1" },
  { from: "R1", to: "R2" },
  { from: "R2", to: "R3" },
  { from: "R3", to: "R4" },
  { from: "R4", to: "R5" },
  { from: "R5", to: "R6" },
  { from: "R6", to: "R0" },
  { from: "R7", to: "R0" },
  { from: "R7", to: "R4" },
  { from: "R1", to: "R5" },
  { from: "L6", to: "R1" },
  { from: "L5", to: "R2" },
  { from: "R2", to: "L5" },
  { from: "L4", to: "R3" },
];

function Arrow({ from, to }: EdgeT) {
  const a = BY_ID[from];
  const b = BY_ID[to];
  if (!a || !b) return null;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const r = 11;
  const x1 = a.x + (dx / len) * r;
  const y1 = a.y + (dy / len) * r;
  const x2 = b.x - (dx / len) * r;
  const y2 = b.y - (dy / len) * r;
  const cross = a.kind !== b.kind;
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={cross ? sand : teal}
      strokeOpacity={cross ? 0.55 : 0.38}
      strokeWidth={cross ? 1.4 : 1.1}
      markerEnd="url(#arrow)"
    />
  );
}

export function NetworkGraph({
  className,
  caption = true,
}: {
  className?: string;
  caption?: boolean;
}) {
  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      <svg viewBox="0 0 680 430" className="h-full w-full" role="img" aria-label="Heterogeneous financial network">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1.2 L 8 5 L 0 8.8" fill="none" stroke={muted} strokeWidth="1.4" />
          </marker>
        </defs>
        {EDGES.map((e) => (
          <Arrow key={`${e.from}-${e.to}`} {...e} />
        ))}
        {NODES.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={10}
              fill={n.kind === "L" ? teal : sand}
              fillOpacity={0.92}
              stroke={cream}
              strokeOpacity={0.18}
            />
            <text
              x={n.x}
              y={n.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={inkText(n.kind)}
              fontSize="8"
              fontFamily="Source Sans 3, sans-serif"
              fontWeight="600"
            >
              {n.kind}
            </text>
          </g>
        ))}
        <text x="168" y="392" textAnchor="middle" fill={teal} fontSize="12" fontFamily="Source Sans 3, sans-serif">
          Low-risk cluster
        </text>
        <text x="512" y="392" textAnchor="middle" fill={sand} fontSize="12" fontFamily="Source Sans 3, sans-serif">
          High-risk cluster
        </text>
      </svg>
      {caption ? (
        <p className="mt-1 text-center text-xs text-muted">
          Directed edge <span className="font-display italic">i → j</span> means <span className="font-display italic">i</span> owes{" "}
          <span className="font-display italic">j</span>. Within-group links (p<sub>w</sub>) denser than cross-group (p<sub>c</sub>).
        </p>
      ) : null}
    </div>
  );
}

function inkText(kind: "L" | "R") {
  return kind === "L" ? "#07141a" : "#1a1408";
}

export function TitleNetwork({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 430" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <marker id="t-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.2 L 8 5 L 0 8.8" fill="none" stroke={muted} strokeWidth="1.2" />
        </marker>
      </defs>
      {EDGES.map((e) => {
        const a = BY_ID[e.from];
        const b = BY_ID[e.to];
        if (!a || !b) return null;
        return (
          <line
            key={`${e.from}-${e.to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={a.kind === b.kind ? teal : sand}
            strokeOpacity={0.28}
            strokeWidth={1.1}
          />
        );
      })}
      {NODES.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.kind === "R" ? 8 : 6.5}
          fill={n.kind === "L" ? teal : sand}
          fillOpacity={n.kind === "R" ? 0.9 : 0.7}
        />
      ))}
    </svg>
  );
}
