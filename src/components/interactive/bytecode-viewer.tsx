"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BYTECODE = `0: iconst_2
1: istore_1
2: iload_1
3: iconst_3
4: iadd
5: istore_2
6: getstatic #2  // Field System.out
9: iload_2
10: invokevirtual #3  // Method println
13: return`;

export function BytecodeViewerSim() {
  const [op, setOp] = useState(0);
  const steps = [
    "iconst_2 → push int 2 onto operand stack",
    "istore_1 → pop top of stack into local var 1 (x)",
    "iload_1 → push local var 1 (x) onto stack",
    "iconst_3 → push int 3 onto stack",
    "iadd → pop two ints, push sum",
    "istore_2 → pop top into local var 2 (y)",
    "getstatic → push reference to System.out",
    "iload_2 → push y onto stack",
    "invokevirtual → call System.out.println(y)",
    "return → exit method main"
  ];
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Disassembled bytecode for: <code>int x=2; int y=x+3; System.out.println(y);</code></p>
      <div className="grid sm:grid-cols-2 gap-3">
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-border/30">
          {BYTECODE.split("\n").map((line, i) => (
            <div key={i} className={i === op ? "bg-amber-500/20 -mx-3 px-3" : ""}>{line}</div>
          ))}
        </pre>
        <div className="p-3 rounded-md border border-border/40 bg-card/30 text-xs">
          <div className="text-xs uppercase font-semibold text-muted-foreground mb-1">Step {op + 1} of {steps.length}</div>
          <div className="font-mono text-sm">{steps[op]}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setOp(o => Math.max(0, o - 1))} variant="outline" size="sm">← Prev</Button>
        <Button onClick={() => setOp(o => Math.min(steps.length - 1, o + 1))} size="sm">Next →</Button>
      </div>
    </div>
  );
}
