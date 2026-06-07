"use client";
import Link from "next/link";
import { units, allTopics, topicMap } from "@/data";
import { useProgress } from "@/store/progress";
import { useEffect, useState } from "react";
import { Sparkles, Zap, Trophy, Target, ArrowRight, BookOpen, Clock, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const { completedTopics, visitedTopics, quizScores, studyTime } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalTopics = allTopics.length;
  const completedPct = mounted ? Math.round((completedTopics.length / totalTopics) * 100) : 0;
  const totalQ = mounted ? Object.values(quizScores).reduce((a, b) => a + b, 0) : 0;
  const totalSec = mounted ? Object.values(studyTime).reduce((a, b) => a + b, 0) : 0;
  const totalMin = Math.round(totalSec / 60);
  const streak = mounted ? Math.min(7, completedTopics.length) : 0;

  const recent = mounted
    ? [...visitedTopics].reverse().slice(0, 4).map(id => topicMap[id]).filter(Boolean)
    : [];

  return (
    <div className="container py-8 max-w-7xl">
      {/* Hero */}
      <div className="mb-12 relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/10 p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400 mb-4">
            <Sparkles className="h-3 w-3" /> Your Java University Exam Command Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Master Java. <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Ace every exam.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            5 units · {totalTopics} topics · interactive simulators · exam-style 2/13/16 mark answers · quizzes · viva prep. All in your browser.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/units">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 gap-2">
                Start Learning <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/exam-mode">
              <Button size="lg" variant="outline" className="gap-2 border-red-500/40 text-red-400 hover:bg-red-500/10">
                <Zap className="h-4 w-4" /> Tomorrow Exam Mode
              </Button>
            </Link>
            <Link href="/revision">
              <Button size="lg" variant="ghost" className="gap-2">
                <BookOpen className="h-4 w-4" /> Quick Revision
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatCard icon={<Target className="h-5 w-5" />} label="Topics Completed" value={`${completedTopics.length}/${totalTopics}`} pct={completedPct} color="from-orange-500 to-amber-500" />
        <StatCard icon={<Trophy className="h-5 w-5" />} label="Quiz Score" value={`${totalQ}`} sub="points earned" color="from-emerald-500 to-teal-500" />
        <StatCard icon={<Clock className="h-5 w-5" />} label="Study Time" value={`${totalMin}m`} sub="total" color="from-violet-500 to-purple-500" />
        <StatCard icon={<Flame className="h-5 w-5" />} label="Streak" value={`${streak}`} sub="days" color="from-red-500 to-orange-500" />
      </div>

      {/* Units */}
      <div className="mb-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Syllabus Units</h2>
          <Link href="/units" className="text-sm text-muted-foreground hover:text-primary">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map(u => {
            const done = mounted ? u.topics.filter(t => completedTopics.includes(t.id)).length : 0;
            return (
              <Link key={u.id} href={`/units/${u.slug}`}>
                <Card className="p-5 h-full hover:border-primary/60 transition cursor-pointer group">
                  <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${u.color} mb-3`} />
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg group-hover:text-primary transition">Unit {u.id}: {u.title}</h3>
                    <Badge variant="outline" className="text-[10px]">{u.topics.length} topics</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{u.description}</p>
                  <Progress value={(done / u.topics.length) * 100} className="h-1.5" />
                  <div className="text-[10px] text-muted-foreground mt-1.5">{done} / {u.topics.length} completed</div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Continue Learning */}
      {recent.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {recent.map(t => (
              <Link key={t.id} href={`/units/${units.find(u => u.id === t.unitId)?.slug}/${t.id}`}>
                <Card className="p-4 hover:border-primary/60 transition flex items-center gap-3">
                  <div className="text-2xl">{t.visualCue}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{t.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{t.tagline}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/question-bank", icon: "📚", title: "Question Bank", desc: "Important 13/16-mark questions" },
            { href: "/exam-writer", icon: "✍️", title: "Exam Writer", desc: "Practice writing exam answers" },
            { href: "/revision", icon: "⚡", title: "1-Min Revision", desc: "Quick recall cards" },
            { href: "/progress", icon: "📊", title: "Progress", desc: "Track your mastery" }
          ].map(q => (
            <Link key={q.href} href={q.href}>
              <Card className="p-4 hover:border-primary/60 transition cursor-pointer h-full">
                <div className="text-2xl mb-2">{q.icon}</div>
                <div className="font-semibold text-sm mb-1">{q.title}</div>
                <div className="text-xs text-muted-foreground">{q.desc}</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub, pct, color }: { icon: React.ReactNode; label: string; value: string; sub?: string; pct?: number; color: string }) {
  return (
    <Card className="p-4">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white mb-2`}>
        {icon}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>}
      {pct !== undefined && <Progress value={pct} className="h-1 mt-2" />}
    </Card>
  );
}
