"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DynamicDispatchSim({ sim }: { sim: { type: "dynamic-dispatch"; classes: { name: string; methods: { name: string; impl: string }[] }[] } }) {
  const [objType, setObjType] = useState(sim.classes[0]?.name || "");
  const [method, setMethod] = useState(sim.classes[0]?.methods[0]?.name || "");
  const [output, setOutput] = useState("");

  const run = () => {
    const cls = sim.classes.find(c => c.name === objType);
    if (!cls) return;
    const m = cls.methods.find(x => x.name === method);
    if (!m) return;
    setOutput(`Reference type: Animal\nActual object: ${cls.name}\n→ JVM looks up ${method}() on actual object (${cls.name})\n→ ${m.impl}`);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Even when reference is parent, JVM dispatches to the <strong>actual object's</strong> overridden method.</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Object (actual type)</label>
          <select value={objType} onChange={e => { setObjType(e.target.value); setMethod(sim.classes.find(c => c.name === e.target.value)?.methods[0]?.name || ""); }} className="w-full mt-1 p-2 rounded-md bg-background border border-border/40 text-sm">
            {sim.classes.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Method</label>
          <select value={method} onChange={e => setMethod(e.target.value)} className="w-full mt-1 p-2 rounded-md bg-background border border-border/40 text-sm">
            {sim.classes.find(c => c.name === objType)?.methods.map(m => <option key={m.name} value={m.name}>{m.name}()</option>)}
          </select>
        </div>
      </div>
      <Button onClick={run} className="gap-2"><Play className="h-4 w-4" /> Dispatch</Button>
      {output && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap">{output}</pre>
      )}
    </div>
  );
}
