"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, FileText, BookOpen } from "lucide-react";
import type { ExamAnswer } from "@/data/types";

export function ExamAnswerCard({ examAnswer, title }: { examAnswer: ExamAnswer; title: string }) {
  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">Exam-Ready Answers — {title}</h3>
      </div>
      <Tabs defaultValue="2" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="2" className="gap-1.5">
            <Badge variant="outline" className="text-[10px]">2M</Badge> Short
          </TabsTrigger>
          <TabsTrigger value="13" className="gap-1.5">
            <Badge variant="outline" className="text-[10px]">13M</Badge> Mid
          </TabsTrigger>
          <TabsTrigger value="16" className="gap-1.5">
            <Badge variant="outline" className="text-[10px]">16M</Badge> Long
          </TabsTrigger>
        </TabsList>

        <TabsContent value="2" className="mt-4">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="leading-relaxed">{examAnswer.twoMark}</p>
          </div>
        </TabsContent>

        <TabsContent value="13" className="mt-4 space-y-4">
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Introduction</h4>
            <p className="text-sm leading-relaxed">{examAnswer.thirteenMark.intro}</p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Definition</h4>
            <p className="text-sm leading-relaxed">{examAnswer.thirteenMark.definition}</p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Explanation</h4>
            <p className="text-sm leading-relaxed">{examAnswer.thirteenMark.explanation}</p>
          </section>
          {examAnswer.thirteenMark.diagram && (
            <section>
              <h4 className="text-sm font-semibold text-primary mb-1.5">Diagram</h4>
              <pre className="text-xs font-mono p-3 rounded-md bg-muted/50 border border-border/40 whitespace-pre-wrap">
                {examAnswer.thirteenMark.diagram}
              </pre>
            </section>
          )}
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Example</h4>
            <p className="text-sm leading-relaxed font-mono text-xs bg-muted/40 p-3 rounded-md border border-border/40">
              {examAnswer.thirteenMark.example}
            </p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Conclusion</h4>
            <p className="text-sm leading-relaxed">{examAnswer.thirteenMark.conclusion}</p>
          </section>
        </TabsContent>

        <TabsContent value="16" className="mt-4 space-y-4">
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Introduction</h4>
            <p className="text-sm leading-relaxed">{examAnswer.sixteenMark.intro}</p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Definition</h4>
            <p className="text-sm leading-relaxed">{examAnswer.sixteenMark.definition}</p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Explanation</h4>
            <p className="text-sm leading-relaxed">{examAnswer.sixteenMark.explanation}</p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Working</h4>
            <p className="text-sm leading-relaxed whitespace-pre-wrap font-mono text-xs bg-muted/40 p-3 rounded-md border border-border/40">
              {examAnswer.sixteenMark.working}
            </p>
          </section>
          {examAnswer.sixteenMark.diagram && (
            <section>
              <h4 className="text-sm font-semibold text-primary mb-1.5">Diagram</h4>
              <pre className="text-xs font-mono p-3 rounded-md bg-muted/50 border border-border/40 whitespace-pre-wrap">
                {examAnswer.sixteenMark.diagram}
              </pre>
            </section>
          )}
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Example</h4>
            <p className="text-sm leading-relaxed font-mono text-xs bg-muted/40 p-3 rounded-md border border-border/40">
              {examAnswer.sixteenMark.example}
            </p>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Output</h4>
            <p className="text-sm leading-relaxed font-mono text-xs">{examAnswer.sixteenMark.output}</p>
          </section>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1.5">Advantages</h4>
              <ul className="text-xs space-y-1">
                {examAnswer.sixteenMark.advantages.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1.5">Applications</h4>
              <ul className="text-xs space-y-1">
                {examAnswer.sixteenMark.applications.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-primary mb-1.5">Conclusion</h4>
            <p className="text-sm leading-relaxed">{examAnswer.sixteenMark.conclusion}</p>
          </section>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
