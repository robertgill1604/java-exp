"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AutoboxingSim() {
  const [intVal, setIntVal] = useState(42);
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const lines: string[] = [];
    const x: number = intVal;
    lines.push(`int x = ${x};  // primitive, on stack`);
    const y: number = x;
    lines.push(`Integer y = x;  // autoboxed to Integer object (heap)`);
    lines.push(`int z = y;  // auto-unboxed back to int`);
    lines.push("");
    lines.push(`x == y ?  → ${x === y}  (unboxed comparison)`);
    const a = new Number(100);
    const b = new Number(100);
    lines.push(`new Integer(100) == new Integer(100) → ${a === b}  (different objects!)`);
    lines.push(`a.equals(b) → ${a.valueOf() === b.valueOf()}`);
    setLog(lines);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Autoboxing converts <code>int</code> ↔ <code>Integer</code> automatically. The cache holds -128 to 127.</p>
      <div className="flex items-center gap-2">
        <label className="text-sm">int =</label>
        <input type="number" value={intVal} onChange={e => setIntVal(parseInt(e.target.value) || 0)} className="w-24 p-2 rounded-md bg-background border border-border/40 text-sm" />
        <Button onClick={demo}>Box & Unbox</Button>
      </div>
      {log.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap">
          {log.join("\n")}
        </pre>
      )}
    </div>
  );
}
