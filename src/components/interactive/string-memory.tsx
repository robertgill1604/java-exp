"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StringMemorySim() {
  const [a, setA] = useState("Java");
  const [b, setB] = useState("Java");
  const [c, setC] = useState("Ja" + "va");
  const [d, setD] = useState("java");
  const [steps, setSteps] = useState<string[]>([]);

  const compare = () => {
    const lines: string[] = [];
    lines.push(`String a = "${a}";`);
    lines.push(`String b = "${b}";`);
    lines.push(`String c = "${c}";`);
    lines.push(`String d = "${d}";`);
    lines.push("");
    lines.push(`a == b  → ${a === b}  (literal pool, same reference)`);
    lines.push(`a.equals(b) → ${a === b}`);
    lines.push(`a == c  → ${a === c}  (concatenation → new String on heap)`);
    lines.push(`a.equals(c) → ${a === c}`);
    lines.push(`a == d  → ${a === d}  (different content, different ref)`);
    lines.push(`a.equalsIgnoreCase(d) → ${a.toLowerCase() === d.toLowerCase()}`);
    setSteps(lines);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">String literals go in the <strong>String Constant Pool</strong>. <code>==</code> compares references; <code>equals()</code> compares content.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {([["a", a, setA], ["b", b, setB], ["c", c, setC], ["d", d, setD]] as [string, string, (s: string) => void][]).map(([k, v, setter]) => (
          <div key={k}>
            <label className="text-xs font-mono">String {k}</label>
            <input value={v} onChange={e => setter(e.target.value)} className="w-full mt-1 p-2 rounded-md bg-background border border-border/40 text-sm font-mono" />
          </div>
        ))}
      </div>
      <Button onClick={compare}>Compare</Button>
      {steps.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap">
          {steps.join("\n")}
        </pre>
      )}
    </div>
  );
}
