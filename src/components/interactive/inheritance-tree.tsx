"use client";
import { useState } from "react";

type Node = { name: string; parent?: string; methods: string[] };

export function InheritanceTreeSim({ sim }: { sim: { type: "inheritance-tree"; root: string; nodes: Node[] } }) {
  const [selected, setSelected] = useState<string | null>(null);
  const levels = (() => {
    const map = new Map<string | undefined, Node[]>();
    sim.nodes.forEach(n => {
      const key = n.parent;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(n);
    });
    return Array.from(map.entries());
  })();

  const sel = sim.nodes.find(n => n.name === selected);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Click a class to inspect its methods. Notice inherited methods appear down the chain.</p>
      <div className="space-y-3">
        {levels.map(([parent, nodes], i) => (
          <div key={i} className="flex justify-center gap-3 flex-wrap">
            {nodes.map(n => (
              <button
                key={n.name}
                onClick={() => setSelected(n.name)}
                className={`px-4 py-2 rounded-md font-mono text-sm border transition ${
                  selected === n.name ? "border-primary bg-primary/15 scale-105 shadow-lg" : "border-border/40 hover:border-primary/40 hover:bg-accent/30"
                }`}
              >
                {n.name}
              </button>
            ))}
          </div>
        ))}
      </div>
      {sel && (
        <div className="p-4 rounded-md border border-primary/30 bg-primary/5">
          <div className="text-sm font-bold mb-2">{sel.name}</div>
          <div className="text-xs text-muted-foreground mb-2">Parent: {sel.parent || "(root)"}</div>
          <div className="text-xs font-semibold uppercase tracking-wider mb-1">Methods</div>
          <ul className="text-xs font-mono space-y-0.5">
            {(() => {
              const own = new Set(sel.methods);
              const inherited: string[] = [];
              let p = sel.parent;
              while (p) {
                const parent = sim.nodes.find(n => n.name === p);
                if (!parent) break;
                parent.methods.forEach(m => { if (!own.has(m) && !inherited.includes(m)) { inherited.push(m); own.add(m); } });
                p = parent.parent;
              }
              return [...sel.methods.map(m => <li key={m} className="text-emerald-400">▸ {m}() <span className="opacity-50">(own)</span></li>),
                ...inherited.map((m, i) => <li key={i} className="text-zinc-400">▸ {m}() <span className="opacity-50">(inherited)</span></li>)];
            })()}
          </ul>
        </div>
      )}
    </div>
  );
}
