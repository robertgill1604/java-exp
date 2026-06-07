"use client";
import { useProgress } from "@/store/progress";
import { units, topicMap, allTopics } from "@/data";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Trophy, Clock, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProgressPage() {
  const { completedTopics, visitedTopics, quizScores, bookmarks, studyTime, marks } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="container py-8 text-muted-foreground">Loading progress…</div>;

  const totalScore = Object.values(quizScores).reduce((a, b) => a + b, 0);
  const totalSec = Object.values(studyTime).reduce((a, b) => a + b, 0);
  const totalMin = Math.round(totalSec / 60);
  const completionPct = Math.round((completedTopics.length / allTopics.length) * 100);

  return (
    <div className="container py-8 max-w-5xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <BarChart3 className="h-3.5 w-3.5" /> Your Progress
        </div>
        <h1 className="text-3xl font-bold mb-2">Progress Tracker</h1>
        <p className="text-muted-foreground">Local-storage based tracking. Mark topics done, take quizzes, and watch your mastery grow.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Stat label="Completed" value={`${completedTopics.length}/${allTopics.length}`} sub={`${completionPct}%`} icon={<Target className="h-5 w-5" />} color="from-orange-500 to-amber-500" />
        <Stat label="Visited" value={`${visitedTopics.length}`} sub="topics" icon={<BookOpen className="h-5 w-5" />} color="from-emerald-500 to-teal-500" />
        <Stat label="Quiz Score" value={`${totalScore}`} sub="points" icon={<Trophy className="h-5 w-5" />} color="from-violet-500 to-purple-500" />
        <Stat label="Study Time" value={`${totalMin}m`} sub="~est." icon={<Clock className="h-5 w-5" />} color="from-red-500 to-orange-500" />
      </div>

      <Card className="p-6 mb-6">
        <h2 className="font-bold mb-3">By Unit</h2>
        <div className="space-y-3">
          {units.map(u => {
            const done = u.topics.filter(t => completedTopics.includes(t.id)).length;
            return (
              <div key={u.id}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">Unit {u.id}: {u.title}</span>
                  <span className="text-muted-foreground text-xs">{done} / {u.topics.length}</span>
                </div>
                <Progress value={(done / u.topics.length) * 100} className="h-2" />
              </div>
            );
          })}
        </div>
      </Card>

      {bookmarks.length > 0 && (
        <Card className="p-6 mb-6">
          <h2 className="font-bold mb-3 flex items-center gap-2">⭐ Bookmarks ({bookmarks.length})</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {bookmarks.map(id => {
              const t = topicMap[id];
              if (!t) return null;
              return (
                <div key={id} className="p-3 rounded-md border border-amber-500/30 bg-amber-500/5 text-sm">
                  <span className="mr-1.5">{t.visualCue}</span>{t.title}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {Object.keys(quizScores).length > 0 && (
        <Card className="p-6">
          <h2 className="font-bold mb-3">Recent Quiz Scores</h2>
          <div className="space-y-1.5">
            {Object.entries(quizScores).map(([id, score]) => {
              const t = topicMap[id];
              if (!t) return null;
              return (
                <div key={id} className="flex items-center justify-between text-sm">
                  <span>{t.visualCue} {t.title}</span>
                  <Badge variant="outline">{score} pts</Badge>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}

function Stat({ label, value, sub, icon, color }: { label: string; value: string; sub?: string; icon: React.ReactNode; color: string }) {
  return (
    <Card className="p-4">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white mb-2`}>{icon}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>}
    </Card>
  );
}
