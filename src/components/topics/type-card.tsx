"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "./code-block";
import { Layers, CheckCircle2, XCircle, Lightbulb, GitBranch, Terminal } from "lucide-react";
import type { TypeSection as TypeSectionType } from "@/data/types";

export function TypeCard({ type, index }: { type: TypeSectionType; index: number }) {
  return (
    <Card className="p-5 border-l-4 border-l-primary/70 bg-gradient-to-br from-card to-card/40 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/15 text-primary font-bold text-sm shrink-0">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Layers className="h-4 w-4 text-primary shrink-0" />
            <h4 className="font-bold text-base text-foreground">{type.name}</h4>
            <Badge variant="outline" className="text-[10px] uppercase tracking-wide">Type {index + 1}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{type.definition}</p>
        </div>
      </div>

      {type.diagram && (
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-primary">
            <GitBranch className="h-3.5 w-3.5" /> Diagram
          </div>
          <pre className="text-[11px] font-mono p-3 rounded-md bg-muted/50 border border-border/40 whitespace-pre overflow-x-auto leading-snug">
            {type.diagram}
          </pre>
        </div>
      )}

      <div className="mb-3">
        <CodeBlock block={type.code} />
      </div>

      {type.exampleOutput && (
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-emerald-500">
            <Terminal className="h-3.5 w-3.5" /> Output
          </div>
          <pre className="text-[11px] font-mono p-2.5 rounded-md bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 whitespace-pre overflow-x-auto">
            {type.exampleOutput}
          </pre>
        </div>
      )}

      {type.notes && type.notes.length > 0 && (
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-amber-500">
            <Lightbulb className="h-3.5 w-3.5" /> Key Points
          </div>
          <ul className="space-y-1">
            {type.notes.map((n, i) => (
              <li key={i} className="text-xs text-foreground/85 leading-relaxed flex items-start gap-1.5">
                <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(type.pros || type.cons) && (
        <div className="grid sm:grid-cols-2 gap-3 mt-2">
          {type.pros && type.pros.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1 text-xs font-semibold text-emerald-500">
                <CheckCircle2 className="h-3.5 w-3.5" /> Pros
              </div>
              <ul className="space-y-1">
                {type.pros.map((p, i) => (
                  <li key={i} className="text-xs text-foreground/85 leading-relaxed flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5 shrink-0">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {type.cons && type.cons.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1 text-xs font-semibold text-rose-400">
                <XCircle className="h-3.5 w-3.5" /> Cons
              </div>
              <ul className="space-y-1">
                {type.cons.map((c, i) => (
                  <li key={i} className="text-xs text-foreground/85 leading-relaxed flex items-start gap-1.5">
                    <span className="text-rose-400 mt-0.5 shrink-0">-</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

export function TypeSectionList({ types, title }: { types: TypeSectionType[]; title?: string }) {
  if (!types || types.length === 0) return null;
  return (
    <section>
      {title && (
        <h4 className="text-sm font-semibold text-primary mb-2.5 flex items-center gap-1.5">
          <Layers className="h-4 w-4" /> {title}
        </h4>
      )}
      <div className="space-y-3">
        {types.map((t, i) => (
          <TypeCard key={i} type={t} index={i} />
        ))}
      </div>
    </section>
  );
}
