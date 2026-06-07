"use client";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { topicMap, unitBySlug, getUnitForTopic } from "@/data";
import { useProgress } from "@/store/progress";
import { CodeBlock } from "@/components/topics/code-block";
import { ExamAnswerCard } from "@/components/topics/exam-answer-card";
import { VivaCard } from "@/components/topics/viva-card";
import { McqQuiz } from "@/components/topics/mcq-quiz";
import { RevisionNotes } from "@/components/topics/revision-notes";
import { SimulatorFrame } from "@/components/topics/simulator-frame";
import { TopicNav } from "@/components/layout/topic-nav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark, Check, Brain, Lightbulb, Wrench, Cpu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TopicPage() {
  const params = useParams<{ unitSlug: string; topicId: string }>();
  const topic = topicMap[params.topicId];
  const unit = unitBySlug[params.unitSlug] ?? getUnitForTopic(params.topicId);
  if (!topic || !unit) notFound();

  const { visit, complete, toggleBookmark, bookmarks, completedTopics, marks } = useProgress();
  const isBookmarked = bookmarks.includes(topic.id);
  const isCompleted = completedTopics.includes(topic.id);

  useEffect(() => {
    visit(topic.id);
    const t = setTimeout(() => {
      complete(topic.id);
      marks.push({ title: "Topic mastered", description: `✓ ${topic.title}`, variant: "success" });
    }, 60000);
    return () => clearTimeout(t);
  }, [topic.id]);

  return (
    <div className="container py-8 max-w-5xl">
      <Link href={`/units/${unit.slug}`} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
        <ArrowLeft className="h-3.5 w-3.5" /> Unit {unit.id}: {unit.title}
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-3">
          <div className="text-5xl">{topic.visualCue}</div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground font-mono mb-1">Unit {unit.id} · Topic {topic.index}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{topic.title}</h1>
            <p className="text-lg text-muted-foreground">{topic.tagline}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleBookmark(topic.id)}
              className={isBookmarked ? "border-amber-500 text-amber-500" : ""}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
            </Button>
            {isCompleted && <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30"><Check className="h-3 w-3 mr-1" /> Done</Badge>}
          </div>
        </div>
      </div>

      {/* One-liner card */}
      <Card className="p-6 mb-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
        <div className="text-xs uppercase font-semibold text-primary mb-1">One-liner</div>
        <p className="text-lg leading-relaxed">{topic.oneLiner}</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <h3 className="font-semibold text-sm">Analogy</h3>
          </div>
          <p className="text-sm text-muted-foreground">{topic.analogy}</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="h-4 w-4 text-emerald-500" />
            <h3 className="font-semibold text-sm">Why & Where</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{topic.whyExists}</p>
          <div className="flex flex-wrap gap-1">
            {topic.whereUsed.map((w, i) => (
              <Badge key={i} variant="secondary" className="text-[10px]">{w}</Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Code */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Cpu className="h-4 w-4" /> Code</h2>
        <CodeBlock block={topic.code} />
      </div>

      {/* Internal working */}
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Brain className="h-4 w-4 text-violet-500" /> Internal Working</h2>
        <ol className="space-y-2 list-decimal pl-5">
          {topic.internalWorking.steps.map((s, i) => (
            <li key={i} className="text-sm leading-relaxed">{s}</li>
          ))}
        </ol>
      </Card>

      {/* Simulator */}
      <div className="mb-6">
        <SimulatorFrame sim={topic.simulator} />
      </div>

      {/* Exam answer */}
      <div className="mb-6">
        <ExamAnswerCard examAnswer={topic.examAnswer} title={topic.title} />
      </div>

      {/* Viva + Quiz */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <VivaCard viva={topic.viva} />
        <McqQuiz quiz={topic.quiz} topicId={topic.id} topicTitle={topic.title} />
      </div>

      {/* Revision */}
      <div className="mb-6">
        <RevisionNotes revision={topic.revision} />
      </div>

      <Separator className="my-8" />

      <TopicNav topicId={topic.id} />
    </div>
  );
}
