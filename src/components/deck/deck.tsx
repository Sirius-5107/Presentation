import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, HelpCircle, StickyNote, X } from "lucide-react";
import { SLIDES } from "@/components/slides/registry";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LAST = SLIDES.length - 1;
const W = 1280;
const H = 720;

function readHash() {
  if (typeof window === "undefined") return 0;
  const n = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(n) && n >= 1 && n <= SLIDES.length) return n - 1;
  return 0;
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);
  const [notes, setNotes] = useState(false);
  const [compact, setCompact] = useState(false);
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    const next = Math.max(0, Math.min(LAST, i));
    setIndex(next);
    setOverview(false);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${next + 1}`);
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const apply = () => setCompact(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        if (overview) go(index);
        else go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(LAST);
      } else if (e.key === "Escape") {
        if (help) setHelp(false);
        else if (overview) setOverview(false);
        else setOverview(true);
      } else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") {
        setOverview((v) => !v);
      } else if (e.key === "n" || e.key === "N") {
        setNotes((v) => !v);
      } else if (e.key === "?" || e.key === "h" || e.key === "H") {
        setHelp((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) void document.documentElement.requestFullscreen();
        else void document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, help, index, overview]);

  useEffect(() => {
    setIndex(readHash());
    const onHash = () => setIndex(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const slide = SLIDES[index] ?? SLIDES[0];
  const SlideView = slide.Component;

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchX.current;
    const end = e.changedTouches[0]?.clientX;
    touchX.current = null;
    if (start == null || end == null) return;
    const dx = end - start;
    if (dx < -48) go(index + 1);
    if (dx > 48) go(index - 1);
  };

  return (
    <div className="relative flex h-svh flex-col bg-ink text-cream">
      <header className="flex shrink-0 items-center justify-between gap-3 px-4 py-2 md:px-6">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted">
            Himanshu Sahoo · IIT (BHU)
          </p>
          <p className="truncate text-sm text-cream/90">{slide.kicker}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button aria-label="Speaker notes" onClick={() => setNotes((v) => !v)} className={notes ? "bg-panel" : undefined}>
            <StickyNote className="size-5" />
          </Button>
          <Button aria-label="Overview" onClick={() => setOverview((v) => !v)} className={overview ? "bg-panel" : undefined}>
            <Grid3x3 className="size-5" />
          </Button>
          <Button aria-label="Keyboard shortcuts" onClick={() => setHelp((v) => !v)}>
            <HelpCircle className="size-5" />
          </Button>
        </div>
      </header>

      <div
        ref={frameRef}
        className="relative min-h-0 flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {compact ? (
          <div className="slide-surface compact-deck relative h-full overflow-x-hidden overflow-y-auto">
            <div key={slide.id} className="slide-enter">
              <SlideView />
            </div>
          </div>
        ) : (
          <div className="grid h-full w-full place-items-center overflow-hidden p-2">
            <div style={{ width: W * scale, height: H * scale }} className="relative">
              <div
                className="slide-surface absolute top-0 left-0 overflow-hidden rounded-xl shadow-border"
                style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}
              >
                <div key={slide.id} className="slide-enter relative h-full">
                  <SlideView />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="flex shrink-0 items-center gap-3 px-4 py-3 md:px-6">
        <Button aria-label="Previous slide" onClick={() => go(index - 1)} disabled={index === 0}>
          <ChevronLeft className="size-5" />
        </Button>
        <div className="min-w-0 flex-1">
          <div className="h-1 overflow-hidden rounded-full bg-panel">
            <div
              className="h-full bg-teal transition-[width] duration-200 ease-out"
              style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
          <p className="mt-1 truncate text-xs tabular-nums text-muted">
            {index + 1} / {SLIDES.length} · {slide.title}
          </p>
        </div>
        <Button aria-label="Next slide" onClick={() => go(index + 1)} disabled={index === LAST}>
          <ChevronRight className="size-5" />
        </Button>
      </footer>

      {notes ? (
        <aside className="border-t border-line bg-ink-2 px-4 py-3 text-sm leading-normal text-cream/90 md:px-6">
          <p className="text-kicker font-medium uppercase tracking-kicker text-teal">Notes</p>
          <p className="mt-1">{slide.notes}</p>
        </aside>
      ) : null}

      {overview ? (
        <div className="absolute inset-0 z-20 overflow-y-auto bg-ink/95 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl text-cream">Overview</h2>
            <Button aria-label="Close overview" onClick={() => setOverview(false)}>
              <X className="size-5" />
            </Button>
          </div>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SLIDES.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "pressable flex min-h-24 w-full flex-col rounded-lg bg-panel p-4 text-left shadow-border",
                    i === index && "ring-2 ring-teal",
                  )}
                >
                  <span className="font-mono text-xs text-teal">{String(s.n).padStart(2, "0")}</span>
                  <span className="mt-1 text-kicker uppercase tracking-kicker text-muted">{s.kicker}</span>
                  <span className="mt-1 font-display text-lg leading-snug text-cream">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {help ? (
        <div
          className="absolute inset-0 z-30 grid place-items-center bg-ink/80 p-4"
          onClick={() => setHelp(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-ink-2 p-6 shadow-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-cream">Shortcuts</h2>
              <Button aria-label="Close help" onClick={() => setHelp(false)}>
                <X className="size-5" />
              </Button>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              {[
                ["→ / Space", "Next slide"],
                ["←", "Previous slide"],
                ["O or Esc", "Overview"],
                ["N", "Speaker notes"],
                ["F", "Fullscreen"],
                ["Home / End", "First / last"],
                ["?", "This panel"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="font-mono text-teal">{k}</dt>
                  <dd className="text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </div>
  );
}
