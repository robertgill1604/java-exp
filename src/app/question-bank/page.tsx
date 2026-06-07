"use client";
import Link from "next/link";
import { importantQuestions, getTopicPath, units } from "@/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight } from "lucide-react";

export default function QuestionBankPage() {
  const groups = [13, 16, 5, 2] as const;
  return (
    <div className="container py-8 max-w-5xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <BookOpen className="h-3.5 w-3.5" /> Question Bank
        </div>
        <h1 className="text-3xl font-bold mb-2">Important Exam Questions</h1>
        <p className="text-muted-foreground">Hand-picked 13 & 16 mark questions curated from past papers and predicted patterns. Click to see full answer.</p>
      </div>

      {groups.map(marks => {
        const qs = importantQuestions.filter(q => q.marks === marks);
        if (qs.length === 0) return null;
        return (
          <section key={marks} className="mb-8">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className={marks === 16 ? "bg-red-500/20 text-red-400 border-red-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"}>
                {marks} marks
              </Badge>
              {marks === 16 ? "Long Answer (16M)" : marks === 13 ? "Mid Answer (13M)" : marks === 5 ? "Short (5M)" : "Very Short (2M)"}
              <span className="text-xs text-muted-foreground">— {qs.length} questions</span>
            </h2>
            <div className="grid gap-2">
              {qs.map((q, i) => {
                const path = getTopicPath(q.topic);
                if (!path) return null;
                const unit = units.find(u => u.slug === path.unitSlug);
                return (
                  <Link key={i} href={`/units/${path.unitSlug}/${path.topicId}`}>
                    <Card className="p-4 hover:border-primary/60 transition group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <span className="text-muted-foreground font-mono text-xs shrink-0 w-6">{i + 1}.</span>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{q.question}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            {unit && <Badge variant="outline" className="text-[10px]">Unit {unit.id}</Badge>}
                            <span className="text-[10px] text-muted-foreground">→ {path.topicId}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition shrink-0" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
