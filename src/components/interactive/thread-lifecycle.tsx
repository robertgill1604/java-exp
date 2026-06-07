"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

const STATES = ["NEW", "RUNNABLE", "RUNNING", "BLOCKED/WAITING", "TERMINATED"] as const;
type State = typeof STATES[number];

export function ThreadLifecycleSim() {
  const [state, setState] = useState<State>("NEW");
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState(0);

  const next = () => {
    if (state === "NEW") setState("RUNNABLE");
    else if (state === "RUNNABLE") setState("RUNNING");
    else if (state === "RUNNING") setState("BLOCKED/WAITING");
    else if (state === "BLOCKED/WAITING") setState("RUNNABLE");
    else if (state === "TERMINATED") return;
    setTick(t => t + 1);
  };

  const terminate = () => {
    setState("TERMINATED");
    setRunning(false);
  };

  const reset = () => { setState("NEW"); setRunning(false); setTick(0); };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Walk a thread through its lifecycle. Click <strong>Next</strong> to advance states.</p>
      <div className="flex flex-wrap gap-2">
        {STATES.map(s => (
          <div
            key={s}
            className={`px-3 py-2 rounded-md text-xs font-mono border transition ${
              state === s ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg" : "border-border/40 opacity-40"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button onClick={next} disabled={state === "TERMINATED"} className="gap-2"><Play className="h-4 w-4" /> Next State</Button>
        <Button onClick={terminate} variant="destructive" disabled={state === "TERMINATED"} className="gap-2"><Pause className="h-4 w-4" /> Terminate</Button>
        <Button onClick={reset} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
        <span className="ml-auto text-xs text-muted-foreground self-center">Tick: {tick}</span>
      </div>
      <div className="text-xs font-mono p-3 rounded-md bg-zinc-950 text-zinc-300 border border-border/30">
        <div><span className="text-amber-400">currentState()</span> = {state};</div>
        {state === "NEW" && <div className="text-zinc-500 mt-1">// thread created, not yet started</div>}
        {state === "RUNNABLE" && <div className="text-zinc-500 mt-1">// start() called; ready to run, waiting for CPU</div>}
        {state === "RUNNING" && <div className="text-zinc-500 mt-1">// run() executing on CPU</div>}
        {state === "BLOCKED/WAITING" && <div className="text-zinc-500 mt-1">// sleep(), wait(), I/O, lock contention</div>}
        {state === "TERMINATED" && <div className="text-zinc-500 mt-1">// run() returned or stop() called</div>}
      </div>
    </div>
  );
}
