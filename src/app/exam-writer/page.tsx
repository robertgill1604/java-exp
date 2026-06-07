"use client";
import { useState } from "react";
import { allTopics, topicMap } from "@/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
import type { TopicContent } from "@/data/types";
import { formatJavaCode } from "@/lib/format-java-code";

export default function ExamWriterPage() {
  const [topicId, setTopicId] = useState(allTopics[0].id);
  const [marks, setMarks] = useState<2 | 13 | 16>(13);

  const topic = topicMap[topicId];

  return (
    <div className="container py-8 max-w-5xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <GraduationCap className="h-3.5 w-3.5" /> Model Answers
        </div>
        <h1 className="text-3xl font-bold mb-2">Exam-ready model answers</h1>
        <p className="text-muted-foreground">
          Pick a topic and marks tier to see a properly formatted model answer. Use it to study structure, phrasing, and the depth expected.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <label className="text-xs font-semibold text-muted-foreground uppercase">Topic</label>
          <select
            value={topicId}
            onChange={e => setTopicId(e.target.value)}
            className="w-full mt-1 p-2 rounded-md bg-background border border-border/40 text-sm"
          >
            {allTopics.map(t => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </Card>
        <Card className="p-4">
          <label className="text-xs font-semibold text-muted-foreground uppercase">Marks</label>
          <div className="flex gap-2 mt-1">
            {[2, 13, 16].map(m => (
              <button
                key={m}
                onClick={() => setMarks(m as 2 | 13 | 16)}
                className={`flex-1 py-2 text-sm rounded-md border font-mono transition ${
                  marks === m
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/40 hover:border-primary/40"
                }`}
              >
                {m}M
              </button>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">Model Answer</h2>
            <Badge variant="outline" className="ml-1">{marks} marks</Badge>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/30">{topic.title}</Badge>
        </div>

        <Tabs
          value={String(marks)}
          onValueChange={v => setMarks(parseInt(v, 10) as 2 | 13 | 16)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="2" className="gap-1.5">
              <Sparkles className="h-3 w-3" /> 2M
            </TabsTrigger>
            <TabsTrigger value="13" className="gap-1.5">
              <Sparkles className="h-3 w-3" /> 13M
            </TabsTrigger>
            <TabsTrigger value="16" className="gap-1.5">
              <Sparkles className="h-3 w-3" /> 16M
            </TabsTrigger>
          </TabsList>

          <TabsContent value="2" className="mt-5">
            <TwoMarkView topic={topic} />
          </TabsContent>
          <TabsContent value="13" className="mt-5">
            <MidMarkView topic={topic} />
          </TabsContent>
          <TabsContent value="16" className="mt-5">
            <LongMarkView topic={topic} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="text-sm font-semibold text-primary mb-1.5">{label}</h4>
      <div className="text-sm leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="text-xs font-mono p-3 rounded-md bg-zinc-950 text-emerald-300 border border-emerald-500/20 whitespace-pre-wrap overflow-x-auto">
      {children}
    </pre>
  );
}

function TwoMarkView({ topic }: { topic: TopicContent }) {
  return (
    <div className="space-y-3">
      <p className="text-sm leading-relaxed">{topic.examAnswer.twoMark}</p>
    </div>
  );
}

function MidMarkView({ topic }: { topic: TopicContent }) {
  const a = topic.examAnswer.thirteenMark;
  return (
    <div className="space-y-4">
      <Section label="Introduction"><p>{a.intro}</p></Section>
      <Section label="Definition"><p>{a.definition}</p></Section>
      <Section label="Explanation"><p>{a.explanation}</p></Section>
      {a.diagram && (
        <Section label="Diagram">
          <CodeBlock>{a.diagram}</CodeBlock>
        </Section>
      )}
      <Section label="Example">
        <CodeBlock>{formatJavaCode(a.example)}</CodeBlock>
      </Section>
      <Section label="Conclusion"><p>{a.conclusion}</p></Section>
    </div>
  );
}

function LongMarkView({ topic }: { topic: TopicContent }) {
  const a = topic.examAnswer.sixteenMark;
  return (
    <div className="space-y-4">
      <Section label="Introduction"><p>{a.intro}</p></Section>
      <Section label="Definition"><p>{a.definition}</p></Section>
      <Section label="Explanation"><p>{a.explanation}</p></Section>
      <Section label="Working">
        <CodeBlock>{a.working}</CodeBlock>
      </Section>
      {a.diagram && (
        <Section label="Diagram">
          <CodeBlock>{a.diagram}</CodeBlock>
        </Section>
      )}
      <Section label="Example">
        <CodeBlock>{formatJavaCode(a.example)}</CodeBlock>
      </Section>
      <Section label="Output">
        <CodeBlock>{a.output}</CodeBlock>
      </Section>
      <div className="grid sm:grid-cols-2 gap-4">
        <Section label="Advantages">
          <ul className="space-y-1">
            {a.advantages.map((x, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span> <span>{x}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section label="Applications">
          <ul className="space-y-1">
            {a.applications.map((x, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span> <span>{x}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <Section label="Conclusion"><p>{a.conclusion}</p></Section>
    </div>
  );
}
