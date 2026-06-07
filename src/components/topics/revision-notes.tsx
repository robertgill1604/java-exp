"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Brain, HelpCircle } from "lucide-react";
import type { RevisionNote } from "@/data/types";

export function RevisionNotes({ revision }: { revision: RevisionNote }) {
  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50">
      <Tabs defaultValue="1min" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="1min" className="gap-1.5">
            <Clock className="h-3.5 w-3.5" /> 1 min
          </TabsTrigger>
          <TabsTrigger value="5min" className="gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> 5 min
          </TabsTrigger>
          <TabsTrigger value="examday" className="gap-1.5">
            <Brain className="h-3.5 w-3.5" /> Exam
          </TabsTrigger>
          <TabsTrigger value="faq" className="gap-1.5">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="1min" className="mt-4">
          <div className="text-2xl font-bold text-center py-8 leading-snug bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg border border-orange-500/20">
            {revision.oneMin}
          </div>
        </TabsContent>

        <TabsContent value="5min" className="mt-4">
          <ul className="space-y-2">
            {revision.fiveMin.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="text-primary font-bold">▸</span>
                <span>{point}</span>
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm leading-relaxed pt-3 mt-3 border-t border-border/40">
              <Brain className="h-4 w-4 text-amber-500 mt-0.5" />
              <span><strong>Trick:</strong> {revision.memoryTrick}</span>
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="examday" className="mt-4">
          <ul className="space-y-2">
            {revision.examDay.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="faq" className="mt-4 space-y-3">
          {revision.faq.map((f, i) => (
            <div key={i} className="border-l-2 border-primary/40 pl-3">
              <div className="text-sm font-semibold">Q. {f.q}</div>
              <div className="text-sm text-muted-foreground mt-1">{f.a}</div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}
