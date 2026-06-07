"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ControlFlowSim() {
  const [n, setN] = useState(5);
  const [trace, setTrace] = useState<string[]>([]);

  const run = () => {
    const t: string[] = [];
    t.push(`start: n = ${n}`);
    if (n > 0) t.push(`if (n > 0) → true`);
    else { t.push(`if (n > 0) → false, skip`); setTrace(t); return; }
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) t.push(`i=${i} even → continue printing`);
      else if (i === n) t.push(`i=${i} last → break`);
      t.push(`print: i = ${i}`);
    }
    t.push(`end`);
    setTrace(t);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Trace <code>if</code>, <code>for</code>, <code>continue</code>, and <code>break</code> with a step-by-step log.</p>
      <div className="flex items-center gap-2">
        <label className="text-sm">n =</label>
        <input type="number" value={n} onChange={e => setN(parseInt(e.target.value) || 0)} className="w-20 p-2 rounded-md bg-background border border-border/40 text-sm" />
        <Button onClick={run}>Run</Button>
      </div>
      {trace.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap max-h-64 overflow-y-auto">
          {trace.join("\n")}
        </pre>
      )}
    </div>
  );
}
