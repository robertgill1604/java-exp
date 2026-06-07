"use client";
import { useState } from "react";
import { allTopics, topicMap } from "@/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Timer, Trophy, Check, X, RotateCcw } from "lucide-react";

const QUESTIONS_PER_TEST = 10;

function buildTest() {
  const picked = [...allTopics].sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_TEST);
  return picked.map((t, i) => {
    const others = allTopics.filter(o => o.id !== t.id);
    const distractors = [...others].sort(() => Math.random() - 0.5).slice(0, 3).map(o => o.title);
    const options = [...distractors, t.title].sort(() => Math.random() - 0.5);
    return {
      q: `Which topic is illustrated by this one-liner: "${t.oneLiner}"`,
      options,
      answer: options.indexOf(t.title),
      topicId: t.id
    };
  });
}

export default function MockTestsPage() {
  const [test, setTest] = useState(() => buildTest());
  const [idx, setIdx] = useState(0);
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Timer
  if (typeof window !== "undefined" && running && !done) {
    // we'll use the button to start, then an effect would be better but this works
  }

  const pick = (i: number) => {
    if (picks[idx] !== undefined) return;
    setPicks(p => ({ ...p, [idx]: i }));
    if (i === test[idx].answer) setScore(s => s + 1);
  };

  const restart = () => {
    setTest(buildTest());
    setIdx(0);
    setPicks({});
    setScore(0);
    setDone(false);
    setTime(0);
    setRunning(false);
  };

  const current = test[idx];
  const pct = ((idx + (picks[idx] !== undefined ? 1 : 0)) / test.length) * 100;

  return (
    <div className="container py-8 max-w-3xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <Trophy className="h-3.5 w-3.5" /> Mock Test
        </div>
        <h1 className="text-3xl font-bold mb-2">Quick Mock Test</h1>
        <p className="text-muted-foreground">10 randomized questions. Identify the topic from the one-liner.</p>
      </div>

      {!done ? (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline">Q {idx + 1} / {test.length}</Badge>
            <div className="flex items-center gap-2 text-sm">
              <Timer className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono font-bold">{Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</span>
              <Button size="sm" variant="ghost" onClick={() => {
                if (running) { setRunning(false); return; }
                setRunning(true);
                const i = setInterval(() => setTime(t => t + 1), 1000);
                (window as any).__mockTimer = i;
              }}>
                {running ? "Pause" : time > 0 ? "Resume" : "Start"}
              </Button>
            </div>
          </div>
          <Progress value={pct} className="h-1.5 mb-6" />

          <p className="text-base font-medium mb-4 leading-relaxed">{current.q}</p>

          <div className="space-y-2">
            {current.options.map((opt, i) => {
              const picked = picks[idx] === i;
              const isAnswer = i === current.answer;
              const revealed = picks[idx] !== undefined;
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  className={`w-full text-left p-3 rounded-md border text-sm transition flex items-center gap-2 ${
                    revealed
                      ? isAnswer
                        ? "border-emerald-500 bg-emerald-500/10"
                        : picked
                        ? "border-red-500 bg-red-500/10"
                        : "border-border/40 opacity-60"
                      : "border-border/40 hover:border-primary/40"
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

          <div className="flex justify-between mt-6">
            <Button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} variant="outline">
              ← Previous
            </Button>
            <Button
              onClick={() => {
                if (idx < test.length - 1) setIdx(idx + 1);
                else setDone(true);
              }}
              disabled={picks[idx] === undefined}
              className="bg-gradient-to-r from-orange-500 to-amber-500"
            >
              {idx === test.length - 1 ? "Finish" : "Next →"}
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-8 text-center">
          <Trophy className="h-12 w-12 text-amber-500 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Score: {score} / {test.length}</h2>
          <p className="text-muted-foreground mb-4">Time: {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</p>
          <Button onClick={restart} className="gap-2"><RotateCcw className="h-4 w-4" /> Take another test</Button>
        </Card>
      )}
    </div>
  );
}
