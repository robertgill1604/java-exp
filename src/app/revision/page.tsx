"use client";
import { useState } from "react";
import { allTopics, units } from "@/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Eye, EyeOff, Sparkles, Filter } from "lucide-react";

export default function RevisionPage() {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [unitFilter, setUnitFilter] = useState<number | "all">("all");
  const topics = unitFilter === "all" ? allTopics : allTopics.filter(t => t.unitId === unitFilter);
  const topic = topics[idx % topics.length];

  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <Sparkles className="h-3.5 w-3.5" /> Quick Revision
        </div>
        <h1 className="text-3xl font-bold mb-2">1-Minute Recall Cards</h1>
        <p className="text-muted-foreground">Flip through every topic. See the one-liner first, then reveal the full quick summary.</p>
      </div>

      <div className="mb-4 flex items-center gap-2 flex-wrap">
        <Filter className="h-3.5 w-3.5 text-muted-foreground" />
        <button onClick={() => { setUnitFilter("all"); setIdx(0); }} className={`text-xs px-2 py-1 rounded ${unitFilter === "all" ? "bg-primary text-primary-foreground" : "border border-border/40"}`}>All</button>
        {units.map(u => (
          <button key={u.id} onClick={() => { setUnitFilter(u.id); setIdx(0); }} className={`text-xs px-2 py-1 rounded ${unitFilter === u.id ? "bg-primary text-primary-foreground" : "border border-border/40"}`}>
            Unit {u.id}
          </button>
        ))}
      </div>

      <Card className="p-8 mb-4 bg-gradient-to-br from-orange-500/5 to-amber-500/5 border-2 border-dashed border-primary/30 min-h-[280px]">
        <div className="text-6xl mb-4 text-center">{topic.visualCue}</div>
        <h2 className="text-2xl font-bold text-center mb-2">{topic.title}</h2>
        <p className="text-sm text-muted-foreground text-center mb-4">{topic.tagline}</p>
        <div className="bg-background/60 rounded-lg p-4 border border-border/40">
          <div className="text-xs uppercase font-semibold text-primary mb-1">One-liner</div>
          <p className="text-sm leading-relaxed">{revealed ? topic.revision.oneMin : "— tap reveal to see —"}</p>
        </div>
        {revealed && (
          <div className="mt-3 bg-background/60 rounded-lg p-4 border border-border/40">
            <div className="text-xs uppercase font-semibold text-primary mb-1">Analogy</div>
            <p className="text-sm leading-relaxed mb-2">{topic.analogy}</p>
            <div className="text-xs uppercase font-semibold text-primary mb-1">Memory trick</div>
            <p className="text-sm leading-relaxed italic">💡 {topic.revision.memoryTrick}</p>
          </div>
        )}
      </Card>

      <div className="flex items-center justify-between">
        <Button onClick={() => { setIdx(Math.max(0, idx - 1)); setRevealed(false); }} variant="outline">← Previous</Button>
        <div className="text-xs text-muted-foreground">
          {idx + 1} / {topics.length} · Unit {topic.unitId}
        </div>
        <Button onClick={() => { setIdx(idx + 1); setRevealed(false); }} className="bg-gradient-to-r from-orange-500 to-amber-500">
          Next →
        </Button>
      </div>

      <div className="mt-6 text-center">
        <Button onClick={() => setRevealed(r => !r)} variant="ghost" className="gap-2">
          {revealed ? <><EyeOff className="h-4 w-4" /> Hide</> : <><Eye className="h-4 w-4" /> Reveal</>}
        </Button>
      </div>
    </div>
  );
}
