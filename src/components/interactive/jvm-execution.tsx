"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const STEPS = [
  { name: "Write .java", desc: "Programmer writes Hello.java in editor" },
  { name: "javac compile", desc: "Java compiler produces Hello.class (bytecode)" },
  { name: "ClassLoader", desc: "ClassLoader subsystems (Bootstrap → Extension → App) load Hello.class" },
  { name: "Bytecode verify", desc: "Bytecode verifier checks validity" },
  { name: "Interpreter / JIT", desc: "JVM interprets bytecode; JIT compiles hot paths to native" },
  { name: "Execute", desc: "Hello, World! printed via OS" }
];

export function JvmExecutionSim() {
  const [step, setStep] = useState(0);
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Step through how Java achieves <strong>write once, run anywhere</strong>.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {STEPS.map((s, i) => (
          <div key={i} className={`p-3 rounded-md border text-xs transition ${
            i === step ? "border-primary bg-primary/10 shadow-lg scale-[1.02]" :
            i < step ? "border-emerald-500/30 bg-emerald-500/5 opacity-70" :
            "border-border/40 opacity-50"
          }`}>
            <div className="font-bold text-sm mb-0.5">{i + 1}. {s.name}</div>
            <div className="text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setStep(s => Math.max(0, s - 1))} variant="outline">← Back</Button>
        <Button onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}>Next →</Button>
        <Button onClick={() => setStep(0)} variant="ghost">Reset</Button>
      </div>
    </div>
  );
}
