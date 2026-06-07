"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JavafxEventSim() {
  const [clicks, setClicks] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    const evt = new Set(log);
    setLog(l => [`ActionEvent fired → handle() invoked (click #${next})`, ...l].slice(0, 5));
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">JavaFX event flow: <strong>Source → Event → Handler.handle(event)</strong>.</p>
      <Button onClick={handleClick} className="bg-gradient-to-r from-orange-500 to-amber-500">
        Click me!
      </Button>
      <div className="text-xs">Total clicks: <strong className="text-amber-500">{clicks}</strong></div>
      {log.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap max-h-32 overflow-y-auto">
          {log.join("\n")}
        </pre>
      )}
    </div>
  );
}
