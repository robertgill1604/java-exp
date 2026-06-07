"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Step = "try" | "exception" | "catch" | "finally" | "end";
const SCENARIOS = [
  { name: "try → catch → finally", steps: ["try", "exception", "catch", "finally", "end"] as Step[] },
  { name: "try → finally (no exception)", steps: ["try", "finally", "end"] as Step[] },
  { name: "try → exception (unhandled)", steps: ["try", "exception", "end"] as Step[] }
];

export function ExceptionFlowSim() {
  const [scenario, setScenario] = useState(0);
  const [step, setStep] = useState(0);
  const s = SCENARIOS[scenario];
  const current = s.steps[step];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Trace exception flow. Each block executes in order; missing blocks are skipped.</p>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((sc, i) => (
          <button
            key={i}
            onClick={() => { setScenario(i); setStep(0); }}
            className={`px-3 py-1.5 text-xs rounded-md border transition ${
              scenario === i ? "border-primary bg-primary/10 text-primary" : "border-border/40 hover:border-primary/40"
            }`}
          >
            {sc.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {(["try", "exception", "catch", "finally", "end"] as Step[]).map(blk => {
          const reached = s.steps.indexOf(blk) <= step;
          const isCurrent = current === blk;
          const skipped = !s.steps.includes(blk);
          return (
            <div
              key={blk}
              className={`p-3 rounded-md text-center text-xs font-mono border transition ${
                skipped ? "border-dashed border-border/30 opacity-30" :
                isCurrent ? "border-amber-500 bg-amber-500/10 scale-105" :
                reached ? "border-emerald-500 bg-emerald-500/10" :
                "border-border/40"
              }`}
            >
              {blk}
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setStep(prev => Math.min(s.steps.length - 1, prev + 1))} disabled={step >= s.steps.length - 1}>
          Next
        </Button>
        <Button variant="outline" onClick={() => setStep(0)}>Reset</Button>
      </div>
    </div>
  );
}
