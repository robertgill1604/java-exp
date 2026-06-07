"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

export function ConstructorOverloadingSim({ sim }: { sim: { type: "constructor-overloading"; options: { name: string; params: string[] }[] } }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [pickedParams, setPickedParams] = useState<string[]>([]);
  const [output, setOutput] = useState<string>("");

  const run = () => {
    if (!chosen) return;
    const ctor = sim.options.find(o => o.name === chosen);
    if (!ctor) return;
    const args = pickedParams.slice(0, ctor.params.length);
    const call = `${chosen}(${args.join(", ")})`;
    setOutput(`→ Constructor called: ${call}\n→ Object created with ${ctor.params.length} parameter(s).`);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Choose a constructor to invoke. Java picks the one whose parameter list matches the arguments.</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {sim.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { setChosen(opt.name); setPickedParams(opt.params.map((_, j) => `arg${j + 1}`)); }}
            className={`p-3 rounded-md border text-left text-sm font-mono transition ${
              chosen === opt.name ? "border-primary bg-primary/10" : "border-border/40 hover:border-primary/40"
            }`}
          >
            <div className="font-bold">{opt.name}</div>
            <div className="text-xs text-muted-foreground">({opt.params.join(", ")})</div>
          </button>
        ))}
      </div>
      {chosen && (
        <div className="flex gap-2">
          <Button onClick={run} className="gap-2"><Play className="h-4 w-4" /> Run</Button>
          <Button variant="outline" onClick={() => { setChosen(null); setOutput(""); }} className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
        </div>
      )}
      {output && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </div>
  );
}
