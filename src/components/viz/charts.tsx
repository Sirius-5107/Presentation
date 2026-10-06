import { useEffect, useState, type ReactNode } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cream, grid, muted, sand, teal } from "@/lib/tokens";
import {
  intensityGrid,
  participationGrid,
  replicator,
} from "@/lib/experiment-data";
import { cn } from "@/lib/utils";

function Mounted({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return <>{fallback ?? <div className="h-full min-h-48 rounded-lg bg-panel" />}</>;
  return <>{children}</>;
}

function Tip({
  active,
  payload,
  label,
  labelPrefix,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number; color?: string }>;
  label?: number | string;
  labelPrefix: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-ink-2 px-3 py-2 text-xs text-cream shadow-border">
      <p className="mb-1 text-muted">
        {labelPrefix} {typeof label === "number" ? label.toFixed(2) : label}
      </p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {typeof p.value === "number" ? p.value.toFixed(4) : p.value}
        </p>
      ))}
    </div>
  );
}

const axis = {
  tick: { fill: muted, fontSize: 11 },
  axisLine: { stroke: grid },
  tickLine: { stroke: grid },
};

export function IntensityChart({ className }: { className?: string }) {
  return (
    <div className={cn("h-full min-h-56 w-full", className)}>
      <Mounted>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={intensityGrid} margin={{ top: 12, right: 36, left: 4, bottom: 4 }}>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="qR" tickFormatter={(v: number) => v.toFixed(2)} {...axis} />
            <YAxis
              yAxisId="eq"
              domain={[0.502, 0.518]}
              tickFormatter={(v: number) => v.toFixed(3)}
              stroke={teal}
              {...axis}
            />
            <YAxis
              yAxisId="un"
              orientation="right"
              domain={[0.02, 0.09]}
              tickFormatter={(v: number) => v.toFixed(3)}
              stroke={sand}
              {...axis}
            />
            <Tooltip content={<Tip labelPrefix="qR =" />} />
            <Line
              yAxisId="eq"
              type="monotone"
              dataKey="equity"
              name="Terminal equity"
              stroke={teal}
              strokeWidth={2.4}
              dot={{ r: 3, fill: teal, stroke: cream, strokeWidth: 1 }}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="un"
              type="monotone"
              dataKey="unpaid"
              name="Unpaid obligations"
              stroke={sand}
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={{ r: 3, fill: sand, stroke: cream, strokeWidth: 1 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Mounted>
    </div>
  );
}

export function ParticipationChart({ className }: { className?: string }) {
  return (
    <div className={cn("h-full min-h-56 w-full", className)}>
      <Mounted>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={participationGrid} margin={{ top: 12, right: 36, left: 4, bottom: 4 }}>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="x" tickFormatter={(v: number) => v.toFixed(2)} {...axis} />
            <YAxis
              yAxisId="eq"
              domain={[0.503, 0.517]}
              tickFormatter={(v: number) => v.toFixed(3)}
              stroke={teal}
              {...axis}
            />
            <YAxis
              yAxisId="un"
              orientation="right"
              domain={[0.04, 0.24]}
              tickFormatter={(v: number) => v.toFixed(2)}
              stroke={sand}
              {...axis}
            />
            <Tooltip content={<Tip labelPrefix="x =" />} />
            <Line
              yAxisId="eq"
              type="monotone"
              dataKey="equity"
              name="Aggregate equity"
              stroke={teal}
              strokeWidth={2.4}
              dot={{ r: 3, fill: teal, stroke: cream, strokeWidth: 1 }}
            />
            <Line
              yAxisId="un"
              type="monotone"
              dataKey="unpaid"
              name="Unpaid obligations"
              stroke={sand}
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={{ r: 3, fill: sand, stroke: cream, strokeWidth: 1 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Mounted>
    </div>
  );
}

export function ReplicatorChart({ className }: { className?: string }) {
  return (
    <div className={cn("h-full min-h-44 w-full", className)}>
      <Mounted>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={replicator} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="t" {...axis} />
            <YAxis domain={[0.499, 0.508]} tickFormatter={(v: number) => v.toFixed(3)} {...axis} />
            <Tooltip content={<Tip labelPrefix="step" />} />
            <Line
              type="monotone"
              dataKey="x"
              name="Participation x"
              stroke={teal}
              strokeWidth={2.2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Mounted>
    </div>
  );
}

export function ChartKey() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
      <span className="inline-flex items-center gap-2">
        <span className="h-px w-6 bg-teal" /> Solid · equity
      </span>
      <span className="inline-flex items-center gap-2">
        <span className="h-px w-6 border-t border-dashed border-sand" /> Dashed · unpaid obligations
      </span>
    </div>
  );
}
