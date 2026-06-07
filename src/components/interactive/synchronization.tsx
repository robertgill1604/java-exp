"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SynchronizationSim() {
  const [threadA, setThreadA] = useState<"wait" | "run" | "done">("wait");
  const [threadB, setThreadB] = useState<"wait" | "run" | "done">("wait");
  const [counter, setCounter] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const runA = () => {
    setThreadA("run");
    setLog(l => [...l, "A: acquire lock on 'counter'"]);
    setTimeout(() => {
      setCounter(c => c + 1);
      setLog(l => [...l, `A: counter++ → ${counter + 1}`]);
      setTimeout(() => {
        setLog(l => [...l, "A: release lock"]);
        setThreadA("done");
      }, 600);
    }, 600);
  };

  const runB = () => {
    if (threadA === "run") {
      setLog(l => [...l, "B: BLOCKED — A holds the lock, waiting…"]);
      setTimeout(() => runB(), 1000);
      return;
    }
    setThreadB("run");
    setLog(l => [...l, "B: acquired lock"]);
    setTimeout(() => {
      setCounter(c => c + 1);
      setLog(l => [...l, `B: counter++ → ${counter + 1}`]);
      setTimeout(() => {
        setLog(l => [...l, "B: released lock"]);
        setThreadB("done");
      }, 400);
    }, 500);
  };

  const reset = () => {
    setThreadA("wait"); setThreadB("wait"); setCounter(0); setLog([]);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Two threads try to increment a shared counter. Click in order to see locking in action.</p>
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-3 rounded-md border ${threadA === "run" ? "border-amber-500 bg-amber-500/10" : "border-border/40"}`}>
          <div className="font-mono text-sm">Thread A</div>
          <div className="text-xs text-muted-foreground">state: {threadA}</div>
        </div>
        <div className={`p-3 rounded-md border ${threadB === "run" ? "border-amber-500 bg-amber-500/10" : "border-border/40"}`}>
          <div className="font-mono text-sm">Thread B</div>
          <div className="text-xs text-muted-foreground">state: {threadB}</div>
        </div>
      </div>
      <div className="text-sm">Counter: <span className="font-mono font-bold text-amber-500">{counter}</span></div>
      <div className="flex gap-2">
        <Button onClick={runA} disabled={threadA !== "wait"} size="sm">Start A</Button>
        <Button onClick={runB} disabled={threadB !== "wait"} size="sm">Start B</Button>
        <Button onClick={reset} variant="outline" size="sm">Reset</Button>
      </div>
      {log.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap max-h-48 overflow-y-auto">
          {log.join("\n")}
        </pre>
      )}
    </div>
  );
}
