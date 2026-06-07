"use client";
import Link from "next/link";
import { allTopics, units } from "@/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Flame, Target, Clock, ArrowRight, AlertTriangle } from "lucide-react";

export default function ExamModePage() {
  // Sort topics by importance (1-min length ascending, faq-richness proxy)
  const priority = [...allTopics].sort((a, b) => a.revision.oneMin.length - b.revision.oneMin.length).slice(0, 12);
  return (
    <div className="container py-8 max-w-5xl">
      <div className="mb-8 rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-amber-500/10 p-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-red-400 font-semibold mb-2">
          <Zap className="h-3.5 w-3.5" /> Tomorrow Exam Mode
        </div>
        <h1 className="text-3xl font-bold mb-2">🔥 12-Hour Sprint Plan</h1>
        <p className="text-muted-foreground mb-4">Exam tomorrow? Work through this priority list — short topics first to bank marks fast.</p>
        <div className="grid grid-cols-3 gap-3 max-w-md">
          <Badge variant="outline" className="justify-center py-2"><Flame className="h-3 w-3 mr-1 text-red-500" /> High yield</Badge>
          <Badge variant="outline" className="justify-center py-2"><Target className="h-3 w-3 mr-1 text-amber-500" /> 12 topics</Badge>
          <Badge variant="outline" className="justify-center py-2"><Clock className="h-3 w-3 mr-1" /> ~6 hrs</Badge>
        </div>
      </div>

      <Card className="p-6 mb-6">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Triage Strategy</h2>
        <ol className="space-y-2 list-decimal pl-5 text-sm">
          <li><strong>Phase 1 (2 hrs):</strong> Skim all 12 topics below. Read one-liners and analogies.</li>
          <li><strong>Phase 2 (3 hrs):</strong> Read 13-mark answers for top 5 topics. Memorize definitions + examples.</li>
          <li><strong>Phase 3 (1 hr):</strong> Revise memory tricks & FAQ for all 12 topics.</li>
          <li><strong>Phase 4 (30 min):</strong> Quick quiz on weak topics. Repeat the 1-min recall for each.</li>
          <li><strong>Phase 5 (30 min):</strong> Sleep. Don't cram. Wake up fresh.</li>
        </ol>
      </Card>

      <h2 className="text-xl font-bold mb-3">Priority Topics</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {priority.map((t, i) => {
          const unit = units.find(u => u.id === t.unitId);
          return (
            <Link key={t.id} href={`/units/${unit?.slug}/${t.id}`}>
              <Card className="p-4 hover:border-primary/60 transition cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{t.visualCue}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-muted-foreground font-mono">#{i + 1} · Unit {t.unitId} · Topic {t.index}</div>
                    <h3 className="font-bold group-hover:text-primary transition">{t.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{t.tagline}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
