"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { VivaQA } from "@/data/types";

export function VivaCard({ viva }: { viva: VivaQA[] }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const next = new Set(revealed);
    if (next.has(i)) next.delete(i); else next.add(i);
    setRevealed(next);
  };
  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircleQuestion className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">Viva Questions ({viva.length})</h3>
      </div>
      <div className="space-y-2">
        {viva.map((v, i) => (
          <Collapsible key={i} open={revealed.has(i)} onOpenChange={() => toggle(i)}>
            <CollapsibleTrigger asChild>
              <button className="w-full flex items-start gap-3 p-3 rounded-md border border-border/40 hover:bg-accent/30 transition text-left">
                <HelpCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm flex-1 font-medium">Q{i + 1}. {v.q}</span>
                {revealed.has(i) ? <EyeOff className="h-3.5 w-3.5 text-muted-foreground" /> : <Eye className="h-3.5 w-3.5 text-muted-foreground" />}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-3 pb-3 pt-1">
              <div className="ml-7 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-3 py-1">
                <span className="text-primary font-semibold">A:</span> {v.a}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </Card>
  );
}
