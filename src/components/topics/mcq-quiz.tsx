"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from "lucide-react";
import type { Quiz } from "@/data/types";
import { useProgress } from "@/store/progress";
import { useEffect } from "react";

export function McqQuiz({ quiz, topicId, topicTitle }: { quiz: Quiz; topicId: string; topicTitle: string }) {
  const [mcqIdx, setMcqIdx] = useState(0);
  const [tfIdx, setTfIdx] = useState(0);
  const [mcqPicks, setMcqPicks] = useState<Record<number, number>>({});
  const [tfPicks, setTfPicks] = useState<Record<number, boolean>>({});
  const [revealedMcq, setRevealedMcq] = useState<Set<number>>(new Set());
  const [revealedTf, setRevealedTf] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const scoreFn = useProgress(s => s.score);
  const toastPush = useProgress(s => s.marks.push);

  const totalQ = (quiz.mcqs?.length || 0) + (quiz.trueFalse?.length || 0);
  const answered = Object.keys(mcqPicks).length + Object.keys(tfPicks).length;

  const pickMcq = (i: number) => {
    setMcqPicks(p => ({ ...p, [mcqIdx]: i }));
    if (i === quiz.mcqs[mcqIdx].answer) setScore(s => s + 1);
    setRevealedMcq(s => new Set(s).add(mcqIdx));
  };
  const pickTf = (v: boolean) => {
    setTfPicks(p => ({ ...p, [tfIdx]: v }));
    if (v === quiz.trueFalse![tfIdx].answer) setScore(s => s + 1);
    setRevealedTf(s => new Set(s).add(tfIdx));
  };

  useEffect(() => {
    if (done && totalQ > 0) {
      scoreFn(topicId, score);
      toastPush({ title: `Quiz complete: ${topicTitle}`, description: `${score} / ${totalQ} correct`, variant: score === totalQ ? "success" : "default" });
    }
  }, [done]);

  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold">Practice Quiz</h3>
        </div>
        <div className="text-xs text-muted-foreground">
          {answered} / {totalQ} answered · Score: {score}
        </div>
      </div>

      {quiz.mcqs && quiz.mcqs.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            MCQ {mcqIdx + 1} of {quiz.mcqs.length}
          </div>
          <p className="font-medium mb-3">{quiz.mcqs[mcqIdx].question}</p>
          <div className="space-y-2">
            {quiz.mcqs[mcqIdx].options.map((opt, i) => {
              const picked = mcqPicks[mcqIdx] === i;
              const isAnswer = i === quiz.mcqs[mcqIdx].answer;
              const revealed = revealedMcq.has(mcqIdx);
              return (
                <button
                  key={i}
                  onClick={() => !revealed && pickMcq(i)}
                  disabled={revealed}
                  className={`w-full text-left p-3 rounded-md border text-sm transition flex items-center gap-2 ${
                    revealed
                      ? isAnswer
                        ? "border-emerald-500 bg-emerald-500/10"
                        : picked
                        ? "border-red-500 bg-red-500/10"
                        : "border-border/40"
                      : "border-border/40 hover:border-primary/60 hover:bg-accent/30"
                  }`}
                >
                  <span className="font-mono text-xs opacity-70">{String.fromCharCode(65 + i)}.</span>
                  <span className="flex-1">{opt}</span>
                  {revealed && isAnswer && <Check className="h-4 w-4 text-emerald-500" />}
                  {revealed && picked && !isAnswer && <X className="h-4 w-4 text-red-500" />}
                </button>
              );
            })}
          </div>
          {revealedMcq.has(mcqIdx) && (
            <p className="mt-3 text-xs text-muted-foreground italic border-l-2 border-primary/40 pl-3">
              {quiz.mcqs[mcqIdx].explanation}
            </p>
          )}
          <div className="flex justify-between mt-3">
            <Button size="sm" variant="ghost" onClick={() => setMcqIdx(i => Math.max(0, i - 1))} disabled={mcqIdx === 0}>
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => {
                if (mcqIdx < quiz.mcqs.length - 1) setMcqIdx(i => i + 1);
                else if (!quiz.trueFalse?.length) setDone(true);
              }}
              disabled={!revealedMcq.has(mcqIdx)}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {quiz.trueFalse && quiz.trueFalse.length > 0 && (
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            True / False {tfIdx + 1} of {quiz.trueFalse.length}
          </div>
          <p className="font-medium mb-3">{quiz.trueFalse[tfIdx].statement}</p>
          <div className="grid grid-cols-2 gap-2">
            {[true, false].map(v => {
              const picked = tfPicks[tfIdx] === v;
              const isAnswer = v === quiz.trueFalse![tfIdx].answer;
              const revealed = revealedTf.has(tfIdx);
              return (
                <button
                  key={String(v)}
                  onClick={() => !revealed && pickTf(v)}
                  disabled={revealed}
                  className={`p-3 rounded-md border text-sm font-medium transition ${
                    revealed
                      ? isAnswer
                        ? "border-emerald-500 bg-emerald-500/10"
                        : picked
                        ? "border-red-500 bg-red-500/10"
                        : "border-border/40"
                      : "border-border/40 hover:border-primary/60 hover:bg-accent/30"
                  }`}
                >
                  {v ? "True" : "False"}
                </button>
              );
            })}
          </div>
          {revealedTf.has(tfIdx) && (
            <p className="mt-3 text-xs text-muted-foreground italic border-l-2 border-primary/40 pl-3">
              {quiz.trueFalse[tfIdx].explanation}
            </p>
          )}
          <div className="flex justify-between mt-3">
            <Button size="sm" variant="ghost" onClick={() => setTfIdx(i => Math.max(0, i - 1))} disabled={tfIdx === 0}>
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => {
                if (tfIdx < quiz.trueFalse!.length - 1) setTfIdx(i => i + 1);
                else setDone(true);
              }}
              disabled={!revealedTf.has(tfIdx)}
            >
              {tfIdx === quiz.trueFalse!.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      )}

      {done && (
        <div className="mt-6 p-4 rounded-md bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/30">
          <div className="font-bold text-emerald-500">Quiz complete!</div>
          <div className="text-sm text-muted-foreground">You scored {score} / {totalQ}</div>
        </div>
      )}
    </Card>
  );
}
