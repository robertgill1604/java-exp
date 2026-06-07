"use client";
import { useState } from "react";

export function JavafxLayoutSim({ sim }: { sim: { type: "javafx-layout"; controls: { type: string; label: string }[] } }) {
  const [container, setContainer] = useState<"HBox" | "VBox" | "BorderPane" | "GridPane">("VBox");
  const [children, setChildren] = useState<{ type: string; label: string }[]>(sim.controls.length > 0 ? sim.controls : [
    { type: "Label", label: "Name:" },
    { type: "TextField", label: "Enter name" },
    { type: "Button", label: "Submit" }
  ]);

  const addChild = (c: { type: string; label: string }) => setChildren(p => [...p, c]);
  const reset = () => setChildren(sim.controls.length > 0 ? sim.controls : [
    { type: "Label", label: "Name:" },
    { type: "TextField", label: "Enter name" },
    { type: "Button", label: "Submit" }
  ]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Build a JavaFX scene. Click a layout, then add controls.</p>
      <div className="flex flex-wrap gap-2">
        {["HBox", "VBox", "BorderPane", "GridPane"].map(c => (
          <button
            key={c}
            onClick={() => setContainer(c as typeof container)}
            className={`px-3 py-1.5 text-xs rounded-md border font-mono ${
              container === c ? "border-primary bg-primary/10 text-primary" : "border-border/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          { type: "Label", label: "Name:" },
          { type: "TextField", label: "Field" },
          { type: "Button", label: "OK" },
          { type: "ComboBox", label: "Dropdown" },
          { type: "ListView", label: "List" }
        ].map(c => (
          <button key={c.type} onClick={() => addChild(c)} className="px-2 py-1 text-[10px] rounded border border-border/40 hover:border-primary/40">
            + {c.type}
          </button>
        ))}
        <button onClick={reset} className="px-2 py-1 text-[10px] rounded border border-red-500/40 text-red-400 hover:bg-red-500/10">
          Reset
        </button>
      </div>
      <div className="p-4 rounded-md border-2 border-dashed border-primary/40 bg-primary/5 min-h-32">
        <div className="text-[10px] uppercase font-mono text-primary mb-2">Root: {container}</div>
        <div className={`flex gap-2 ${container === "VBox" ? "flex-col" : container === "HBox" ? "flex-row flex-wrap" : "flex-row flex-wrap"}`}>
          {children.map((c, i) => (
            <div key={i} className="px-3 py-2 rounded bg-card border border-border/40 text-xs font-mono flex items-center gap-2">
              <span className="opacity-50 text-[10px]">{c.type}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
