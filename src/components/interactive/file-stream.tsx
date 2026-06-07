"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const STEPS = [
  "new FileWriter(\"a.txt\")  → opens file for writing",
  "writer.write(\"Hello\")  → writes bytes via stream chain",
  "writer.flush()  → forces buffered data to disk",
  "writer.close()  → releases OS handle"
];

export function FileStreamSim() {
  const [step, setStep] = useState(0);
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Trace a file write through Java's I/O stream chain.</p>
      <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-border/30 whitespace-pre-wrap">
        {STEPS.slice(0, step + 1).map((s, i) => (
          <div key={i} className={i === step ? "bg-amber-500/20 -mx-3 px-3 py-0.5" : "opacity-60"}>
            {i + 1}. {s}
          </div>
        ))}
      </pre>
      <div className="flex gap-2">
        <Button onClick={() => setStep(s => Math.max(0, s - 1))} variant="outline" size="sm">←</Button>
        <Button onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))} size="sm">→</Button>
        <Button onClick={() => setStep(0)} variant="ghost" size="sm">Reset</Button>
      </div>
    </div>
  );
}
