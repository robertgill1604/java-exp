"use client";
import Link from "next/link";
import { units } from "@/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/store/progress";
import { useEffect, useState } from "react";
import { ArrowRight, Layers } from "lucide-react";

export default function UnitsPage() {
  const { completedTopics } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          <Layers className="h-3.5 w-3.5" /> All Units
        </div>
        <h1 className="text-3xl font-bold mb-2">Syllabus</h1>
        <p className="text-muted-foreground">All 5 units. Click a unit to see its topics, or jump straight to a topic from the sidebar.</p>
      </div>

      <div className="space-y-6">
        {units.map(unit => {
          const done = mounted ? unit.topics.filter(t => completedTopics.includes(t.id)).length : 0;
          return (
            <Card key={unit.id} className="p-6 hover:border-primary/40 transition">
              <Link href={`/units/${unit.slug}`} className="block group">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${unit.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                    U{unit.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold group-hover:text-primary transition">{unit.title}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{unit.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">{unit.topics.length} topics</Badge>
                      <Badge variant="outline" className="text-[10px]">{done} done</Badge>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <Progress value={(done / unit.topics.length) * 100} className="h-1.5" />
              </Link>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {unit.topics.map(t => (
                  <Link
                    key={t.id}
                    href={`/units/${unit.slug}/${t.id}`}
                    className="flex items-center gap-2 p-2 rounded-md border border-border/40 hover:border-primary/40 hover:bg-accent/20 transition"
                  >
                    <span className="text-lg">{t.visualCue}</span>
                    <span className="text-xs flex-1 truncate">
                      <span className="text-muted-foreground font-mono mr-1">{t.index}.</span>
                      {t.title}
                    </span>
                    {mounted && completedTopics.includes(t.id) && <span className="text-emerald-500 text-xs">✓</span>}
                  </Link>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
